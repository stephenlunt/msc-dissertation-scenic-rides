/**
 * Data seed for attractions.
 */

import type { Coordinate, Credit, ImageCredit } from "./types";
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
  coordinates: Coordinate;
  image: ImageCredit;
  description: string;
  credits: Credit[];
};

export const attractionData: Route[] = [
  {
    id: "AD122",
    totalAttractions: 12,
    attractions: [
      {
        id: 0,
        name: "Hexham Abbey",
        icon: AttractionCategory.Church,
        nearestStop: 0,
        coordinates: {
          lat: 54.97146,
          long: -2.1025
        },
        image: {
          imgSrc: require("../assets/img/hexham_abbey.jpg"),
          displayText: "Hexham Abbey",
          linkingUrl: "https://www.hexhamabbey.org.uk/"
        },
        description: "Test",
        credits: [
          {
            displayText: "Hexham Abbey",
            linkingUrl: "https://www.hexhamabbey.org.uk/about-us"
          }
        ]
      },
      {
        id: 1,
        name: "Chesters Bridge",
        icon: AttractionCategory.Castle,
        nearestStop: 4,
        coordinates: {
          lat: 55.02506,
          long: -2.13568
        },
        image: {
          imgSrc: require("../assets/img/chesters_bridge.jpg"),
          displayText: "English Heritage",
          linkingUrl:
            "https://www.english-heritage.org.uk/visit/places/chesters-bridge-abutment-hadrians-wall/"
        },
        description: "",
        credits: [
          {
            displayText: "",
            linkingUrl: ""
          }
        ]
      },
      {
        id: 2,
        name: "Brunton Turret",
        icon: AttractionCategory.Castle,
        nearestStop: 4,
        coordinates: {
          lat: 55.023,
          long: -2.12432
        },
        image: {
          imgSrc: require("../assets/img/brunton_turret.jpg"),
          displayText: "English Heritage",
          linkingUrl:
            "https://www.english-heritage.org.uk/visit/places/brunton-turret-hadrians-wall/"
        },
        description: "",
        credits: [
          {
            displayText: "",
            linkingUrl: ""
          }
        ]
      },
      {
        id: 3,
        name: "Planetrees Roman Wall",
        icon: AttractionCategory.Castle,
        nearestStop: 4,
        coordinates: {
          lat: 55.02092,
          long: -2.11239
        },
        image: {
          imgSrc: require("../assets/img/planetrees.jpg"),
          displayText: "English Heritage",
          linkingUrl:
            "https://www.english-heritage.org.uk/visit/places/planetrees-roman-wall-hadrians-wall/"
        },
        description: "",
        credits: [
          {
            displayText: "",
            linkingUrl: ""
          }
        ]
      },
      {
        id: 4,
        name: "Chesters Roman Fort",
        icon: AttractionCategory.Castle,
        nearestStop: 6,
        coordinates: {
          lat: 55.02519,
          long: -2.13788
        },
        image: {
          imgSrc: require("../assets/img/chesters_fort.jpg"),
          displayText: "English Heritage",
          linkingUrl:
            "https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/"
        },
        description: "",
        credits: [
          {
            displayText: "",
            linkingUrl: ""
          }
        ]
      },
      {
        id: 5,
        name: "Temple of Mithras",
        icon: AttractionCategory.Castle,
        nearestStop: 7,
        coordinates: {
          lat: 55.03383,
          long: -2.2225
        },
        image: {
          imgSrc: require("../assets/img/temple_of_mithras.jpg"),
          displayText: "English Heritage",
          linkingUrl:
            "https://www.english-heritage.org.uk/visit/places/temple-of-mithras-carrawburgh-hadrians-wall/"
        },
        description: "",
        credits: [
          {
            displayText: "",
            linkingUrl: ""
          }
        ]
      },
      {
        id: 6,
        name: "Housesteads Roman Fort",
        icon: AttractionCategory.Castle,
        nearestStop: 8,
        coordinates: {
          lat: 55.01325,
          long: -2.33031
        },
        image: {
          imgSrc: require("../assets/img/housesteads_fort.jpg"),
          displayText: "English Heritage",
          linkingUrl:
            "https://www.english-heritage.org.uk/visit/places/housesteads-roman-fort-hadrians-wall/"
        },
        description: "",
        credits: [
          {
            displayText: "",
            linkingUrl: ""
          }
        ]
      },
      {
        id: 7,
        name: "The Sill",
        icon: AttractionCategory.Museum,
        nearestStop: 9,
        coordinates: {
          lat: 54.99586,
          long: -2.38815
        },
        image: {
          imgSrc: require("../assets/img/the_sill.jpg"),
          displayText: "The Sill",
          linkingUrl: "https://www.thesill.org.uk/"
        },
        description: "",
        credits: [
          {
            displayText: "",
            linkingUrl: ""
          }
        ]
      },
      {
        id: 8,
        name: "Vindolanda",
        icon: AttractionCategory.Castle,
        nearestStop: 10,
        coordinates: {
          lat: 54.99114,
          long: -2.36056
        },
        image: {
          imgSrc: require("../assets/img/vindolanda.jpg"),
          displayText: "Vindolanda Charitable Trust",
          linkingUrl: "https://www.vindolanda.com/roman-vindolanda-fort-museum"
        },
        description: "",
        credits: [
          {
            displayText: "",
            linkingUrl: ""
          }
        ]
      },
      {
        id: 9,
        name: "Milecastle 42",
        icon: AttractionCategory.Wall,
        nearestStop: 12,
        coordinates: {
          lat: 54.994,
          long: -2.44581
        },
        image: {
          imgSrc: require("../assets/img/milecastle_42.jpg"),
          displayText: "Roman Britain",
          linkingUrl: "https://www.roman-britain.co.uk/places/cawfields/"
        },
        description: "",
        credits: [
          {
            displayText: "",
            linkingUrl: ""
          }
        ]
      },
      {
        id: 10,
        name: "Roman Army Museum",
        icon: AttractionCategory.Museum,
        nearestStop: 17,
        coordinates: {
          lat: 54.98589,
          long: -2.52082
        },
        image: {
          imgSrc: require("../assets/img/roman_army_museum.webp"),
          displayText: "Vindolanda Charitable Trust",
          linkingUrl: "https://www.vindolanda.com/roman-army-museum"
        },
        description: "",
        credits: [
          {
            displayText: "",
            linkingUrl: ""
          }
        ]
      },
      {
        id: 11,
        name: "Thirlwall Castle",
        icon: AttractionCategory.Castle,
        nearestStop: 17,
        coordinates: {
          lat: 54.98872,
          long: -2.53373
        },
        image: {
          imgSrc: require("../assets/img/thirlwall_castle.webp"),
          displayText: "Northumberland National Park",
          linkingUrl:
            "https://www.northumberlandnationalpark.org.uk/places-to-visit/hadrians-wall/thirlwall-castle/"
        },
        description: "",
        credits: [
          {
            displayText: "",
            linkingUrl: ""
          }
        ]
      }
    ]
  }
];
