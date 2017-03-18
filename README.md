# muenchhausen-client [![NPM version][npm-image]][npm-url] 
[![Build Status][travis-image]][travis-url] 
[![Dependency Status][daviddm-image]][daviddm-url] 
[![Coverage percentage][coveralls-image]][coveralls-url] [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e795c94f6f1e4e9fa5e4d6e080b198b5)](https://www.codacy.com/app/stephanahlf/muenchhausen-client?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=s-a/muenchhausen-client&amp;utm_campaign=Badge_Grade)

> fake data shell client

## Installation

```sh
$ npm install -g muenchhausen-client
```

## Usage

```sh
mh fake "now:{{{date-now 'suffix:am'}}}\trandom:{{{date-random 'suffix:format,min:20200901'}}}\trandom: {{{date-random}}}" --culture de;
```

### yields

```sh
$ now:18.3.2017   random:26.12.2014       random: 1.9.2014
```

## Parameters
|Name|Description|
|----|-----------|
|fake <template-string> [--culture en]|A template string to render fake data.|
|--culture|A local string to specify fake date culture.|
|help, --help, /? |Show this help.|
|version, --version, -v|Show version.|

For deatils plsease see [COMMANDLINE-ARGUMENTS.md](COMMANDLINE-ARGUMENTS.md)
 
## License

MIT © [s-a](https://github.com/s-a)


[npm-image]: https://badge.fury.io/js/muenchhausen-client.svg
[npm-url]: https://npmjs.org/package/muenchhausen-client
[travis-image]: https://travis-ci.org/s-a/muenchhausen-client.svg?branch=master
[travis-url]: https://travis-ci.org/s-a/muenchhausen-client
[daviddm-image]: https://david-dm.org/s-a/muenchhausen-client.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/s-a/muenchhausen-client
[coveralls-image]: https://coveralls.io/repos/s-a/muenchhausen-client/badge.svg
[coveralls-url]: https://coveralls.io/r/s-a/muenchhausen-client
