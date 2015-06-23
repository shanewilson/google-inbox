SHELL = /bin/bash

PROJECT = "Google Inbox"

NODE_ENV ?= development

NO_COLOR=\033[0m
OK_COLOR=\033[32;01m
OK_STRING=$(OK_COLOR)[OK]$(NO_COLOR)
AWK_CMD = awk '{ printf "%-30s %-10s\n",$$1, $$2; }'
PRINT_OK = printf "$@ $(OK_STRING)\n" | $(AWK_CMD)
NODE_ENV_STRING = $(OK_COLOR)[$(NODE_ENV)]$(NO_COLOR)
PRINT_ENV = printf "$@ $(NODE_ENV_STRING)\n" | $(AWK_CMD)

NM = ./node_modules
BIN = ${NM}/.bin
DIST = ./dist
SCRIPTS = ./scripts


all: install dist

start: test server

server:
	${BIN}/webpack-dev-server --config webpack.dev.config.js --hot -d

install:
	npm install --loglevel error
	@$(PRINT_OK)

build: clean-dist
	@$(PRINT_ENV)
	${BIN}/webpack
	@$(PRINT_OK)

dist: prepare build
	@$(PRINT_OK)

prepare: lint flow test-once
	@$(PRINT_OK)

test:
	${BIN}/karma start

test-once:
	${BIN}/karma start --single-run --reporters progress --log-level error
	@$(PRINT_OK)

lint: src/**/*.js
	${BIN}/eslint src --ext .js,.jsx
	@$(PRINT_OK)

flow:
	${SCRIPTS}/lint.sh && flow src
	@$(PRINT_OK)

clean: clean-dist clean-deps
	@$(PRINT_OK)

clean-dist:
	rm -rf ${DIST}
	@$(PRINT_OK)

clean-deps:
	rm -rf ${NM}
	@$(PRINT_OK)

update:
	${BIN}/npm-check-updates
	@$(PRINT_OK)

upgrade:
	${BIN}/npm-check-updates -u
	@$(PRINT_OK)

.PHONY: install start server build dist prepare test test-once lint flow clean clean-dist clean-deps update upgrade
