# node-cookie

A small library for setting/getting/removing cookies.

[![Dependency Status](https://david-dm.org/virgel1995/node-cookie/status.svg?style=flat)](https://david-dm.org/virgel1995/node-cookie)
[![Build Status](https://travis-ci.org/virgel1995/node-cookie.svg?branch=master)](https://travis-ci.org/virgel1995/node-cookie)
[![npm version](https://badge.fury.io/js/node-cookie.svg)](http://badge.fury.io/js/node-cookie)


## Installation

```
npm install node-cookie
yarn add node-cookie
```


## Usage

```js
var cookie = require('node-cookie');

cookie.set('foo', 'bar');
console.log(cooke.get('foo'));

cookie.remove('foo');
console.log(cooke.get('foo'));
```
### Easy 😜

## License

MIT
