.DEFAULT_GOAL: build

build:
	npx @11ty/eleventy

serve:
	npx @11ty/eleventy --serve

.PHONY: build
.PHONY: serve
