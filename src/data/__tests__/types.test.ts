/**
 * Last modified: 01-08-2023
 * Modifying author: Stephen Lunt
 * File description: Tests for the types in types.ts
 * Testing documentation: https://jestjs.io/docs/expect
 */

import { test, expect } from "@jest/globals";

import { Coordinate } from "../types";

/**
 * Coordinate class tests
 */
test("Test coordinates with correct values", () => {
  expect(new Coordinate(54, -1)).toBeInstanceOf(Coordinate);
});

test("Test upper latitude and longitude values", () => {
  expect(new Coordinate(-90, 180)).toBeInstanceOf(Coordinate);
});

test("Test coordinate with too high latitude", () => {
  expect(() => new Coordinate(91, 0)).toThrow("Invalid latitude value.");
});

test("Test coordinate with too low latitude", () => {
  expect(() => new Coordinate(-91, 0)).toThrow("Invalid latitude value.");
});

test("Test coordinate with too high longitude", () => {
  expect(() => new Coordinate(0, 181)).toThrow("Invalid longitude value.");
});

test("Test coordinate with too low longitude", () => {
  expect(() => new Coordinate(0, -181)).toThrow("Invalid longitude value.");
});

test("Test getter methods of Coordinate class", () => {
  const coordinate = new Coordinate(54, -1);
  expect(coordinate.getLat()).toEqual(54);
  expect(coordinate.getLong()).toEqual(-1);
});
