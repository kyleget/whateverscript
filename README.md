# WhateverScript

A loose-typed companion to TypeScript.

## Installation
```
npm install whateverscript
```

## Usage
Integrating WhateverScript into your project is easy! Just import `Whatever`, and immediately see its power.
```
import type Whatever from 'whateverscript';

function foo(bar: Whatever): Whatever {
  return 'Hello ${bar}!';
}
```

You can also quickly convert existing typed objects by either explicitly setting the `Whatever` type or by using the `makeWhatever` utiltiy function.
```
// foo.ts
export const helloWorld: IntrinsicAttributes & InferPropsInner<Pick<{ myProp }> & Requireable<(...args)> = 'Hello World!';
```

```
// bar.ts
import Whatever, { makeWhatever } from 'whateverscript;

import { helloWorld } from './foo';

const myHelloWorld1: Whatever = helloWorld as Whatever;  // Hello World!

const myHellowWorld2: Whatever = makeWhatever(helloWorld);  // Hello World!
```
