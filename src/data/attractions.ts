/**
 * Data seed for attractions.
 */

import { ImageSourcePropType } from "react-native";

import { AttractionCategory } from "../components/AttractionIcon";

export type Route = {
  id: string;
  totalAttractions: number;
  attractions: Attraction[];
};

export type Attraction = {
  id: number;
  name: string;
  icon: AttractionCategory;
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
        icon: AttractionCategory.Church,
        nearestStop: 1,
        coordinates: {
          lat: 54.97146,
          long: -2.1025
        }
      },
      {
        id: 2,
        name: "Chesters Bridge Abutment",
        icon: AttractionCategory.Castle,
        nearestStop: 5,
        coordinates: {
          lat: 55.02506,
          long: -2.13568
        }
      },
      {
        id: 3,
        name: "Brunton Turret",
        icon: AttractionCategory.Castle,
        nearestStop: 5,
        coordinates: {
          lat: 55.023,
          long: -2.12432
        }
      },
      {
        id: 4,
        name: "Planetrees Roman Wall",
        icon: AttractionCategory.Castle,
        nearestStop: 5,
        coordinates: {
          lat: 55.02092,
          long: -2.11239
        }
      },
      {
        id: 5,
        name: "Chesters Roman Fort",
        icon: AttractionCategory.Castle,
        nearestStop: 7,
        coordinates: {
          lat: 55.02519,
          long: -2.13788
        }
      },
      {
        id: 6,
        name: "Temple of Mithras",
        icon: AttractionCategory.Castle,
        nearestStop: 8,
        coordinates: {
          lat: 55.03383,
          long: -2.2225
        }
      },
      {
        id: 7,
        name: "Housesteads Roman Fort",
        icon: AttractionCategory.Castle,
        nearestStop: 9,
        coordinates: {
          lat: 55.01325,
          long: -2.33031
        }
      },
      {
        id: 8,
        name: "The Sill",
        icon: AttractionCategory.Museum,
        nearestStop: 10,
        coordinates: {
          lat: 54.99586,
          long: -2.38815
        }
      },
      {
        id: 9,
        name: "Vindolanda",
        icon: AttractionCategory.Castle,
        nearestStop: 11,
        coordinates: {
          lat: 54.99114,
          long: -2.36056
        }
      },
      {
        id: 10,
        name: "Milecastle 42",
        icon: AttractionCategory.Wall,
        nearestStop: 13,
        coordinates: {
          lat: 54.994,
          long: -2.44581
        }
      },
      {
        id: 11,
        name: "Roman Army Museum",
        icon: AttractionCategory.Museum,
        nearestStop: 18,
        coordinates: {
          lat: 54.98589,
          long: -2.52082
        }
      },
      {
        id: 12,
        name: "Thirlwall Castle",
        icon: AttractionCategory.Castle,
        nearestStop: 18,
        coordinates: {
          lat: 54.98872,
          long: -2.53373
        }
      }
    ]
  }
];
