import { useEffect, useState } from "react";
import { LocationObject } from "expo-location";
import {
  Flex,
  Box,
  Heading,
  Text,
  Pressable,
  ScrollView,
  Badge
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
  geolocation: LocationObject | undefined;
  lastStop: number;
  nextStop: number;
};

export default function StopList({
  stops,
  attractions,
  geolocation,
  lastStop,
  nextStop
}: Props) {
  // https://reactnavigation.org/docs/connecting-navigation-prop/
  const navigation = useNavigation<StopListComponentProp>();

  useEffect(() => {
    if (stops && geolocation) {
      const pointA = {
        lat: geolocation?.coords.latitude,
        long: geolocation?.coords.longitude
      };

      const pointB = {
        lat: stops!.at(nextStop)!.lat,
        long: stops!.at(nextStop)!.long
      };

      console.log(pointA, pointB);

      console.log(haversine(pointA, pointB));
    }
  }, [stops, geolocation, lastStop, nextStop]);

  return (
    <Flex flexDirection="column" flexShrink={1}>
      {stops.map((stop, index) => {
        let multipleAttractions: boolean = stop.attractions
          ? stop.attractions.length > 1
          : false;

        return (
          <Box
            key={stop.sequence}
            mb={8}
            h="230px"
            borderBottomColor="borderColor"
            borderBottomWidth={1}
          >
            <Heading pb={2}>{stop.name}</Heading>
            <Badge colorScheme="info" width="20" mb={2}>{`STOP ${
              stop.sequence + 1
            }`}</Badge>
            {stop.details && <Text>{stop.details}</Text>}

            {stop.attractions ? (
              <ScrollView
                horizontal={multipleAttractions ? true : false}
                mb={2}
              >
                {stop.attractions.map((attractionId, index) => {
                  let currentAttraction = attractions.filter(
                    (attraction) => attraction.id === attractionId
                  )[0];

                  return (
                    <Pressable
                      key={index}
                      onPress={() =>
                        navigation.navigate("Attraction", {
                          id: currentAttraction.id,
                          routeId: "AD122" // TODO: make dynamic
                        })
                      }
                      bgColor="green.300"
                      borderRadius={10}
                      h="150px"
                      w={multipleAttractions ? 56 : "100%"}
                      px={2}
                      py={4}
                      mr={multipleAttractions ? 2 : 0}
                    >
                      <AttractionIcon
                        attraction={currentAttraction.icon}
                        name={currentAttraction.name}
                      />
                    </Pressable>
                  );
                })}
              </ScrollView>
            ) : null}

            {/* TODO: integrate back in a set height */}
            {/* {stop.facilities ? (
              <Box mt={2}>
                <Heading size="sm" mb={1}>
                  Facilities
                </Heading>
                <Flex direction="row" flexWrap="wrap" mb={1}>
                  {stop.facilities.allFacilities.map((f, i) => {
                    return <FacilityIcon key={i} facility={f} />;
                  })}
                </Flex>
                <Text fontSize="sm">
                  Source: {stop.facilities.credit.displayName}
                </Text>
              </Box>
            ) : null} */}
          </Box>
        );
      })}
    </Flex>
  );
}