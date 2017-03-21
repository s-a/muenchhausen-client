#!/usr/bin/env node

"use strict";


const getStdin = require('get-stdin');
getStdin().then(str => {
	if (str !== ""){
    	fake(str);
	}
});

  
var Cli = new require("n-cli");
var cli = new Cli({
  silent: false,
  handleUncaughtException : true,
  runcom : ".muenchhausenrc",
  programInfoOnStartup :false
});

var argv = require('minimist')(process.argv.slice(2));

function fake (merchandiseTVSpotText){
	// if (argv._.length < 2){
	// 	throw new cli.Error("missing-argument-error", "You need to specifiy at least one parameter which contains a template string for faked data.")
	// }
	var merchandiseTVSpotText = merchandiseTVSpotText || argv._[1];
	var Muenchhausen = require("muenchhausen");
	var muenchhausen = new Muenchhausen(argv.culture || "en-GB");
	var news = muenchhausen.render(merchandiseTVSpotText);
	console.log(news);
}

cli.on("fake", function(){
	fake();
});

cli.runcom(function(rc){ 
	if (rc){
		this.log(rc);
	}
});

