/**
 *
 */

import { ImageSourcePropType } from "react-native";

type route = {
  id: string;
  name: string;
  imgSrc: ImageSourcePropType;
};

export const routes: route[] = [
  {
    id: "AD112",
    name: "Hexham to Haltwhistle",
    imgSrc: require("../assets/img/ad112_bus.jpg")
  }
];
