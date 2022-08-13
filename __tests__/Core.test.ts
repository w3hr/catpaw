import * as paw from '../src/index';

class SomeTestClass {
  constructor(public Name: string = "foo") { }

  static someTestFunction(): boolean {
    return true;
  }
}

test('isUndefined', () => {
  expect(paw.isUndefined(undefined)).toBe(true);
  expect(paw.isUndefined(null)).toBe(false);
  expect(paw.isUndefined(NaN)).toBe(false);
  expect(paw.isUndefined(new Date())).toBe(false);
  expect(paw.isUndefined(new SomeTestClass())).toBe(false);
  expect(paw.isUndefined(true)).toBe(false);
  expect(paw.isUndefined(false)).toBe(false);
  expect(paw.isUndefined('true')).toBe(false);
  expect(paw.isUndefined('false')).toBe(false);
  expect(paw.isUndefined(0)).toBe(false);
  expect(paw.isUndefined(1)).toBe(false);
  expect(paw.isUndefined(123456789)).toBe(false);
  expect(paw.isUndefined(11.5)).toBe(false);
  expect(paw.isUndefined(() => { })).toBe(false);
  expect(paw.isUndefined(SomeTestClass.someTestFunction)).toBe(false);
  expect(paw.isUndefined('test')).toBe(false);
  expect(paw.isUndefined('')).toBe(false);
  expect(paw.isUndefined({})).toBe(false);
  expect(paw.isUndefined([])).toBe(false);
  expect(paw.isUndefined(['1', '2', '3'])).toBe(false);
});

test('isNull', () => {
  expect(paw.isNull(undefined)).toBe(false);
  expect(paw.isNull(null)).toBe(true);
  expect(paw.isNull(NaN)).toBe(false);
  expect(paw.isNull(new Date())).toBe(false);
  expect(paw.isNull(new SomeTestClass())).toBe(false);
  expect(paw.isNull(true)).toBe(false);
  expect(paw.isNull(false)).toBe(false);
  expect(paw.isNull('true')).toBe(false);
  expect(paw.isNull('false')).toBe(false);
  expect(paw.isNull(0)).toBe(false);
  expect(paw.isNull(1)).toBe(false);
  expect(paw.isNull(123456789)).toBe(false);
  expect(paw.isNull(11.5)).toBe(false);
  expect(paw.isNull(() => { })).toBe(false);
  expect(paw.isNull(SomeTestClass.someTestFunction)).toBe(false);
  expect(paw.isNull('test')).toBe(false);
  expect(paw.isNull('')).toBe(false);
  expect(paw.isNull({})).toBe(false);
  expect(paw.isNull([])).toBe(false);
  expect(paw.isNull(['1', '2', '3'])).toBe(false);
});

test('isUndefinedOrNull', () => {
  expect(paw.isUndefinedOrNull(undefined)).toBe(true);
  expect(paw.isUndefinedOrNull(null)).toBe(true);
  expect(paw.isUndefinedOrNull(NaN)).toBe(false);
  expect(paw.isUndefinedOrNull(new Date())).toBe(false);
  expect(paw.isUndefinedOrNull(new SomeTestClass())).toBe(false);
  expect(paw.isUndefinedOrNull(true)).toBe(false);
  expect(paw.isUndefinedOrNull(false)).toBe(false);
  expect(paw.isUndefinedOrNull('true')).toBe(false);
  expect(paw.isUndefinedOrNull('false')).toBe(false);
  expect(paw.isUndefinedOrNull(0)).toBe(false);
  expect(paw.isUndefinedOrNull(1)).toBe(false);
  expect(paw.isUndefinedOrNull(123456789)).toBe(false);
  expect(paw.isUndefinedOrNull(11.5)).toBe(false);
  expect(paw.isUndefinedOrNull(() => { })).toBe(false);
  expect(paw.isUndefinedOrNull(SomeTestClass.someTestFunction)).toBe(false);
  expect(paw.isUndefinedOrNull('test')).toBe(false);
  expect(paw.isUndefinedOrNull('')).toBe(false);
  expect(paw.isUndefinedOrNull({})).toBe(false);
  expect(paw.isUndefinedOrNull([])).toBe(false);
  expect(paw.isUndefinedOrNull(['1', '2', '3'])).toBe(false);
});

