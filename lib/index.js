#!/usr/bin/env node

"use strict";

var argv = require('minimist')(process.argv.slice(2));
var Muenchhausen = require("muenchhausen");

function fake (template){
	// if (argv._.length < 2){
	// 	throw new cli.Error("missing-argument-error", "You need to specifiy at least one parameter which contains a template string for faked data.")
	// }
	var merchandiseTVSpotText = template || argv._[0];
	var muenchhausen = new Muenchhausen(argv.culture || "en-GB");
	var news = muenchhausen.render(merchandiseTVSpotText);
	console.log(news);
}
 
var Cli = new require("n-cli");
var cli = new Cli({
  silent: false,
  handleUncaughtException : true,
  runcom : ".muenchhausenrc",
  programInfoOnStartup :false
});
 
const getStdin = require('get-stdin');
getStdin().then(str => {
	if (str !== ""){
    	fake(str);
    	process.exit(0);
	} else {
		cli.on(function(){
			if (this.argv._.length > 0){
				fake();
			}
		});

		cli.runcom(function(rc){ 
			if (argv._.length === 0 && rc){
				argv.culture = rc.settings.culture || argv.culture;
				fake(rc.settings.template);
			}
		});
	}
}); 