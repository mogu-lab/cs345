build:
	python render_schedule.py > schedule.md && jupyter-book build --all .

plots:
	python static_plots.py

clean:
	rm -rf _build && rm -rf __pycache__

env:
	pip list --format=freeze > requirements.txt # pip freeze > requirements.txt

style:
	jupyter-book config sphinx .
