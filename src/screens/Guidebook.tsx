import { useLayoutEffect, useEffect, useState, useCallback } from "react";
import * as Location from "expo-location";
import { useFocusEffect } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  View,
  ScrollView,
  Flex,
  Box,
  Text,
  Heading,
  IconButton
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { RootStackParamList } from "../../App";
import type { BusStop } from "../data/busStops";
import { stopsData } from "../data/busStops";
import type { Attraction } from "../data/attractions";
import { attractionData } from "../data/attractions";
import ProgressBar from "../components/ProgressBar";
import StopList from "../components/StopList";

type GuidebookScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Guidebook"
>;

enum Direction {
  Outbound = "Hexham to Haltwhistle",
  Inbound = "Haltwhistle to Hexham"
}

let locationSubscription: Location.LocationSubscription | undefined;

export default function Guidebook({ route, navigation }: GuidebookScreenProps) {
  // Navigation state
  const { id } = route.params;

  // Data import state
  const [stops, setStops] = useState<BusStop[]>();
  const [attractions, setAttractions] = useState<Attraction[]>();

  // Functional state
  const [direction, setDirection] = useState<Direction>(Direction.Outbound);
  const [routePercentage, setRoutePercentage] = useState<number>(15); // TODO: make dynamic
  const [lastStop, setLastStop] = useState<number>(4);
  const [nextStop, setNextStop] = useState<number>(5);

  // Geolocation state
  const [geolocation, setGeolocation] = useState<Location.LocationObject>();
  const [locationError, setLocationError] = useState<string>();

  useLayoutEffect(() => {
    setStops(stopsData.filter((busRoute) => busRoute.id === id)[0].stops);
    setAttractions(
      attractionData.filter((busRoute) => busRoute.id === id)[0].attractions
    );
  }, [stops, attractions]);

  /**
   * https://docs.expo.dev/versions/latest/sdk/location/#locationsubscription
   * https://chafikgharbi.com/expo-location-tracking/
   */
  useEffect(() => {
    navigation.addListener("focus", () => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLocationError("Showing static screen as location was denied");
          return;
        }

        console.log(locationSubscription);

        if (locationSubscription === undefined) {
          locationSubscription = await Location.watchPositionAsync(
            options,
            (location) => {
              console.log(location);
              setGeolocation(location);
            }
          );
        }
      })();
    });
  }, [navigation]);

  const options: Location.LocationOptions = {
    accuracy: Location.LocationAccuracy.BestForNavigation,
    distanceInterval: 10
  };

  useEffect(() => {
    navigation.addListener("blur", () => {
      locationSubscription?.remove();
      locationSubscription = undefined;
      console.log("Subscription removed.");
    });
  }, [navigation]);

  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  function swapDirection() {
    if (direction === Direction.Inbound) {
      setDirection(Direction.Outbound);
      const orderStops = stops?.sort(
        (stopA, stopB) => stopA.sequence - stopB.sequence
      );
      setStops(orderStops);
    } else {
      setDirection(Direction.Inbound);
      const orderStops = stops?.sort(
        (stopA, stopB) => stopB.sequence - stopA.sequence
      );
      setStops(orderStops);
    }
  }

  return stops && attractions ? (
    <View>
      <Flex
        px={4}
        py={2}
        bgColor="gray.100"
        borderBottomColor="borderColor"
        borderBottomWidth={1}
        direction="row"
        justifyContent="space-between"
      >
        <Heading my="auto" textAlign="center">
          {direction}
        </Heading>
        <IconButton
          icon={
            <MaterialCommunityIcons
              name="swap-horizontal-variant"
              size={24}
              color="black"
            />
          }
          onPress={swapDirection}
        />
      </Flex>

      <Text>{locationError ? locationError : "No Error"}</Text>
      <Text>{geolocation ? geolocation.timestamp : "None"}</Text>

      <ScrollView mx={4} pb={4}>
        <Text pt={2}>
          Explore what the {id} has to offer at every stop along the route.
        </Text>
        <Flex flexDirection="row" my={4}>
          <ProgressBar percentage={routePercentage} />
          <StopList
            stops={stops}
            attractions={attractions}
            lastStop={lastStop}
            nextStop={nextStop}
          />
        </Flex>
      </ScrollView>
    </View>
  ) : (
    <Box>Loading route data...</Box>
  );
}
