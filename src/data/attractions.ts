/**
 * Data seed for attractions.
 */

import { ImageSourcePropType } from "react-native";

type Route = {
  id: string;
  totalAttractions: number;
  attractions: Attraction[];
};

export type Attraction = {
  id: number;
  name: string;
  nearestStop: number;
  coordinates: Coordinates;
};

type Coordinates = {
  lat: number;
  long: number;
};

export const attractionData: Route[] = [
  {
    id: "AD122",
    totalAttractions: 0,
    attractions: [
      {
        id: 1,
        name: "Hexham Abbey",
        nearestStop: 1,
        coordinates: {
          lat: 54.97146,
          long: -2.1025
        }
      },
      {
        id: 2,
        name: "Chesters Bridge Abutment",
        nearestStop: 5,
        coordinates: {
          lat: 55.02506,
          long: -2.13568
        }
      },
      {
        id: 3,
        name: "Brunton Turret",
        nearestStop: 5,
        coordinates: {
          lat: 55.023,
          long: -2.12432
        }
      },
      {
        id: 4,
        name: "Planetrees Roman Wall",
        nearestStop: 5,
        coordinates: {
          lat: 55.02092,
          long: -2.11239
        }
      },
      {
        id: 5,
        name: "Chesters Roman Fort",
        nearestStop: 7,
        coordinates: {
          lat: 55.02519,
          long: -2.13788
        }
      },
      {
        id: 6,
        name: "Temple of Mithras",
        nearestStop: 0,
        coordinates: {
          lat: 55.03383,
          long: -2.2225
        }
      }
    ]
  }
];
