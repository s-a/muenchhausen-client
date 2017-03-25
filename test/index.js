"use strict";

var unloadModule = function unloadModule() {
	var name = require.resolve("../lib");
	delete require.cache[name];
}

var template = "$(date.now)"

describe("muenchausen-client", function () {
  it("should render some template code based on first parameter!", function () {
		unloadModule();

		process.argv = process.argv || [];
		process.argv.push(template)
		process.argv.push("--culture")
		process.argv.push("de-DE")

		/*var muenchausenClient = */require("../lib");
		process.argv = [];
  });

  it("should render some template code based on current runcom file!", function () {
		unloadModule();
		process.argv = process.argv || [];
		process.argv.push("--culture")
		process.argv.push("de-DE")
		process.argv = [];
		/*var muenchausenClient = */require("../lib");
  });  

/*
  it("should render some template code based on stdin!", function () {
		unloadModule();

		var stdin = require("mock-stdin").stdin();
		stdin.send(template + " | ", "ascii");
		// sending a null will trigger EOF and dispatch an 'end' event.
		stdin.send(null);
		stdin.end();
		 require("../lib");
		stdin.restore();
  });
*/
});