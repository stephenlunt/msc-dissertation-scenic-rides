type Route = {
  id: string;
  points: RoutePoint[];
};

export type RoutePoint = {
  sequence: number;
  long: number;
  lat: number;
};

export const routePoints: Route[] = [
  {
    id: "AD122",
    points: [
      {
        sequence: 1,
        long: 1,
        lat: 1
      },
      {
        sequence: 2,
        long: 1,
        lat: 1
      }
    ]
  }
];
