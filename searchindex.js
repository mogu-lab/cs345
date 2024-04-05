Search.setIndex({"docnames": ["index", "lectures/basics-of-jax", "lectures/dgms", "lectures/frequentist-learning", "lectures/introduction", "lectures/probability-continuous", "lectures/probability-discrete"], "filenames": ["index.md", "lectures/basics-of-jax.ipynb", "lectures/dgms.ipynb", "lectures/frequentist-learning.ipynb", "lectures/introduction.ipynb", "lectures/probability-continuous.ipynb", "lectures/probability-discrete.ipynb"], "titles": ["Probabilistic Foundations of Machine Learning", "<span class=\"section-number\">2. </span>Introduction to <code class=\"docutils literal notranslate\"><span class=\"pre\">Jax</span></code> Array Operations", "<span class=\"section-number\">1. </span>Directed Graphical Models", "<span class=\"section-number\">5. </span>The Basics of Frequentist Learning", "<span class=\"section-number\">1. </span>What is Probabilistic ML?", "<span class=\"section-number\">4. </span>Continuous Probability", "<span class=\"section-number\">3. </span>Discrete Probability"], "terms": {"thi": [0, 1, 4, 6], "book": 0, "current": [0, 1], "under": 0, "construct": 0, "instructor": 0, "yaniv": [0, 4], "yacobi": 0, "semest": [0, 6], "fall": [0, 6], "2024": [0, 6], "cours": [0, 4], "number": [0, 1, 5, 6], "cs": 0, "349": 0, "descript": 0, "In": [0, 1, 5], "recent": 0, "year": 0, "artifici": 0, "intellig": 0, "ha": [0, 1, 6], "enabl": 0, "applic": [0, 4], "were": [0, 1, 6], "previous": 0, "thought": 0, "possibl": [0, 6], "from": [0, 1, 2, 4, 5, 6], "system": [0, 6], "propos": 0, "novel": 0, "drug": 0, "gener": 0, "new": [0, 1, 5, 6], "art": 0, "music": 0, "accur": 0, "reliabl": 0, "predict": [0, 6], "outcom": [0, 5, 6], "medic": [0, 4], "intervent": 0, "real": 0, "time": [0, 1, 6], "But": 0, "what": [0, 1, 2, 5, 6], "develop": 0, "paradigm": [0, 1], "cast": 0, "advanc": 0, "like": [0, 1, 6], "neural": 0, "network": 0, "statist": [0, 6], "framework": 0, "we": [0, 1, 6], "introduc": [0, 1, 5, 6], "concept": [0, 6], "behind": [0, 6], "infer": 0, "focus": [0, 2, 3, 5], "connect": 0, "theori": 0, "world": 0, "hand": 0, "practic": [0, 1, 3, 4], "lai": 0, "studi": 0, "research": 0, "topic": [0, 2, 3, 4, 5], "includ": [0, 6], "direct": [0, 6], "graphic": 0, "deep": 0, "bayesian": 0, "regress": [0, 2], "classif": 0, "latent": 0, "variabl": [0, 1, 2, 3, 5, 6], "cluster": 0, "dimension": [0, 1], "reduct": 0, "seri": 0, "forecast": 0, "student": [0, 4, 5], "get": 0, "experi": 0, "build": [0, 1, 6], "task": [0, 5, 6], "most": 0, "taken": [0, 1], "healthcar": 0, "context": [0, 6], "us": [0, 1, 2, 3, 5, 6], "program": [0, 6], "languag": [0, 6], "base": [0, 6], "python": [0, 1, 6], "todo": [0, 6], "ml": [0, 1, 6], "jax": [0, 5, 6], "arrai": 0, "oper": 0, "discret": 0, "probabl": 0, "continu": [0, 6], "The": [0, 1, 6], "basic": [0, 6], "frequentist": 0, "tutori": [1, 2], "been": [1, 4, 6], "adapt": 1, "numpi": [1, 6], "librari": [1, 6], "high": [1, 6], "perform": 1, "numer": 1, "comput": [1, 6], "unlik": 1, "previou": [1, 2, 5, 6], "class": [1, 5, 6], "you": [1, 4, 6], "mai": [1, 6], "have": [1, 6], "where": [1, 4, 6], "encourag": 1, "write": [1, 2, 3, 6], "loop": 1, "els": 1, "express": 1, "ll": [1, 4, 6], "take": [1, 6], "differ": [1, 6], "avoid": [1, 3], "instead": [1, 4], "reli": 1, "call": [1, 6], "becaus": 1, "contrast": 1, "vanilla": 1, "code": [1, 5, 6], "which": [1, 2, 5, 6], "slow": 1, "veri": 1, "fast": 1, "some": [1, 6], "other": 1, "featur": 1, "later": 1, "main": 1, "part": [1, 5], "interact": 1, "now": [1, 6], "come": [1, 6], "import": [1, 4, 6], "jnp": [1, 6], "portion": 1, "its": [1, 6], "block": [1, 6], "multidimension": 1, "wonder": 1, "why": [1, 4], "do": [1, 4, 6], "need": [1, 6], "turn": 1, "out": 1, "all": [1, 2, 6], "can": [1, 4, 6], "conveni": 1, "term": [1, 5], "make": [1, 3, 6], "so": [1, 6], "spend": 1, "more": [1, 6], "think": [1, 4], "less": 1, "wait": 1, "model": [1, 3, 4, 6], "fit": [1, 2, 6], "data": [1, 4, 5, 6], "read": [1, 6], "document": 1, "wa": 1, "built": 1, "imit": 1, "anoth": [1, 6], "popular": 1, "just": [1, 6], "about": [1, 5], "function": [1, 3, 6], "implement": 1, "ae": 1, "sa": 1, "correspond": 1, "version": 1, "same": [1, 5, 6], "interfac": [1, 6], "often": 1, "find": [1, 6], "internet": 1, "resourc": 1, "than": 1, "sinc": [1, 6], "newer": 1, "s": [1, 2, 6], "ok": 1, "translat": [1, 6], "moreov": 1, "consid": 1, "purpos": 1, "look": 1, "up": 1, "answer": [1, 6], "your": [1, 6], "question": [1, 6], "thei": [1, 6], "exampl": [1, 6], "usual": 1, "doe": [1, 6], "here": [1, 6], "caution": 1, "NOT": 1, "mix": 1, "technic": 1, "vice": 1, "versa": 1, "pleas": 1, "throw": 1, "ani": [1, 6], "error": 1, "result": 1, "bug": 1, "ar": [1, 6], "difficult": 1, "One": 1, "wai": 1, "keep": 1, "yourself": 1, "mistak": 1, "immut": 1, "By": 1, "mean": [1, 6], "onc": [1, 6], "creat": 1, "cannot": [1, 6], "alter": 1, "return": 1, "brand": 1, "might": 1, "seem": 1, "realli": 1, "ineffici": 1, "actual": 1, "leverag": [1, 4], "speed": 1, "thing": [1, 6], "someth": 1, "cover": [1, 6], "note": [1, 6], "awar": 1, "save": 1, "an": [1, 6], "1": [1, 5, 6], "0": [1, 5, 6], "2": [1, 5], "print": [1, 6], "abov": [1, 6], "dimens": 1, "first": [1, 6], "axi": [1, 6], "length": 1, "second": 1, "3": [1, 5], "determin": [1, 6], "size": 1, "area": 1, "follow": [1, 6], "ndim": 1, "along": 1, "each": [1, 6], "total": [1, 5], "element": 1, "6": 1, "type": 1, "also": 1, "store": [1, 6], "e": [1, 4, 6], "g": [1, 6], "int": 1, "float": 1, "etc": [1, 4, 6], "array_of_int": 1, "dtype": 1, "array_of_float": 1, "int32": 1, "float32": 1, "lastli": 1, "convert": 1, "between": [1, 6], "astyp": 1, "There": 1, "sever": 1, "For": [1, 6], "regular": 1, "list": 1, "tupl": 1, "deduc": 1, "sequenc": 1, "array_from_list": 1, "5": [1, 6], "zero": 1, "full": 1, "ones": [1, 6], "These": 1, "requir": 1, "desir": 1, "default": 1, "float64": 1, "specifi": [1, 2, 6], "via": 1, "keyword": 1, "argument": [1, 6], "array_of_zero": 1, "4": 1, "array_of_on": 1, "To": [1, 6], "arang": 1, "analog": 1, "rang": 1, "count": [1, 5, 6], "given": [1, 6], "A": [1, 6], "similar": 1, "want": [1, 6], "check": 1, "linspac": 1, "10": [1, 6], "increment": 1, "20": 1, "7": 1, "8": 1, "9": 1, "14": 1, "19": 1, "reshap": 1, "sometim": 1, "chang": [1, 6], "while": 1, "done": 1, "depend": [1, 2], "simpli": 1, "12": 1, "11": 1, "tell": 1, "automat": 1, "calcul": 1, "unsquees": 1, "squeez": 1, "next": [1, 6], "pad": 1, "known": 1, "unsqueez": 1, "n": [1, 6], "help": [1, 4, 6], "concaten": 1, "togeth": 1, "two": [1, 2, 6], "singl": [1, 6], "b": [1, 6], "th": 1, "a_unsqueez": 1, "none": 1, "b_unsqueez": 1, "0th": 1, "a_and_b": 1, "similarli": 1, "one": [1, 3, 5, 6], "remov": 1, "elementwis": 1, "preserv": 1, "arithmet": 1, "appli": 1, "independ": [1, 6], "origin": 1, "fill": 1, "30": [1, 6], "40": 1, "50": 1, "doubl": 1, "star": 1, "power": 1, "sin": 1, "35": 1, "29": 1, "38": 1, "47": 1, "129453": 1, "880316": 1, "4511313": 1, "6237485": 1, "true": [1, 6], "fals": [1, 6], "80": 1, "150": 1, "show": [1, 6], "wise": 1, "input": 1, "match": [1, 2], "output": 1, "mani": [1, 5, 6], "sum": [1, 6], "minimum": 1, "maximum": [1, 3], "min": 1, "max": 1, "non": [1, 5], "oftentim": 1, "onli": [1, 3, 5], "would": 1, "over": [1, 6], "column": 1, "row": 1, "see": [1, 6], "below": [1, 6], "15": [1, 6], "18": 1, "21": 1, "best": [1, 6], "ax": 1, "revers": 1, "rel": 1, "numpyro": [1, 2, 3, 5], "alwai": 1, "neg": [1, 5], "exist": 1, "lot": 1, "few": 1, "interest": 1, "alreadi": 1, "sure": 1, "link": 1, "googl": [1, 6], "around": [1, 6], "befor": 1, "decid": [1, 6], "own": 1, "notat": [2, 3, 5], "re": [2, 6], "week": 2, "dgm": 2, "condit": [2, 6], "focu": 2, "linear": 2, "familiar": [2, 5, 6], "common": [2, 5], "structur": 2, "ask": [2, 5], "them": [2, 5, 6], "good": 2, "auto": 2, "diff": 2, "everyth": 2, "outlin": [2, 3, 5, 6], "http": [2, 6], "num": 2, "pyro": 2, "ai": [2, 4], "en": 2, "stabl": 2, "model_rend": 2, "html": 2, "likelihood": 3, "estim": 3, "analyt": 3, "introduct": 3, "sampl": [3, 5, 6], "distribut": [3, 5], "determinist": [3, 6], "paramet": [3, 6], "plate": 3, "helper": 3, "both": [3, 4, 6], "univari": 3, "multivari": 3, "who": 4, "big": 4, "deal": 4, "i": [4, 6], "perspect": 4, "highlight": 4, "assumpt": 4, "subject": 4, "natur": 4, "allow": 4, "quantif": 4, "uncertainti": 4, "ethic": 4, "fair": 4, "safeti": 4, "critic": 4, "provid": [4, 6], "unifi": 4, "deriv": 4, "bag": 4, "trick": 4, "overview": 4, "expect": 4, "me": 4, "how": [4, 5, 6], "succe": 4, "group": 4, "activ": 4, "commun": 4, "standard": 4, "faculti": 4, "broader": 4, "impact": 4, "analysi": 4, "congratul": 4, "ve": [4, 6], "hire": 4, "join": 4, "machin": 4, "learn": 4, "team": [4, 6], "intergalact": 4, "hypothet": 4, "hospit": [4, 6], "ihh": [4, 6], "routin": 4, "collect": 4, "improv": 4, "treatment": 4, "beings": [4, 6], "across": 4, "galaxi": 4, "random": [5, 6], "definit": 5, "space": [5, 6], "event": 5, "axiom": 5, "properti": [5, 6], "categor": [5, 6], "uniform": 5, "gaussian": 5, "bernoulli": [5, 6], "beta": 5, "dirichlet": 5, "matplotlib": [5, 6], "visual": [5, 6], "recap": 5, "last": 5, "mental": 5, "health": 5, "must": [5, 6], "integr": 5, "defin": 5, "bound": 5, "cdf": 5, "pdf": 5, "pmf": [5, 6], "intuit": 5, "give": [5, 6], "exactli": [5, 6], "x": [5, 6], "divid": 5, "exercis": [5, 6], "formal": 5, "begin": 5, "align": [5, 6], "end": 5, "As": 6, "assign": 6, "better": 6, "understand": 6, "emerg": 6, "room": 6, "er": 6, "d": 6, "work": 6, "level": 6, "specif": 6, "q1": 6, "everi": 6, "dai": 6, "q2": 6, "overal": 6, "inflam": 6, "antenna": 6, "fever": 6, "q3": 6, "being": 6, "remain": 6, "night": 6, "challeng": 6, "whose": 6, "respons": 6, "inher": 6, "stochast": 6, "complex": 6, "toolset": 6, "start": 6, "gain": 6, "throughout": 6, "spirit": 6, "scienc": 6, "solv": 6, "problem": 6, "precis": 6, "todai": 6, "run": 6, "slightli": 6, "seen": 6, "reason": 6, "hone": 6, "minim": 6, "subset": 6, "describ": 6, "probabilist": 6, "rv": 6, "valu": 6, "phenomenon": 6, "let": 6, "particular": 6, "observ": 6, "On": 6, "mondai": 6, "tuesdai": 6, "support": 6, "set": 6, "countabl": 6, "though": 6, "infti": 6, "theoret": 6, "speak": 6, "mass": 6, "map": 6, "occur": 6, "unit": 6, "interv": 6, "p": 6, "rightarrow": 6, "p_n": 6, "cdot": 6, "denot": 6, "dot": 6, "repres": 6, "If": 6, "told": 6, "came": 6, "notabl": 6, "limits_": 6, "ident": 6, "sai": 6, "affect": 6, "when": 6, "flip": 6, "coin": 6, "futur": 6, "land": 6, "head": 6, "sim": 6, "signifi": 6, "accord": 6, "summari": 6, "r": 6, "p_r": 6, "evalu": 6, "equal": 6, "panda": 6, "csv": 6, "file": 6, "bunch": 6, "pd": 6, "pylab": 6, "plt": 6, "load": 6, "datafram": 6, "csv_fname": 6, "raw": 6, "githubusercont": 6, "com": 6, "mogu": 6, "lab": 6, "cs349": 6, "master": 6, "lectur": 6, "read_csv": 6, "index_col": 6, "patient": 6, "id": 6, "5640": 6, "131": 6, "No": 6, "643": 6, "5186": 6, "120": 6, "6619": 6, "153": 6, "8397": 6, "196": 6, "allerg": 6, "reaction": 6, "ye": 6, "appropri": 6, "off": 6, "percentag": 6, "value_count": 6, "sort": 6, "normal": 6, "put": 6, "name": 6, "y": 6, "item": 6, "append": 6, "plot": 6, "bar": 6, "add": 6, "label": 6, "titl": 6, "xlabel": 6, "ylabel": 6, "incom": 6, "per": 6, "whether": 6, "brows": 6, "wikipedia": 6, "page": 6, "distirbut": 6, "binomi": 6, "geometr": 6, "poisson": 6, "hint": 6, "panel": 6, "right": 6, "side": 6, "summar": 6, "select": 6, "It": 6, "nearli": 6, "stat": 6, "math": 6, "wrote": 6, "c": 6, "against": 6, "well": 6, "control": 6, "shape": 6, "plai": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"probabilist": [0, 4], "foundat": 0, "machin": 0, "learn": [0, 3], "syllabu": 0, "schedul": 0, "lectur": 0, "note": 0, "introduct": [0, 1], "model": [0, 2], "specif": 0, "jax": 1, "arrai": 1, "oper": 1, "tip": 1, "advic": 1, "properti": 1, "creation": 1, "shape": 1, "manipul": 1, "index": 1, "direct": 2, "graphic": 2, "The": 3, "basic": 3, "frequentist": 3, "what": 4, "ml": 4, "continu": 5, "probabl": [5, 6], "discret": 6, "motiv": 6, "terminolog": 6, "notat": 6, "match": 6, "distribut": 6, "scenario": 6, "get": 6, "comfort": 6, "practic": 6, "numpyro": 6}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})