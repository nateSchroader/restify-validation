TESTS = $(shell find test -name "*.test.js");
MODULE_TESTS = $(shell find ./test/$(module) -name "*.test.js");
FILE_TEST = $(shell find test -name $(file)".test.js");

test: ; @./node_modules/.bin/mocha $(TESTS)

test_module: ; @./node_modules/.bin/mocha $(MODULE_TESTS)

test_file: ; @./node_modules/.bin/mocha $(FILE_TEST)

.PHONY: test