test('isObject', () => {
  expect(paw.isObject(undefined)).toBe(false);
  expect(paw.isObject(null)).toBe(false);
  expect(paw.isObject(NaN)).toBe(false);
  expect(paw.isObject(new Date())).toBe(true);
  expect(paw.isObject(new SomeTestClass())).toBe(true);
  expect(paw.isObject(true)).toBe(false);
  expect(paw.isObject(false)).toBe(false);
  expect(paw.isObject('true')).toBe(false);
  expect(paw.isObject('false')).toBe(false);
  expect(paw.isObject(0)).toBe(false);
  expect(paw.isObject(1)).toBe(false);
  expect(paw.isObject(123456789)).toBe(false);
  expect(paw.isObject(11.5)).toBe(false);
  expect(paw.isObject(() => { })).toBe(false);
  expect(paw.isObject(SomeTestClass.someTestFunction)).toBe(false);
  expect(paw.isObject('test')).toBe(false);
  expect(paw.isObject('')).toBe(false);
  expect(paw.isObject({})).toBe(true);
  expect(paw.isObject([])).toBe(false);
  expect(paw.isObject(['1', '2', '3'])).toBe(false);
});

test('isBoolean', () => {
  expect(paw.isBoolean(undefined)).toBe(false);
  expect(paw.isBoolean(null)).toBe(false);
  expect(paw.isBoolean(NaN)).toBe(false);
  expect(paw.isBoolean(new Date())).toBe(false);
  expect(paw.isBoolean(new SomeTestClass())).toBe(false);
  expect(paw.isBoolean(true)).toBe(true);
  expect(paw.isBoolean(false)).toBe(true);
  expect(paw.isBoolean('true')).toBe(false);
  expect(paw.isBoolean('false')).toBe(false);
  expect(paw.isBoolean(0)).toBe(false);
  expect(paw.isBoolean(1)).toBe(false);
  expect(paw.isBoolean(123456789)).toBe(false);
  expect(paw.isBoolean(11.5)).toBe(false);
  expect(paw.isBoolean(() => { })).toBe(false);
  expect(paw.isBoolean(SomeTestClass.someTestFunction)).toBe(false);
  expect(paw.isBoolean('test')).toBe(false);
  expect(paw.isBoolean('')).toBe(false);
  expect(paw.isBoolean({})).toBe(false);
  expect(paw.isBoolean([])).toBe(false);
  expect(paw.isBoolean(['1', '2', '3'])).toBe(false);
});

test('isNumber', () => {
  expect(paw.isNumber(undefined)).toBe(false);
  expect(paw.isNumber(null)).toBe(false);
  expect(paw.isNumber(NaN)).toBe(true);
  expect(paw.isNumber(new Date())).toBe(false);
  expect(paw.isNumber(new SomeTestClass())).toBe(false);
  expect(paw.isNumber(true)).toBe(false);
  expect(paw.isNumber(false)).toBe(false);
  expect(paw.isNumber('true')).toBe(false);
  expect(paw.isNumber('false')).toBe(false);
  expect(paw.isNumber(0)).toBe(true);
  expect(paw.isNumber(1)).toBe(true);
  expect(paw.isNumber(123456789)).toBe(true);
  expect(paw.isNumber(11.5)).toBe(true);
  expect(paw.isNumber(() => { })).toBe(false);
  expect(paw.isNumber(SomeTestClass.someTestFunction)).toBe(false);
  expect(paw.isNumber('test')).toBe(false);
  expect(paw.isNumber('')).toBe(false);
  expect(paw.isNumber({})).toBe(false);
  expect(paw.isNumber([])).toBe(false);
  expect(paw.isNumber(['1', '2', '3'])).toBe(false);
});

test('isString', () => {
  expect(paw.isString(undefined)).toBe(false);
  expect(paw.isString(null)).toBe(false);
  expect(paw.isString(NaN)).toBe(false);
  expect(paw.isString(new Date())).toBe(false);
  expect(paw.isString(new SomeTestClass())).toBe(false);
  expect(paw.isString(true)).toBe(false);
  expect(paw.isString(false)).toBe(false);
  expect(paw.isString('true')).toBe(true);
  expect(paw.isString('false')).toBe(true);
  expect(paw.isString(0)).toBe(false);
  expect(paw.isString(1)).toBe(false);
  expect(paw.isString(123456789)).toBe(false);
  expect(paw.isString(11.5)).toBe(false);
  expect(paw.isString(() => { })).toBe(false);
  expect(paw.isString(SomeTestClass.someTestFunction)).toBe(false);
  expect(paw.isString('test')).toBe(true);
  expect(paw.isString('')).toBe(true);
  expect(paw.isString({})).toBe(false);
  expect(paw.isString([])).toBe(false);
  expect(paw.isString(['1', '2', '3'])).toBe(false);
});

