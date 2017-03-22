[![Muenchhausen Logo](/resources/logo-sm.png)]()

# Client 

[![NPM version][npm-image]][npm-url] 
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
$ echo "Chuck Noris is a super hero action movie star born on $(date.future)" | mh
"Chuck Noris is a super hero action movie star born on 06/03/3513"
$ mh "now:$(date.now) random:$(date.random min:20200901)	random:	$(date.random)	$(time.now)	$(date.weekday)" --culture de-DE
now:22.02.2017 random:09.01.8692	random:	19.04.7308	08:02:54	Dienstag
$ mh "now:$(date.now) random:$(date.random min:20200901)	random:	$(date.random)	$(time.now)	$(date.weekday)	RndNumber:$(number.random)" --culture fr-FR
now:22/02/2017 random:24/09/6451	random:	15/02/9477	08:06:49	jeudi	RndNumber:-6 261 085 541 948 770
$ mh "now:$(date.now) random:$(date.random min:20200901)	random:	$(date.random)	$(time.now)	$(date.weekday)	RndNumber:$(number.random)" --culture ja-JP
now:2017/02/22 random:8307/05/21	random:	8192/11/03	0:07:29	金曜日	RndNumber:-3,514,778,193,557,152
$ mh "$(number.random min:100,max:200)" --culture ja-JP
198
```

## Syntax

- `mh <template-string> [--culture en-GB]`
- `echo "<template-string>" | mh [--culture en-GB]`


## Parameters

|Name|Description|
|----|-----------|
|<template-string>|A template string to render fake data.|
|--culture|A local string to specify fake data culture.|
|help, --help, /? |Show help.|
|version, --version, -v|Show version.|

For deatils plsease see [COMMANDLINE-ARGUMENTS.md](COMMANDLINE-ARGUMENTS.md)

## API

 muenchhausen-client is based [muenchhausen](https://github.com/s-a/muenchhausen). A detailed API description is available at [https://github.com/s-a/muenchhausen/tree/master/docs](https://github.com/s-a/muenchhausen/tree/master/docs)
 
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
