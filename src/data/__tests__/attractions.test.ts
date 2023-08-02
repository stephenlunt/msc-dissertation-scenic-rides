/**
 * Last modified: 01-08-2023
 * Modifying author: Stephen Lunt
 * File description: Tests for attraction data file.
 * Testing documentation: https://jestjs.io/docs/expect
 */

import { test, expect } from "@jest/globals";

import { attractionData } from "../attractions";
import { busRoutesData } from "../busRoutes";

test("Test totalStops matches stop list length for all stops", () => {
  for (let route of attractionData) {
    expect(route.totalAttractions).toEqual(route.attractions.length);
  }
});

test("Test attractions have a associated route id", () => {
  const busRouteIds: string[] = [];
  busRoutesData.map((r) => busRouteIds.push(r.id));

  for (let route of attractionData) {
    expect(busRouteIds).toContain(route.id);
  }
});
