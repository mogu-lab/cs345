Search.setIndex({"docnames": ["index", "materials/dgms", "materials/frequentist-learning", "materials/introduction", "materials/probability-continuous", "materials/probability-discrete", "materials/vectorization-advanced", "materials/vectorization-basics"], "filenames": ["index.md", "materials/dgms.ipynb", "materials/frequentist-learning.ipynb", "materials/introduction.ipynb", "materials/probability-continuous.ipynb", "materials/probability-discrete.ipynb", "materials/vectorization-advanced.ipynb", "materials/vectorization-basics.ipynb"], "titles": ["Probabilistic Foundations of ML", "<span class=\"section-number\">1. </span>Directed Graphical Models", "<span class=\"section-number\">5. </span>The Basics of Frequentist Learning", "<span class=\"section-number\">1. </span>What is Probabilistic ML?", "<span class=\"section-number\">4. </span>Continuous Probability", "<span class=\"section-number\">3. </span>Discrete Probability", "<span class=\"section-number\">6. </span>Advanced Vectorization in <code class=\"docutils literal notranslate\"><span class=\"pre\">Jax</span></code>", "<span class=\"section-number\">2. </span>An Introduction to \u201cVectorization\u201d in <code class=\"docutils literal notranslate\"><span class=\"pre\">Jax</span></code>"], "terms": {"thi": [0, 3, 4, 5, 6, 7], "book": 0, "current": [0, 7], "under": [0, 6, 7], "construct": 0, "instructor": 0, "yaniv": [0, 3], "yacobi": 0, "semest": [0, 5], "fall": [0, 5], "2024": [0, 5], "number": [0, 4, 5, 6, 7], "cs": 0, "349": 0, "descript": 0, "In": [0, 4, 6, 7], "recent": 0, "year": 0, "artifici": 0, "intellig": 0, "ha": [0, 4, 5, 6, 7], "enabl": 0, "applic": [0, 3, 6], "were": [0, 5, 6, 7], "previous": 0, "thought": [0, 6, 7], "possibl": [0, 5, 7], "from": [0, 1, 3, 4, 5, 6, 7], "system": [0, 5], "propos": 0, "novel": 0, "drug": 0, "gener": [0, 7], "new": [0, 4, 5, 6, 7], "art": 0, "music": 0, "accur": [0, 7], "reliabl": 0, "predict": [0, 4], "outcom": [0, 4, 5], "medic": [0, 3], "intervent": 0, "real": 0, "time": [0, 5, 6, 7], "But": [0, 7], "what": [0, 1, 4, 5, 6, 7], "develop": 0, "machin": [0, 3], "learn": [0, 3, 7], "paradigm": [0, 6, 7], "cast": [0, 6], "advanc": 0, "like": [0, 5, 7], "neural": 0, "network": 0, "statist": [0, 5], "framework": [0, 7], "we": [0, 4, 5, 6, 7], "introduc": [0, 4, 5, 6, 7], "concept": [0, 5], "behind": [0, 5, 7], "infer": 0, "focus": [0, 1, 2, 4], "connect": 0, "theori": 0, "world": 0, "hand": 0, "practic": [0, 2, 3, 5, 6, 7], "lai": 0, "studi": 0, "research": 0, "topic": [0, 1, 2, 3, 4], "includ": [0, 6], "direct": [0, 4], "graphic": [0, 7], "deep": 0, "bayesian": 0, "regress": [0, 1], "classif": 0, "latent": 0, "variabl": [0, 1, 2, 4, 5, 6, 7], "cluster": 0, "dimension": [0, 6, 7], "reduct": 0, "seri": 0, "forecast": 0, "student": [0, 3, 4], "get": [0, 6], "experi": 0, "build": [0, 5, 6, 7], "task": [0, 4, 5], "most": 0, "taken": [0, 7], "healthcar": 0, "context": [0, 5], "us": [0, 1, 2, 4, 6, 7], "program": [0, 4], "languag": [0, 4, 5], "base": [0, 4, 7], "python": [0, 5, 6, 7], "todo": [0, 5, 6, 7], "an": [0, 4, 5, 6], "vector": 0, "jax": [0, 4, 5], "discret": 0, "probabl": 0, "continu": [0, 5, 6], "The": [0, 5, 6, 7], "basic": [0, 5, 6, 7], "frequentist": 0, "two": [1, 4, 5, 6, 7], "notat": [1, 2, 4, 6, 7], "re": [1, 5, 6, 7], "write": [1, 2, 5, 6, 7], "all": [1, 5, 6, 7], "previou": [1, 4, 5, 6, 7], "week": [1, 5], "dgm": 1, "specifi": [1, 5, 7], "condit": [1, 5, 6], "depend": [1, 7], "focu": [1, 6], "linear": 1, "familiar": [1, 4], "common": [1, 4, 6], "structur": 1, "ask": [1, 4], "them": [1, 4, 6], "match": [1, 4, 7], "which": [1, 4, 5, 6, 7], "good": 1, "numpyro": [1, 2, 5, 7], "s": [1, 4, 5, 6, 7], "auto": 1, "diff": 1, "fit": [1, 4], "everyth": [1, 7], "outlin": [1, 2, 4, 5, 7], "http": [1, 5], "num": 1, "pyro": 1, "ai": [1, 3], "en": 1, "stabl": 1, "tutori": [1, 6, 7], "model_rend": 1, "html": 1, "onli": [2, 4, 6, 7], "one": [2, 4, 5, 6, 7], "maximum": [2, 7], "likelihood": 2, "estim": 2, "analyt": 2, "introduct": 2, "make": [2, 4, 5, 6, 7], "model": [2, 3, 5, 7], "sampl": [2, 4, 5], "distribut": [2, 4], "determinist": [2, 5], "paramet": [2, 4, 5], "avoid": [2, 7], "plate": 2, "helper": 2, "function": [2, 5, 6, 7], "both": [2, 3, 4, 5, 6], "univari": 2, "multivari": 2, "who": 3, "why": [3, 5, 6, 7], "big": 3, "deal": 3, "cours": [3, 6, 7], "i": [3, 5, 6, 7], "e": [3, 5, 6, 7], "perspect": 3, "highlight": 3, "assumpt": 3, "subject": [3, 6], "natur": 3, "allow": [3, 6, 7], "quantif": 3, "uncertainti": 3, "import": [3, 5, 6, 7], "ethic": 3, "fair": [3, 5], "safeti": 3, "critic": 3, "etc": [3, 5, 6, 7], "provid": [3, 4, 6], "unifi": 3, "think": [3, 7], "deriv": 3, "instead": [3, 6, 7], "bag": 3, "trick": 3, "overview": 3, "you": [3, 4, 5, 6, 7], "can": [3, 4, 5, 6, 7], "expect": 3, "me": 3, "how": [3, 4, 5, 6, 7], "succe": 3, "group": 3, "activ": 3, "commun": 3, "standard": 3, "faculti": 3, "broader": 3, "impact": 3, "analysi": 3, "do": [3, 4, 5, 6, 7], "congratul": 3, "ve": [3, 4, 5], "been": [3, 5, 6, 7], "hire": 3, "join": 3, "team": [3, 5], "intergalact": 3, "hypothet": 3, "hospit": [3, 5], "ihh": [3, 4, 5], "where": [3, 5, 6, 7], "ll": [3, 5, 7], "leverag": [3, 7], "routin": 3, "collect": 3, "data": [3, 4, 5, 6, 7], "help": [3, 5, 6, 7], "improv": 3, "treatment": 3, "beings": [3, 5], "across": [3, 6], "galaxi": 3, "random": [4, 5], "definit": 4, "space": [4, 5], "event": 4, "axiom": 4, "non": [4, 6, 7], "neg": [4, 7], "1": [4, 5, 6, 7], "properti": [4, 5, 6], "categor": [4, 5], "uniform": 4, "gaussian": 4, "bernoulli": [4, 5], "beta": 4, "dirichlet": 4, "code": [4, 5, 6, 7], "matplotlib": [4, 5], "visual": [4, 5, 7], "part": [4, 6, 7], "2": [4, 6, 7], "recap": 4, "last": [4, 7], "class": [4, 5, 7], "3": [4, 6, 7], "mental": 4, "health": 4, "must": [4, 5], "integr": 4, "0": [4, 5, 6, 7], "defin": [4, 5], "bound": 4, "term": [4, 6, 7], "cdf": 4, "pdf": 4, "pmf": [4, 5], "intuit": [4, 7], "about": [4, 6, 7], "count": [4, 5, 7], "mani": [4, 5, 6, 7], "give": [4, 5, 6], "exactli": [4, 5, 6], "x": [4, 5, 6], "divid": 4, "total": [4, 7], "formal": 4, "same": [4, 5, 6, 7], "begin": [4, 6], "align": [4, 6], "end": [4, 6, 7], "probabilist": [4, 5], "It": [4, 6, 7], "interfac": [4, 7], "nearli": 4, "translat": [4, 5, 7], "stat": 4, "math": 4, "wrote": [4, 7], "abov": [4, 5, 6, 7], "more": [4, 6, 7], "onc": [4, 7], "decid": [4, 5, 7], "best": [4, 5, 6, 7], "each": [4, 5, 6, 7], "let": [4, 5, 6, 7], "see": [4, 5, 6, 7], "To": [4, 7], "need": [4, 5, 7], "thing": [4, 6, 7], "just": [4, 5, 6, 7], "when": [4, 5, 6, 7], "have": [4, 5, 6, 7], "plot": [4, 5], "observ": [4, 5], "against": 4, "well": [4, 6], "thei": [4, 5, 6, 7], "note": [4, 5, 6, 7], "control": [4, 7], "its": [4, 5, 6, 7], "shape": [4, 6], "plai": [4, 7], "find": [4, 6, 7], "set": [4, 5, 7], "As": [5, 6], "your": [5, 6, 7], "first": [5, 6, 7], "assign": 5, "ml": [5, 6, 7], "better": 5, "understand": 5, "emerg": 5, "room": 5, "er": 5, "sinc": [5, 6, 7], "d": [5, 6], "work": [5, 7], "high": [5, 7], "level": 5, "specif": [5, 6, 7], "answer": [5, 6, 7], "question": [5, 7], "q1": 5, "come": [5, 6, 7], "everi": [5, 6, 7], "dai": 5, "q2": 5, "overal": 5, "g": [5, 6, 7], "inflam": 5, "antenna": 5, "fever": 5, "q3": 5, "being": 5, "remain": 5, "over": [5, 7], "night": 5, "challeng": 5, "cannot": [5, 7], "given": [5, 6, 7], "singl": [5, 6, 7], "chang": [5, 6, 7], "so": [5, 6, 7], "whose": [5, 6], "respons": 5, "inher": 5, "stochast": 5, "ar": [5, 6, 7], "block": [5, 6, 7], "complex": 5, "cover": [5, 7], "next": [5, 7], "toolset": 5, "start": [5, 6], "gain": [5, 7], "librari": [5, 6, 7], "throughout": [5, 7], "spirit": 5, "comput": [5, 6, 7], "scienc": 5, "want": [5, 6, 7], "solv": [5, 6, 7], "problem": [5, 7], "precis": 5, "todai": 5, "run": [5, 7], "here": [5, 6, 7], "slightli": 5, "differ": [5, 6, 7], "ones": [5, 7], "mai": [5, 6, 7], "seen": 5, "reason": [5, 6], "hone": 5, "minim": 5, "subset": 5, "describ": [5, 6], "rv": 5, "A": [5, 7], "valu": [5, 6, 7], "phenomenon": 5, "exampl": [5, 6, 7], "n": [5, 6, 7], "particular": [5, 6], "On": 5, "mondai": 5, "30": [5, 7], "tuesdai": 5, "support": 5, "take": [5, 6, 7], "For": [5, 6, 7], "countabl": 5, "though": [5, 7], "now": [5, 6, 7], "infti": 5, "ani": [5, 6, 7], "theoret": 5, "speak": 5, "mass": 5, "map": 5, "occur": [5, 6], "unit": [5, 7], "interv": 5, "p": [5, 6], "rightarrow": 5, "p_n": 5, "cdot": [5, 6, 7], "denot": 5, "dot": 5, "repres": 5, "argument": [5, 6, 7], "follow": [5, 6, 7], "If": [5, 6], "told": 5, "5": [5, 6, 7], "mean": [5, 6, 7], "came": 5, "10": [5, 6, 7], "notabl": 5, "sum": [5, 6, 7], "limits_": [5, 6, 7], "independ": [5, 6, 7], "ident": 5, "sai": [5, 7], "affect": [5, 6], "anoth": [5, 6, 7], "flip": [5, 6], "coin": 5, "futur": 5, "land": 5, "head": 5, "doe": [5, 6, 7], "sim": 5, "signifi": 5, "accord": 5, "summari": 5, "r": [5, 6], "p_r": 5, "between": [5, 6, 7], "call": [5, 6, 7], "evalu": 5, "equal": [5, 7], "brows": 5, "wikipedia": 5, "page": 5, "binomi": 5, "geometr": 5, "poisson": 5, "Then": 5, "everydai": 5, "life": 5, "sens": 5, "explain": [5, 6, 7], "hint": [5, 7], "panel": 5, "right": [5, 6], "side": 5, "summar": 5, "rest": 5, "choic": 5, "option": 5, "h": 5, "tail": 5, "p_h": 5, "rho": 5, "leq": [5, 6], "indic": [5, 7], "averag": 5, "half": 5, "result": [5, 6, 7], "other": [5, 6, 7], "panda": 5, "read": [5, 7], "store": [5, 7], "csv": 5, "file": 5, "bunch": 5, "below": [5, 6, 7], "pd": 5, "pylab": 5, "plt": 5, "numpi": [5, 6, 7], "jnp": [5, 6, 7], "load": 5, "datafram": 5, "csv_fname": 5, "raw": 5, "githubusercont": 5, "com": 5, "mogu": 5, "lab": 5, "cs349": 5, "master": 5, "lectur": 5, "read_csv": 5, "index_col": 5, "patient": 5, "id": 5, "print": [5, 6, 7], "antibiot": 5, "9613": 5, "saturdai": 5, "allerg": 5, "reaction": 5, "ye": 5, "374": 5, "No": 5, "1552": 5, "5256": 5, "thursdai": 5, "broken": 5, "limb": 5, "1610": 5, "5487": 5, "sundai": 5, "7411": 5, "wednesdai": 5, "entangl": 5, "3085": 5, "8980": 5, "9885": 5, "some": [5, 6, 7], "googl": [5, 7], "around": [5, 7], "determin": [5, 6, 7], "appropri": 5, "off": 5, "percentag": 5, "value_count": 5, "sort": 5, "fals": [5, 6, 7], "normal": [5, 7], "true": [5, 6, 7], "put": [5, 7], "name": 5, "y": [5, 6], "item": [5, 6], "append": 5, "bar": 5, "add": [5, 6], "axi": [5, 6, 7], "label": 5, "titl": 5, "xtick": 5, "rotat": 5, "xlabel": 5, "ylabel": 5, "incom": 5, "show": [5, 7], "per": 5, "whether": 5, "list": [5, 6, 7], "did": 5, "choos": 5, "pleas": [5, 6, 7], "justifi": 5, "select": [5, 6], "perfect": 5, "lack": 5, "kind": 5, "inform": [5, 6], "miss": 5, "consid": [5, 6, 7], "separ": 5, "our": [5, 7], "would": [5, 6, 7], "recommend": [5, 6, 7], "jointli": 5, "back": [5, 6], "up": [5, 6, 7], "evid": 5, "guid": 6, "multi": [6, 7], "without": 6, "loop": [6, 7], "els": [6, 7], "express": [6, 7], "yet": 6, "ourselv": 6, "acknowledg": [6, 7], "adapt": [6, 7], "wherea": 6, "slice": 6, "typic": 6, "extract": [6, 7], "contigu": 6, "chunk": 6, "subsect": [6, 7], "element": [6, 7], "belong": 6, "togeth": [6, 7], "origin": [6, 7], "easier": 6, "shown": 6, "than": [6, 7], "rememb": 6, "introductori": 6, "perform": [6, 7], "oper": 6, "return": [6, 7], "arang": [6, 7], "even": 6, "4": [6, 7], "6": [6, 7], "7": [6, 7], "8": [6, 7], "9": [6, 7], "By": [6, 7], "b": [6, 7], "easili": [6, 7], "veri": [6, 7], "complic": 6, "behavior": 6, "f": 6, "case": 6, "text": 6, "odd": 6, "implement": [6, 7], "def": [6, 7], "is_even": 6, "27": 6, "16": 6, "125": 6, "36": 6, "343": 6, "64": 6, "729": 6, "creat": [6, 7], "multipli": 6, "automat": [6, 7], "integ": 6, "wherev": 6, "becom": [6, 7], "otherwis": 6, "contrast": 6, "look": [6, 7], "while": [6, 7], "pedagog": 6, "logic": 6, "littl": [6, 7], "obfusc": 6, "cleaner": 6, "wai": [6, 7], "lastli": [6, 7], "interpret": 6, "row": [6, 7], "12": [6, 7], "reshap": [6, 7], "contains_number_divisible_by_5": 6, "contain": [6, 7], "divis": 6, "11": [6, 7], "posit": 6, "coordin": 6, "radiu": 6, "should": 6, "except": [6, 7], "within": 6, "j": [6, 7], "dtype": [6, 7], "int32": [6, 7], "similarli": [6, 7], "boolean_indexing_q1": 6, "pass": [6, 7], "boolean_indexing_q2": 6, "sometim": [6, 7], "25": 6, "49": 6, "81": 6, "100": 6, "121": 6, "recal": 6, "again": 6, "becaus": [6, 7], "arrang": 6, "size": [6, 7], "whole": 6, "also": [6, 7], "dimens": [6, 7], "That": [6, 7], "tupl": [6, 7], "pair": 6, "squar": 6, "matrix": 6, "along": [6, 7], "diagon": 6, "13": [6, 7], "14": [6, 7], "15": [6, 7], "alreadi": [6, 7], "exist": [6, 7], "sake": 6, "extend": [6, 7], "second": [6, 7], "keyword": [6, 7], "offset": 6, "built": [6, 7], "purpos": [6, 7], "yourself": [6, 7], "integer_indexing_q1": 6, "integer_indexing_q2": 6, "treat": 6, "dure": 6, "arithmet": [6, 7], "certain": 6, "constraint": 6, "smaller": 6, "larger": 6, "compat": 6, "fast": [6, 7], "hood": [6, 7], "needless": 6, "copi": 6, "rule": 6, "input": [6, 7], "repeatedli": 6, "prepend": 6, "until": [6, 7], "notic": [6, 7], "still": [6, 7], "act": 6, "had": 6, "largest": 6, "assum": 6, "repeat": 6, "0th": [6, 7], "ad": 6, "elementwis": [6, 7], "And": 6, "addit": 6, "replac": 6, "power": [6, 7], "tool": 6, "surpris": 6, "happen": [6, 7], "subtract": 6, "m": [6, 7], "c": 6, "There": [6, 7], "pairwis": 6, "great": 6, "howev": [6, 7], "forget": 6, "check": [6, 7], "befor": [6, 7], "trigger": 6, "unintention": 6, "hard": 6, "after": 6, "line": 6, "unequ": 6, "error": [6, 7], "desir": [6, 7], "section": 6, "accept": 6, "c_": 6, "b_": 6, "a_": 6, "broadcasting_q1": 6, "checkout": 6, "saw": [6, 7], "subtli": 6, "sneak": 6, "luckili": 6, "assert": 6, "rais": 6, "someth": [6, 7], "debug": 6, "whenev": [6, 7], "notin": 6, "tell": [6, 7], "went": 6, "wrong": 6, "speed": [6, 7], "process": [6, 7], "ensur": 6, "correct": 6, "statement": 6, "fail": 6, "clue": 6, "later": [6, 7], "remov": [6, 7], "output": [6, 7], "technic": [6, 7], "anyth": 6, "might": [6, 7], "optim": 6, "out": [6, 7], "special": 6, "thumb": 6, "float": [6, 7], "rang": [6, 7], "length": [6, 7], "go": [6, 7], "suppos": [6, 7], "split": 6, "lingo": 6, "rank": 6, "split_2d_arrai": 6, "assert_rank": 6, "partition_s": 6, "int": [6, 7], "part1": 6, "part2": 6, "assert_shap": 6, "wa": [6, 7], "insid": 6, "try": [6, 7], "document": [6, 7], "simplic": 6, "concern": 6, "least": [6, 7], "numer": 7, "capabl": 7, "hardwar": 7, "gpu": 7, "commonli": 7, "train": 7, "main": 7, "interact": 7, "portion": 7, "unlik": 7, "similar": 7, "offer": 7, "featur": 7, "effici": 7, "approxim": 7, "gradient": 7, "written": 7, "much": 7, "wonder": 7, "conveni": 7, "spend": 7, "less": 7, "wait": 7, "therefor": 7, "algorithm": 7, "shift": 7, "vanilla": 7, "slow": 7, "encourag": 7, "don": 7, "t": 7, "complet": 7, "knowledg": 7, "handi": 7, "heavi": 7, "reli": 7, "known": 7, "down": 7, "imit": 7, "popular": 7, "correspond": 7, "version": 7, "often": 7, "internet": 7, "resourc": 7, "newer": 7, "ok": 7, "moreov": 7, "usual": 7, "caution": 7, "NOT": 7, "mix": 7, "vice": 7, "versa": 7, "THAT": 7, "throw": 7, "bug": 7, "difficult": 7, "One": 7, "keep": 7, "mistak": 7, "immut": 7, "alter": 7, "brand": 7, "index": 7, "arr": 7, "seem": 7, "realli": 7, "ineffici": 7, "constantli": 7, "burden": 7, "request": 7, "memori": 7, "actual": 7, "awar": 7, "save": 7, "unsur": 7, "confus": 7, "jargon": 7, "tinker": 7, "bit": 7, "small": 7, "area": 7, "ndim": 7, "type": 7, "array_of_int": 7, "array_of_float": 7, "float32": 7, "convert": 7, "astyp": 7, "sever": 7, "regular": 7, "deduc": 7, "sequenc": 7, "array_from_list": 7, "zero": 7, "full": 7, "These": 7, "requir": 7, "default": 7, "float64": 7, "via": 7, "array_of_zero": 7, "array_of_on": 7, "analog": 7, "linspac": 7, "increment": 7, "20": 7, "19": 7, "done": 7, "simpli": 7, "calcul": 7, "unsquees": 7, "squeez": 7, "pad": 7, "unsqueez": 7, "turn": 7, "concaten": 7, "th": 7, "a_unsqueez": 7, "none": 7, "b_unsqueez": 7, "a_and_b": 7, "meant": 7, "ellipsi": 7, "preserv": 7, "appli": 7, "fill": 7, "40": 7, "50": 7, "doubl": 7, "star": 7, "sin": 7, "35": 7, "29": 7, "38": 7, "47": 7, "129453": 7, "880316": 7, "4511313": 7, "6237485": 7, "80": 7, "150": 7, "wise": 7, "minimum": 7, "min": 7, "max": 7, "oftentim": 7, "column": 7, "18": 7, "21": 7, "ax": 7, "revers": 7, "rel": 7, "alwai": 7, "lot": 7, "few": 7, "interest": 7, "sure": 7, "link": 7, "own": 7, "log": 7, "tile": 7, "transpos": 7, "array_operations_q1": 7, "array_operations_q2": 7, "machineri": 7, "mathemat": 7, "5th": 7, "onward": 7, "2nd": 7, "6th": 7, "Of": 7, "higher": 7, "view": 7, "3th": 7, "1st": 7, "3rd": 7, "multipl": 7, "simultan": 7, "elipsi": 7, "earlier": 7, "illustr": 7, "k": 7, "l": 7, "leav": 7, "alon": 7, "entri": 7, "array_slicing_q1": 7, "array_slicing_q2": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"probabilist": [0, 3], "foundat": 0, "ml": [0, 3], "syllabu": 0, "schedul": 0, "cours": 0, "materi": 0, "introduct": [0, 7], "model": [0, 1], "specif": 0, "direct": 1, "graphic": 1, "The": 2, "basic": 2, "frequentist": 2, "learn": 2, "what": 3, "continu": 4, "probabl": [4, 5], "practic": 4, "numpyro": 4, "exercis": [4, 5, 6, 7], "discret": 5, "motiv": 5, "terminolog": 5, "notat": 5, "get": 5, "familiar": 5, "us": 5, "distribut": 5, "match": 5, "scenario": 5, "advanc": 6, "vector": [6, 7], "jax": [6, 7], "index": 6, "boolean": 6, "arrai": [6, 7], "indic": 6, "broadcast": 6, "catch": 6, "bug": 6, "earli": 6, "chex": 6, "an": 7, "tip": 7, "advic": 7, "properti": 7, "creation": 7, "shape": 7, "manipul": 7, "oper": 7, "slice": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})