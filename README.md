<p align="center">
    <h1>catpaw</h1>
    some lightweight nice to have utilty set for nodejs/typescript
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
isUndefined
isNull
isUndefinedOrNull
isObject
isBoolean
isNumber
isString
isArray
isFunction
isNotEmptyString
isNotEmptyArray
isRealNumber
stringCountNeedle
sameTypes
sleepMs
sleepS
```
</p>

[MIT](LICENSE) licensed.