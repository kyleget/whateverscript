# WhateverScript

A loose-typed companion to TypeScript.

## Installation
```
npm install whateverscript
```

## Usage
### Basic Usage
Integrating _WhateverScript_ into your project is easy! Just import `Whatever`, and immediately see its power.
```
import type Whatever from 'whateverscript';

function foo(bar: Whatever): Whatever {
  return 'Hello ${bar}!';
}
```

### Advanced Usage
You can also quickly convert existing typed objects by either explicitly setting the `Whatever` type or by using the `makeWhatever` utiltiy function.
```
// foo.ts
export const helloWorld: IntrinsicAttributes & InferPropsInner<Pick<{ myProp }> & Requireable<(...args)> = 'Hello World!';

// bar.ts
import { helloWorld } from './foo';
import Whatever, { makeWhatever } from 'whateverscript;


const myHelloWorld1: Whatever = helloWorld as Whatever;  // Hello World!

const myHellowWorld2: Whatever = makeWhatever(helloWorld);  // Hello World!
```

### Other Usage
_WhateverScript_ works with any data type... even `Date` objects!
```
import { makeWhatever } from 'whateverscript;
const now = new Date();

makeWhatever(now); // 2021-04-01T00:00:00Z
```
