/*
 * @Author: your name
 * @Date: 2021-03-26 15:43:25
 * @LastEditTime: 2021-03-26 15:51:56
 * @LastEditors: Please set LastEditors
 * @Description: 类型检测
 * @FilePath: /whale-ui/src/utils/types.js
 */

function _typeof(obj) {
  "@babel/helpers - typeof";
  let _typeof;
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }

  return _typeof(obj);
}

export function isFunction(value) {
  return typeof value === "function";
}

export function isString(value) {
  return typeof value === "string";
}

export function isNaN(value) {
  return Number.isNaN(value);
}

export function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

export function isUndefined(value) {
  return typeof value === "undefined";
}

export function isDefined(value) {
  return value !== undefined && value !== null;
}

export function isArray(value) {
  return Array.isArray(value);
}

export function isObject(value) {
  return _typeof(value) === "object" && value !== null;
}

export function isPlainObject(value) {
  return (
    _typeof(value) === "object" &&
    value !== null &&
    !isArray(value) &&
    !isFunction(value)
  );
}
