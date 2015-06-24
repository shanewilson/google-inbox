PROJECT = "Google Inbox"

PATH  := node_modules/.bin:$(PATH)
SHELL := /bin/bash

ifndef VERBOSE
	Q := @
	NIL := > /dev/null 2>&1
endif

NODE_ENV ?= development

NO_COLOR=\033[0m
OK_COLOR=\033[32;01m
OK_STRING=$(OK_COLOR)[OK]$(NO_COLOR)
AWK_CMD = awk '{ printf "%-30s %-10s\n",$$1, $$2; }'
PRINT_OK = printf "$@ $(OK_STRING)\n" | $(AWK_CMD)
NODE_ENV_STRING = $(OK_COLOR)[$(NODE_ENV)]$(NO_COLOR)
PRINT_ENV = printf "$@ $(NODE_ENV_STRING)\n" | $(AWK_CMD)

all: install dist

server:
	$(Q) webpack-dev-server --config webpack.dev.config.js --inline --hot -d

install:
	$(Q) npm install --loglevel error
	@$(PRINT_OK)

build: clean-dist
	@$(PRINT_ENV)
	$(Q) webpack $(NIL)
	@$(PRINT_OK)

dist: prepare build
	@$(PRINT_OK)

prepare: lint flow test-once
	@$(PRINT_OK)

travis: lint flow sauce
	@$(PRINT_OK)

test:
	$(Q) karma start

test-once:
	$(Q) karma start --single-run --reporters progress --log-level error $(NIL)
	@$(PRINT_OK)

sauce:
	$(Q) karma start karma.conf-ci.js
	@$(PRINT_OK)

lint:
	$(Q) eslint src --ext .js,.jsx
	@$(PRINT_OK)

flow:
	$(Q) scripts/flow-annotation-check.sh && flow check src
	@$(PRINT_OK)

clean: clean-dist clean-deps
	@$(PRINT_OK)

clean-dist:
	$(Q) rm -rf dist
	@$(PRINT_OK)

clean-deps:
	$(Q) rm -rf node_modules
	@$(PRINT_OK)

update:
	$(Q) npm-check-updates
	@$(PRINT_OK)

upgrade:
	$(Q) npm-check-updates -u
	@$(PRINT_OK)

.PHONY: install start server build dist prepare test test-once lint flow clean clean-dist clean-deps update upgrade
