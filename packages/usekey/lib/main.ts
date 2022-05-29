import { useState } from "react";

interface GetKey extends Function {
  /**
   * return a key of specified value. the value can be anything
   */
  (value: any): any;
}

/**
 *
 * @param prefix
 * @returns
 */
const useKey = (prefix = ":") => {
  return useState(() => {
    // we use WeakMap to make sure all object references will be disposed when they are not in use
    const keys = new WeakMap<any, number>();
    let uniqueId = 1;
    return (value: any) => {
      const type = typeof value;
      const isObject = value && (type === "object" || type === "function");

      if (!isObject) {
        // create map key from entity value
        // if entity is Date object, its map key must be UNIX timestamp
        return `${prefix}:${type}:${
          value instanceof Date ? value.getTime() : value
        }`;
      }
      let key = keys.get(value);
      if (!key) {
        key = uniqueId++;
        keys.set(value, key);
      }

      return `${prefix}${key}`;
    };
  })[0] as GetKey;
};

export default useKey;
