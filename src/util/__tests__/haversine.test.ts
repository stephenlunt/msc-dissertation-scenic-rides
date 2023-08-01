/**
 * Last modified: 01-08-2023
 * Modifying author: Stephen Lunt
 * File description: Tests for the haversine.ts implementation
 */

import { test, expect } from "@jest/globals";

import { haversine } from "../haversine";
import { Coordinate } from "../../data/types";

// Test coordinate points
const pointA = new Coordinate(54.9808153, -1.6005173);
const pointB = new Coordinate(54.9731132, -1.6252289);
const pointC = new Coordinate(54.9663464, -2.1446354);

/**
 * https://www.omnicalculator.com/other/latitude-longitude-distance was used as a 
 * reputable online calculator to provide test answers.
 * 
 * To simplify test cases with floating points, the return value is rounded to the 
 * nearest integer.
 */
test("Test the distance between pointA and pointB is correct", () => {
  expect(Math.round(haversine(pointA, pointB))).toEqual(1795);
});

test("Test the distance between pointA and pointC is correct", () => {
  expect(Math.round(haversine(pointA, pointC))).toEqual(34763)
})

test("Test the distance between pointB and pointC is correct", () => {
  expect(Math.round(haversine(pointB, pointC))).toEqual(33161)
})
