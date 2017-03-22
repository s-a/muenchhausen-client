var fs = require('fs');
var path = require('path');
require('should');

var getLineEndingsStyle = function(fn){
	var result = "unknown";
	var styles = {
		'unix': /[^\r]\n/,
		'osx': /\r/,
		'windows': /\r\n/
	};

	var text = fs.readFileSync(fn);
	for (var os in styles) {
		if (styles.hasOwnProperty(os)){
			var regex = styles[os];
			if(regex.test(text)){
				result = os;
			}
		}
	}
	return result;
}


describe('unix-style', function(){
	it('lib/index.js should have unix line ending style', function(){
		getLineEndingsStyle(path.join(__dirname, "..", "lib", "index.js")).should.equal("unix");
	});
});