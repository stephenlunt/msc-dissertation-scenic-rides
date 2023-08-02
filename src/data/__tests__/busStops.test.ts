/**
 * Last modified: 01-08-2023
 * Modifying author: Stephen Lunt
 * File description: Tests for bus stops data file.
 * Testing documentation: https://jestjs.io/docs/expect
 */

import { test, expect } from "@jest/globals";

import { stopsData } from "../busStops";
import { busRoutesData } from "../busRoutes";

test("Test totalStops matches stop list length for all stops", () => {
  for (let route of stopsData) {
    expect(route.totalStops).toEqual(route.stops.length);
  }
});

test("Test bus routes have a associated route id", () => {
  const busRouteIds: string[] = [];
  busRoutesData.map((r) => busRouteIds.push(r.id));

  for (let route of stopsData) {
    expect(busRouteIds).toContain(route.id);
  }
});