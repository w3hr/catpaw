
const getPrototypeString = (x: unknown): string => Object.prototype.toString.call(x);
const isNotNullOrUndefinedAndPrototypeString = (x: unknown, y: string): boolean => !isUndefinedOrNull(x) && getPrototypeString(x) === y;

export const isUndefined = (x: unknown): boolean => typeof x === 'undefined';
export const isNull = (x: unknown): boolean => x === null;
export const isUndefinedOrNull = (x: unknown): boolean => isUndefined(x) || isNull(x);

export const isObject = (x: unknown): boolean => !isUndefinedOrNull(x) && !isArray(x) && typeof x === 'object';
export const isBoolean = (x: unknown): boolean => isNotNullOrUndefinedAndPrototypeString(x, "[object Boolean]");
export const isNumber = (x: unknown): boolean => isNotNullOrUndefinedAndPrototypeString(x, "[object Number]");
export const isString = (x: unknown): boolean => isNotNullOrUndefinedAndPrototypeString(x, "[object String]");
export const isArray = (x: unknown): boolean => !isUndefinedOrNull(x) && Array.isArray(x);
export const isFunction = (x: unknown): boolean => isNotNullOrUndefinedAndPrototypeString(x, "[object Function]");

export const isNotEmptyString = (x: string): boolean => isString(x) && x.length > 0;
export const isNotEmptyArray = <T>(x: Array<T>): boolean => isArray(x) && x.length > 0;
export const isRealNumber = (x: number): boolean => isNumber(x) && !Number.isNaN(x);
export const anyUndefinedOrNull = <T>(x: Array<T>): boolean => x.some(el => isUndefinedOrNull(el));

export const isAnyEmpty = (x: any[]): boolean => {
    if (isEmpty(x))
        return true;
    if (isObject(x))
        return objectValuesOrEmpty(x).some(y => isEmpty(y));
    if (isArray(x))
        return x.some(y => isEmpty(y));
    return false;
};

export const isEmpty = (x: any): boolean => {
    if (isUndefinedOrNull(x))
        return true;
    if (isBoolean(x) && (x === true || x === false))
        return false;
    if (isNumber(x))
        return false;
    if (isObject(x) && objectKeysOrEmpty(x).length > 0)
        return false;
    if (isArray(x) && x.length > 0)
        return false;
    if (isString(x) && x.length > 0)
        return false;
    if (isFunction(x))
        return false;
    return true;
};

export const objectKeysOrEmpty = (x: object): string[] => {
    if (isUndefinedOrNull(x))
        return [];
    return Object.keys(x);
};

export const objectValuesOrEmpty = <T extends Object>(x: T): T[] => {
    if (isUndefinedOrNull(x))
        return [];
    return Object.values(x);
};

export const arrayGetElementsByProperty = <T>(arr: T[], prop: keyof T, value: T[keyof T]): T[] => {
    const matchingElements: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
            matchingElements.push(arr[i]);
        }
    }
    return matchingElements;
};

export const arrayRemoveElementsByProperty = <T>(arr: T[], prop: keyof T, value: T[keyof T]): T[] => {
    const removedElements: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i][prop] === value) {
            removedElements.push(arr.splice(i, 1)[0]);
        }
    }
    return removedElements;
};

export const stringCountNeedle = (subject: string, needle: string, ignoreCase = false): number => {
    if (!isNotEmptyString(subject) || !isNotEmptyString(needle) || needle.length > subject.length) {
        return 0;
    }
    if (ignoreCase) {
        subject = subject.toLowerCase();
        needle = needle.toLowerCase();
    }
    return subject.split(needle).length - 1;
};

export const sameTypes = (x: unknown, x2: unknown): boolean => getPrototypeString(x) === getPrototypeString(x2);
export const sleepMs = (ms: number): Promise<unknown> => new Promise(resolve => setTimeout(resolve, ms));
export const sleepS = (ms: number): Promise<unknown> => sleepMs(ms * 1000);