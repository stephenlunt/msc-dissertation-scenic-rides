/**
 * Last modified: 25-07-2023
 * Modifying author: Stephen Lunt
 * File description: The data seed and types for attractions along routes.
 */

import type { Credit, ImageCredit } from "./types";
import { AttractionCategory } from "../components/AttractionIcon";

export type BusRoute = {
  id: string;
  totalAttractions: number;
  attractions: Attraction[];
};

export type Attraction = {
  id: number;
  name: string;
  icon: AttractionCategory;
  nearestStop: number;
  coordinates: {
    lat: number;
    long: number;
  };
  image: ImageCredit;
  map: ImageCredit;
  description: string;
  freeEntry: boolean;
  openingTimes: OpeningTimes;
  contactDetails: ContactDetails;
  credits: Credit[];
};

type OpeningTimes = {
  weekday?: string;
  weekend?: string;
  other?: string;
};

type ContactDetails = {
  phone?: string;
  email?: string;
  address?: {
    street: string;
    town: string;
    postcode: string;
  };
};

export const attractionData: BusRoute[] = [
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
          imgSrc: require("../assets/img/hexham_abbey.webp"),
          displayText: "Hexham Abbey",
          linkingUrl: "https://www.hexhamabbey.org.uk/"
        },
        map: {
          imgSrc: require("../assets/maps/hexham_abbey.webp"),
          displayText: "Google Maps"
        },
        description:
          "Hexham Abbey is a thriving church with regular services, several choirs, a great musical tradition and many parish groups that meet regularly and encourage each other on an adventure of faith.\n\nSet in the centre of the historic market town of Hexham, we welcome pilgrims and visitors who are planning to spend time in this place where faith has been celebrated for more than 1,340 years. Whether a local or a visitor, you will feel inspired by the sense of heritage, worship and community unique to this beautiful place.",
        freeEntry: true,
        openingTimes: {
          weekday: "10AM - 5PM",
          weekend: "11AM - 5PM"
        },
        contactDetails: {
          phone: "01434 602031",
          email: "admin@hexhamabbey.org.uk",
          address: {
            street: "The Parish Centre, Hexham Abbey",
            town: "Hexham",
            postcode: "NE46 3NB"
          }
        },
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
        icon: AttractionCategory.Wall,
        nearestStop: 4,
        coordinates: {
          lat: 55.02506,
          long: -2.13568
        },
        image: {
          imgSrc: require("../assets/img/chesters_bridge.webp"),
          displayText: "English Heritage",
          linkingUrl: "https://www.english-heritage.org.uk/visit/places/chesters-bridge-abutment-hadrians-wall/"
        },
        map: {
          imgSrc: require("../assets/maps/chesters_bridge_brunton_turret.webp"),
          displayText: "Google Maps"
        },
        description:
          "Close to Chesters Roman Fort is the remains of a Roman bridge across the North Tyne.\n\nOn the eastern river bank, you can see evidence of two successive bridges:  an early one that just carried Hadrian's Wall, and a second, much larger one, that carried the Military Way - the road that serviced the Wall.",
        freeEntry: true,
        openingTimes: {
          other: "Open any reasonable time during daylight hours"
        },
        contactDetails: {
          phone: "0370 333 1181",
          address: {
            street: "Chollerford",
            town: "Hexham",
            postcode: "NE46 4EN"
          }
        },
        credits: [
          {
            displayText: "English Heritage",
            linkingUrl: "https://www.english-heritage.org.uk/visit/places/chesters-bridge-abutment-hadrians-wall/"
          }
        ]
      },
      {
        id: 2,
        name: "Brunton Turret",
        icon: AttractionCategory.Wall,
        nearestStop: 4,
        coordinates: {
          lat: 55.023,
          long: -2.12432
        },
        image: {
          imgSrc: require("../assets/img/brunton_turret.webp"),
          displayText: "English Heritage",
          linkingUrl: "https://www.english-heritage.org.uk/visit/places/brunton-turret-hadrians-wall/"
        },
        map: {
          imgSrc: require("../assets/maps/chesters_bridge_brunton_turret.webp"),
          displayText: "Google Maps"
        },
        description:
          "A surviving piece of wall section featuring a turret two and a half metres high, built by men of the Twentieth Legion.",
        freeEntry: true,
        openingTimes: {
          other: "Open any reasonable time during daylight hours"
        },
        contactDetails: {
          phone: "0370 333 1181",
          address: {
            street: "Chollerford",
            town: "Hexham",
            postcode: "NE46 4EJ"
          }
        },
        credits: [
          {
            displayText: "English Heritage",
            linkingUrl: "https://www.english-heritage.org.uk/visit/places/brunton-turret-hadrians-wall/"
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
          imgSrc: require("../assets/img/planetrees.webp"),
          displayText: "English Heritage",
          linkingUrl: "https://www.english-heritage.org.uk/visit/places/planetrees-roman-wall-hadrians-wall/"
        },
        map: {
          imgSrc: require("../assets/maps/planetrees.webp"),
          displayText: "Google Maps"
        },
        description:
          "Not far east of Chesters Roman Fort is a 15-metre-long stretch of Hadrian's Wall at Planetrees.\n\nThis length of the wall is important for what it reveals about a change of plan that took place during the construction of the wall when its width was narrowed from 10 to 8 Roman feet.",
        freeEntry: true,
        openingTimes: {
          other: "Open any reasonable time during daylight hours"
        },
        contactDetails: {
          phone: "0370 333 1181",
          address: {
            street: "Chollerford",
            town: "Hexham",
            postcode: "NE46 4EQ"
          }
        },
        credits: [
          {
            displayText: "English Heritage",
            linkingUrl: "https://www.english-heritage.org.uk/visit/places/planetrees-roman-wall-hadrians-wall/"
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
          imgSrc: require("../assets/img/chesters_fort.webp"),
          displayText: "English Heritage",
          linkingUrl: "https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/"
        },
        map: {
          imgSrc: require("../assets/maps/chesters_roman_fort.webp"),
          displayText: "Google Maps"
        },
        description:
          "Come and see what life was like at one of the Roman Empire's most northern outposts.\n\nChesters Roman Fort is the most complete Roman cavalry fort in Britain - wander around the unusually well-preserved baths and steam room, and the officers' quarters.",
        freeEntry: false,
        openingTimes: {
          weekday: "10AM - 5PM",
          weekend: "10AM - 5PM"
        },
        contactDetails: {
          phone: "01434 681379",
          address: {
            street: "Chollerford",
            town: "Hexham",
            postcode: "NE46 4EU"
          }
        },
        credits: [
          {
            displayText: "English Heritage",
            linkingUrl: "https://www.english-heritage.org.uk/visit/places/chesters-roman-fort-and-museum-hadrians-wall/"
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
          imgSrc: require("../assets/img/temple_of_mithras.webp"),
          displayText: "English Heritage",
          linkingUrl: "https://www.english-heritage.org.uk/visit/places/temple-of-mithras-carrawburgh-hadrians-wall/"
        },
        map: {
          imgSrc: require("../assets/maps/temple_mithras.webp"),
          displayText: "Google Maps"
        },
        description:
          "Built by the soldiers of Carrawburgh, this structure stands as a fascinating temple to the god Mithras.\n\nMithraism was a Roman religion inspired by a god originally worshipped in the Eastern Empire. According to legend, Mithras captured and killed a sacred bull in a cave, which Mithraic temples were intended to evoke.\n\nThe temple was built by soldiers at the fort around AD 200 and destroyed about AD 350. Three altars found here (replicas stand in the temple) were dedicated by commanding officers of the unit stationed here, the First Cohort of Batavians from the Rhineland.",
        freeEntry: true,
        openingTimes: {
          other: "Open any reasonable time during daylight hours"
        },
        contactDetails: {
          phone: "0370 333 1181",
          address: {
            street: "Humshaugh",
            town: "Hexham",
            postcode: "NE46 4DB"
          }
        },
        credits: [
          {
            displayText: "English Heritage",
            linkingUrl: "https://www.english-heritage.org.uk/visit/places/temple-of-mithras-carrawburgh-hadrians-wall/"
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
          imgSrc: require("../assets/img/housesteads_fort.webp"),
          displayText: "English Heritage",
          linkingUrl: "https://www.english-heritage.org.uk/visit/places/housesteads-roman-fort-hadrians-wall/"
        },
        map: {
          imgSrc: require("../assets/maps/housesteads.webp"),
          displayText: "Google Maps"
        },
        description:
          "Set high on a dramatic escarpment on Hadrian's Wall World Heritage Site, Housesteads Roman Fort takes you back to the Roman Empire.\n\nWander the barrack blocks and the hospital. Peer into the oldest toilets you'll ever see, and admire the stunning panoramic views from this ancient fortress.",
        freeEntry: false,
        openingTimes: {
          weekday: "10AM - 5PM",
          weekend: "10AM - 5PM"
        },
        contactDetails: {
          phone: "01434 344363",
          address: {
            street: "Haydon Bridge",
            town: "Hexham",
            postcode: "NE47 6NN"
          }
        },
        credits: [
          {
            displayText: "English Heritage",
            linkingUrl: "https://www.english-heritage.org.uk/visit/places/housesteads-roman-fort-hadrians-wall/"
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
          imgSrc: require("../assets/img/the_sill.webp"),
          displayText: "The Sill",
          linkingUrl: "https://www.thesill.org.uk/"
        },
        map: {
          imgSrc: require("../assets/maps/the_sill.webp"),
          displayText: "Google Maps"
        },
        description:
          "The Sill is the perfect place to start exploring Northumberland National Park and a fantastic location to connect with nature and the National Park’s unique and special landscapes.\n\nLocated just a stone’s throw from Hadrian’s Wall, The Sill is free to enter and features exhibitions, a rooftop walk, a cafe and a shop.",
        freeEntry: true,
        openingTimes: {
          weekday: "10AM - 5PM",
          weekend: "10AM - 5PM"
        },
        contactDetails: {
          phone: "01434 341200",
          email: "svwt@nnpa.org.uk",
          address: {
            street: "National Landscape Discovery Centre, Bardon Mill",
            town: "Hexham",
            postcode: "NE47 7AN"
          }
        },
        credits: [
          {
            displayText: "The Sill",
            linkingUrl: "https://www.thesill.org.uk/"
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
          imgSrc: require("../assets/img/vindolanda.webp"),
          displayText: "Vindolanda Charitable Trust",
          linkingUrl: "https://www.vindolanda.com/roman-vindolanda-fort-museum"
        },
        map: {
          imgSrc: require("../assets/maps/vindolanda.webp"),
          displayText: "Google Maps"
        },
        description:
          "Vindolanda lies just to the south of the curtain wall of Hadrian's Wall and has a very different feel to other sites along the Wall.\n\nIt lies upon the first Roman frontier in the north – The Stanegate Road and in a stunning landscape which lets your imagination really connect with its past.\n\nAlthough first built by the Roman army before Hadrians Wall Vindolanda became an important construction and garrison base for the Wall, a Hadrians Wall fort in its own right. During this time Vindolanda was demolished and completely rebuilt no fewer than nine times. Each re-build, each community, leaving their own distinctive mark on the landscape and archaeology of the site.",
        freeEntry: false,
        openingTimes: {
          weekday: "9:30AM - 5:30PM",
          weekend: "9:30AM - 5:30PM"
        },
        contactDetails: {
          phone: "01434 344277",
          email: "info@vindolanda.com",
          address: {
            street: "Chesterholm Museum, Bardon Mill",
            town: "Hexham",
            postcode: "NE47 7JN"
          }
        },
        credits: [
          {
            displayText: "Vindolanda",
            linkingUrl: "https://www.vindolanda.com/"
          },
          {
            displayText: "Vindolanda FAQ",
            linkingUrl: "https://www.vindolanda.com/frequentlyaskequestions"
          }
        ]
      },
      {
        id: 9,
        name: "Cawfields & Milecastle 42",
        icon: AttractionCategory.Wall,
        nearestStop: 12,
        coordinates: {
          lat: 54.994,
          long: -2.44581
        },
        image: {
          imgSrc: require("../assets/img/milecastle_42.webp"),
          displayText: "Roman Britain",
          linkingUrl: "https://www.roman-britain.co.uk/places/cawfields/"
        },
        map: {
          imgSrc: require("../assets/maps/milecastle_42.webp"),
          displayText: "Google Maps"
        },
        description:
          "Cawfields is a dramatic stretch of Hadrian's Wall on a steep slope, one of the highest standing sections of the Wall. Within its length, there are turrets and an impressive mile castle, which was built by the Second Legion.",
        freeEntry: true,
        openingTimes: {
          other: "Open any reasonable time during daylight hours"
        },
        contactDetails: {
          address: {
            street: "Haltwhistle",
            town: "Hexham",
            postcode: "NE49 9PJ"
          }
        },
        credits: [
          {
            displayText: "English Heritage",
            linkingUrl: "https://www.english-heritage.org.uk/visit/places/cawfields-roman-wall-hadrians-wall/"
          },
          {
            displayText: "Roman Britain",
            linkingUrl: "https://www.roman-britain.co.uk/places/cawfields/"
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
        map: {
          imgSrc: require("../assets/maps/roman_army_museum.webp"),
          displayText: "Google Maps"
        },
        description:
          "Immerse yourself in the life of a Roman soldier at the Roman Army Museum.\n\nThe museum includes three galleries, 3D film and a holographic classroom. Based at the site of Magna Roman Fort the museum is situated next to one of the most complete sections of Hadrians Wall.",
        freeEntry: false,
        openingTimes: {
          weekday: "9:30AM - 5:30PM",
          weekend: "9:30AM - 5:30PM"
        },
        contactDetails: {
          phone: "01434 344277",
          address: {
            street: "Roman Army Museum, Greenhead",
            town: "Brampton",
            postcode: "CA8 7JB"
          }
        },
        credits: [
          {
            displayText: "Vindolanda Charitable Trust",
            linkingUrl: "https://www.vindolanda.com/roman-army-museum"
          },
          {
            displayText: "Roman Army Museum & Magna Fort",
            linkingUrl: "https://romanarmymuseum.com/"
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
          linkingUrl: "https://www.northumberlandnationalpark.org.uk/places-to-visit/hadrians-wall/thirlwall-castle/"
        },
        map: {
          imgSrc: require("../assets/maps/thirlwall_castle.webp"),
          displayText: "Google Maps"
        },
        description:
          "Originally built in the 12th century, and later strengthened using stones from nearby Hadrians Wall, Thirlwall Castle began to fall into disrepair in the 17th century.\n\nIt was originally the home of the Thirlwall family, and later fortified by John Thirlwall in about 1330.",
        freeEntry: true,
        openingTimes: {
          other: "Open any reasonable time during daylight hours"
        },
        contactDetails: {
          phone: "01434 605555",
          email: "enquiries@nnpa.org.uk",
          address: {
            street: "Thirlwall Castle, Pennine Way",
            town: "Brampton",
            postcode: "CA8 7HY"
          }
        },
        credits: [
          {
            displayText: "Northumberland National Park",
            linkingUrl: "https://www.northumberlandnationalpark.org.uk/places-to-visit/hadrians-wall/thirlwall-castle/"
          }
        ]
      }
    ]
  }
];
