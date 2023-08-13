/**
 * Last modified: 01-08-2023
 * Modifying author: Stephen Lunt
 * File description: React component for the Guidebook screen.
 */

import { useEffect, useState, useRef } from "react";
import * as Location from "expo-location";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView } from "react-native";
import { View, Flex, Text, Heading, IconButton } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { RootStackParamList } from "../../App";
import { SCROLL_HEIGHT } from "../const";
import { type BusRoute, busRoutesData } from "../data/busRoutes";
import { type BusStop, stopsData } from "../data/busStops";
import { type Attraction, attractionData } from "../data/attractions";
import { type BusRoutePoint, routePoints } from "../data/routePoints";
import { Direction } from "../data/types";
import calculateRouteProgress from "../util/calculateRouteProgress";
import calculateRoutePercentage from "../util/calculateRoutePercentage";
import ProgressBar from "../components/ProgressBar";
import StopList from "../components/StopList";
import ErrorMessage from "../components/ErrorMessage";

// Navigation props for the guidebook screen.
type GuidebookScreenProps = NativeStackScreenProps<RootStackParamList, "Guidebook">;

// Global variable to store the user geolocation subscription.
let locationSubscription: Location.LocationSubscription | undefined;

/**
 * The React default component export for the guidebook screen.
 *
 * @returns the guidebook screen component.
 */
export default function Guidebook({ route, navigation }: GuidebookScreenProps) {
  // Navigation state
  const { id } = route.params;

  // Data import state
  const [busRoute, setBusRoute] = useState<BusRoute>();
  const [stops, setStops] = useState<BusStop[]>();
  const [attractions, setAttractions] = useState<Attraction[]>();
  const [points, setPoints] = useState<BusRoutePoint[]>();

  // Functional state
  const [direction, setDirection] = useState<Direction>(Direction.Outbound);
  const [nearestPoint, setNearestPoint] = useState<number>();
  const [routePercentage, setRoutePercentage] = useState<number>(0);
  const [lastStop, setLastStop] = useState<BusStop>();
  const [nextStop, setNextStop] = useState<BusStop>();

  // Geolocation state
  const [geolocation, setGeolocation] = useState<Location.LocationObject>();
  const [locGranted, setLocGranted] = useState<boolean>(true);

  // Refs
  const scrollViewRef = useRef<null | ScrollView>(null);

  /**
   * Filter and store the data points for the route in state on-screen render.
   */
  useEffect(() => {
    setBusRoute(busRoutesData.filter((busRoute) => busRoute.id === id)[0]);
    setStops(stopsData.filter((busRoute) => busRoute.id === id)[0].stops);
    setAttractions(attractionData.filter((busRoute) => busRoute.id === id)[0].attractions);
    setPoints(routePoints.filter((busRoute) => busRoute.id === id)[0].points);
  }, []);

  /**
   * When the screen loads, request permission to use geolocation features and
   * use the expo location library to subscribe to the user's location.
   *
   * Source documentation:
   * - https://docs.expo.dev/versions/latest/sdk/location/#locationsubscription
   * - https://chafikgharbi.com/expo-location-tracking/
   * - https://reactnavigation.org/docs/navigation-events/
   */
  useEffect(() => {
    navigation.addListener("focus", () => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLocGranted(false);
          return;
        }

        setLocGranted(true);

        if (locationSubscription === undefined) {
          locationSubscription = await Location.watchPositionAsync(options, (location) => {
            setGeolocation(location);
          });
        }
      })();
    });
  }, [navigation]);

  /**
   * Location accuracy and update configuration options.
   */
  const options: Location.LocationOptions = {
    accuracy: Location.LocationAccuracy.High,
    distanceInterval: 10
  };

  /**
   * When the guidebook screen is left, unsubscribe from watching the user's location.
   */
  useEffect(() => {
    navigation.addListener("blur", () => {
      if (!locationSubscription) return;

      locationSubscription.remove();
      locationSubscription = undefined;
    });
  }, [navigation]);

  /**
   * Calculate the new route progress on geolocation updates.
   */
  useEffect(() => {
    if (!points || !stops || !geolocation) return;

    const progress = calculateRouteProgress(points, stops, geolocation, direction);

    setNearestPoint(progress.nearestPoint);
    setLastStop(progress.lastStop);
    setNextStop(progress.nextStop);
  }, [points, stops, geolocation, direction]);

  /**
   * Calculate the route percentage completed and update progress bar on location change.
   */
  useEffect(() => {
    if (!stops || !lastStop || !nextStop || !nearestPoint) return;

    const routePercentCompleted = calculateRoutePercentage(stops, lastStop, nextStop, nearestPoint, direction);
    setRoutePercentage(routePercentCompleted);

    /**
     * Using a React Ref to the UI ScrollView, a custom scroll height can be
     * scrolled to. Documentation below details this method.
     *
     * Source URL: https://reactnative.dev/docs/scrollview#scrollto
     */
    if (!scrollViewRef.current) return;

    // Calculate the scroll height using the fixed pixel height of the stop / attraction cards.
    let scrollHeight: number;

    if (direction === Direction.Inbound) {
      scrollHeight = (stops.length - 1) * SCROLL_HEIGHT - lastStop.sequence * SCROLL_HEIGHT;
    } else {
      scrollHeight = lastStop.sequence * SCROLL_HEIGHT;
    }

    scrollViewRef.current.scrollTo({ y: scrollHeight, animated: true });
  }, [stops, lastStop, nextStop, nearestPoint, direction]);

  /**
   * Switches outbound and inbound on click of the swap direction button. The sort function
   * swaps the order of the stops based on their sequence to switch their display in the UI.
   */
  function swapDirection() {
    if (!stops) return;

    if (direction === Direction.Inbound) {
      setDirection(Direction.Outbound);
      const orderStops = [...stops].sort((stopA, stopB) => stopA.sequence - stopB.sequence);
      setStops(orderStops);
    } else {
      setDirection(Direction.Inbound);
      const orderStops = [...stops].sort((stopA, stopB) => stopB.sequence - stopA.sequence);
      setStops(orderStops);
    }
  }

  return busRoute && stops && attractions ? (
    <View pb={24}>
      {/* Screen header to swap route direction */}
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
          {direction == Direction.Outbound
            ? `${busRoute.origin} to ${busRoute.destination}`
            : `${busRoute.destination} to ${busRoute.origin}`}
        </Heading>
        <IconButton
          icon={<MaterialCommunityIcons name="swap-horizontal-variant" size={24} color="black" />}
          onPress={swapDirection}
        />
      </Flex>

      {/* Guidebook progress bar and stop list components  */}
      <ScrollView ref={scrollViewRef}>
        <Text pt={2} mx={4}>
          Explore what the {id} has to offer at every stop along the route.
        </Text>
        <Flex flexDirection="row" my={4} mx={4}>
          {locGranted ? <ProgressBar percentage={routePercentage} /> : null}
          <StopList busRouteId={id} stops={stops} attractions={attractions} />
        </Flex>
      </ScrollView>
    </View>
  ) : (
    <ErrorMessage msg="Sorry, an error occurred loading the bus route data. Please return home or restart the application." />
  );
}
