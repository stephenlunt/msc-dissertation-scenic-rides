/**
 * Last modified: 23-07-2023
 * Modifying author: Stephen Lunt
 * File description: The data seed and types for bus stops along the route.
 */

import { Facility } from "../components/FacilityIcon";
import { Credit } from "./types";

type BusRoute = {
  id: string;
  totalStops: number;
  stops: BusStop[];
};

export type BusStop = {
  sequence: number;
  name: string;
  lat: number;
  long: number;
  nearestPoint: number;
  details?: string;
  facilities?: Facilities;
  attractions?: number[];
};

type Facilities = {
  allFacilities: Facility[];
  credit: Credit;
};

export const stopsData: BusRoute[] = [
  {
    id: "AD122",
    totalStops: 18,
    stops: [
      {
        sequence: 0,
        name: "Hexham Bus Station",
        lat: 54.97032110000001,
        long: -2.0958298,
        nearestPoint: 1,
        attractions: [0]
      },
      {
        sequence: 1,
        name: "Hexham Railway Station",
        lat: 54.973015,
        long: -2.094787,
        nearestPoint: 7,
        details: "Rail connections towards Newcastle upon Tyne and Carlisle.",
        facilities: {
          allFacilities: [Facility.Toilets, Facility.CarPark],
          credit: {
            displayText: "Northern Rail",
            linkingUrl: "https://www.northernrailway.co.uk/stations/hexham"
          }
        }
      },
      {
        sequence: 2,
        name: "Acomb Garage",
        lat: 54.98994399999999,
        long: -2.115331,
        nearestPoint: 29,
        details:
          "Acomb is a small village just north of Hexham. Here you can find several small hotels and inns for staying the night or food & drink."
      },
      {
        sequence: 3,
        name: "Hadrian Hotel",
        lat: 55.01474799999999,
        long: -2.132744999999999,
        nearestPoint: 49,
        details: "The Hadrian Hotel is a small inn located in Wall, Hexham.",
        facilities: {
          allFacilities: [Facility.Hotel, Facility.FoodAndDrink],
          credit: {
            displayText: "The Hadrian Hotel",
            linkingUrl: "https://www.hadrianhotel.co.uk/"
          }
        }
      },
      {
        sequence: 4,
        name: "Brunton Crossroads",
        lat: 55.025692,
        long: -2.124615,
        nearestPoint: 56,
        attractions: [1, 2, 3]
      },
      {
        sequence: 5,
        name: "George Hotel",
        lat: 55.02964799999999,
        long: -2.129195,
        nearestPoint: 59,
        details: "George Hotel is an 18th-century building offering a range of rooms in Chollerford.",
        facilities: {
          allFacilities: [Facility.Hotel, Facility.FoodAndDrink],
          credit: {
            displayText: "George Hotel",
            linkingUrl: "https://bespokehotels.com/the-george-hotel/"
          }
        }
      },
      {
        sequence: 6,
        name: "Chesters Roman Fort",
        lat: 55.028831,
        long: -2.138062,
        nearestPoint: 62,
        attractions: [4]
      },
      {
        sequence: 7,
        name: "Brocolitia Roman Fort",
        lat: 55.0356873,
        long: -2.2204436,
        nearestPoint: 94,
        attractions: [5]
      },
      {
        sequence: 8,
        name: "Housesteads Visitor Centre",
        lat: 55.01002099999999,
        long: -2.323052000000001,
        nearestPoint: 175,
        attractions: [6]
      },
      {
        sequence: 9,
        name: "The Sill",
        lat: 54.995895,
        long: -2.38804,
        nearestPoint: 234,
        attractions: [7]
      },
      {
        sequence: 10,
        name: "Vindolanda",
        lat: 54.995895,
        long: -2.38804,
        nearestPoint: 279,
        attractions: [8]
      },
      {
        sequence: 11,
        name: "The Sill (Return)",
        lat: 54.995895,
        long: -2.38804,
        nearestPoint: 316,
        attractions: [7]
      },
      {
        sequence: 12,
        name: "Milecastle Inn",
        lat: 54.987782,
        long: -2.445705,
        nearestPoint: 359,
        attractions: [9]
      },
      {
        sequence: 13,
        name: "Herding Hill Farm Camp Site",
        lat: 54.98164699999999,
        long: -2.448778,
        nearestPoint: 368,
        details: "A camping, glamping, touring, and lodge campsite just 1 mile from Hadrian's Wall.",
        facilities: {
          allFacilities: [Facility.Camping, Facility.Shop, Facility.WiFi],
          credit: {
            displayText: "Herding Hill Farm",
            linkingUrl: "https://www.herdinghillfarm.co.uk/"
          }
        }
      },
      {
        sequence: 14,
        name: "Haltwhistle Market Place",
        lat: 54.97043189999999,
        long: -2.458997799999999,
        nearestPoint: 391,
        details:
          "Haltwhistle is a small market town in Northumberland. In Haltwhistle, you can find an array of supermarkets to stock up on essentials, as well as local hotels, restaurants, and pubs."
      },
      {
        sequence: 15,
        name: "Haltwhistle Railway Station",
        lat: 54.968403,
        long: -2.463063,
        nearestPoint: 397,
        details: "Rail connections towards Newcastle upon Tyne, Carlisle, and Hexham.",
        facilities: {
          allFacilities: [Facility.CarPark, Facility.WiFi],
          credit: {
            displayText: "Northern Rail",
            linkingUrl: "https://www.northernrailway.co.uk/stations/haltwhistle"
          }
        }
      },
      {
        sequence: 16,
        name: "Greenhead Hotel",
        lat: 54.981911,
        long: -2.533252000000001,
        nearestPoint: 431,
        details: "Greenhead Hotel offers cosy rooms and dining on the Northumberland border.",
        facilities: {
          allFacilities: [Facility.Hotel, Facility.FoodAndDrink],
          credit: {
            displayText: "Greenhead Hotel",
            linkingUrl: "https://www.greenheadbrampton.co.uk/"
          }
        }
      },
      {
        sequence: 17,
        name: "Walltown Quarry",
        lat: 54.986729,
        long: -2.520126,
        nearestPoint: 442,
        attractions: [10, 11]
      }
    ]
  }
];
