import type { BusStop } from "../data/busStops";
import { Direction } from "../data/types";

const STYLIST_ADJUSTMENT = 1;

export default function calculateRoutePercentage(
  stops: BusStop[],
  lastStop: BusStop,
  nextStop: BusStop,
  nearestPoint: number,
  direction: Direction
) {
  const totalStops = stops.length;

  const basePercent = (lastStop.sequence / totalStops) * 100;

  let intermediatePercent: number;
  if (direction === Direction.Outbound) {
    intermediatePercent =
      ((nearestPoint - lastStop.nearestPoint) / (nextStop.nearestPoint - lastStop.nearestPoint)) * 100;
  } else {
    intermediatePercent =
      ((lastStop.nearestPoint - nearestPoint) / (lastStop.nearestPoint - nextStop.nearestPoint)) * 100;
  }

  const adjustedPercent = intermediatePercent / totalStops;

  const totalPercent = basePercent + adjustedPercent + STYLIST_ADJUSTMENT;

  if (direction === Direction.Inbound) {
    return 100 - totalPercent;
  }

  return totalPercent;
}
