/**
 * Last modified: 03-08-2023
 * Modifying author: Stephen Lunt
 * File description: Tests for the calculateRouteProgress implementation
 * Testing documentation: https://jestjs.io/docs/expect
 */

import { test, expect } from "@jest/globals";
import { LocationObject } from "expo-location";

import calculateRouteProgress from "../calculateRouteProgress";
import type { ProgressReport } from "../calculateRouteProgress";
import { type BusRoutePoint, routePoints } from "../../data/routePoints";
import { type BusStop, stopsData } from "../../data/busStops";
import { Direction } from "../../data/types";

/**
 * Test coordinate points selected from route, variable names
 * match the sequence numbers.
 *
 * ts-ignore to suppress warning of missing coords fields.
 */
const point1: LocationObject = {
  // @ts-ignore
  coords: { latitude: 54.97027, longitude: -2.09575 }
};

const point37: LocationObject = {
  // @ts-ignore
  coords: { latitude: 54.99898, longitude: -2.12213 }
};

const point267: LocationObject = {
  // @ts-ignore
  coords: { latitude: 54.99068, longitude: -2.37649 }
};

const point395: LocationObject = {
  // @ts-ignore
  coords: { latitude: 54.96944, longitude: -2.46247 }
};

const point442: LocationObject = {
  // @ts-ignore
  coords: { latitude: 54.98714, longitude: -2.51983 }
};

// AD122 route data points
const ad122Points: BusRoutePoint[] = routePoints.filter((r) => r.id === "AD122")[0].points;
const ad122Stops: BusStop[] = stopsData.filter((r) => r.id === "AD122")[0].stops;
const inboundStops: BusStop[] = [...ad122Stops].sort((stopA, stopB) => stopB.sequence - stopA.sequence);

test("Test point 1 returns the correct progress report (edge case: first point)", () => {
  const pr1: ProgressReport = {
    nearestPoint: 1,
    lastStop: ad122Stops.filter((s) => s.sequence === 0)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 1)[0]
  };

  expect(calculateRouteProgress(ad122Points, ad122Stops, point1, Direction.Outbound)).toMatchObject(pr1);
});

test("Test point 37 returns the correct progress report", () => {
  const pr2: ProgressReport = {
    nearestPoint: 37,
    lastStop: ad122Stops.filter((s) => s.sequence === 2)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 3)[0]
  };

  expect(calculateRouteProgress(ad122Points, ad122Stops, point37, Direction.Outbound)).toMatchObject(pr2);
});

test("Test point 267 returns the correct progress report", () => {
  const pr3: ProgressReport = {
    nearestPoint: 267,
    lastStop: ad122Stops.filter((s) => s.sequence === 9)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 10)[0]
  };

  expect(calculateRouteProgress(ad122Points, ad122Stops, point267, Direction.Outbound)).toMatchObject(pr3);
});

test("Test point 395 returns the correct progress report", () => {
  const pr4: ProgressReport = {
    nearestPoint: 395,
    lastStop: ad122Stops.filter((s) => s.sequence === 14)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 15)[0]
  };

  expect(calculateRouteProgress(ad122Points, ad122Stops, point395, Direction.Outbound)).toMatchObject(pr4);
});

test("Test point 442 returns the correct progress report (edge case: last point)", () => {
  const pr5: ProgressReport = {
    nearestPoint: 442,
    lastStop: ad122Stops.filter((s) => s.sequence === 16)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 17)[0]
  };

  expect(calculateRouteProgress(ad122Points, ad122Stops, point442, Direction.Outbound)).toMatchObject(pr5);
});

test("Test point 267 has correct report for inbound travel", () => {
  const pr6: ProgressReport = {
    nearestPoint: 267,
    lastStop: ad122Stops.filter((s) => s.sequence === 10)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 9)[0]
  };

  expect(calculateRouteProgress(ad122Points, inboundStops, point267, Direction.Inbound)).toMatchObject(pr6);
});

test("Test point 37 has correct report for inbound travel", () => {
  const pr7: ProgressReport = {
    nearestPoint: 37,
    lastStop: ad122Stops.filter((s) => s.sequence === 3)[0],
    nextStop: ad122Stops.filter((s) => s.sequence === 2)[0]
  };

  expect(calculateRouteProgress(ad122Points, inboundStops, point37, Direction.Inbound)).toMatchObject(pr7);
});
