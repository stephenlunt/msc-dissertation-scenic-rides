/**
 * Last modified: 22-07-2023
 * Modifying author: Stephen Lunt
 * File description: The data seed and types for bus routes.
 */

import type { Credit, ImageCredit } from "./types";

export type BusRoute = {
  id: string;
  name: string;
  origin: string;
  destination: string;
  image: ImageCredit;
  description: string;
  frequency: string;
  timetable: Credit;
  credits: Credit[];
};

export const busRoutesData: BusRoute[] = [
  {
    id: "AD122",
    name: "Hexham to Haltwhistle",
    origin: "Hexham",
    destination: "Haltwhistle",
    image: {
      imgSrc: require("../assets/img/ad122_bus.jpg"),
      displayText: "Go North East",
      linkingUrl: "https://www.gonortheast.co.uk/ad122/"
    },
    description:
      "The AD122 is a scenic route through the Northumberland countryside between the towns of Hexham and Haltwhistle.\n\nIt's perfect for discovering some of England's Roman heritage and best walking trails running along the path of Hadrian's Wall.",
    frequency: "Once every 2 hours.",
    timetable: {
      displayText: "Go North East",
      linkingUrl: "https://www.gonortheast.co.uk/services/GNE/AD12"
    },
    credits: [
      {
        displayText: "Go North East - AD122 Hadrian's Wall Country Bus",
        linkingUrl: "https://www.gonortheast.co.uk/ad122/"
      }
    ]
  }
];
