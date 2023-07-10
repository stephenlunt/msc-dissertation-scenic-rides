import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Badge,
  VStack,
  Pressable
} from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../../App";
import { BusStop } from "../data/busStops";
import { Attraction } from "../data/attractions";
import { haversine } from "../util/haversine";
import FacilityIcon from "./FacilityIcon";
import AttractionIcon from "./AttractionIcon";

type StopListComponentProp = NativeStackNavigationProp<
  RootStackParamList,
  "Attraction"
>;

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
  // https://reactnavigation.org/docs/connecting-navigation-prop/
  const navigation = useNavigation<StopListComponentProp>();

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
        let multipleAttractions: boolean = stop.attractions
          ? stop.attractions.length > 1
          : false;

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
            <Heading size="sm" pb={2}>
              {index + 1}. {stop.name}
            </Heading>

            {stop.details && <Text>{stop.details}</Text>}

            {stop.sequence === nextStop && (
              <>
                <Flex direction="row" justifyContent="space-between" pb={2}>
                  <Badge variant="solid" bg="green.700">
                    NEXT STOP
                  </Badge>
                  <Text color="green.700">
                    {distanceAway?.toFixed(0)}m away
                  </Text>
                </Flex>
              </>
            )}

            <VStack space={2}>
              {attractions
                ? attractions
                    .filter(
                      (attraction) => attraction.nearestStop === stop.sequence
                    )
                    .map((attraction, index) => {
                      return (
                        <Pressable
                          key={index}
                          onPress={() =>
                            navigation.navigate("Attraction", {
                              id: attraction.id,
                              routeId: "AD122" // TODO: make dynamic
                            })
                          }
                          bgColor="green.200"
                          borderRadius={10}
                          px={2}
                          py={4}
                        >
                          <AttractionIcon
                            attraction={attraction.icon}
                            name={attraction.name}
                          />
                        </Pressable>
                      );
                    })
                : null}
            </VStack>

            {stop.facilities ? (
              <Box mt={2}>
                <Heading size="sm" mb={1}>
                  Facilities
                </Heading>
                <Flex direction="row" flexWrap="wrap">
                  {stop.facilities.allFacilities.map((f, i) => {
                    return <FacilityIcon key={i} facility={f} />;
                  })}
                </Flex>
              </Box>
            ) : null}
          </Box>
        );
      })}
    </Flex>
  );
}
