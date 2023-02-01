.PHONY: build serve copy-cv

.DEFAULT_GOAL: build

build:
	npx @11ty/eleventy

serve:
	npx @11ty/eleventy --serve

copy-cv:
	cp ~/Documents/CV/vashevko-cv.pdf ./_src/files/cv.pdf
