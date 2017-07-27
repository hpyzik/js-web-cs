/*
 * Only import from a path in one place
 */

// good
import fooA, {named1, named2} from 'fooA';

// good
import fooB, {
    named3,
    named4
} from 'fooB';

// bad
// import foo from 'foo';
// // … some other imports … //
// import {named1, named2} from 'foo';

/*
 * Don't export directly from an import
 */

// good
import {es6} from './Guide';
export default es6;

// bad
// export {es6 as default} from './Guide';

/*
 * Do not export mutable bindings
 */

// good
const barB = 3;
export {barB};

// bad
// let barA = 3;
// export {barA};
