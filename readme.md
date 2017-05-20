[![Build Status](https://travis-ci.org/hpyzik/js-web-cs.svg?branch=master)](https://travis-ci.org/hpyzik/js-web-cs)

# Js web CS

## Simple boilerplate for browser-side javascript coding standard

Only `node` version `6` is needed to run coding standard checking.

To run eslint type in console

* `npm install`
* `npm run eslint`

Description of standard is self testing, means when you uncomment a bad example in description eslint should indicate error.

When you adopt this standard to your project you have to turn on one rule in `.eslintrc.json` file. It is `no-unused-vars` and you should chane it to `"no-unused-vars": ["error"]`.

Directory `presters` keeps configurations for IDE's which help you to set up auto-formatting of a code. Now only IntelliJ is supported.

