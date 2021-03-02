"use strict";

/**
 * Returns if string is 'monkey' or not
 * @param val
 */
export default function isMonkey(val: string): boolean {
  return val === "monkey";
}

/**
 * Asserts that a value equals 'monkey'
 * @param val
 */
export function assertMonkey(val: string): asserts val is "monkey" {
  if (!isMonkey(val)) {
    throw new Error(`Value must be 'monkey' – Got ${val}`);
  }
}
