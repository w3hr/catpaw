<h1 align="center">catpaw</h1>
<p align="center"><img src="./img/catpaw.png" /> </p>
<p align="center">Lightweight, nice-to-have utility set with zero dependencies for JS/TypeScript.</p>

## Installation

<b>git</b>

```sh
git clone https://github.com/w3hr/catpaw.git
cd catpaw
```

<b>npm</b>

https://www.npmjs.com/package/catpaw

```sh
npm i catpaw
```

## Examples

<b>import</b>

```ts
import * as paw from 'catpaw';

//import { isUndefinedOrNull } from 'catpaw';

const subject = undefined;

if (paw.isUndefinedOrNull(subject)) {
    console.log('subject is undefined||null')
}
```

## exported functions</b>

```ts
isUndefined (x: unknown): boolean
isNull (x: unknown): boolean 
isUndefinedOrNull (x: unknown): boolean 
isObject (x: unknown): boolean 
isBoolean (x: unknown): boolean 
isNumber (x: unknown): boolean 
isString (x: unknown): boolean 
isArray (x: unknown): boolean 
isFunction (x: unknown): boolean 
isNotEmptyString (x: string): boolean
isNotEmptyArray <T>(x: Array<T>): boolean
isRealNumber (x: number) : boolean
anyUndefinedOrNull <T>(x: Array<T>): boolean
isAnyEmpty = (x: any[]): boolean
isEmpty = (x: any): boolean
objectKeysOrEmpty = (x: object): string[]
objectValuesOrEmpty = <T extends Object>(x: T): T[]
arrayGetElementsByProperty = <T>(arr: T[], prop: keyof T, value: T[keyof T]): T[]
arrayRemoveElementsByProperty = <T>(arr: T[], prop: keyof T, value: T[keyof T]): []
stringCountNeedle (subject: string, needle: string, ignoreCase = false): number
sameTypes (x: unknown, x2: unknown): boolean
sleepMs (ms: number): Promise<unknown>
sleepS (ms: number): Promise<unknown>
```
</p>


[MIT](LICENSE) licensed.