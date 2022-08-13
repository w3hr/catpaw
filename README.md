<p align="center">
    <h1>catpaw</h1>
    <h2>some lightweight nice to have utilty set for nodejs/typescript<h2>
<p>

# install

## git way

```
git clone https://github.com/w3hr/catpaw.git
cd catpaw
npm install
```

## npm way

`npm i catpaw --save`

# info

## example

```
import * as paw from 'catpaw';

//import { isUndefinedOrNull } from 'catpaw';

const subject = undefined;

if (paw.isUndefinedOrNull(subject)) {
    console.log('subject is undefined||null')
}

```

## exported functions

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

[MIT](LICENSE) licensed.