test('isArray', () => {
  expect(paw.isArray(undefined)).toBe(false);
  expect(paw.isArray(null)).toBe(false);
  expect(paw.isArray(NaN)).toBe(false);
  expect(paw.isArray(new Date())).toBe(false);
  expect(paw.isArray(new SomeTestClass())).toBe(false);
  expect(paw.isArray(true)).toBe(false);
  expect(paw.isArray(false)).toBe(false);
  expect(paw.isArray('true')).toBe(false);
  expect(paw.isArray('false')).toBe(false);
  expect(paw.isArray(0)).toBe(false);
  expect(paw.isArray(1)).toBe(false);
  expect(paw.isArray(123456789)).toBe(false);
  expect(paw.isArray(11.5)).toBe(false);
  expect(paw.isArray(() => { })).toBe(false);
  expect(paw.isArray(SomeTestClass.someTestFunction)).toBe(false);
  expect(paw.isArray('test')).toBe(false);
  expect(paw.isArray('')).toBe(false);
  expect(paw.isArray({})).toBe(false);
  expect(paw.isArray([])).toBe(true);
  expect(paw.isArray(['1', '2', '3'])).toBe(true);
});

test('isFunction', () => {
  expect(paw.isFunction(undefined)).toBe(false);
  expect(paw.isFunction(null)).toBe(false);
  expect(paw.isFunction(NaN)).toBe(false);
  expect(paw.isFunction(new Date())).toBe(false);
  expect(paw.isFunction(new SomeTestClass())).toBe(false);
  expect(paw.isFunction(true)).toBe(false);
  expect(paw.isFunction(false)).toBe(false);
  expect(paw.isFunction('true')).toBe(false);
  expect(paw.isFunction('false')).toBe(false);
  expect(paw.isFunction(0)).toBe(false);
  expect(paw.isFunction(1)).toBe(false);
  expect(paw.isFunction(123456789)).toBe(false);
  expect(paw.isFunction(11.5)).toBe(false);
  expect(paw.isFunction(() => { })).toBe(true);
  expect(paw.isFunction(SomeTestClass.someTestFunction)).toBe(true);
  expect(paw.isFunction('test')).toBe(false);
  expect(paw.isFunction('')).toBe(false);
  expect(paw.isFunction({})).toBe(false);
  expect(paw.isFunction([])).toBe(false);
  expect(paw.isFunction(['1', '2', '3'])).toBe(false);
});

