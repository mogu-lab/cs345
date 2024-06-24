Search.setIndex({"docnames": ["bayesian-inference-practice", "bayesian-inference-theory", "classification-linear", "clustering", "dimensionality-reduction", "evaluation-metrics", "help", "index", "introduction", "mle-practice", "mle-theory", "optimization", "probability-conditional", "probability-continuous", "probability-discrete", "probability-joint", "regression-and-classification-nonlinear", "regression-linear", "schedule", "syllabus", "time-series", "vectorization-advanced", "vectorization-basics"], "filenames": ["bayesian-inference-practice.ipynb", "bayesian-inference-theory.ipynb", "classification-linear.ipynb", "clustering.ipynb", "dimensionality-reduction.ipynb", "evaluation-metrics.ipynb", "help.md", "index.md", "introduction.ipynb", "mle-practice.ipynb", "mle-theory.ipynb", "optimization.ipynb", "probability-conditional.ipynb", "probability-continuous.ipynb", "probability-discrete.ipynb", "probability-joint.ipynb", "regression-and-classification-nonlinear.ipynb", "regression-linear.ipynb", "schedule.md", "syllabus.md", "time-series.ipynb", "vectorization-advanced.ipynb", "vectorization-basics.ipynb"], "titles": ["<span class=\"section-number\">19. </span>Bayesian Inference: Practice", "<span class=\"section-number\">18. </span>Bayesian Inference: Theory", "<span class=\"section-number\">12. </span>Classification (Linear)", "<span class=\"section-number\">16. </span>Clustering (Gaussian Mixture Models)", "<span class=\"section-number\">15. </span>Dimensionality Reduction (Factor Analysis)", "<span class=\"section-number\">14. </span>Evaluation Metrics", "Academic Support &amp; Office Hours", "Probabilistic Foundations of ML", "<span class=\"section-number\">1. </span>What is Probabilistic ML?", "<span class=\"section-number\">8. </span>Maximum Likelihood: Practice", "<span class=\"section-number\">7. </span>Maximum Likelihood: Theory", "<span class=\"section-number\">9. </span>Optimization", "<span class=\"section-number\">5. </span>Conditional Probability (Discrete)", "<span class=\"section-number\">10. </span>Continuous Probability", "<span class=\"section-number\">4. </span>Probability (Discrete)", "<span class=\"section-number\">6. </span>Joint Probability (Discrete)", "<span class=\"section-number\">13. </span>Regression and Classification (Non-Linear)", "<span class=\"section-number\">11. </span>Regression (Linear)", "Schedule", "Syllabus", "<span class=\"section-number\">17. </span>Time Series (Dynamical Systems)", "<span class=\"section-number\">3. </span>Advanced Vectorization in <code class=\"docutils literal notranslate\"><span class=\"pre\">Jax</span></code>", "<span class=\"section-number\">2. </span>Vectorization in <code class=\"docutils literal notranslate\"><span class=\"pre\">Jax</span></code>: An Introduction"], "terms": {"thi": [7, 8, 9, 10, 12, 14, 15, 18, 19, 21, 22], "cours": [7, 8, 10, 18, 21, 22], "current": [7, 12, 22], "under": [7, 9, 10, 12, 19, 21, 22], "construct": 7, "everyth": [7, 9, 22], "you": [7, 8, 9, 10, 12, 14, 15, 21, 22], "see": [7, 9, 12, 14, 15, 19, 21, 22], "here": [7, 9, 12, 14, 15, 19, 21, 22], "like": [7, 9, 10, 12, 14, 15, 22], "chang": [7, 9, 10, 12, 14, 15, 18, 21, 22], "instructor": [7, 19], "yaniv": 7, "yacobi": 7, "he": 7, "him": 7, "semest": [7, 10], "fall": [7, 18], "2024": 7, "number": [7, 9, 10, 12, 14, 15, 21, 22], "cs": 7, "349": 7, "descript": 7, "In": [7, 9, 10, 12, 14, 15, 21, 22], "recent": 7, "year": 7, "artifici": 7, "intellig": 7, "ha": [7, 10, 15, 19, 21, 22], "enabl": 7, "applic": [7, 8, 19, 21], "were": [7, 10, 14, 15, 21, 22], "previous": [7, 12, 15], "thought": [7, 19, 21, 22], "possibl": [7, 10, 12, 14, 15, 19, 22], "from": [7, 8, 9, 10, 12, 14, 15, 19, 21, 22], "system": [7, 14, 18, 19], "propos": 7, "novel": 7, "drug": 7, "gener": [7, 10, 12, 22], "new": [7, 10, 12, 14, 18, 21, 22], "art": [7, 19], "music": 7, "accur": [7, 22], "reliabl": 7, "predict": [7, 9, 10, 12, 15], "outcom": [7, 9, 14], "medic": [7, 8, 14, 15], "intervent": 7, "real": [7, 10, 15], "time": [7, 10, 12, 14, 15, 18, 19, 21, 22], "But": [7, 9, 10, 12, 15, 22], "what": [7, 9, 10, 12, 14, 15, 18, 21, 22], "develop": [7, 10, 15], "machin": [7, 8, 10, 14], "learn": [7, 8, 9, 10, 12, 15, 18, 19, 22], "paradigm": [7, 21, 22], "cast": [7, 21], "advanc": [7, 19], "neural": 7, "network": [7, 15], "statist": [7, 12, 14, 15, 19], "framework": [7, 12, 22], "we": [7, 9, 10, 12, 14, 15, 19, 21, 22], "introduc": [7, 10, 12, 14, 15, 21, 22], "concept": [7, 10, 12, 14, 15], "behind": [7, 10, 12, 14, 15, 22], "model": [7, 8, 12, 14, 18, 19, 22], "specif": [7, 9, 10, 12, 14, 15, 21, 22], "infer": [7, 18, 19], "focus": 7, "connect": [7, 10, 14], "theori": [7, 18], "world": [7, 10], "hand": [7, 10, 14, 15], "practic": [7, 8, 12, 14, 18, 19, 21, 22], "lai": 7, "studi": [7, 18], "research": [7, 15, 19], "topic": [7, 10, 18], "includ": [7, 10, 15, 19, 21], "direct": [7, 10, 12], "graphic": [7, 9, 22], "deep": 7, "bayesian": [7, 18], "regress": [7, 8, 10, 12, 18], "classif": [7, 8, 10, 12, 18], "latent": [7, 9, 10, 18], "variabl": [7, 10, 12, 15, 18, 21, 22], "cluster": [7, 8, 10, 18], "dimension": [7, 8, 18, 21, 22], "reduct": [7, 8, 18], "seri": [7, 10, 18], "forecast": 7, "student": [7, 8, 19], "get": [7, 9, 10, 14, 15, 19, 21], "experi": [7, 19], "build": [7, 9, 10, 12, 14, 15, 19, 21, 22], "task": [7, 10, 14, 19], "most": [7, 9, 19], "taken": [7, 14, 22], "healthcar": [7, 9], "context": [7, 9, 10, 12, 14, 15, 19], "us": [7, 9, 10, 12, 15, 21, 22], "program": [7, 9, 12, 15, 19], "languag": [7, 9, 12, 14, 15, 19], "base": [7, 12, 15, 18, 19, 22], "python": [7, 9, 14, 15, 21, 22], "meet": 7, "mondai": [7, 9, 12, 14, 15, 18], "9": [7, 21, 22], "55": 7, "11": [7, 18, 21, 22], "10am": 7, "wednesdai": [7, 9, 12, 18], "30": [7, 9, 12, 14, 18, 22], "10": [7, 9, 14, 15, 18, 21, 22], "20am": 7, "thursdai": [7, 9, 12, 14, 18], "locat": [7, 10], "grai": [7, 15], "lot": [7, 15, 22], "modular": 7, "m212": 7, "comput": [7, 9, 10, 12, 14, 15, 19, 21, 22], "classroom": 7, "prerequisit": 7, "230": 7, "least": [7, 21, 22], "one": [7, 10, 12, 14, 15, 19, 21, 22], "math": [7, 10, 12, 18], "205": 7, "206": 7, "225": 7, "permiss": 7, "also": [7, 12, 15, 21, 22], "requir": [7, 10, 14, 19, 22], "Is": [7, 15], "previou": [7, 9, 12, 14, 15, 21, 22], "class": [7, 10, 14, 18, 19, 22], "nope": 7, "The": [7, 10, 12, 14, 15, 19, 21, 22], "design": [7, 18, 19], "without": [7, 12, 15, 21], "background": [7, 19], "how": [7, 8, 9, 10, 12, 14, 15, 21, 22], "reli": [7, 9, 12, 14, 22], "list": [7, 9, 10, 12, 14, 21, 22], "main": [7, 10, 12, 22], "purpos": [7, 10, 12, 21, 22], "ensur": [7, 15, 21], "have": [7, 9, 10, 12, 14, 15, 19, 21, 22], "had": [7, 15, 21], "enough": [7, 10], "exposur": 7, "some": [7, 9, 10, 12, 14, 15, 19, 21, 22], "so": [7, 9, 10, 12, 14, 15, 19, 21, 22], "content": 7, "overwhelm": 7, "assum": [7, 9, 10, 12, 15, 21], "much": [7, 9, 15, 22], "knowledg": [7, 9, 10, 14, 15, 22], "need": [7, 9, 10, 12, 14, 15, 19, 22], "can": [7, 8, 9, 10, 12, 14, 15, 19, 21, 22], "i": [7, 8, 9, 12, 14, 15, 19, 21, 22], "audit": 7, "unfortun": 7, "given": [7, 9, 10, 12, 14, 15, 21, 22], "amount": [7, 19], "interest": [7, 9, 15, 22], "cannot": [7, 14, 15, 22], "allow": [7, 8, 10, 12, 15, 19, 21, 22], "kind": [7, 14], "sinc": [7, 9, 10, 12, 14, 15, 18, 19, 21, 22], "acquir": 7, "access": [7, 9, 15], "data": [7, 8, 10, 12, 15, 19, 21, 22], "set": [7, 9, 10, 14, 15, 19, 22], "tricki": 7, "instead": [7, 10, 12, 14, 15, 19, 21, 22], "intergalact": [7, 8, 14], "hypothet": [7, 8, 15], "hospit": [7, 8, 9, 10, 12, 14, 15], "made": 7, "up": [7, 10, 14, 15, 19, 21, 22], "especi": 7, "where": [7, 8, 10, 12, 14, 15, 21, 22], "analyz": 7, "improv": [7, 8, 9, 12], "care": [7, 10, 19], "beings": [7, 8, 12, 14], "better": [7, 12, 14, 19], "wish": [7, 12], "go": [7, 9, 10, 12, 19, 21, 22], "industri": 7, "grad": 7, "school": 7, "abl": [7, 10, 15, 19], "interrog": 7, "which": [7, 9, 10, 12, 14, 15, 19, 21, 22], "help": [7, 8, 9, 10, 12, 14, 15, 19, 21, 22], "both": [7, 8, 12, 14, 15, 19, 21], "difficult": [7, 10, 15, 22], "philosophi": 7, "teach": [7, 19], "sai": [7, 12, 14, 15, 22], "recommend": [7, 9, 14, 21, 22], "easi": [7, 12], "s": [7, 9, 10, 12, 14, 15, 18, 19, 21, 22], "overlap": 7, "244": 7, "mit": 7, "6": [7, 9, 12, 15, 21, 22], "390": 7, "There": [7, 21, 22], "ar": [7, 9, 10, 12, 14, 19, 21, 22], "sever": [7, 9, 10, 12, 14, 15, 22], "differ": [7, 10, 12, 14, 15, 19, 21, 22], "between": [7, 9, 12, 14, 15, 21, 22], "first": [7, 10, 12, 14, 15, 21, 22], "take": [7, 9, 12, 14, 15, 19, 21, 22], "an": [7, 9, 10, 12, 14, 15, 19, 21], "optim": [7, 9, 10, 21], "perspect": [7, 8, 19], "object": [7, 9, 10], "loss": [7, 9], "function": [7, 9, 10, 12, 14, 15, 21, 22], "when": [7, 9, 10, 12, 14, 15, 19, 21, 22], "minim": [7, 14], "give": [7, 10, 12, 14, 19, 21], "hopefulli": 7, "fit": [7, 9, 10, 15], "contrast": [7, 12, 15, 21], "specifi": [7, 10, 12, 14, 15, 22], "principl": 7, "frequentist": 7, "thu": [7, 15], "even": [7, 10, 12, 19, 21], "though": [7, 10, 14, 22], "small": [7, 9, 10, 22], "present": [7, 18], "two": [7, 10, 12, 14, 15, 21, 22], "second": [7, 10, 12, 15, 21, 22], "focu": [7, 10, 12, 21], "more": [7, 9, 10, 12, 15, 19, 21, 22], "inner": 7, "work": [7, 9, 12, 14, 15, 19, 22], "architectur": 7, "e": [7, 8, 9, 10, 12, 14, 15, 21, 22], "g": [7, 10, 12, 14, 15, 21, 22], "convolut": 7, "vs": [7, 12], "recurr": 7, "wherea": [7, 21], "cs3": 7, "treat": [7, 9, 21], "abstractli": [7, 19], "express": [7, 10, 12, 15, 19, 21, 22], "tool": [7, 9, 10, 15, 21], "block": [7, 12, 14, 21, 22], "our": [7, 9, 10, 12, 14, 15, 19, 22], "wai": [7, 10, 12, 15, 19, 21, 22], "toward": [7, 10], "tell": [7, 10, 12, 15, 21, 22], "unsur": [7, 19, 22], "thei": [7, 9, 10, 14, 15, 19, 21, 22], "about": [7, 10, 12, 15, 21, 22], "variat": [7, 9, 10], "autoencod": [7, 9, 10], "diffus": 7, "doe": [7, 10, 14, 15, 19, 21, 22], "typic": [7, 10, 15, 21], "dai": [7, 9, 10, 12, 14, 15, 18], "look": [7, 10, 12, 21, 22], "workload": 7, "A": [7, 9, 10, 12, 14, 15, 22], "dedic": 7, "half": [7, 14], "lectur": [7, 19], "other": [7, 10, 12, 14, 19, 21, 22], "activ": [7, 8], "bring": [7, 19], "home": [7, 10], "finish": 7, "homework": 7, "regular": [7, 22], "final": [7, 15, 18], "project": [7, 18], "At": [7, 10], "moment": 7, "re": [7, 9, 12, 14, 15, 19, 22], "plan": 7, "exam": 7, "code": [7, 9, 10, 12, 14, 18, 21, 22], "environ": 7, "taught": 7, "googl": [7, 14, 22], "collab": 7, "deepnot": 7, "assign": [7, 14], "notebook": 7, "write": [7, 8, 9, 10, 12, 14, 15, 21, 22], "make": [7, 9, 10, 12, 14, 15, 19, 21, 22], "visual": [7, 9, 22], "note": [7, 9, 10, 12, 15, 21, 22], "all": [7, 9, 10, 12, 14, 15, 19, 21, 22], "same": [7, 10, 12, 14, 15, 21, 22], "place": [7, 12], "realli": [7, 22], "interact": [7, 19, 22], "fun": 7, "librari": [7, 9, 12, 14, 21, 22], "jax": [7, 9, 12, 14, 15], "veri": [7, 10, 15, 21, 22], "fast": [7, 21, 22], "arrai": [7, 9, 12], "oper": [7, 10, 21], "basi": 7, "numpyro": [7, 10, 14, 22], "translat": [7, 9, 12, 14, 22], "stat": [7, 12], "describ": [7, 9, 12, 14, 15, 21], "split": [7, 12, 21], "On": [7, 14], "side": [7, 12, 14], "necessari": [7, 9, 12], "probabl": [7, 9, 10, 18], "linear": [7, 18], "algebra": 7, "calculu": 7, "creat": [7, 9, 10, 12, 19, 21, 22], "fairli": [7, 9], "complic": [7, 10, 15, 21], "whether": [7, 9, 12, 14, 15], "feel": [7, 19], "heavi": [7, 9, 22], "littl": [7, 10, 15, 21, 22], "hard": [7, 9, 12, 19, 21], "priori": 7, "unlik": [7, 22], "term": [7, 15, 21, 22], "line": [7, 9, 12, 21], "conceptu": [7, 12], "skill": 7, "debug": [7, 12, 21], "sens": [7, 12, 14, 15], "often": [7, 10, 15, 22], "offer": [7, 22], "onc": [7, 22], "titl": [7, 9, 12, 14, 19], "might": [7, 21, 22], "figur": [7, 15], "out": [7, 10, 12, 14, 15, 19, 21, 22], "best": [7, 12, 14, 19, 21, 22], "broader": [7, 8, 19], "welleslei": [7, 19], "scienc": [7, 14, 19], "curriculum": 7, "todo": [8, 12, 14, 15, 19, 21, 22], "why": [8, 10, 12, 14, 21, 22], "big": 8, "deal": [8, 19], "highlight": [8, 10, 12], "assumpt": [8, 10, 15, 19], "subject": [8, 21], "natur": 8, "ai": 8, "quantif": 8, "uncertainti": 8, "import": [8, 9, 10, 12, 14, 15, 21, 22], "ethic": [8, 18], "fair": [8, 14], "safeti": [8, 19], "critic": 8, "etc": [8, 10, 12, 14, 21, 22], "provid": [8, 9, 10, 12, 19, 21], "unifi": 8, "think": [8, 9, 15, 22], "deriv": 8, "overview": 8, "expect": [8, 10, 18, 19], "me": [8, 10, 19], "succe": [8, 14], "group": [8, 19], "commun": [8, 9, 19], "standard": 8, "faculti": [8, 19], "impact": [8, 19], "analysi": [8, 12, 14, 15, 19], "do": [8, 9, 10, 12, 14, 15, 19, 21, 22], "ve": [8, 9, 10, 12, 14, 15], "been": [8, 14, 19, 21, 22], "hire": 8, "join": 8, "team": [8, 14, 19], "ihh": [8, 10, 12, 14, 15], "ll": [8, 9, 10, 12, 14, 15, 22], "leverag": [8, 12, 22], "routin": 8, "collect": [8, 10, 12], "treatment": 8, "across": [8, 10, 21], "galaxi": 8, "helper": [9, 10, 12, 14, 15], "pleas": [9, 10, 12, 14, 15, 18, 19, 21, 22], "ignor": [9, 10, 12, 14, 15], "util": [9, 10, 12, 14, 15], "cs349": 9, "now": [9, 10, 12, 14, 15, 21, 22], "find": [9, 10, 19, 21, 22], "paramet": [9, 12, 14], "maxim": [9, 10], "observ": [9, 12, 14, 15], "readi": [9, 19], "challeng": [9, 10, 12, 14, 15, 19], "easili": [9, 21, 22], "procedur": 9, "That": [9, 10, 12, 14, 15, 21, 22], "ani": [9, 10, 14, 15, 19, 21, 22], "strength": [9, 19], "probabilist": [9, 10, 12, 14, 15, 18, 19], "abstract": 9, "repres": [9, 12, 14, 15], "hood": [9, 21, 22], "lift": 9, "outlin": [9, 10, 12, 14, 15, 22], "sampl": [9, 10, 12, 14], "joint": [9, 18], "distribut": 9, "down": [9, 10, 12, 15, 19, 22], "directli": [9, 12, 14, 15, 19], "just": [9, 10, 12, 14, 15, 21, 22], "whole": [9, 10, 15, 21], "plate": [9, 10], "notat": [9, 21, 22], "abov": [9, 10, 12, 14, 15, 21, 22], "therefor": [9, 10, 12, 22], "walk": 9, "through": [9, 12, 19], "exampl": [9, 10, 12, 14, 15, 21, 22], "illustr": [9, 10, 14, 15, 22], "suppos": [9, 10, 12, 14, 15, 21, 22], "want": [9, 10, 12, 14, 15, 19, 21, 22], "week": [9, 10, 12, 14, 15], "d": [9, 12, 14, 15, 21], "patient": [9, 10, 12, 14, 15], "intorix": 9, "via": [9, 10, 22], "begin": [9, 10, 12, 15, 18, 21], "align": [9, 10, 12, 15, 19, 21], "p": [9, 10, 14, 21], "mathcal": [9, 10], "pi": 9, "rho": [9, 12, 14], "prod": [9, 10], "limits_": [9, 10, 14, 21, 22], "n": [9, 10, 14, 21, 22], "1": [9, 10, 12, 14, 15, 21, 22], "p_": [9, 10, 12, 15], "i_n": 9, "d_n": [9, 10], "cdot": [9, 10, 12, 14, 15, 21, 22], "p_d": [9, 15], "end": [9, 10, 12, 15, 19, 21, 22], "margin": [9, 10, 12, 15], "over": [9, 10, 12, 14, 15, 22], "defin": [9, 10, 12, 14], "categor": [9, 14], "mathrm": [9, 10, 12], "cat": 9, "condit": [9, 10, 14, 15, 18, 21], "arriv": [9, 10, 12, 14, 15], "intox": [9, 12, 14, 15], "binari": 9, "bernoulli": [9, 12, 14], "howev": [9, 10, 12, 15, 21, 22], "recal": [9, 10, 12, 21], "depend": [9, 10, 12, 15, 22], "ber": [9, 12], "rho_": 9, "valid": [9, 15, 19], "valu": [9, 10, 12, 14, 15, 21, 22], "each": [9, 10, 12, 15, 19, 21, 22], "entri": [9, 22], "must": [9, 10, 14, 15], "0": [9, 10, 12, 14, 15, 21, 22], "unit": [9, 14, 22], "interv": [9, 14], "And": [9, 10, 12, 15, 21], "its": [9, 10, 12, 14, 15, 21, 22], "sum": [9, 10, 14, 21, 22], "fanci": [9, 10, 14], "name": [9, 14], "li": 9, "simplex": 9, "briefli": 9, "becaus": [9, 10, 12, 14, 15, 19, 22], "mai": [9, 10, 12, 14, 15, 19, 21, 22], "don": [9, 10, 12, 14, 15, 22], "t": [9, 10, 12, 14, 15, 19, 22], "worri": [9, 14], "isn": [9, 14, 15], "For": [9, 10, 12, 14, 15, 21, 22], "wa": [9, 10, 14, 15, 21, 22], "follow": [9, 10, 12, 14, 15, 21, 22], "step": [9, 15], "choos": [9, 14, 15], "initi": 9, "guess": 9, "doesn": [9, 10, 14, 15, 19], "good": [9, 19], "right": [9, 10, 12, 14, 15, 19, 21], "2": [9, 10, 12, 15, 21, 22], "everi": [9, 10, 14, 19, 21, 22], "2a": 9, "sim": [9, 12, 14, 15], "2b": 9, "part": [9, 10, 12, 15, 19, 21, 22], "chapter": 9, "dgm": 9, "below": [9, 10, 12, 14, 21, 22], "them": [9, 10, 12, 14, 21], "ii": [9, 10], "gaussian": [9, 10], "mixtur": [9, 10], "iii": [9, 10], "dirichlet": [9, 10], "alloc": [9, 10], "iv": [9, 10], "subspac": [9, 10], "v": [9, 10], "hidden": [9, 10], "markov": [9, 10], "ahead": 9, "three": [9, 10, 15], "primit": 9, "These": [9, 10, 15, 19, 22], "know": [9, 10, 12, 15], "param": 9, "rv": [9, 10, 12, 14, 15], "addition": [9, 10], "habit": 9, "read": [9, 10, 14, 18, 22], "relev": 9, "document": [9, 12, 21, 22], "start": [9, 12, 14, 15, 21], "def": [9, 12, 15, 21, 22], "model_of_intoxication_given_dai": 9, "none": [9, 22], "pass": [9, 15, 21, 22], "argument": [9, 10, 12, 14, 21, 22], "total": [9, 10, 12, 15, 22], "option": [9, 14, 15, 19], "ye": [9, 12, 14], "try": [9, 10, 14, 15, 21, 22], "next": [9, 12, 14, 15, 22], "init_valu": 9, "jnp": [9, 12, 14, 15, 21, 22], "ones": [9, 14, 15, 22], "7": [9, 12, 21, 22], "constraint": [9, 15, 21], "c": [9, 10, 12, 15, 21], "lie": 9, "5": [9, 12, 14, 21, 22], "unit_interv": 9, "type": [9, 19, 22], "indic": [9, 10, 14, 15, 22], "insid": [9, 10, 21], "ob": 9, "notic": [9, 10, 12, 14, 15, 21, 22], "th": [9, 22], "p_i_given_d": [9, 12], "put": [9, 14, 22], "togeth": [9, 10, 12, 15, 19, 21, 22], "understand": [9, 10, 14, 15, 19], "numpi": [9, 12, 14, 15, 21, 22], "random": [9, 10, 12, 14, 15], "jrandom": [9, 12, 15], "order": [9, 10], "haven": 9, "yet": [9, 10, 15, 21], "20": [9, 18, 21, 22], "kei": [9, 12, 15], "prngkei": [9, 12], "seed": [9, 12], "cs349_sampl": 9, "14285715": 9, "dtype": [9, 21, 22], "float32": [9, 21, 22], "4": [9, 12, 14, 15, 21, 22], "3": [9, 10, 12, 15, 21, 22], "int32": [9, 21, 22], "anoth": [9, 10, 12, 14, 15, 19, 21, 22], "text": [9, 10, 12, 14, 15, 21], "argmax": [9, 10], "_": [9, 10, 12, 15], "log": [9, 10, 12, 15, 22], "bunch": [9, 12, 14], "panda": [9, 12, 14], "pd": [9, 12, 14], "matplotlib": [9, 12, 14], "pylab": [9, 12, 14], "plt": [9, 12, 14], "load": [9, 12, 14], "datafram": [9, 12, 14], "csv_fname": [9, 12, 14], "csv": [9, 12, 14], "read_csv": [9, 12, 14], "index_col": [9, 12, 14], "id": [9, 12, 14], "print": [9, 12, 14, 15, 21, 22], "15": [9, 12, 14, 21, 22], "random_st": [9, 12, 14], "antibiot": [9, 10, 12, 14, 15], "attempt": [9, 10, 12, 14, 15], "disentangl": [9, 10, 12, 14, 15], "9394": [9, 12, 14], "fridai": [9, 12, 14], "allerg": [9, 12, 14, 15], "reaction": [9, 12, 14, 15], "No": [9, 12, 14], "nan": [9, 12, 14], "898": [9, 12, 14], "sundai": [9, 12, 14, 15], "2398": [9, 12, 14], "saturdai": [9, 12, 14], "entangl": [9, 12, 14, 15], "antenna": [9, 12, 14, 15], "5906": [9, 12, 14], "2343": [9, 12, 14], "high": [9, 12, 14, 15, 19, 22], "fever": [9, 12, 14, 15], "8225": [9, 12, 14], "5506": [9, 12, 14], "tuesdai": [9, 12, 14], "6451": [9, 12, 14], "2670": [9, 12, 14], "3497": [9, 12, 14], "1087": [9, 12, 14], "1819": [9, 12, 14], "2308": [9, 12, 14], "6084": [9, 12, 14], "3724": [9, 12, 14], "frame": [9, 10], "convert_day_of_week_to_int": 9, "convert": [9, 15, 22], "int": [9, 21, 22], "astyp": [9, 22], "point": [9, 10, 15], "len": [9, 12], "num_step": 9, "1000": 9, "pick": 9, "size": [9, 21, 22], "updat": 9, "dure": [9, 19, 21], "learning_r": 9, "01": 9, "adam": 9, "step_siz": 9, "key_optim": 9, "result": [9, 10, 12, 14, 15, 21, 22], "cs349_mle": 9, "00": 9, "09": [9, 18], "81it": 9, "26": [9, 18, 21], "261": 9, "536": 9, "59it": 9, "init": 9, "26390": 9, "5742": 9, "avg": 9, "201": 9, "250": 9, "23521": 9, "5979": 9, "52": 9, "522": 9, "1007": 9, "47it": 9, "451": 9, "500": 9, "23342": 9, "4140": 9, "78": 9, "785": 9, "1404": 9, "05it": 9, "701": 9, "750": 9, "23335": 9, "6850": 9, "100": [9, 21], "1070": 9, "95it": 9, "951": 9, "5536": 9, "done": [9, 15, 22], "converg": [9, 10], "plot": [9, 12, 14], "iter": [9, 12], "increas": [9, 10, 15], "should": [9, 10, 15, 21, 22], "room": [9, 14], "scatter": 9, "arang": [9, 21, 22], "log_likelihood": 9, "xlabel": [9, 12, 14], "ylabel": [9, 12, 14], "show": [9, 10, 12, 14, 22], "parameters_ml": 9, "19870001": 9, "1529": 9, "13990001": 9, "1419": 9, "136": 9, "113": 9, "11760001": 9, "09473917": 9, "09301588": 9, "09448019": 9, "10785804": 9, "10519359": 9, "40796468": 9, "41496596": 9, "match": [9, 10, 22], "days_of_week": [9, 12], "marginal_probabilities_from_data": 9, "conditional_probabilities_from_data": 9, "select": [9, 10, 12, 14, 21], "came": [9, 12, 14, 15], "patients_on_dai": [9, 12], "Of": [9, 10, 12, 15, 22], "further": [9, 10, 12, 15], "patient_intoxicated_on_dai": [9, 12], "portion": [9, 12, 22], "portion_intoxicated_on_dai": [9, 12], "float": [9, 12, 21, 22], "portion_arriving_on_dai": 9, "append": [9, 12, 14], "width": 9, "bar": [9, 12, 14], "label": [9, 12, 14], "r": [9, 12, 14, 21], "add": [9, 12, 14, 15, 21], "axi": [9, 12, 14, 21, 22], "xtick": [9, 12, 14], "rotat": [9, 12, 14], "legend": [9, 12], "model_ml": 9, "increment": [9, 22], "ad": [9, 21], "b": [9, 10, 12, 15, 21, 22], "m": [9, 10, 12, 15, 21, 22], "h": [9, 10, 12, 14, 15], "signatur": 9, "your": [9, 12, 14, 15, 18, 19, 21, 22], "model_of_ihh_": 9, "compar": [9, 12], "did": [9, 12, 14], "far": [9, 10, 12, 15], "larg": [9, 10, 19], "smaller": [9, 21], "common": [9, 19, 21], "mani": [9, 10, 12, 14, 15, 19, 21, 22], "scenario": 9, "To": [9, 10, 12, 14, 15, 22], "test": [9, 22], "subsampl": 9, "non": [9, 12, 15, 18, 19, 21, 22], "pretend": 9, "onli": [9, 10, 12, 15, 21, 22], "those": 9, "toolkit": [10, 15], "alreadi": [10, 12, 14, 15, 21, 22], "quit": [10, 12], "simpl": [10, 12, 15], "form": [10, 12, 15], "whose": [10, 14, 19, 21], "factor": [10, 15], "product": [10, 15, 19], "p_b": [10, 15], "heard": [10, 12, 15], "capabl": [10, 22], "than": [10, 15, 21, 22], "instanc": 10, "covert": 10, "stand": 10, "appli": [10, 15, 22], "instanti": [10, 12], "discret": [10, 18], "continu": [10, 12, 14, 15, 18, 21], "blood": 10, "pressur": 10, "bodi": 10, "mass": [10, 12, 14], "index": [10, 22], "spent": [10, 12, 15], "rem": 10, "sleep": 10, "detail": [10, 12], "bit": [10, 22], "later": [10, 12, 14, 15, 21, 22], "obstacl": 10, "still": [10, 12, 15, 19, 21, 22], "automat": [10, 21, 22], "inspect": 10, "tri": 10, "With": 10, "complex": [10, 14, 19], "becom": [10, 15, 21, 22], "prohibit": 10, "todai": [10, 12, 14], "techniqu": 10, "estim": [10, 12], "algorithm": [10, 22], "cover": [10, 15, 19, 22], "idea": [10, 12, 15], "highest": [10, 15], "intuit": [10, 12, 15, 19, 22], "score": 10, "could": [10, 12], "reason": [10, 14, 15, 19, 21], "motiv": 10, "extend": [10, 21, 22], "full": [10, 19, 22], "implement": [10, 12, 15, 19, 21, 22], "let": [10, 12, 14, 15, 19, 21, 22], "mean": [10, 12, 14, 15, 19, 21, 22], "mathemat": [10, 12, 22], "denot": [10, 12, 14, 15], "entireti": 10, "tabl": 10, "_n": 10, "row": [10, 21, 22], "tupl": [10, 21, 22], "column": [10, 22], "c_n": 10, "h_n": 10, "a_n": 10, "m_n": 10, "simplic": [10, 15, 21], "omit": 10, "explicitli": [10, 19], "after": [10, 14, 15, 21], "semi": 10, "colon": 10, "theta": 10, "similarli": [10, 15, 21, 22], "If": [10, 12, 14, 19, 21], "compon": [10, 12, 15, 19], "phi": 10, "er": [10, 12, 14, 15], "goal": [10, 12], "quad": [10, 15], "wherein": [10, 15], "evalu": [10, 12, 14, 15, 18, 19], "It": [10, 12, 15, 19, 21, 22], "_1": 10, "grow": [10, 19], "unwieldi": [10, 15], "quickli": [10, 15], "thousand": 10, "As": [10, 12, 14, 15, 19, 21], "independ": [10, 12, 14, 15, 21, 22], "ident": [10, 12, 14, 19], "come": [10, 12, 14, 19, 21, 22], "anyth": [10, 21], "equal": [10, 14, 15, 22], "_2": 10, "underbrac": [10, 12, 15], "formula": [10, 12, 15], "written": [10, 22], "numer": [10, 15, 22], "stabil": 10, "output": [10, 15, 21, 22], "word": 10, "fraction": 10, "multipli": [10, 21], "happen": [10, 15, 21, 22], "answer": [10, 12, 14, 15, 21, 22], "shrink": 10, "yourself": [10, 19, 21, 22], "problem": [10, 14, 15, 22], "finit": 10, "precis": [10, 12, 14, 15], "round": [10, 12], "prevent": 10, "perform": [10, 19, 21, 22], "issu": 10, "transform": 10, "origin": [10, 19, 21, 22], "solv": [10, 14, 21, 22], "turn": [10, 22], "x": [10, 14, 15, 21], "y": [10, 14, 15, 21], "stabl": 10, "wrong": [10, 21], "strictli": 10, "maxima": 10, "remain": [10, 14], "check": [10, 12, 21, 22], "graph": [10, 15], "plot_invariance_of_argmax_under_log": 10, "choic": [10, 14, 15], "befor": [10, 12, 15, 21, 22], "represent": [10, 15], "process": [10, 21, 22], "control": [10, 12, 14, 22], "p_a": [10, 15], "b_n": 10, "entir": [10, 12, 15], "would": [10, 14, 21, 22], "messi": 10, "pair": [10, 21], "own": [10, 12, 22], "arrow": [10, 15], "signifi": [10, 14], "circl": 10, "dot": [10, 14], "too": 10, "short": 10, "rectangl": 10, "surround": 10, "repeat": [10, 21], "bottom": 10, "corner": 10, "call": [10, 12, 14, 15, 21, 22], "eat": 10, "off": [10, 12, 14], "rectangular": 10, "shall": 10, "mysteri": 10, "consid": [10, 12, 14, 15, 19, 21, 22], "prod_": 10, "carri": [10, 14], "someth": [10, 21, 22], "share": 10, "commonli": [10, 22], "ml": [10, 12, 14, 15, 18, 19, 21, 22], "materi": [10, 19], "actual": [10, 12, 22], "exactli": [10, 14, 15, 21], "extract": [10, 21, 22], "draw": [10, 12, 15, 19], "synthet": 10, "pictur": 10, "celebr": 10, "face": 10, "z": 10, "w": 10, "x_n": 10, "z_n": 10, "w_n": 10, "p_z": 10, "y_n": 10, "p_y": 10, "z_1": 10, "psi": 10, "x_1": 10, "z_t": 10, "z_": 10, "x_t": 10, "pattern": 10, "consequ": 10, "downstream": [10, 19], "nitti": 10, "gritti": 10, "nonetheless": 10, "inform": [10, 12, 14, 15, 21], "behav": 10, "situat": [10, 19], "desiderata": 10, "consist": [10, 15], "approach": 10, "infin": 10, "rightarrow": [10, 14], "infti": [10, 14], "true": [10, 12, 14, 21, 22], "unbiased": 10, "phenomenon": [10, 12, 14], "obtain": [10, 15], "unbias": 10, "averag": [10, 14], "yield": 10, "low": 10, "varianc": 10, "distanc": 10, "suffici": 10, "notion": 10, "tradeoff": 10, "won": 10, "satisfi": [10, 15], "well": [10, 15, 19, 21], "identifi": [10, 14], "asymptot": 10, "minimum": [10, 22], "conduct": [12, 15], "preliminari": [12, 14, 15], "exploratori": [12, 14, 15], "eda": [12, 14, 15], "separ": [12, 14, 15], "mislead": [12, 15], "relationship": [12, 15], "certain": [12, 15, 21], "occur": [12, 14, 21], "seen": [12, 14], "character": 12, "stochast": [12, 14], "univari": 12, "leav": [12, 14, 15, 22], "question": [12, 14, 15, 19, 22], "toolset": [12, 14], "futur": [12, 14], "statement": [12, 14, 15, 21], "run": [12, 14, 15, 22], "ask": [12, 19], "although": 12, "power": [12, 21, 22], "formul": 12, "count": [12, 14, 22], "divid": 12, "frac": 12, "naiv": 12, "predictor": 12, "num_intox": 12, "num_tot": 12, "naive_probability_of_intox": 12, "171": 12, "reach": [12, 19], "outer": 12, "univers": [12, 15], "suspect": [12, 19], "weekend": 12, "decid": [12, 14, 15, 22], "abil": 12, "modifi": 12, "axhlin": 12, "color": [12, 19], "red": [12, 15], "significantli": 12, "weekdai": 12, "addit": [12, 21], "definit": [12, 15], "p_i": [12, 15], "inaccur": 12, "vertic": 12, "space": [12, 14, 15, 19], "support": [12, 14, 19], "hold": 12, "left": 12, "pmf": [12, 14], "again": [12, 15, 21], "wikipedia": [12, 14], "case": [12, 18, 21, 22], "els": [12, 21, 22], "noth": 12, "higher": [12, 22], "overal": [12, 14], "summari": [12, 14], "By": [12, 15, 21, 22], "explor": 12, "empir": 12, "forget": [12, 21], "correspond": [12, 15, 22], "version": [12, 19, 22], "interfac": [12, 22], "nearli": 12, "wrote": [12, 22], "complet": [12, 22], "avail": [12, 19], "subtl": 12, "bug": [12, 22], "catch": 12, "logic": [12, 21], "bog": 12, "notabl": [12, 14], "properti": [12, 14, 19, 21], "method": [12, 19], "simplest": 12, "earlier": [12, 22], "determin": [12, 14, 21, 22], "log_prob": 12, "return": [12, 21, 22], "exponenti": 12, "log_p_i_eq_1": 12, "exp": 12, "log_p_i_eq_0": 12, "19999999": 12, "8": [12, 21, 22], "shape": [12, 14, 21], "key1": 12, "batch": 12, "drawn": 12, "key2": 12, "third": 12, "twice": 12, "exact": 12, "bless": 12, "curs": 12, "prove": 12, "crucial": 12, "accident": 12, "sourc": 12, "manag": [12, 15], "rule": [12, 21], "thumb": [12, 21], "ONE": 12, "never": 12, "restrict": 12, "ourselv": [12, 21], "multipl": [12, 22], "whenev": [12, 21, 22], "key_first": 12, "key_second": 12, "key_third": 12, "p_intoxication_given_dai": 12, "integ": [12, 15, 21], "is_weekend": 12, "fals": [12, 21, 22], "otherwis": [12, 21], "rho_given_d": 12, "p_i_given_mondai": 12, "p_i_given_saturdai": 12, "admonit": 12, "verifi": 12, "correct": [12, 21], "ey": 12, "ball": 12, "Be": 12, "sure": [12, 22], "emerg": [14, 19], "level": 14, "inflam": 14, "being": [14, 19], "night": 14, "singl": [14, 15, 21, 22], "determinist": 14, "respons": [14, 19], "inher": 14, "basic": [14, 21, 22], "spirit": 14, "slightli": 14, "hone": 14, "subset": 14, "particular": [14, 21], "countabl": 14, "theoret": 14, "speak": 14, "map": [14, 19], "p_n": 14, "told": 14, "chose": 14, "poisson": 14, "lambda": 14, "matter": [14, 15], "ideal": 14, "domain": [14, 15], "plot_poisson_exampl": 14, "affect": [14, 15, 21], "flip": [14, 21], "coin": 14, "land": 14, "head": 14, "accord": 14, "p_r": 14, "brows": 14, "page": 14, "binomi": 14, "geometr": 14, "Then": 14, "everydai": 14, "life": [14, 19], "explain": [14, 21, 22], "hint": [14, 15, 22], "panel": 14, "summar": 14, "rest": 14, "tail": 14, "p_h": 14, "leq": [14, 21], "store": [14, 22], "file": 14, "contain": [14, 21, 22], "uniqu": 14, "de": 14, "anonym": 14, "back": [14, 15, 19, 21], "record": 14, "varieti": 14, "doctor": 14, "perfect": 14, "few": [14, 22], "field": 14, "around": [14, 22], "appropri": 14, "percentag": 14, "value_count": 14, "sort": 14, "normal": [14, 19, 22], "item": [14, 21], "justifi": 14, "lack": 14, "miss": 14, "jointli": [14, 15], "evid": 14, "administr": 15, "decis": 15, "limit": 15, "inquir": 15, "expand": 15, "eleg": 15, "phantom": 15, "depict": 15, "event": [15, 19], "diagram": 15, "shade": 15, "area": [15, 22], "proport": 15, "pictori": 15, "ratio": 15, "blue": 15, "squar": [15, 21], "rel": [15, 22], "purpl": 15, "intersect": 15, "cancel": 15, "lastli": [15, 21, 22], "weird": 15, "wonder": [15, 22], "p_c": 15, "simpli": [15, 22], "fact": 15, "analyst": 15, "simplifi": 15, "equat": 15, "impli": 15, "implic": 15, "aid": 15, "convei": 15, "node": 15, "aren": 15, "simpler": [15, 19], "reduc": 15, "ther": 15, "cost": 15, "Not": 15, "cycl": 15, "exist": [15, 21, 22], "f": [15, 21], "interchang": 15, "friend": 15, "nearbi": 15, "she": 15, "sensit": 15, "credenti": 15, "undergo": 15, "lengthi": 15, "train": [15, 22], "secur": 15, "realist": 15, "gain": [15, 22], "month": 15, "her": 15, "send": 15, "characterist": 15, "violat": 15, "privaci": 15, "expertis": 15, "consult": 15, "clinic": 15, "collabor": 15, "tandem": 15, "dictionari": 15, "000": 15, "drew": 15, "lowest": 15, "string": 15, "convers": 15, "broken": 15, "limb": 15, "ihh_er_generative_model_sampl": 15, "ihh_er_generative_model_log_prob": 15, "accomod": 18, "02": 18, "septemb": 18, "labor": 18, "04": 18, "pre": 18, "tbd": 18, "releas": 18, "hw1": 18, "vector": 18, "05": 18, "lab": 18, "due": 18, "12": [18, 21, 22], "16": [18, 21], "maximum": [18, 22], "likelihood": 18, "18": [18, 22], "19": [18, 22], "23": 18, "25": [18, 21], "octob": 18, "03": 18, "07": 18, "14": [18, 21, 22], "indigen": 18, "peopl": 18, "17": [18, 21], "21": [18, 22], "metric": [18, 19], "24": 18, "28": 18, "31": 18, "novemb": 18, "06": 18, "dynam": 18, "13": [18, 21, 22], "27": [18, 21], "thanksgiv": 18, "break": 18, "decemb": 18, "societi": 18, "special": [18, 21], "substitut": [18, 19], "lake": 18, "makeup": 18, "period": 18, "acknowledg": [18, 21, 22], "css": 18, "2018": 18, "cs240": 18, "formal": 19, "relat": 19, "human": 19, "shortcom": 19, "state": 19, "engag": 19, "individu": 19, "offic": 19, "hour": 19, "reward": 19, "chat": 19, "struggl": 19, "lost": 19, "surpris": [19, 21], "vividli": 19, "rememb": [19, 21], "recogn": 19, "bad": 19, "lead": 19, "self": 19, "worth": 19, "thing": [19, 21, 22], "worst": 19, "isol": 19, "talk": 19, "peer": 19, "substanti": 19, "shown": [19, 21], "cultur": 19, "impostor": 19, "judg": 19, "safe": 19, "everyon": 19, "particip": 19, "while": [19, 21, 22], "thorough": 19, "attend": 19, "session": 19, "exercis": 19, "embrac": 19, "confus": [19, 22], "tinker": [19, 22], "fasten": 19, "seatbelt": 19, "adventur": 19, "divers": 19, "equiti": 19, "inclus": 19, "dei": 19, "mission": 19, "serv": 19, "address": 19, "view": [19, 22], "benefit": 19, "aim": 19, "respect": 19, "gender": 19, "ag": 19, "socioeconom": 19, "statu": 19, "ethnic": 19, "race": 19, "suggest": 19, "alwai": [19, 22], "encourag": [19, 22], "appreci": 19, "reflect": 19, "along": [19, 21, 22], "ax": [19, 22], "happi": 19, "brainstorm": 19, "mental": 19, "health": 19, "accommod": 19, "contact": 19, "servic": 19, "request": [19, 22], "earli": 19, "signific": 19, "immedi": 19, "arrang": 19, "appoint": 19, "soon": 19, "undocu": 19, "assist": 19, "screen": 19, "referr": 19, "assess": 19, "disabilityservic": 19, "edu": 19, "781": 19, "283": 19, "2434": 19, "schedul": 19, "onlin": 19, "conflict": 19, "discuss": 19, "altern": 19, "colleg": 19, "notif": 19, "prefer": 19, "essenti": 19, "educ": 19, "excel": 19, "commit": 19, "member": 19, "thrive": 19, "sex": 19, "orient": 19, "nation": 19, "ancestri": 19, "physic": 19, "pregnanc": 19, "protect": 19, "local": 19, "feder": 19, "law": 19, "someon": 19, "experienc": 19, "confidenti": 19, "report": 19, "2810": 19, "stone": 19, "center": 19, "counsel": 19, "2839": 19, "spiritu": 19, "2685": 19, "alleg": 19, "either": 19, "oblig": 19, "ix": 19, "2451": 19, "receiv": 19, "institut": 19, "polic": 19, "depart": 19, "5555": 19, "2121": 19, "believ": 19, "crime": 19, "risk": 19, "240": 19, "evan": 19, "peck": 19, "professor": 19, "guid": 21, "multi": [21, 22], "loop": [21, 22], "tutori": [21, 22], "adapt": [21, 22], "slice": 21, "contigu": 21, "chunk": 21, "subsect": [21, 22], "element": [21, 22], "belong": 21, "easier": 21, "introductori": 21, "behavior": 21, "odd": 21, "is_even": 21, "125": 21, "36": 21, "343": 21, "64": 21, "729": 21, "wherev": 21, "pedagog": 21, "obfusc": 21, "cleaner": 21, "interpret": 21, "reshap": [21, 22], "contains_number_divisible_by_5": 21, "divis": 21, "posit": 21, "coordin": 21, "radiu": 21, "except": [21, 22], "within": 21, "j": [21, 22], "boolean_indexing_q1": 21, "boolean_indexing_q2": 21, "sometim": [21, 22], "49": 21, "81": 21, "121": 21, "dimens": [21, 22], "matrix": 21, "diagon": 21, "sake": 21, "keyword": [21, 22], "offset": 21, "built": [21, 22], "integer_indexing_q1": 21, "integer_indexing_q2": 21, "arithmet": [21, 22], "larger": 21, "compat": 21, "needless": 21, "copi": 21, "input": [21, 22], "repeatedli": 21, "prepend": 21, "until": [21, 22], "act": 21, "largest": 21, "0th": [21, 22], "elementwis": [21, 22], "replac": 21, "subtract": 21, "pairwis": 21, "great": 21, "trigger": 21, "unintention": 21, "unequ": 21, "error": [21, 22], "desir": [21, 22], "section": 21, "accept": 21, "c_": 21, "b_": 21, "a_": 21, "41": 21, "37": 21, "34": 21, "29": [21, 22], "broadcasting_q1": 21, "checkout": 21, "saw": [21, 22], "subtli": 21, "sneak": 21, "luckili": 21, "rais": 21, "notin": 21, "went": 21, "speed": [21, 22], "fail": 21, "clue": 21, "remov": [21, 22], "technic": [21, 22], "rang": [21, 22], "length": [21, 22], "lingo": 21, "rank": 21, "split_2d_arrai": 21, "assert_rank": 21, "partition_s": 21, "part1": 21, "part2": 21, "assert_shap": 21, "concern": 21, "hardwar": 22, "gpu": 22, "similar": 22, "featur": 22, "effici": 22, "approxim": 22, "gradient": 22, "throughout": 22, "conveni": 22, "spend": 22, "less": 22, "wait": 22, "shift": 22, "vanilla": 22, "slow": 22, "avoid": 22, "handi": 22, "known": 22, "imit": 22, "popular": 22, "internet": 22, "resourc": 22, "newer": 22, "ok": 22, "moreov": 22, "usual": 22, "caution": 22, "NOT": 22, "mix": 22, "vice": 22, "versa": 22, "THAT": 22, "throw": 22, "One": 22, "keep": 22, "mistak": 22, "immut": 22, "alter": 22, "brand": 22, "arr": 22, "seem": 22, "ineffici": 22, "constantli": 22, "burden": 22, "memori": 22, "awar": 22, "save": 22, "plai": 22, "jargon": 22, "ndim": 22, "array_of_int": 22, "array_of_float": 22, "deduc": 22, "sequenc": 22, "array_from_list": 22, "zero": 22, "default": 22, "float64": 22, "array_of_zero": 22, "array_of_on": 22, "analog": 22, "linspac": 22, "calcul": 22, "unsquees": 22, "squeez": 22, "pad": 22, "unsqueez": 22, "concaten": 22, "a_unsqueez": 22, "b_unsqueez": 22, "a_and_b": 22, "meant": 22, "ellipsi": 22, "preserv": 22, "fill": 22, "40": 22, "50": 22, "doubl": 22, "star": 22, "sin": 22, "35": 22, "38": 22, "47": 22, "129453": 22, "880316": 22, "4511313": 22, "6237485": 22, "80": 22, "150": 22, "wise": 22, "min": 22, "max": 22, "oftentim": 22, "revers": 22, "neg": 22, "link": 22, "104412": 22, "42": 22, "335617": 22, "tile": 22, "transpos": 22, "84": 22, "905975": 22, "2507": 22, "8206": 22, "array_operations_q1": 22, "array_operations_q2": 22, "machineri": 22, "5th": 22, "onward": 22, "2nd": 22, "6th": 22, "last": 22, "3th": 22, "1st": 22, "3rd": 22, "simultan": 22, "elipsi": 22, "k": 22, "l": 22, "alon": 22, "array_slicing_q1": 22, "array_slicing_q2": 22}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"bayesian": [0, 1], "infer": [0, 1], "practic": [0, 9, 15], "theori": [1, 10], "classif": [2, 16], "linear": [2, 16, 17], "cluster": 3, "gaussian": 3, "mixtur": 3, "model": [3, 9, 10, 15], "dimension": 4, "reduct": 4, "factor": 4, "analysi": 4, "evalu": 5, "metric": 5, "academ": 6, "support": 6, "offic": 6, "hour": 6, "probabilist": [7, 8], "foundat": 7, "ml": [7, 8], "frequent": 7, "ask": 7, "question": 7, "what": [8, 19], "congratul": 8, "maximum": [9, 10], "likelihood": [9, 10], "The": 9, "data": [9, 14], "gener": [9, 15], "process": 9, "exercis": [9, 10, 12, 14, 15, 21, 22], "implement": 9, "numpyro": [9, 12, 15], "perform": 9, "mle": [9, 10], "ihh": 9, "er": 9, "notat": [10, 12, 14, 15], "formal": 10, "graphic": [10, 15], "repres": 10, "i": 10, "d": 10, "observ": [10, 19], "paramet": 10, "translat": [10, 15], "between": 10, "dgm": [10, 15], "joint": [10, 15], "distribut": [10, 12, 14, 15], "theoret": 10, "properti": [10, 22], "optim": 11, "condit": 12, "probabl": [12, 13, 14, 15], "discret": [12, 14, 15], "terminolog": [12, 14, 15], "fit": 12, "hand": 12, "get": 12, "familiar": 12, "continu": 13, "gain": 14, "comfort": 14, "commonli": 14, "us": [14, 19], "match": 14, "scenario": 14, "visual": 14, "each": 14, "variabl": 14, "direct": 15, "sampl": 15, "order": 15, "code": [15, 19], "ar": 15, "regress": [16, 17], "non": 16, "schedul": 18, "syllabu": 19, "goal": 19, "you": 19, "should": 19, "know": 19, "about": 19, "cours": 19, "staff": 19, "how": 19, "succe": 19, "cs": 19, "349": 19, "classroom": 19, "environ": 19, "grade": 19, "late": 19, "polici": 19, "honor": 19, "collabor": 19, "resourc": 19, "access": 19, "disabl": 19, "religi": 19, "discrimin": 19, "harass": 19, "sexual": 19, "misconduct": 19, "acknowledg": 19, "time": 20, "seri": 20, "dynam": 20, "system": 20, "advanc": 21, "vector": [21, 22], "jax": [21, 22], "index": 21, "boolean": 21, "arrai": [21, 22], "indic": 21, "broadcast": 21, "catch": 21, "bug": 21, "earli": 21, "chex": 21, "assert": 21, "an": 22, "introduct": 22, "tip": 22, "advic": 22, "creation": 22, "shape": 22, "manipul": 22, "oper": 22, "slice": 22}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})