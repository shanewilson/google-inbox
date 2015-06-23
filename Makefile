PROJECT = "Google Inbox"

NM = ./node_modules
BIN = ${NM}/.bin
DIST = ./dist
SCRIPTS = ./scripts

all: install prepare

install:

	npm install --quiet

start: test server
	#${BIN}/concurrent -p none "make test" "make server"

server:
	${BIN}/webpack-dev-server --config webpack.dev.config.js --hot -d

build:
	rm -rf ${DIST}
	${BIN}/webpack

dist: prepare build

prepare: lint flow test-once

test:
	${BIN}/karma start

test-once:
	${BIN}/karma start --single-run

lint:
	${BIN}/eslint src --ext .js,.jsx

flow:
	${SCRIPTS}/lint.sh && flow src

clean:
	rm -rf ${NM} ${DIST}

upgrade:
	${BIN}/npm-check-updates -u && npm test-once


.PHONY: install start server build dist prepare test test-once lint flow clean upgrade
.SILENT:
