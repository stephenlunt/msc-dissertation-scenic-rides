/**
 * Last modified: 26-07-2023
 * Modifying author: Stephen Lunt
 * File description: Function to calculate the percentage of a route travelled.
 */

import type { BusStop } from "../data/busStops";
import { Direction } from "../data/types";

// Offset result by 1% purely for UI styling.
const STYLIST_ADJUSTMENT = 1;

/**
 * Calculates a percent of the route travelled. Each stop is treated as an equal percentage
 * (referred to as a basePercent) whereas points in-between stops are an intermediatePercent.
 *
 * @param stops an array of stops on the route.
 * @param lastStop the last stop passed.
 * @param nextStop the next stop to come.
 * @param nearestPoint the nearest point to the user's geolocation.
 * @param direction the direction of travel.
 * @returns a total percentage of the route travelled.
 */
export default function calculateRoutePercentage(
  stops: BusStop[],
  lastStop: BusStop,
  nextStop: BusStop,
  nearestPoint: number,
  direction: Direction
) {
  const totalStops = stops.length;

  // As stops have fixed height in the UI, treat them as equal percentages per stop.
  const basePercent = (lastStop.sequence / totalStops) * 100;

  /**
   * Depending on outbound/inbound travel, work out how many points between each stop have been passed
   * and thus get a percent for the distance between the last stop and next stop.
   */
  let intermediatePercent: number;
  if (direction === Direction.Outbound) {
    intermediatePercent =
      ((nearestPoint - lastStop.nearestPoint) / (nextStop.nearestPoint - lastStop.nearestPoint)) * 100;
  } else {
    intermediatePercent =
      ((lastStop.nearestPoint - nearestPoint) / (lastStop.nearestPoint - nextStop.nearestPoint)) * 100;
  }

  // Adjust the intermediate percentage based on number of stops on the route.
  const adjustedPercent = intermediatePercent / totalStops;

  const totalPercent = basePercent + adjustedPercent + STYLIST_ADJUSTMENT;

  if (direction === Direction.Inbound) {
    return 100 - totalPercent;
  }

  return totalPercent;
}
