/**
 * Last modified: 20-07-2023
 * Modifying author: Stephen Lunt
 * File description: The haversine formula is used to calculate the distance between
 * two points (longitude and latitude) on a sphere. It is used in the Guidebook
 * screen to locate the nearest bus stops and attractions to the user location.
 */

import { Coordinate } from "../data/types";

/**
 * The below two references where used to understand and get an JavaScript implementation of
 * haversine (a function that calculates the distance between two points). It was
 * modified to a TypeScript function as below.
 *
 * Source URLs:
 * - http://www.movable-type.co.uk/scripts/latlong.html
 * - https://en.wikipedia.org/wiki/Haversine_formula
 *
 * @param pointA The first longitude and latitude point.
 * @param pointB The second longitude and latitude point.
 * @returns The distance in metres between pointA and pointB.
 */
export function haversine(pointA: Coordinate, pointB: Coordinate): number {  
  const R = 6371e3;

  const radiansA = pointA.getLat() * (Math.PI / 180);
  const radiansB = pointB.getLat() * (Math.PI / 180);

  const changeLat = (pointB.getLat() - pointA.getLat()) * (Math.PI / 180);
  const changeLong = (pointB.getLong() - pointA.getLong()) * (Math.PI / 180);

  const a =
    Math.sin(changeLat / 2) * Math.sin(changeLat / 2) +
    Math.cos(radiansA) * Math.cos(radiansB) * Math.sin(changeLong / 2) * Math.sin(changeLong / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  return distance;
}
