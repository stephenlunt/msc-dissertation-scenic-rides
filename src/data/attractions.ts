/**
 * Data seed for attractions.
 */

import { ImageSourcePropType } from "react-native";

type Coordinates = {
  lat: number;
  long: number;
};

export type Attraction = {
  routeId: string;
  name: string;
  coordinates: Coordinates;
  cutoffRoutePoint: number;
  routePosition: number;
  nearestStop: number;
};

export const routes: Attraction[] = [
  {
    routeId: "AD122",
    name: "Attraction 1",
    coordinates: {
      lat: 1,
      long: 1
    },
    cutoffRoutePoint: 1, // Don't show once this point is passed.
    routePosition: 1,
    nearestStop: 1
  }
];
