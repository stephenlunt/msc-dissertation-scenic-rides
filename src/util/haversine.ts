/**
 * http://www.movable-type.co.uk/scripts/latlong.html
 * https://en.wikipedia.org/wiki/Haversine_formula
 */

type Coordinate = {
  lat: number;
  long: number;
};

export function haversine(pointA: Coordinate, pointB: Coordinate): number {
  const R = 6371e3;

  const radiansA = pointA.lat * (Math.PI / 180);
  const radiansB = pointB.lat * (Math.PI / 180);

  const changeLat = (pointB.lat - pointA.lat) * (Math.PI / 180);
  const changeLong = (pointB.long - pointA.long) * (Math.PI / 180);

  const a =
    Math.sin(changeLat / 2) * Math.sin(changeLat / 2) +
    Math.cos(radiansA) *
      Math.cos(radiansB) *
      Math.sin(changeLong / 2) *
      Math.sin(changeLong / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;

  return d;
}
