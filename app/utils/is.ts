const toString = Object.prototype.toString

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

/**
 * @description:  是否为函数
 */
export function isFunction<T = (...args: never) => unknown>(val: unknown): val is T {
  return is(val, 'Function') || is(val, 'AsyncFunction')
}

/**
 * @description: 是否为对象
 */
export function isObject(val: unknown): val is object {
  return val !== null && is(val, 'Object')
}

/**
 * @description:  是否为时间
 */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}

/**
 * @description:  是否为数值
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

/**
 * @description:  是否为AsyncFunction
 */
export function isAsyncFunction<T = (...args: never) => unknown>(val: unknown): val is () => Promise<T> {
  return is(val, 'AsyncFunction')
}

/**
 * @description:  是否为promise
 */
export function isPromise<T = unknown>(val: unknown): val is Promise<T> {
  return is(val, 'Promise')
}

/**
 * @description:  是否为字符串
 */
export function isString(val: unknown): val is string {
  return is(val, 'String')
}

/**
 * @description:  是否为boolean类型
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

/**
 * @description:  是否为数组
 */
export function isArray(val: unknown): val is Array<unknown> {
  return is(val, 'Array')
}

/**
 * @description: 是否客户端
 */
export function isClient() {
  return typeof window !== 'undefined'
}

/**
 * @description: 是否为浏览器
 */
export function isWindow(val: unknown): val is Window {
  return typeof window !== 'undefined' && is(val, 'Window')
}

export function isHttpUrl(val: unknown) {
  return isString(val) && /^https?:\/\//.test(val)
}
