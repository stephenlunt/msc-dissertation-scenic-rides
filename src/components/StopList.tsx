import { useEffect, useState } from "react";
import { Flex, Box, Heading, Text, Badge } from "native-base";

import { BusStop } from "../data/busStops";
import { Attraction } from "../data/attractions";
import { haversine } from "../util/haversine";

type Props = {
  stops: BusStop[];
  attractions: Attraction[];
  lastStop: number;
  nextStop: number;
};

export default function StopList({
  stops,
  attractions,
  lastStop,
  nextStop
}: Props) {
  const [distanceAway, setDistanceAway] = useState<number>();

  useEffect(() => {
    if (stops) {
      const pointA = {
        lat: stops!.at(lastStop)!.lat,
        long: stops!.at(lastStop)!.long
      };

      const pointB = {
        lat: stops!.at(nextStop)!.lat,
        long: stops!.at(nextStop)!.long
      };

      setDistanceAway(haversine(pointA, pointB));
    }
  }, [stops, lastStop, nextStop]);

  return (
    <Flex flexDirection="column" flexShrink={1}>
      {stops.map((stop, index) => {
        return (
          <Box
            key={stop.sequence}
            bgColor="backdrop"
            p={4}
            mb={4}
            borderRadius={10}
            borderColor="borderColor"
            borderWidth={1}
          >
            <Heading size="sm">
              {index + 1}. {stop.name}
            </Heading>

            {stop.details && <Text>{stop.details}</Text>}

            {stop.sequence === nextStop && (
              <>
                <Flex direction="row" justifyContent="space-between" py={1}>
                  <Badge variant="solid" bg="green.600">
                    NEXT STOP
                  </Badge>
                  <Text>{distanceAway?.toFixed(0)}m away</Text>
                </Flex>
              </>
            )}

            {attractions
              ? attractions
                  .filter(
                    (attraction) => attraction.nearestStop == stop.sequence
                  )
                  .map((attraction) => {
                    return <Text key={attraction.id}>{attraction.name}</Text>;
                  })
              : null}
          </Box>
        );
      })}
    </Flex>
  );
}
