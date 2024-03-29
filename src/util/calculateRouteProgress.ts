/**
 * Last modified: 26-07-2023
 * Modifying author: Stephen Lunt
 * File description: Function for calculating the current progress along the route
 * in terms of the nearest point and bus stops.
 */

import { LocationObject } from "expo-location";

import { type BusRoutePoint } from "../data/routePoints";
import { type BusStop } from "../data/busStops";
import { haversine } from "./haversine";
import { Coordinate, Direction } from "../data/types";

/**
 * The ProgressReport object type is returned to the React component.
 */
export type ProgressReport = {
  nearestPoint: number;
  lastStop: BusStop | undefined;
  nextStop: BusStop | undefined;
};

/**
 * Given data about the users location and bus route, will calculate where the user is
 * along the route.
 *
 * @param points the intermediate points along the bus route.
 * @param stops the bus route stops.
 * @param geolocation the users current geolocation.
 * @param direction the direction of travel (outbound or inbound).
 * @returns progress report detail the nearest point, last stop passed, and next stop to come.
 */
export default function calculateRouteProgress(
  points: BusRoutePoint[],
  stops: BusStop[],
  geolocation: LocationObject,
  direction: Direction
): ProgressReport {
  const currentLocation = new Coordinate(geolocation.coords.latitude, geolocation.coords.longitude);

  let nearestPoint = 1;
  let lowestDistanceAway = Number.MAX_SAFE_INTEGER;

  // Loops over each point to find the nearest.
  for (let p of points) {
    let distanceAway = haversine(currentLocation, p.coordinate);

    if (distanceAway < lowestDistanceAway) {
      lowestDistanceAway = distanceAway;
      nearestPoint = p.sequence;
    }
  }

  let lastStop = stops.at(0),
    nextStop = stops.at(1);

  // Loops over each stop to find the last and next in relation to the nearest point and direction.
  for (let i = 0; i < stops.length - 1; i++) {
    if (
      direction === Direction.Outbound &&
      nearestPoint > stops[i].nearestPoint &&
      nearestPoint <= stops[i + 1].nearestPoint
    ) {
      lastStop = stops[i];
      nextStop = stops[i + 1];
    } else if (nearestPoint <= stops[i].nearestPoint && nearestPoint > stops[i + 1].nearestPoint) {
      lastStop = stops[i];
      nextStop = stops[i + 1];
    }
  }

  // Returns data back to component to update UI.
  return {
    nearestPoint: nearestPoint,
    lastStop: lastStop,
    nextStop: nextStop
  };
}
