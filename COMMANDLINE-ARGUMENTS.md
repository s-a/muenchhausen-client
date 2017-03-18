# Help

## Usage

```sh
mh <template-string> [--culture en];
```

## Parameters
|Name|Description|
|----|-----------|
|template-string|A template string to render fake data.|
|--culture|A local string to specify fake date culture.|
|help, --help, /? |Show this help.|
|version, --version, -v|Show version.|


### Locales

A locale is an identifier (id) that refers to a set of user preferences that
tend to be shared across significant swaths of the world. In technical terms,
it's a String composed of three parts: language, script, and region. For
example:

|locale|description|
|------|-----------|
|*en-Latn-US*|English as spoken in the Unites States in the Latin script.|
|*en-US*|English as spoken in the Unites States (Latin script is deduced given it's the most likely script used in this place).|
|*en*|English (United States region and Latin script are deduced given they are respectively the most likely region and script used in this pace).|
|*en-GB*|English as spoken in the United Kingdom (Latin script is deduced given it's the most likely script used in this place).|
|*en-IN*|English as spoken in India (Latin script is deduced).|
|*es*|Spanish (Spain region and Latin script are deduced).|
|*es-MX*|Spanish as spoken in Mexico (Latin script is deduced).|
|*zh*|Chinese (China region and Simplified Han script are deduced).|
|*zh-TW*|Chinese as spoken in Taiwan (Traditional Han script is deduced).|
|*ja*|Japanese (Japan region and Japanese script are deduced).|
|*de*|German (Germany region and Latin script are deduced).|
|*pt*|Portuguese (Brazil region and Latin script are deduced).|
|*pt-PT*|Portuguese as spoken in Portugal (Latin script is deduced).|
|*fr*|French (France region and Latin script are deduced).|
|*ru*|Russian (Russia region and Cyrillic script are deduced).|
|*ar*|Arabic (Egypt region and Arabic script are deduced).|