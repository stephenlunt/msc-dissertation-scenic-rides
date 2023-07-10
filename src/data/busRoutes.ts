/**
 * Data seed for routes.
 */

import { ImageSourcePropType } from "react-native";

export type BusRoute = {
  id: string;
  name: string;
  origin: string;
  destination: string;
  imgSrc: ImageSourcePropType;
  description: string;
  frequency: string;
};

export const busRoutes: BusRoute[] = [
  {
    id: "AD122",
    name: "Hexham to Haltwhistle",
    origin: "Hexham",
    destination: "Haltwhistle",
    imgSrc: require("../assets/img/ad122_bus.jpg"),
    description:
      "The AD122 is a scenic route running through the Northumberland countryside between the towns of Hexham and Haltwhistle.",
    frequency: ""
  }
];
