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
    description: "Hello, World!",
    frequency: ""
  }
];
