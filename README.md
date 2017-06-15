# [![module logo][module-logo-path]][module-logo-url]

[module-logo-path]: /resources/logo-sm.png
[module-logo-url]: /README.md

[![NPM version][npm-image]][npm-url] 
[![Build Status][travis-image]][travis-url] 
[![Dependency Status][daviddm-image]][daviddm-url] 
[![Coverage percentage][coveralls-image]][coveralls-url]
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e795c94f6f1e4e9fa5e4d6e080b198b5)](https://www.codacy.com/app/stephanahlf/muenchhausen-client?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=s-a/muenchhausen-client&amp;utm_campaign=Badge_Grade)
[![Donate](http://s-a.github.io/donate/donate.svg)](http://s-a.github.io/donate/)

> Quickly get realistic mockup fake content data in your shell

## Installation

```sh
$ npm install -g muenchhausen-client
```

## Syntax

- `mh <template-string> [--culture en-GB] [--rows 1]`
- `echo "<template-string>" | mh [--culture en-GB] [--rows 1]`

## Usage

> Start Within Minutes...

```sh
$ echo "Fake-News: $(person.firstname) $(person.lastname) is a super hero action movie star born on $(date.future)" | mh
"Fake-News: Chuck Noris is a super hero action movie star born on 06/03/3513"

$ mh "now:$(date.now) random:$(date.random min:20200901)	random:	$(date.random)	$(time.now)	$(date.weekday)" --culture de-DE
now:22.02.2017 random:09.01.8692	random:	19.04.7308	08:02:54	Dienstag

$ c:\git\muenchhausen>mh "$(person.firstname) $(person.lastname) | $(address.random)$(address.street) - $(address.number), $(address.city), $(address.postcode)" --rows 5 --culture fr-FR
Ange Moreau | rue jean antoine chaptal - 159, Plaisir, 78370
Henriette Robert | rue jean louis gay lussac - 57, Plaisir, 78370
Justine Thomas | rue lavoisier - 129, Houilles, 78800
Alphonse Richard | grande rue - 97, Chambourcy, 78240
Bruno Dubois | rue marie jean antoine condorcet - 74, Plaisir, 78370

$ mh "$(number.random min:100,max:200)" --culture ja-JP
198
```

[All fake commands available in templates](https://github.com/s-a/muenchhausen/tree/master/docs)


## Parameters

|Name|Description|
|----|-----------|
|<template-string>|A template string to render fake data.|
|--culture|A local string to specify fake data culture which defaults to "en-GB".|
|--rows|The number of rows you expect which defaults to "1".|
|help, --help, /? |Show help.|
|version, --version, -v|Show version.|

For more deatils plsease see [COMMANDLINE-ARGUMENTS.md](COMMANDLINE-ARGUMENTS.md)

## API

 `muenchhausen-client` is based on the [muenchhausen](https://github.com/s-a/muenchhausen) node module. A detailed API description is available at [https://github.com/s-a/muenchhausen/tree/master/docs](https://github.com/s-a/muenchhausen/tree/master/docs)
 
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
