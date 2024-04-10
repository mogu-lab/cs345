from collections import defaultdict

import pandas as pd
import jax.numpy as jnp
import jax.random as jrandom
import numpyro
import numpyro.distributions as D
import numpyro.handlers as H
import chex


IDX_TO_DAY_OF_WEEK = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
]


IDX_TO_CONDITION = [
    'High Fever',    
    'Broken Limb',    
    'Entangled Antennas',
    'Allergic Reaction',
    'Intoxication',
]

IDX_TO_BOOL = [
    'No',
    'Yes',
]


def model_discrete_IHH_ER(N, data=None):
    assert(N > 0)
    if data is None:
        data = {
            'Day-of-Week': None,
            'Condition': None,
            'Hospitalized': None,
            'Antibiotics': None,
        }

    
    pi_day_of_week = numpyro.param(
        'pi_day_of_week',
        jnp.array([0.20, 0.15, 0.14, 0.14, 0.14, 0.11, 0.12]),
    )

    pi_condition_given_is_weekend = numpyro.param(
        'pi_condition_given_is_weekend',
        jnp.array([
            [0.3, 0.1, 0.1, 0.4, 0.1],
            [0.2, 0.06666667, 0.06666667, 0.26666667, 0.4],
        ]),
    )

    pi_hospitalized_given_condition = numpyro.param(
        'pi_hospitalized_given_condition',
        jnp.array([0.7, 0.1, 0.1, 0.5, 0.0]),
    )

    pi_antibiotics_given_is_allergy_and_hospitalized = numpyro.param(
        'pi_antibiotics_given_condition_and_hospitalized',
        jnp.array([0.0, 0.8]),
    )
    
    with numpyro.plate('data', N):
        p_day_of_week = D.Categorical(pi_day_of_week)                    
        day_of_week = numpyro.sample(
            'Day-of-Week', p_day_of_week, obs=data['Day-of-Week'],
        )
        chex.assert_shape(day_of_week, (N,))

        is_weekend = ((day_of_week % 7 == 5) | (day_of_week % 7 == 6)).astype('int32')
        p_condition_given_is_weekend = D.Categorical(
            pi_condition_given_is_weekend[is_weekend],
        )
        condition = numpyro.sample(
            'Condition', p_condition_given_is_weekend, obs=data['Condition'],
        )
        chex.assert_shape(condition, (N,))
        
        p_hospitalized_given_condition = D.Bernoulli(
            pi_hospitalized_given_condition[condition],
        )
        hospitalized = numpyro.sample(
            'Hospitalized', p_hospitalized_given_condition, obs=data['Hospitalized'],
        )
        chex.assert_shape(hospitalized, (N,))

        allergy_and_hospitalized = ((condition == 3) & hospitalized).astype('int32')
        p_antibiotics = D.Bernoulli(
            pi_antibiotics_given_is_allergy_and_hospitalized[allergy_and_hospitalized]
        )
        antibiotics = numpyro.sample(
            'Antibiotics', p_antibiotics, obs=data['Antibiotics'],
        )
        chex.assert_shape(antibiotics, (N,))


def jax_int_array_to_str_list(a, idx_to_s):
    return [idx_to_s[i] for i in a.tolist()]

        
def main():
    N = 10000
    with H.seed(rng_seed=0):
        exec_trace = H.trace(model_discrete_IHH_ER).get_trace(N)

    df = pd.DataFrame({
        'Day-of-Week': jax_int_array_to_str_list(
            exec_trace['Day-of-Week']['value'],
            IDX_TO_DAY_OF_WEEK,
        ),
        'Condition': jax_int_array_to_str_list(
            exec_trace['Condition']['value'],
            IDX_TO_CONDITION,
        ),
        'Hospitalized': jax_int_array_to_str_list(
            exec_trace['Hospitalized']['value'],
            IDX_TO_BOOL,
        ),
        'Antibiotics': jax_int_array_to_str_list(
            exec_trace['Antibiotics']['value'],
            IDX_TO_BOOL,
        ),
    })

    df.index.name = 'Patient ID'
    df.to_csv('IHH-ER.csv')

        
if __name__ == '__main__':
    main()

    
