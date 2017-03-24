#!/usr/bin/env node

"use strict";

var argv = require("minimist")(process.argv.slice(2));
var Muenchhausen = require("muenchhausen");


function fake (template){
	var merchandiseTVSpotText = template || argv._[0];
	var muenchhausen = new Muenchhausen(argv.culture || "en-GB");

	var rows = parseInt(argv.rows) || 1;
	for (var i = rows - 1; i >= 0; i--) {
		var news = muenchhausen.render(merchandiseTVSpotText);
		console.log(news);
	}
}
 
var Cli = new require("n-cli");
var cli = new Cli({
  silent: false,
  handleUncaughtException : true,
  runcom : ".muenchhausenrc",
  programInfoOnStartup :false
});

function boot(){
	cli.on(function(){
		if (this.argv._.length > 0){
			fake();
		}
	});

	cli.runcom(function(rc){ 
		if (argv._.length === 0 && rc){
			argv.culture = argv.culture || rc.settings.culture;
			fake(rc.settings.template);
		}
	});
};
 
var getStdin = require("get-stdin");
getStdin().then(function(str){
	(str === "" ? boot() : fake(str));
});