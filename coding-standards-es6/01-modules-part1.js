/*
 * Always use modules (import/export) over a non-standard module system
 */

// good
// import {merge} from 'module';
// export default merge;

// bad
// const commonjsMerge = require('module');
// module.exports = commonjsMerge;
// exports = commonjsMerge;

// define(['amd'], function (amd) { /* ... */ });
// require(['amd'], function (amd) { /* ... */ });

/*
 * Do not use wildcard imports
 */

// good
import factory from 'module';

// bad
// import * as factory from 'module';