test('isNotEmptyString', () => {
  expect(paw.isNotEmptyString(undefined as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString(null as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString(NaN as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString(new Date() as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString(new SomeTestClass() as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString(true as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString(false as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString('true' as unknown as string)).toBe(true);
  expect(paw.isNotEmptyString('false' as unknown as string)).toBe(true);
  expect(paw.isNotEmptyString(0 as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString(1 as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString(123456789 as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString(11.5 as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString((() => { }) as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString(SomeTestClass.someTestFunction as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString('test' as unknown as string)).toBe(true);
  expect(paw.isNotEmptyString('')).toBe(false);
  expect(paw.isNotEmptyString({} as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString([] as unknown as string)).toBe(false);
  expect(paw.isNotEmptyString(['1', '2', '3'] as unknown as string)).toBe(false);
});

test('isNotEmptyArray', () => {
  expect(paw.isNotEmptyArray(undefined as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(null as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(NaN as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(new Date() as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(new SomeTestClass() as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(true as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(false as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray('true' as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray('false' as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(0 as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(1 as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(123456789 as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(11.5 as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray((() => { }) as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(SomeTestClass.someTestFunction as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray('test' as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray('' as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray({} as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray([] as unknown as Array<unknown>)).toBe(false);
  expect(paw.isNotEmptyArray(['1', '2', '3'] as unknown as Array<unknown>)).toBe(true);
});

test('isNotEmptyNumber', () => {
  expect(paw.isRealNumber(undefined as unknown as number)).toBe(false);
  expect(paw.isRealNumber(null as unknown as number)).toBe(false);
  expect(paw.isRealNumber(NaN as unknown as number)).toBe(false);
  expect(paw.isRealNumber(new Date() as unknown as number)).toBe(false);
  expect(paw.isRealNumber(new SomeTestClass() as unknown as number)).toBe(false);
  expect(paw.isRealNumber(true as unknown as number)).toBe(false);
  expect(paw.isRealNumber(false as unknown as number)).toBe(false);
  expect(paw.isRealNumber('true' as unknown as number)).toBe(false);
  expect(paw.isRealNumber('false' as unknown as number)).toBe(false);
  expect(paw.isRealNumber(0 as unknown as number)).toBe(true);
  expect(paw.isRealNumber(1 as unknown as number)).toBe(true);
  expect(paw.isRealNumber(123456789 as unknown as number)).toBe(true);
  expect(paw.isRealNumber(11.5 as unknown as number)).toBe(true);
  expect(paw.isRealNumber((() => { }) as unknown as number)).toBe(false);
  expect(paw.isRealNumber(SomeTestClass.someTestFunction as unknown as number)).toBe(false);
  expect(paw.isRealNumber('test' as unknown as number)).toBe(false);
  expect(paw.isRealNumber('' as unknown as number)).toBe(false);
  expect(paw.isRealNumber({} as unknown as number)).toBe(false);
  expect(paw.isRealNumber([] as unknown as number)).toBe(false);
  expect(paw.isRealNumber(['1', '2', '3'] as unknown as number)).toBe(false);
});

test('stringCountNeedle case sensitive', () => {
  expect(paw.stringCountNeedle('1 fahrrad test fahrrad test auto test macht test SPASS', 'SPASS')).toBe(1);
  expect(paw.stringCountNeedle('2 fahrrad test FAHRRAD test auto test macht test spass', 'fahrrad')).toBe(1);
  expect(paw.stringCountNeedle('3 fahrrad test fahrrad test AUTO test macht test spass', 'AUTO')).toBe(1);
  expect(paw.stringCountNeedle('5 fahrrad TEST fahrrad test auto tesT macht teSt spass', 'test')).toBe(1);
  expect(paw.stringCountNeedle('     ', ' ')).toBe(5); //whitespaces
  expect(paw.stringCountNeedle('\t\t\t\t\t', '\t')).toBe(5); //tabs
  expect(paw.stringCountNeedle('     ', '     ')).toBe(1);
  expect(paw.stringCountNeedle('  x   ', '     ')).toBe(0);
  expect(paw.stringCountNeedle('hallo\ndies\nist\nein\ntest', '\n')).toBe(4); //newlines
});

test('stringCountNeedle case insensitive', () => {
  expect(paw.stringCountNeedle('1 fahrrad test fahrrad test auto test macht test spass', 'spass', true)).toBe(1);
  expect(paw.stringCountNeedle('2 fahrrad test fahrrad test auto test macht test spass', 'fahrrad', true)).toBe(2);
  expect(paw.stringCountNeedle('3 fahrrad test fahrrad test auto test macht test spass', 'auto', true)).toBe(1);
  expect(paw.stringCountNeedle('4 fahrrad test fahrrad test auto test macht test spass', ' ', true)).toBe(9);
  expect(paw.stringCountNeedle('5 fahrrad test fahrrad test auto test macht test spass', 'test', true)).toBe(4);
  expect(paw.stringCountNeedle('     ', ' ', true)).toBe(5); //whitespaces
  expect(paw.stringCountNeedle('\t\t\t\t\t', '\t', true)).toBe(5); //tabs
  expect(paw.stringCountNeedle('     ', '     ', true)).toBe(1);
  expect(paw.stringCountNeedle('  x   ', '     ', true)).toBe(0);
  expect(paw.stringCountNeedle('hallo\ndies\nist\nein\ntest', '\n', true)).toBe(4); //newlines
});

test('sameTypes', () => {
  expect(paw.sameTypes(undefined, undefined)).toBe(true);
  expect(paw.sameTypes(null, null)).toBe(true);
  expect(paw.sameTypes(1, 2)).toBe(true);
  expect(paw.sameTypes(true, false)).toBe(true);
  expect(paw.sameTypes('test', '')).toBe(true);
  expect(paw.sameTypes({}, {})).toBe(true);
  expect(paw.sameTypes([], [])).toBe(true);
  expect(paw.sameTypes(() => { }, () => { })).toBe(true);
});