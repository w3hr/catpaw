<p align="center">
    <h1>catpaw</h1>
    lightweight nice to have zero dependency utilty set for nodejs/typescript
</p>
<p>
<I style="font-size: 22px;">install</I>

<b>git way</b>

```
git clone https://github.com/w3hr/catpaw.git
cd catpaw
npm install
```

<b>npm way</b>

`npm i catpaw --save`
</p>
<p>
<I style="font-size: 22px;">info</I>

<b>example</b>

```
import * as paw from 'catpaw';

//import { isUndefinedOrNull } from 'catpaw';

const subject = undefined;

if (paw.isUndefinedOrNull(subject)) {
    console.log('subject is undefined||null')
}

```

<b>exported functions</b>

```
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
stringCountNeedle (subject: string, needle: string, ignoreCase = false): number
sameTypes (x: unknown, x2: unknown): boolean
sleepMs (ms: number): Promise<unknown>
sleepS (ms: number): Promise<unknown>
```
</p>


[MIT](LICENSE) licensed.