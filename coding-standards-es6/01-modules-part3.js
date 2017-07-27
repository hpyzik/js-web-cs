/*
 * Multiline imports should be indented just like multiline array and object literals
 */

// good
import {
    longNameA,
    longNameB,
    longNameC,
    longNameD,
    longNameE
} from 'path';

// bad
// import {longNameA, longNameB, longNameC, longNameD, longNameE} from 'path';

/*
 * Put all imports above non-import statements
 */

// good
import fooA from 'foo';
import barA from 'bar';

fooA.init();

// bad
// import fooB from 'foo';
// fooB.init();
//
// import barB from 'bar';

/*
 * In modules with a single export, prefer default export over named export
 */

// good
export default function fooC() { /* ... */}

// bad
// export function fooD() { /* ... */ }
