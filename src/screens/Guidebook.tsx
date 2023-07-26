import { useEffect, useState, useRef } from "react";
import * as Location from "expo-location";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView } from "react-native";
import { View, Flex, Box, Text, Heading, IconButton } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { RootStackParamList } from "../../App";
import { SCROLL_HEIGHT } from "../const";
import { type BusRoute, busRoutesData } from "../data/busRoutes";
import { type BusStop, stopsData } from "../data/busStops";
import { type Attraction, attractionData } from "../data/attractions";
import { type RoutePoint, routePoints } from "../data/routePoints";
import { Direction } from "../data/types";
import calculateRouteProgress from "../util/calculateProgress";
import calculateRoutePercentage from "../util/calculateRoutePercentage";
import ProgressBar from "../components/ProgressBar";
import StopList from "../components/StopList";

type GuidebookScreenProps = NativeStackScreenProps<RootStackParamList, "Guidebook">;

let locationSubscription: Location.LocationSubscription | undefined;

export default function Guidebook({ route, navigation }: GuidebookScreenProps) {
  // Navigation state
  const { id } = route.params;

  // Data import state
  const [busRoute, setBusRoute] = useState<BusRoute>();
  const [stops, setStops] = useState<BusStop[]>();
  const [attractions, setAttractions] = useState<Attraction[]>();
  const [points, setPoints] = useState<RoutePoint[]>();

  // Functional state
  const [direction, setDirection] = useState<Direction>(Direction.Outbound);
  const [nearestPoint, setNearestPoint] = useState<number>();
  const [routePercentage, setRoutePercentage] = useState<number>(0);
  const [lastStop, setLastStop] = useState<BusStop>();
  const [nextStop, setNextStop] = useState<BusStop>();

  // Geolocation state
  const [geolocation, setGeolocation] = useState<Location.LocationObject>();
  const [locationError, setLocationError] = useState<string>();

  // Refs
  const scrollViewRef = useRef<null | ScrollView>(null);

  useEffect(() => {
    setBusRoute(busRoutesData.filter((busRoute) => busRoute.id === id)[0]);
    setStops(stopsData.filter((busRoute) => busRoute.id === id)[0].stops);
    setAttractions(attractionData.filter((busRoute) => busRoute.id === id)[0].attractions);
    setPoints(routePoints.filter((busRoute) => busRoute.id === id)[0].points);
  }, []);

  /**
   * https://docs.expo.dev/versions/latest/sdk/location/#locationsubscription
   * https://chafikgharbi.com/expo-location-tracking/
   * https://reactnavigation.org/docs/navigation-events/
   */
  useEffect(() => {
    navigation.addListener("focus", () => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setLocationError("Showing static screen as location was denied");
          return;
        }

        if (locationSubscription === undefined) {
          locationSubscription = await Location.watchPositionAsync(options, (location) => {
            console.log("Location subscription: " + location);
            setGeolocation(location);
          });
        }
      })();
    });
  }, [navigation]);

  const options: Location.LocationOptions = {
    accuracy: Location.LocationAccuracy.High,
    distanceInterval: 10
  };

  useEffect(() => {
    navigation.addListener("blur", () => {
      locationSubscription?.remove();
      locationSubscription = undefined;
      console.log("Subscription removed.");
    });
  }, [navigation]);

  useEffect(() => {
    if (!points || !stops || !geolocation) return;

    const progress = calculateRouteProgress(points, stops, geolocation, direction);

    setNearestPoint(progress.nearestPoint);
    setLastStop(progress.lastStop);
    setNextStop(progress.nextStop);
  }, [points, stops, geolocation, direction]);

  useEffect(() => {
    if (!stops || !lastStop || !nextStop || !nearestPoint) return;

    const routePercentCompleted = calculateRoutePercentage(stops, lastStop, nextStop, nearestPoint, direction);
    setRoutePercentage(routePercentCompleted);

    /**
     * https://reactnative.dev/docs/scrollview#scrollto
     */
    if (!scrollViewRef.current) return;

    // Calculate the scroll height using the fixed pixel height of the stop / attraction cards.
    let scrollHeight: number;

    if (direction === Direction.Inbound) {
      scrollHeight = (stops.length - 1) * SCROLL_HEIGHT - lastStop.sequence * SCROLL_HEIGHT;
    } else {
      scrollHeight = lastStop.sequence * SCROLL_HEIGHT;
    }

    scrollViewRef.current!.scrollTo({ y: scrollHeight, animated: true });
  }, [stops, lastStop, nextStop, nearestPoint, direction]);

  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  function swapDirection() {
    if (direction === Direction.Inbound) {
      setDirection(Direction.Outbound);
      const orderStops = stops?.sort((stopA, stopB) => stopA.sequence - stopB.sequence);
      setStops(orderStops);
    } else {
      setDirection(Direction.Inbound);
      const orderStops = stops?.sort((stopA, stopB) => stopB.sequence - stopA.sequence);
      setStops(orderStops);
    }
  }

  return busRoute && stops && attractions ? (
    <View pb={24}>
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

      <ScrollView ref={scrollViewRef}>
        <Text pt={2} mx={4}>
          Explore what the {id} has to offer at every stop along the route.
        </Text>
        <Flex flexDirection="row" my={4}>
          <ProgressBar percentage={routePercentage} />
          <StopList routeId={id} stops={stops} attractions={attractions} geolocation={geolocation} />
        </Flex>
      </ScrollView>
    </View>
  ) : (
    <Box>Loading route data...</Box>
  );
}
