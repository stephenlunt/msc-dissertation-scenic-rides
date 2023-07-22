import { useEffect, useState } from "react";
import { LocationObject } from "expo-location";
import {
  Flex,
  Box,
  Heading,
  Pressable,
  ScrollView,
  Badge,
  Image
} from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../../App";
import { STOP_HEIGHT, IMAGE_HEIGHT } from "../const";
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
  routeId: string;
  stops: BusStop[];
  attractions: Attraction[];
  geolocation: LocationObject | undefined;
};

export default function StopList({
  routeId,
  stops,
  attractions,
  geolocation
}: Props) {
  // https://reactnavigation.org/docs/connecting-navigation-prop/
  const navigation = useNavigation<StopListComponentProp>();

  return (
    <Flex flexDirection="column" flexShrink={1} mr={4}>
      {stops.map((stop, index) => {
        let multipleAttractions: boolean = stop.attractions
          ? stop.attractions.length > 1
          : false;

        return (
          <Box
            key={stop.sequence}
            mb={4}
            h={`${STOP_HEIGHT}px`}
            borderBottomColor="borderColor"
            borderBottomWidth={1}
          >
            <Heading pb={2}>{stop.name}</Heading>
            <Badge colorScheme="info" width="20" mb={2}>{`STOP ${
              index + 1
            }`}</Badge>

            {stop.attractions ? (
              <ScrollView horizontal={multipleAttractions ? true : false}>
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
                          routeId: routeId
                        })
                      }
                      bgColor="green.300"
                      position="relative"
                      borderRadius={10}
                      h={`${IMAGE_HEIGHT}px`}
                      w={multipleAttractions ? 64 : "100%"}
                      mr={multipleAttractions ? 2 : 0}
                    >
                      <Image
                        source={currentAttraction.image?.imgSrc}
                        alt={`Photo of ${currentAttraction.name}`}
                        h={`${IMAGE_HEIGHT}px`}
                        borderRadius={10}
                        resizeMode="cover"
                      />
                      <Box
                        position="absolute"
                        zIndex={10}
                        bottom={0}
                        width="100%"
                        p={2}
                        backgroundColor="transparentBlack"
                        borderBottomRadius={10}
                      >
                        <AttractionIcon
                          attraction={currentAttraction.icon}
                          name={currentAttraction.name}
                        />
                      </Box>
                    </Pressable>
                  );
                })}
              </ScrollView>
            ) : (
              <Box
                bgColor="backdrop"
                borderRadius={10}
                h={`${IMAGE_HEIGHT}px`}
                px={2}
                py={4}
              >
                {stop.details}
              </Box>
            )}

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
