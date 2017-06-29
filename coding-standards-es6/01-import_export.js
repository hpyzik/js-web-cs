/*
 * Always use modules (import/export) over a non-standard module system
 */

// good
import {merge} from 'module';
export default merge;

// bad
// const merge = require('module');
// module.exports = module.merge;

/*
 * Do not use wildcard imports
 */

// good
import factory from 'module';

// bad
// import * as factory from 'module';
