#!/usr/bin/env node

"use strict";

var Cli = new require("n-cli");
var cli = new Cli({
  silent: false,
  handleUncaughtException : true,
  runcom : ".muenchhausenrc",
  programInfoOnStartup :false
});

cli.on("fake", function(){
	if (this.argv._.length < 2){
		throw new cli.Error("missing-argument-error", "You need to specifiy at least one parameter which contains a template string for faked data.")
	}
	var merchandiseTVSpotText = this.argv._[1];
	var Muenchhausen = require("muenchhausen");
	var muenchhausen = new Muenchhausen(this.argv.culture || "en");
	var news = muenchhausen.render(merchandiseTVSpotText);
	console.log(news);
});

cli.runcom(function(rc){ 
	if (rc){
    	this.log(rc);
	}
});

