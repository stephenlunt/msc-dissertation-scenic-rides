import { LocationObject } from "expo-location";
import { RoutePoint } from "../data/routePoints";
import { BusStop } from "../data/busStops";
import { haversine } from "./haversine";
import { Direction } from "../data/types";

type ProgressReport = {
  nearestPoint: number;
  lastStop: BusStop | undefined;
  nextStop: BusStop | undefined;
};

export default function calculateRouteProgress(
  points: RoutePoint[],
  stops: BusStop[],
  geolocation: LocationObject,
  direction: Direction
): ProgressReport {
  const currentLocation = {
    lat: geolocation.coords.latitude,
    long: geolocation.coords.longitude
  };

  let nearestPoint = 1;
  let lowestDistanceAway = Number.MAX_SAFE_INTEGER;

  for (let p of points) {
    let distanceAway = haversine(currentLocation, { lat: p.lat, long: p.long });

    if (distanceAway < lowestDistanceAway) {
      lowestDistanceAway = distanceAway;
      nearestPoint = p.sequence;
    }
  }

  let lastStop = stops.at(0),
    nextStop = stops.at(1);

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

  return {
    nearestPoint: nearestPoint,
    lastStop: lastStop,
    nextStop: nextStop
  };
}
