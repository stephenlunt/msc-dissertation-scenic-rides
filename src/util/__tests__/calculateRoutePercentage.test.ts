/**
 * Last modified: 03-08-2023
 * Modifying author: Stephen Lunt
 * File description: Tests for the calculateRoutePercentage implementation
 * Testing documentation: https://jestjs.io/docs/expect
 */

import { test, expect } from "@jest/globals";

import calculateRoutePercentage from "../calculateRoutePercentage";
import { type BusRoutePoint, routePoints } from "../../data/routePoints";
import { type BusStop, stopsData } from "../../data/busStops";
import { Direction } from "../../data/types";

// AD122 route data points
const ad122Points: BusRoutePoint[] = routePoints.filter((r) => r.id === "AD122")[0].points;
const ad122Stops: BusStop[] = stopsData.filter((r) => r.id === "AD122")[0].stops;
const inboundStops: BusStop[] = [...ad122Stops].sort((stopA, stopB) => stopB.sequence - stopA.sequence);

/**
 * Type alias for test cases.
 *
 * Calculation for expectedResult (outbound):
 * expectedResult = ((lastStop.sequence / totalStop) * 100) +
 *                  ((((nearestPoint - lastStop.nearestPoint) / (nextStop.nearestPoint - lastStop.nearestPoint)) * 100) / 18) +
 *                  1
 */
type TestCase = {
  nearestPoint: number;
  lastStop: BusStop;
  nextStop: BusStop;
  expectedResult: number | string;
};

test("Test nearest point of 1 returns the correct percentage", () => {
  const case1: TestCase = {
    nearestPoint: 1,
    lastStop: ad122Stops.filter((s) => s.sequence === 0)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 1)[0],
    expectedResult: 1
  };

  expect(
    calculateRoutePercentage(ad122Stops, case1.lastStop, case1.nextStop, case1.nearestPoint, Direction.Outbound)
  ).toEqual(case1.expectedResult);
});

test("Test nearest point of 37 returns the correct percentage", () => {
  const case2: TestCase = {
    nearestPoint: 37,
    lastStop: ad122Stops.filter((s) => s.sequence === 2)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 3)[0],
    expectedResult: "14.33"
  };

  expect(
    calculateRoutePercentage(
      ad122Stops,
      case2.lastStop,
      case2.nextStop,
      case2.nearestPoint,
      Direction.Outbound
    ).toFixed(2)
  ).toEqual(case2.expectedResult);
});

test("Test nearest point of 267 returns the correct percentage", () => {
  const case3: TestCase = {
    nearestPoint: 267,
    lastStop: ad122Stops.filter((s) => s.sequence === 9)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 10)[0],
    expectedResult: "55.07"
  };

  expect(
    calculateRoutePercentage(
      ad122Stops,
      case3.lastStop,
      case3.nextStop,
      case3.nearestPoint,
      Direction.Outbound
    ).toFixed(2)
  ).toEqual(case3.expectedResult);
});

test("Test nearest point of 395 returns the correct percentage", () => {
  const case4: TestCase = {
    nearestPoint: 395,
    lastStop: ad122Stops.filter((s) => s.sequence === 14)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 15)[0],
    expectedResult: "82.48"
  };

  expect(
    calculateRoutePercentage(
      ad122Stops,
      case4.lastStop,
      case4.nextStop,
      case4.nearestPoint,
      Direction.Outbound
    ).toFixed(2)
  ).toEqual(case4.expectedResult);
});

test("Test nearest point of 442 returns the correct percentage", () => {
  const case5: TestCase = {
    nearestPoint: 442,
    lastStop: ad122Stops.filter((s) => s.sequence === 16)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 17)[0],
    expectedResult: "95.44"
  };

  expect(
    calculateRoutePercentage(
      ad122Stops,
      case5.lastStop,
      case5.nextStop,
      case5.nearestPoint,
      Direction.Outbound
    ).toFixed(2)
  ).toEqual(case5.expectedResult);
});

test("Test nearest point of 267 returns the correct percentage (inbound)", () => {
  const case6: TestCase = {
    nearestPoint: 267,
    lastStop: ad122Stops.filter((s) => s.sequence === 10)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 9)[0],
    expectedResult: "41.96"
  };

  expect(
    calculateRoutePercentage(
      inboundStops,
      case6.lastStop,
      case6.nextStop,
      case6.nearestPoint,
      Direction.Inbound
    ).toFixed(2)
  ).toEqual(case6.expectedResult);
});

test("Test nearest point of 37 returns the correct percentage (inbound)", () => {
  const case7: TestCase = {
    nearestPoint: 37,
    lastStop: ad122Stops.filter((s) => s.sequence === 3)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 2)[0],
    expectedResult: "79.00"
  };

  expect(
    calculateRoutePercentage(
      inboundStops,
      case7.lastStop,
      case7.nextStop,
      case7.nearestPoint,
      Direction.Inbound
    ).toFixed(2)
  ).toEqual(case7.expectedResult);
});
