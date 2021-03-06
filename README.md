<big><h1 align="center">composr-cli</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/composr-cli">
    <img src="https://img.shields.io/npm/v/composr-cli.svg?style=flat-square"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/corbel-platform/composr-cli">
    <img src="https://img.shields.io/coveralls/corbel-platform/composr-cli.svg?style=flat-square"
         alt="Coverage Status">
  </a>

  <a href="https://travis-ci.org/corbel-platform/composr-cli">
    <img src="https://img.shields.io/travis/corbel-platform/composr-cli.svg?style=flat-square"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/composr-cli">
    <img src="http://img.shields.io/npm/dm/composr-cli.svg?style=flat-square"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/corbel-platform/composr-cli.svg">
    <img src="https://david-dm.org/corbel-platform/composr-cli.svg?style=flat-square"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/corbel-platform/composr-cli/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/composr-cli.svg?style=flat-square"
         alt="License">
  </a>
</p>

<p align="center"><big>
CompoSR Command Line Interface
</big></p>


## Install

```sh
npm -g install composr-cli
```

## Usage

```sh
$ composr -h
```

publishing phrases to environment:

```sh
composr -p --env=staging --version=2.10.0
```

remove phrases by environment:

```sh
composr -u --env=staging --version=2.10.0
```

## Available Options
 
```
Options

  -p, --publish           
  -i, --init              
  -s, --status            
  -g, --generate          
  -h, --help              
  --phrases string[]      
  -v, --version string    
  -e, --env string[]      
  -d, --verbose           
  -b, --build             
  -f, --force  
```

### Publish

Publish your phrases and snippets to Composr

### Generate

Bootstrap a project

### Build

Builds local phrases and snippets into Composr-core usable JSONs

## License

MIT © [corbel-platform](http://github.com/corbel-platform)

[npm-url]: https://npmjs.org/package/composr-cli
[npm-image]: https://img.shields.io/npm/v/composr-cli.svg?style=flat-square

[travis-url]: https://travis-ci.org/corbel-platform/composr-cli
[travis-image]: https://img.shields.io/travis/corbel-platform/composr-cli.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/corbel-platform/composr-cli
[coveralls-image]: https://img.shields.io/coveralls/corbel-platform/composr-cli.svg?style=flat-square

[depstat-url]: https://david-dm.org/corbel-platform/composr-cli
[depstat-image]: https://david-dm.org/corbel-platform/composr-cli.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/composr-cli.svg?style=flat-square
