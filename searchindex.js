Search.setIndex({"docnames": ["help", "index", "inference", "introduction", "latent-variable-models", "mle", "probability-conditional", "probability-continuous", "probability-discrete", "probability-joint", "regression", "schedule", "syllabus", "vectorization-advanced", "vectorization-basics"], "filenames": ["help.md", "index.md", "inference.ipynb", "introduction.ipynb", "latent-variable-models.ipynb", "mle.ipynb", "probability-conditional.ipynb", "probability-continuous.ipynb", "probability-discrete.ipynb", "probability-joint.ipynb", "regression.ipynb", "schedule.md", "syllabus.md", "vectorization-advanced.ipynb", "vectorization-basics.ipynb"], "titles": ["Academic Support &amp; Office Hours", "Probabilistic Foundations of ML", "<span class=\"section-number\">11. </span>Inference", "<span class=\"section-number\">1. </span>What is Probabilistic ML?", "<span class=\"section-number\">10. </span>Latent Variable Models (LVMs)", "<span class=\"section-number\">7. </span>Maximum Likelihood Estimation", "<span class=\"section-number\">5. </span>Conditional Probability (Discrete)", "<span class=\"section-number\">8. </span>Continuous Probability", "<span class=\"section-number\">4. </span>Probability (Discrete)", "<span class=\"section-number\">6. </span>Joint Probability (Discrete)", "<span class=\"section-number\">9. </span>Regression", "Schedule", "Syllabus", "<span class=\"section-number\">3. </span>Advanced Vectorization in <code class=\"docutils literal notranslate\"><span class=\"pre\">Jax</span></code>", "<span class=\"section-number\">2. </span>Vectorization in <code class=\"docutils literal notranslate\"><span class=\"pre\">Jax</span></code>: An Introduction"], "terms": {"thi": [1, 3, 5, 6, 8, 9, 12, 13, 14], "cours": [1, 3, 13, 14], "current": [1, 6, 14], "under": [1, 6, 13, 14], "construct": 1, "instructor": 1, "yaniv": 1, "yacobi": 1, "he": 1, "him": 1, "semest": 1, "fall": [1, 11], "2024": 1, "number": [1, 6, 8, 9, 13, 14], "cs": 1, "349": 1, "welleslei": 1, "colleg": 1, "descript": 1, "In": [1, 6, 8, 9, 13, 14], "recent": 1, "year": 1, "artifici": 1, "intellig": 1, "ha": [1, 8, 9, 13, 14], "enabl": 1, "applic": [1, 3, 13], "were": [1, 8, 9, 13, 14], "previous": [1, 6, 9], "thought": [1, 12, 13, 14], "possibl": [1, 6, 8, 9, 14], "from": [1, 3, 5, 6, 8, 9, 12, 13, 14], "system": [1, 8], "propos": 1, "novel": 1, "drug": 1, "gener": [1, 6, 9, 14], "new": [1, 6, 8, 13, 14], "art": 1, "music": 1, "accur": [1, 14], "reliabl": 1, "predict": [1, 6, 9], "outcom": [1, 8], "medic": [1, 3, 8, 9], "intervent": 1, "real": [1, 9], "time": [1, 6, 8, 9, 13, 14], "But": [1, 6, 9, 14], "what": [1, 6, 8, 9, 12, 13, 14], "develop": [1, 9], "machin": [1, 3, 8], "learn": [1, 3, 9, 12, 14], "paradigm": [1, 13, 14], "cast": [1, 13], "advanc": 1, "like": [1, 6, 8, 9, 14], "neural": 1, "network": [1, 9], "statist": [1, 5, 6, 8, 9], "framework": [1, 6, 14], "we": [1, 6, 8, 9, 12, 13, 14], "introduc": [1, 5, 6, 8, 9, 13, 14], "concept": [1, 6, 8, 9], "behind": [1, 6, 8, 9, 14], "model": [1, 3, 5, 6, 8, 14], "specif": [1, 6, 8, 9, 13, 14], "infer": 1, "focus": 1, "connect": [1, 8], "theori": 1, "world": 1, "hand": [1, 8, 9], "practic": [1, 3, 6, 8, 9, 12, 13, 14], "lai": 1, "studi": 1, "research": [1, 9, 12], "includ": [1, 9, 13], "direct": [1, 6], "graphic": [1, 5, 14], "deep": 1, "bayesian": 1, "regress": [1, 3, 6], "classif": [1, 3, 6], "latent": 1, "variabl": [1, 6, 8, 9, 13, 14], "cluster": [1, 3], "dimension": [1, 3, 13, 14], "reduct": [1, 3], "seri": 1, "forecast": 1, "student": [1, 3, 12], "get": [1, 9, 12, 13], "experi": [1, 12], "build": [1, 6, 8, 9, 12, 13, 14], "task": [1, 8], "most": [1, 12], "taken": [1, 8, 14], "healthcar": 1, "context": [1, 6, 8, 9, 12], "us": [1, 6, 9, 12, 13, 14], "program": [1, 6, 9, 12], "languag": [1, 6, 8, 9], "base": [1, 6, 9, 14], "python": [1, 8, 9, 13, 14], "Is": [1, 9], "previou": [1, 6, 8, 9, 13, 14], "requir": [1, 8, 12, 14], "class": [1, 8, 11, 12, 14], "nope": 1, "The": [1, 6, 8, 9, 12, 13, 14], "design": 1, "without": [1, 6, 9, 13], "background": [1, 12], "how": [1, 3, 6, 8, 9, 13, 14], "reli": [1, 6, 14], "list": [1, 6, 8, 13, 14], "math": [1, 6], "prerequisit": 1, "main": [1, 6, 14], "purpos": [1, 6, 13, 14], "ensur": [1, 13], "have": [1, 6, 8, 9, 12, 13, 14], "had": [1, 9, 13], "enough": 1, "exposur": 1, "some": [1, 5, 6, 8, 9, 13, 14], "so": [1, 6, 8, 9, 12, 13, 14], "content": 1, "overwhelm": 1, "assum": [1, 6, 9, 13], "much": [1, 9, 14], "knowledg": [1, 9, 14], "need": [1, 6, 8, 9, 12, 14], "can": [1, 3, 6, 8, 9, 12, 13, 14], "i": [1, 3, 6, 8, 9, 12, 13, 14], "audit": 1, "unfortun": 1, "given": [1, 5, 6, 8, 9, 13, 14], "amount": [1, 12], "interest": [1, 9, 14], "cannot": [1, 8, 9, 14], "allow": [1, 3, 6, 9, 13, 14], "you": [1, 3, 6, 8, 9, 12, 13, 14], "kind": [1, 8], "sinc": [1, 6, 8, 9, 12, 13, 14], "acquir": 1, "access": [1, 9], "data": [1, 3, 5, 6, 8, 9, 13, 14], "set": [1, 8, 9, 14], "tricki": 1, "instead": [1, 6, 9, 12, 13, 14], "intergalact": [1, 3, 8], "hypothet": [1, 3, 9], "hospit": [1, 3, 6, 8, 9], "made": 1, "up": [1, 8, 9, 12, 13, 14], "especi": 1, "where": [1, 3, 6, 8, 9, 13, 14], "analyz": 1, "improv": [1, 3, 6], "care": [1, 12], "beings": [1, 3, 6, 8], "better": [1, 6, 8, 12], "wish": [1, 6], "go": [1, 6, 13, 14], "industri": 1, "grad": 1, "school": 1, "abl": [1, 9], "interrog": 1, "which": [1, 6, 8, 9, 12, 13, 14], "help": [1, 3, 6, 8, 9, 12, 13, 14], "both": [1, 3, 6, 8, 9, 12, 13], "difficult": [1, 9, 14], "philosophi": 1, "teach": [1, 12], "sai": [1, 6, 8, 9, 14], "recommend": [1, 8, 13, 14], "easi": [1, 6], "s": [1, 6, 8, 9, 12, 13, 14], "overlap": 1, "305": 1, "mit": 1, "6": [1, 6, 9, 13, 14], "390": 1, "There": [1, 13, 14], "ar": [1, 6, 8, 9, 12, 13, 14], "sever": [1, 6, 8, 9, 14], "differ": [1, 6, 8, 9, 13, 14], "between": [1, 5, 6, 8, 9, 13, 14], "first": [1, 6, 8, 9, 13, 14], "take": [1, 6, 8, 9, 13, 14], "an": [1, 6, 8, 9, 12, 13], "optim": [1, 5, 13], "perspect": [1, 3, 12], "object": 1, "loss": 1, "function": [1, 5, 6, 8, 9, 13, 14], "when": [1, 6, 8, 12, 13, 14], "minim": [1, 8], "give": [1, 6, 8, 12, 13], "hopefulli": 1, "fit": [1, 6, 9], "contrast": [1, 6, 9, 13], "specifi": [1, 6, 8, 9, 14], "principl": 1, "frequentist": 1, "thu": [1, 9], "even": [1, 6, 12, 13], "though": [1, 8, 14], "small": [1, 14], "present": 1, "two": [1, 6, 8, 9, 13, 14], "second": [1, 6, 9, 13, 14], "focu": [1, 6, 13], "more": [1, 6, 9, 12, 13, 14], "inner": 1, "work": [1, 6, 8, 9, 12, 14], "architectur": 1, "e": [1, 3, 6, 8, 9, 13, 14], "g": [1, 6, 8, 9, 13, 14], "convolut": 1, "vs": [1, 6], "recurr": 1, "wherea": [1, 13], "cs3": 1, "treat": [1, 13], "abstractli": 1, "express": [1, 6, 9, 13, 14], "tool": [1, 9, 13], "block": [1, 6, 8, 13, 14], "our": [1, 6, 8, 9, 12, 14], "wai": [1, 6, 9, 12, 13, 14], "toward": 1, "tell": [1, 6, 9, 13, 14], "unsur": [1, 14], "thei": [1, 8, 9, 13, 14], "about": [1, 6, 9, 13, 14], "variat": 1, "autoencod": 1, "diffus": 1, "doe": [1, 8, 9, 12, 13, 14], "typic": [1, 9, 13], "dai": [1, 6, 8, 9, 11], "look": [1, 6, 13, 14], "workload": 1, "A": [1, 6, 8, 9, 14], "dedic": 1, "half": [1, 8], "lectur": 1, "other": [1, 6, 8, 13, 14], "activ": [1, 3], "bring": [1, 12], "home": 1, "finish": 1, "homework": 1, "regular": [1, 14], "final": [1, 9], "project": 1, "At": 1, "moment": 1, "re": [1, 6, 8, 9, 12, 13, 14], "plan": 1, "exam": 1, "code": [1, 6, 8, 13, 14], "environ": 1, "taught": 1, "googl": [1, 8, 14], "collab": 1, "deepnot": 1, "assign": [1, 8], "notebook": 1, "write": [1, 6, 8, 9, 13, 14], "make": [1, 6, 8, 9, 12, 13, 14], "visual": [1, 8, 14], "note": [1, 6, 9, 13, 14], "all": [1, 6, 8, 9, 12, 13, 14], "same": [1, 6, 8, 9, 13, 14], "place": [1, 6, 9], "realli": [1, 14], "interact": [1, 12, 14], "fun": [1, 12], "also": [1, 6, 9, 13, 14], "librari": [1, 6, 8, 13, 14], "jax": [1, 6, 8, 9], "veri": [1, 9, 13, 14], "fast": [1, 13, 14], "arrai": [1, 6], "oper": [1, 13], "basi": 1, "numpyro": [1, 5, 8, 14], "translat": [1, 6, 8, 14], "stat": [1, 6], "describ": [1, 5, 6, 8, 9, 13], "split": [1, 6, 13], "On": [1, 8], "side": [1, 6, 8], "necessari": [1, 6], "probabl": [1, 5], "linear": 1, "algebra": 1, "calculu": 1, "creat": [1, 6, 12, 13, 14], "fairli": 1, "complic": [1, 9, 13], "whether": [1, 6, 8, 9], "feel": [1, 12], "heavi": [1, 14], "littl": [1, 9, 13, 14], "hard": [1, 6, 12, 13], "priori": 1, "unlik": [1, 14], "lot": [1, 9, 14], "term": [1, 9, 13, 14], "line": [1, 6, 13], "conceptu": [1, 6], "skill": 1, "debug": [1, 6, 13], "sens": [1, 6, 8, 9], "often": [1, 9, 14], "offer": [1, 14], "onc": [1, 14], "titl": [1, 6, 8], "might": [1, 13, 14], "chang": [1, 6, 8, 9, 13, 14], "figur": 1, "out": [1, 6, 8, 9, 12, 13, 14], "best": [1, 6, 8, 12, 13, 14], "broader": [1, 3], "comput": [1, 6, 8, 9, 12, 13, 14], "scienc": [1, 8, 12], "curriculum": 1, "topic": [3, 5], "why": [3, 6, 8, 13, 14], "big": 3, "deal": [3, 12], "highlight": [3, 6], "assumpt": [3, 9], "subject": [3, 13], "natur": 3, "ai": 3, "quantif": 3, "uncertainti": 3, "import": [3, 5, 6, 8, 9, 13, 14], "ethic": 3, "fair": [3, 8], "safeti": 3, "critic": 3, "etc": [3, 6, 8, 12, 13, 14], "provid": [3, 6, 13], "unifi": 3, "think": [3, 9, 14], "deriv": 3, "overview": 3, "expect": [3, 12], "me": [3, 12], "succe": [3, 8], "group": [3, 12], "commun": [3, 12], "standard": 3, "faculti": 3, "impact": 3, "analysi": [3, 6, 8, 9], "do": [3, 6, 8, 9, 12, 13, 14], "congratul": 3, "ve": [3, 6, 8, 9], "been": [3, 8, 13, 14], "hire": 3, "join": 3, "team": [3, 8, 12], "ihh": [3, 6, 8, 9], "ll": [3, 6, 8, 9, 14], "leverag": [3, 6, 14], "routin": 3, "collect": [3, 6], "treatment": 3, "across": [3, 13], "galaxi": 3, "helper": [5, 6, 8, 9], "pleas": [5, 6, 8, 9, 13, 14], "ignor": [5, 6, 8, 9], "util": [5, 6, 8, 9], "goal": [5, 6], "paramet": [5, 6, 8], "maxim": 5, "independ": [5, 6, 8, 9, 13, 14], "observ": [5, 6, 8, 9], "represent": [5, 9], "vector": 5, "distribut": [5, 9], "primit": 5, "implement": [5, 6, 9, 12, 13, 14], "leav": [5, 6, 8, 9, 14], "next": [5, 6, 8, 14], "unit": [5, 8, 14], "alreadi": [6, 8, 9, 13, 14], "spent": [6, 9], "conduct": [6, 9], "preliminari": [6, 8, 9], "exploratori": [6, 8, 9], "eda": [6, 8, 9], "er": [6, 8, 9], "notic": [6, 9, 13, 14], "consid": [6, 8, 9, 13, 14], "separ": [6, 8, 9], "result": [6, 8, 9, 13, 14], "mislead": [6, 9], "inform": [6, 8, 9, 13], "As": [6, 8, 9, 13], "todai": [6, 8], "continu": [6, 8, 9, 13], "your": [6, 8, 9, 12, 13, 14], "relationship": [6, 9], "For": [6, 8, 9, 13, 14], "exampl": [6, 8, 9, 13, 14], "mai": [6, 8, 9, 12, 13, 14], "want": [6, 8, 9, 12, 13, 14], "know": [6, 9, 12], "certain": [6, 9, 13], "occur": [6, 8, 13], "patient": [6, 8, 9], "challeng": [6, 8, 9, 12], "far": [6, 9], "howev": [6, 9, 13, 14], "onli": [6, 9, 13, 14], "seen": [6, 8], "character": 6, "stochast": [6, 8], "univari": 6, "random": [6, 8, 9], "phenomenon": [6, 8], "answer": [6, 8, 9, 13, 14], "outlin": [6, 8, 9, 14], "later": [6, 8, 9, 13, 14], "abov": [6, 8, 9, 13, 14], "question": [6, 8, 9, 12, 14], "toolset": [6, 8], "befor": [6, 9, 13, 14], "start": [6, 8, 9, 13], "let": [6, 8, 9, 13, 14], "load": [6, 8], "bunch": [6, 8], "below": [6, 8, 13, 14], "panda": [6, 8], "pd": [6, 8], "matplotlib": [6, 8], "pylab": [6, 8], "plt": [6, 8], "d": [6, 8, 9, 13], "numpi": [6, 8, 9, 13, 14], "jnp": [6, 8, 9, 13, 14], "datafram": [6, 8], "csv_fname": [6, 8], "csv": [6, 8], "read_csv": [6, 8], "index_col": [6, 8], "id": [6, 8], "print": [6, 8, 9, 13, 14], "sampl": [6, 8, 9], "5": [6, 8, 13, 14], "just": [6, 8, 9, 13, 14], "see": [6, 8, 9, 12, 13, 14], "15": [6, 8, 11, 13, 14], "random_st": [6, 8], "0": [6, 8, 9, 13, 14], "week": [6, 8, 9], "antibiot": [6, 8], "attempt": [6, 8], "disentangl": [6, 8], "9394": [6, 8], "fridai": [6, 8, 11], "allerg": [6, 8, 9], "reaction": [6, 8, 9], "No": [6, 8], "nan": [6, 8], "898": [6, 8], "sundai": [6, 8, 9], "ye": [6, 8], "2398": [6, 8], "saturdai": [6, 8], "entangl": [6, 8, 9], "antenna": [6, 8, 9], "4": [6, 8, 9, 13, 14], "5906": [6, 8], "2343": [6, 8], "mondai": [6, 8, 9, 11], "high": [6, 8, 9, 12, 14], "fever": [6, 8, 9], "8225": [6, 8], "thursdai": [6, 8, 11], "5506": [6, 8], "tuesdai": [6, 8, 11], "6451": [6, 8], "2670": [6, 8], "intox": [6, 8, 9], "3497": [6, 8], "1087": [6, 8], "1819": [6, 8], "2308": [6, 8], "6084": [6, 8], "3724": [6, 8], "non": [6, 9, 13, 14], "here": [6, 8, 9, 12, 13, 14], "precis": [6, 8, 9], "futur": [6, 8], "statement": [6, 8, 9, 13], "directli": [6, 8, 9], "run": [6, 8, 9, 14], "ask": [6, 12], "form": [6, 9], "true": [6, 8, 13, 14], "b": [6, 9, 13, 14], "although": 6, "simpl": [6, 9], "idea": [6, 9], "actual": [6, 14], "quit": 6, "power": [6, 13, 14], "heard": [6, 9], "formul": 6, "To": [6, 9, 14], "mean": [6, 8, 9, 12, 13, 14], "suppos": [6, 9, 13, 14], "come": [6, 8, 12, 13, 14], "estim": 6, "count": [6, 8, 14], "divid": 6, "total": [6, 9, 14], "begin": [6, 9, 11, 13], "align": [6, 9, 12, 13], "text": [6, 9, 13], "frac": 6, "end": [6, 9, 13, 14], "call": [6, 8, 9, 13, 14], "naiv": 6, "predictor": 6, "now": [6, 8, 9, 13, 14], "num_intox": 6, "len": 6, "num_tot": 6, "naive_probability_of_intox": 6, "float": [6, 13, 14], "portion": [6, 14], "round": 6, "3": [6, 9, 13, 14], "171": 6, "reach": 6, "outer": 6, "univers": [6, 9], "through": 6, "off": [6, 8], "therefor": [6, 14], "suspect": 6, "weekend": 6, "decid": [6, 8, 9, 14], "check": [6, 13, 14], "intuit": [6, 9, 14], "If": [6, 8, 13], "abil": 6, "modifi": 6, "follow": [6, 8, 9, 13, 14], "days_of_week": 6, "wednesdai": [6, 11], "iter": 6, "over": [6, 8, 9, 14], "select": [6, 8, 13], "came": [6, 8, 9], "patients_on_dai": 6, "Of": [6, 9, 14], "further": [6, 9], "patient_intoxicated_on_dai": 6, "portion_intoxicated_on_dai": 6, "percentag": [6, 8], "append": [6, 8], "plot": [6, 8], "bar": [6, 8], "label": [6, 8], "axhlin": 6, "color": 6, "red": 6, "add": [6, 8, 9, 13], "axi": [6, 8, 13, 14], "xtick": [6, 8], "rotat": [6, 8], "30": [6, 8, 11, 14], "xlabel": [6, 8], "ylabel": [6, 8], "legend": 6, "show": [6, 8, 14], "arriv": [6, 8, 9], "significantli": 6, "weekdai": 6, "addit": [6, 13], "definit": [6, 9], "anoth": [6, 8, 9, 12, 13, 14], "denot": [6, 8, 9], "p_i": [6, 9], "cdot": [6, 8, 9, 13, 14], "It": [6, 9, 12, 13, 14], "repres": [6, 8, 9], "inaccur": 6, "p_": [6, 9], "right": [6, 8, 9, 13], "vertic": 6, "space": [6, 8, 9, 12], "support": [6, 8, 12], "still": [6, 9, 12, 13, 14], "hold": 6, "left": 6, "That": [6, 9, 13, 14], "1": [6, 8, 9, 13, 14], "mass": [6, 8], "pmf": [6, 8], "again": [6, 9, 13], "bernoulli": [6, 8], "valu": [6, 8, 9, 13, 14], "depend": [6, 9, 14], "mathrm": 6, "ber": 6, "rho": [6, 8], "underbrac": [6, 9], "_": [6, 9], "wikipedia": [6, 8], "case": [6, 13, 14], "els": [6, 13, 14], "ident": [6, 8, 12], "sim": [6, 8, 9], "one": [6, 8, 9, 12, 13, 14], "noth": 6, "mani": [6, 8, 9, 12, 13, 14], "could": 6, "higher": [6, 14], "overal": [6, 8], "summari": [6, 8], "r": [6, 8, 13], "c": [6, 9, 13], "rv": [6, 8, 9], "evalu": [6, 8, 9], "defin": [6, 8], "h": [6, 8, 9], "m": [6, 9, 13, 14], "each": [6, 8, 9, 13, 14], "part": [6, 9, 12, 13, 14], "By": [6, 9, 13, 14], "explor": 6, "did": [6, 8], "empir": 6, "don": [6, 8, 9, 14], "t": [6, 8, 9, 12, 14], "forget": [6, 13], "2": [6, 9, 13, 14], "compar": 6, "its": [6, 8, 9, 13, 14], "correspond": [6, 9, 14], "version": [6, 14], "margin": [6, 9], "todo": [6, 8, 9, 12, 13, 14], "ml": [6, 8, 9, 13, 14], "And": [6, 9, 13], "probabilist": [6, 8, 9], "interfac": [6, 14], "nearli": 6, "wrote": [6, 14], "instanti": 6, "complet": [6, 14], "avail": 6, "document": [6, 13, 14], "own": [6, 14], "subtl": 6, "bug": [6, 14], "catch": 6, "mathemat": [6, 14], "formula": [6, 9], "logic": [6, 13], "bog": 6, "down": [6, 9, 12, 14], "detail": 6, "notabl": [6, 8], "properti": [6, 8, 13], "method": 6, "them": [6, 8, 13], "togeth": [6, 9, 12, 13, 14], "compon": [6, 9], "jrandom": [6, 9], "simplest": 6, "earlier": [6, 14], "recal": [6, 13], "determin": [6, 8, 13, 14], "log_prob": 6, "return": [6, 13, 14], "log": [6, 9, 14], "exponenti": 6, "log_p_i_eq_1": 6, "exp": 6, "log_p_i_eq_0": 6, "19999999": 6, "8": [6, 13, 14], "draw": [6, 9], "argument": [6, 8, 13, 14], "kei": [6, 9], "control": [6, 14], "shape": [6, 13], "key1": 6, "prngkei": 6, "seed": 6, "batch": 6, "drawn": 6, "key2": 6, "third": 6, "twice": 6, "exact": 6, "bless": 6, "curs": 6, "becaus": [6, 8, 9, 12, 13, 14], "prove": 6, "crucial": 6, "accident": 6, "sourc": 6, "manag": [6, 9], "rule": [6, 13], "thumb": [6, 13], "ONE": 6, "entir": [6, 9], "never": 6, "restrict": 6, "ourselv": [6, 13], "multipl": [6, 14], "whenev": [6, 13, 14], "key_first": 6, "key_second": 6, "key_third": 6, "def": [6, 9, 13, 14], "p_intoxication_given_dai": 6, "integ": [6, 9, 13], "is_weekend": 6, "7": [6, 13, 14], "fals": [6, 13, 14], "otherwis": [6, 13], "rho_given_d": 6, "p_i_given_d": 6, "p_i_given_mondai": 6, "p_i_given_saturdai": 6, "verifi": 6, "correct": [6, 13], "ey": 6, "ball": 6, "Be": 6, "sure": [6, 14], "understand": [8, 9], "emerg": 8, "room": 8, "level": 8, "everi": [8, 13, 14], "condit": [8, 9, 13], "inflam": 8, "being": 8, "remain": 8, "night": 8, "carri": 8, "singl": [8, 9, 13, 14], "determinist": 8, "whose": [8, 13], "respons": 8, "inher": 8, "basic": [8, 13, 14], "complex": 8, "spirit": 8, "solv": [8, 13, 14], "problem": [8, 9, 14], "slightli": 8, "ones": [8, 9, 14], "reason": [8, 9, 13], "hone": 8, "subset": 8, "n": [8, 13, 14], "particular": [8, 13], "must": [8, 9], "countabl": 8, "infti": 8, "ani": [8, 9, 13, 14], "theoret": 8, "speak": 8, "map": 8, "interv": 8, "p": [8, 13], "rightarrow": 8, "p_n": 8, "dot": 8, "told": 8, "exactli": [8, 9, 13], "10": [8, 9, 11, 13, 14], "sum": [8, 13, 14], "limits_": [8, 13, 14], "affect": [8, 9, 13], "flip": [8, 13], "coin": 8, "land": 8, "head": 8, "signifi": 8, "accord": 8, "p_r": 8, "equal": [8, 9, 14], "brows": 8, "page": 8, "categor": 8, "binomi": 8, "geometr": 8, "poisson": 8, "Then": 8, "everydai": 8, "life": 8, "explain": [8, 13, 14], "hint": [8, 9, 14], "panel": 8, "summar": 8, "rest": 8, "choic": [8, 9], "option": [8, 9], "tail": 8, "p_h": 8, "leq": [8, 13], "indic": [8, 9, 14], "averag": 8, "read": [8, 11, 14], "store": [8, 14], "file": 8, "contain": [8, 13, 14], "uniqu": 8, "identifi": 8, "worri": 8, "de": 8, "anonym": 8, "back": [8, 9, 13], "record": 8, "varieti": 8, "wa": [8, 9, 13, 14], "doctor": 8, "try": [8, 9, 13, 14], "after": [8, 9, 13], "doesn": [8, 9, 12], "fanci": 8, "isn": [8, 9], "perfect": 8, "few": [8, 14], "field": 8, "around": [8, 14], "appropri": 8, "value_count": 8, "sort": 8, "normal": [8, 14], "put": [8, 14], "name": 8, "x": [8, 9, 13], "y": [8, 9, 13], "item": [8, 13], "choos": [8, 9], "justifi": 8, "lack": 8, "miss": 8, "would": [8, 13, 14], "jointli": [8, 9], "evid": 8, "These": [9, 14], "administr": 9, "decis": 9, "toolkit": 9, "limit": 9, "than": [9, 13, 14], "inquir": 9, "expand": 9, "yet": [9, 13], "eleg": 9, "cover": [9, 12, 14], "illustr": [9, 14], "satisfi": 9, "factor": 9, "product": [9, 12], "p_b": 9, "quad": 9, "phantom": 9, "p_a": 9, "depict": 9, "event": 9, "diagram": 9, "shade": 9, "area": [9, 14], "pictori": 9, "ratio": 9, "blue": 9, "circl": 9, "rel": [9, 14], "whole": [9, 13], "grai": 9, "squar": [9, 13], "purpl": 9, "intersect": 9, "cancel": 9, "lastli": [9, 13, 14], "p_d": 9, "well": [9, 12, 13], "weird": 9, "wonder": [9, 14], "three": 9, "appli": [9, 14], "wherein": 9, "p_c": 9, "simpli": [9, 14], "increas": 9, "quickli": 9, "fact": 9, "unwieldi": 9, "becom": [9, 13, 14], "analyst": 9, "simplifi": 9, "domain": 9, "equat": 9, "impli": 9, "implic": 9, "aid": 9, "convei": 9, "graph": 9, "node": 9, "arrow": 9, "consist": 9, "aren": 9, "point": 9, "numer": [9, 14], "simpler": 9, "reduc": 9, "ther": 9, "simplic": [9, 13], "cost": 9, "Not": 9, "cycl": 9, "should": [9, 13, 14], "exist": [9, 13, 14], "convert": [9, 14], "f": [9, 13], "done": [9, 14], "step": 9, "interchang": 9, "matter": 9, "happen": [9, 13, 14], "order": 9, "friend": 9, "nearbi": 9, "she": 9, "sensit": 9, "obtain": 9, "credenti": 9, "undergo": 9, "lengthi": 9, "train": [9, 14], "secur": 9, "realist": 9, "gain": [9, 14], "month": 9, "her": 9, "send": 9, "characterist": 9, "violat": 9, "privaci": 9, "constraint": [9, 13], "expertis": 9, "consult": 9, "clinic": 9, "collabor": 9, "tandem": 9, "output": [9, 13, 14], "dictionari": 9, "000": 9, "drew": 9, "highest": 9, "lowest": 9, "string": 9, "convers": 9, "broken": 9, "limb": 9, "ihh_er_generative_model_sampl": 9, "pass": [9, 13, 14], "ihh_er_generative_model_log_prob": 9, "02": 11, "septemb": 11, "labor": 11, "03": 11, "04": 11, "05": 11, "06": 11, "09": 11, "11": [11, 13, 14], "12": [11, 13, 14], "13": [11, 13, 14], "16": [11, 13], "17": [11, 13], "18": [11, 14], "19": [11, 14], "20": [11, 13, 14], "23": 11, "24": 11, "25": [11, 13], "26": [11, 13], "27": [11, 13], "01": 11, "octob": 11, "07": 11, "08": 11, "14": [11, 13, 14], "indigen": 11, "peopl": 11, "break": 11, "21": [11, 14], "22": 11, "28": 11, "29": [11, 13, 14], "tanner": 11, "confer": 11, "31": 11, "novemb": 11, "thanksgiv": 11, "decemb": 11, "substitut": 11, "lake": 11, "makeup": 11, "period": 11, "find": [12, 13, 14], "offic": 12, "hour": 12, "individu": 12, "reward": 12, "aspect": 12, "enjoi": 12, "struggl": 12, "lost": 12, "surpris": [12, 13], "vividli": 12, "rememb": [12, 13], "materi": 12, "recogn": 12, "good": 12, "type": [12, 14], "grow": 12, "bad": 12, "lead": 12, "self": 12, "worth": 12, "thing": [12, 13, 14], "worst": 12, "isol": 12, "yourself": [12, 13, 14], "talk": 12, "engag": 12, "peer": 12, "substanti": 12, "shown": [12, 13], "cultur": 12, "impostor": 12, "judg": 12, "common": [12, 13], "valid": 12, "safe": 12, "everyon": 12, "section": [12, 13], "inspir": 12, "evan": 12, "peck": 12, "professor": 12, "divers": 12, "equiti": 12, "inclus": 12, "dei": 12, "mission": 12, "serv": 12, "address": 12, "view": [12, 14], "strength": 12, "benefit": 12, "aim": 12, "respect": 12, "gender": 12, "ag": 12, "socioeconom": 12, "statu": 12, "ethnic": 12, "race": 12, "suggest": 12, "alwai": [12, 14], "encourag": [12, 14], "appreci": 12, "larg": 12, "explicitli": 12, "reflect": 12, "along": [12, 13, 14], "ax": [12, 14], "happi": 12, "brainstorm": 12, "mental": 12, "health": 12, "guid": 13, "multi": [13, 14], "loop": [13, 14], "acknowledg": [13, 14], "tutori": [13, 14], "adapt": [13, 14], "slice": 13, "extract": [13, 14], "contigu": 13, "chunk": 13, "subsect": [13, 14], "element": [13, 14], "belong": 13, "origin": [13, 14], "easier": 13, "introductori": 13, "perform": [13, 14], "arang": [13, 14], "9": [13, 14], "easili": [13, 14], "behavior": 13, "odd": 13, "is_even": 13, "125": 13, "36": 13, "343": 13, "64": 13, "729": 13, "multipli": 13, "automat": [13, 14], "wherev": 13, "notat": [13, 14], "while": [13, 14], "pedagog": 13, "obfusc": 13, "cleaner": 13, "interpret": 13, "row": [13, 14], "reshap": [13, 14], "contains_number_divisible_by_5": 13, "divis": 13, "posit": 13, "dtype": [13, 14], "float32": [13, 14], "coordin": 13, "radiu": 13, "except": [13, 14], "within": 13, "j": [13, 14], "int32": [13, 14], "similarli": [13, 14], "boolean_indexing_q1": 13, "boolean_indexing_q2": 13, "sometim": [13, 14], "49": 13, "81": 13, "100": 13, "121": 13, "arrang": 13, "size": [13, 14], "dimens": [13, 14], "tupl": [13, 14], "pair": 13, "matrix": 13, "diagon": 13, "sake": 13, "extend": [13, 14], "keyword": [13, 14], "offset": 13, "built": [13, 14], "integer_indexing_q1": 13, "integer_indexing_q2": 13, "dure": 13, "arithmet": [13, 14], "smaller": 13, "larger": 13, "compat": 13, "hood": [13, 14], "needless": 13, "copi": 13, "input": [13, 14], "repeatedli": 13, "prepend": 13, "until": [13, 14], "act": 13, "largest": 13, "repeat": 13, "0th": [13, 14], "ad": 13, "elementwis": [13, 14], "replac": 13, "subtract": 13, "pairwis": 13, "great": 13, "trigger": 13, "unintention": 13, "unequ": 13, "error": [13, 14], "desir": [13, 14], "accept": 13, "c_": 13, "b_": 13, "a_": 13, "41": 13, "37": 13, "34": 13, "broadcasting_q1": 13, "checkout": 13, "saw": [13, 14], "subtli": 13, "sneak": 13, "luckili": 13, "assert": 13, "rais": 13, "someth": [13, 14], "notin": 13, "went": 13, "wrong": 13, "speed": [13, 14], "process": [13, 14], "fail": 13, "clue": 13, "remov": [13, 14], "technic": [13, 14], "anyth": 13, "special": 13, "rang": [13, 14], "length": [13, 14], "lingo": 13, "rank": 13, "split_2d_arrai": 13, "assert_rank": 13, "partition_s": 13, "int": [13, 14], "part1": 13, "part2": 13, "assert_shap": 13, "insid": 13, "concern": 13, "least": [13, 14], "capabl": 14, "hardwar": 14, "gpu": 14, "commonli": 14, "similar": 14, "featur": 14, "effici": 14, "approxim": 14, "gradient": 14, "written": 14, "throughout": 14, "conveni": 14, "spend": 14, "less": 14, "wait": 14, "algorithm": 14, "shift": 14, "vanilla": 14, "slow": 14, "avoid": 14, "handi": 14, "known": 14, "imit": 14, "popular": 14, "internet": 14, "resourc": 14, "newer": 14, "ok": 14, "moreov": 14, "usual": 14, "caution": 14, "NOT": 14, "mix": 14, "vice": 14, "versa": 14, "THAT": 14, "throw": 14, "One": 14, "keep": 14, "mistak": 14, "immut": 14, "alter": 14, "brand": 14, "index": 14, "arr": 14, "seem": 14, "ineffici": 14, "constantli": 14, "burden": 14, "request": 14, "memori": 14, "awar": 14, "save": 14, "plai": 14, "confus": 14, "jargon": 14, "tinker": 14, "bit": 14, "ndim": 14, "array_of_int": 14, "array_of_float": 14, "astyp": 14, "deduc": 14, "sequenc": 14, "array_from_list": 14, "zero": 14, "full": 14, "default": 14, "float64": 14, "via": 14, "array_of_zero": 14, "array_of_on": 14, "analog": 14, "linspac": 14, "increment": 14, "calcul": 14, "unsquees": 14, "squeez": 14, "pad": 14, "unsqueez": 14, "turn": 14, "concaten": 14, "th": 14, "a_unsqueez": 14, "none": 14, "b_unsqueez": 14, "a_and_b": 14, "meant": 14, "ellipsi": 14, "preserv": 14, "fill": 14, "40": 14, "50": 14, "doubl": 14, "star": 14, "sin": 14, "35": 14, "38": 14, "47": 14, "129453": 14, "880316": 14, "4511313": 14, "6237485": 14, "80": 14, "150": 14, "wise": 14, "match": 14, "minimum": 14, "maximum": 14, "min": 14, "max": 14, "oftentim": 14, "column": 14, "revers": 14, "neg": 14, "link": 14, "test": 14, "104412": 14, "42": 14, "335617": 14, "tile": 14, "transpos": 14, "84": 14, "905975": 14, "2507": 14, "8206": 14, "array_operations_q1": 14, "array_operations_q2": 14, "machineri": 14, "everyth": 14, "5th": 14, "onward": 14, "2nd": 14, "6th": 14, "last": 14, "3th": 14, "1st": 14, "3rd": 14, "simultan": 14, "elipsi": 14, "k": 14, "l": 14, "alon": 14, "entri": 14, "array_slicing_q1": 14, "array_slicing_q2": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"academ": 0, "support": 0, "offic": 0, "hour": 0, "probabilist": [1, 3], "foundat": 1, "ml": [1, 3], "goal": 1, "topic": 1, "frequent": 1, "ask": 1, "question": 1, "infer": 2, "what": 3, "latent": 4, "variabl": 4, "model": [4, 9], "lvm": 4, "maximum": 5, "likelihood": 5, "estim": 5, "condit": 6, "probabl": [6, 7, 8, 9], "discret": [6, 8, 9], "terminolog": [6, 8, 9], "notat": [6, 8, 9], "learn": 6, "distribut": [6, 8], "hand": 6, "exercis": [6, 8, 9, 13, 14], "get": [6, 8], "familiar": [6, 8], "numpyro": [6, 9], "continu": 7, "us": 8, "match": 8, "scenario": 8, "joint": 9, "direct": 9, "graphic": 9, "dgm": 9, "translat": 9, "code": [9, 12], "regress": 10, "schedul": 11, "syllabu": 12, "about": 12, "cours": 12, "staff": 12, "how": 12, "succe": 12, "cs": 12, "349": 12, "classroom": 12, "environ": 12, "logist": 12, "grade": 12, "late": 12, "polici": 12, "honor": 12, "collabor": 12, "resourc": 12, "access": 12, "disabl": 12, "religi": 12, "observ": 12, "discrimin": 12, "harass": 12, "sexual": 12, "misconduct": 12, "acknowledg": 12, "advanc": 13, "vector": [13, 14], "jax": [13, 14], "index": 13, "boolean": 13, "arrai": [13, 14], "indic": 13, "broadcast": 13, "catch": 13, "bug": 13, "earli": 13, "chex": 13, "an": 14, "introduct": 14, "tip": 14, "advic": 14, "properti": 14, "creation": 14, "shape": 14, "manipul": 14, "oper": 14, "slice": 14}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})