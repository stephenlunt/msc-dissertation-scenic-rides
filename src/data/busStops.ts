import { Facility } from "../components/FacilityIcon";

type Route = {
  id: string;
  totalStops: number;
  stops: BusStop[];
};

export type BusStop = {
  sequence: number;
  name: string;
  lat: number;
  long: number;
  details?: string;
  facilities?: Facilities;
  attractions?: number[];
};

type Facilities = {
  allFacilities: Facility[];
  credit: {
    displayName: string;
    src: string;
  };
};

export const stopsData: Route[] = [
  {
    id: "AD122",
    totalStops: 18,
    stops: [
      {
        sequence: 1,
        name: "Hexham Bus Station",
        lat: 54.97032110000001,
        long: -2.0958298,
        attractions: [1]
      },
      {
        sequence: 2,
        name: "Hexham Railway Station",
        lat: 54.973015,
        long: -2.094787,
        details:
          "Depart here for trains towards Newcastle upon Tyne and Carlisle.",
        facilities: {
          allFacilities: [Facility.Toilets, Facility.CarPark],
          credit: {
            displayName: "Northern Rail",
            src: "https://www.northernrailway.co.uk/stations/hexham"
          }
        }
      },
      {
        sequence: 3,
        name: "Acomb Garage",
        lat: 54.98994399999999,
        long: -2.115331
      },
      {
        sequence: 4,
        name: "Hadrian Hotel",
        lat: 55.01474799999999,
        long: -2.132744999999999
      },
      {
        sequence: 5,
        name: "Brunton Crossroads",
        lat: 55.025692,
        long: -2.124615,
        attractions: [2, 3, 4]
      },
      {
        sequence: 6,
        name: "George Hotel",
        lat: 55.02964799999999,
        long: -2.129195
      },
      {
        sequence: 7,
        name: "Chesters Roman Fort",
        lat: 55.028831,
        long: -2.138062,
        attractions: [5]
      },
      {
        sequence: 8,
        name: "Brocolitia Roman Fort",
        lat: 55.0356873,
        long: -2.2204436,
        attractions: [6]
      },
      {
        sequence: 9,
        name: "Housesteads Visitor Centre",
        lat: 55.01002099999999,
        long: -2.323052000000001,
        attractions: [7]
      },
      {
        sequence: 10,
        name: "The Sill",
        lat: 54.995895,
        long: -2.38804,
        attractions: [8]
      },
      {
        sequence: 11,
        name: "Vindolanda",
        lat: 54.995895,
        long: -2.38804,
        attractions: [9]
      },
      {
        sequence: 12,
        name: "The Sill (Return)",
        lat: 54.995895,
        long: -2.38804,
        attractions: [8]
      },
      {
        sequence: 13,
        name: "Milecastle Inn",
        lat: 54.987782,
        long: -2.445705,
        attractions: [10]
      },
      {
        sequence: 14,
        name: "Herding Hill Farm Camp Site",
        lat: 54.98164699999999,
        long: -2.448778
      },
      {
        sequence: 15,
        name: "Haltwhistle Market Place",
        lat: 54.97043189999999,
        long: -2.458997799999999
      },
      {
        sequence: 16,
        name: "Haltwhistle Railway Station",
        lat: 54.968403,
        long: -2.463063
      },
      {
        sequence: 17,
        name: "Greenhead Hotel",
        lat: 54.981911,
        long: -2.533252000000001
      },
      {
        sequence: 18,
        name: "Walltown Quarry",
        lat: 54.986729,
        long: -2.520126,
        attractions: [11, 12]
      }
    ]
  }
];
