/**
 * Last modified: 01-08-2023
 * Modifying author: Stephen Lunt
 * File description: Tests for route points data file.
 * Testing documentation: https://jestjs.io/docs/expect
 */

import { test, expect } from "@jest/globals";

import { routePoints } from "../routePoints";
import { busRoutesData } from "../busRoutes";

test("Test route points have a associated route id", () => {
  const busRouteIds: string[] = [];
  busRoutesData.map((r) => busRouteIds.push(r.id));

  for (let route of routePoints) {
    expect(busRouteIds).toContain(route.id);
  }
});

test("Test for correct number of unique sequence numbers", () => {
  const sequences: number[] = [];
  routePoints.forEach((route) => {
    route.points.map((p) => sequences.push(p.sequence));
  });
  const sequenceSet = new Set(sequences);

  expect(sequenceSet.size).toEqual(Math.max(...sequences));
});
