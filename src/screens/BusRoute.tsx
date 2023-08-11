/**
 * Last modified: 14-07-2023
 * Modifying author: Stephen Lunt
 * File description: React component for the Bus Route screen.
 */

import { useEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, ScrollView, Box, Heading, Text, Pressable, Image, Button, Link } from "native-base";

import { RootStackParamList } from "../../App";
import { type BusRoute, busRoutesData } from "../data/busRoutes";
import CreditFooter from "../components/CreditFooter";

// Navigation props for the bus route screen.
type RouteScreenProps = NativeStackScreenProps<RootStackParamList, "BusRoute">;

/**
 * The React default component export for the Bus Route screen.
 *
 * @returns the bus route screen component.
 */
export default function BusRoute({ route, navigation }: RouteScreenProps) {
  // Access the 'id' parameter from the navigation props passed through the link.
  const { id } = route.params;
  const [routeDetails, setRouteDetails] = useState<BusRoute>();

  /**
   * Filter the bus route data to a specific id on screens first render.
   */
  useEffect(() => {
    setRouteDetails(busRoutesData.filter((busRoute) => busRoute.id === id)[0]);
  }, []);

  return routeDetails ? (
    <ScrollView mx={4} pb={4}>
      <Heading py={4} textAlign="center">
        {routeDetails.name}
      </Heading>

      {/* Guidebook link */}
      <Pressable
        onPress={() => navigation.navigate("Guidebook", { id: routeDetails.id })}
        height={180}
        bgColor="green.300"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderRadius={10}
        p={4}
      >
        <Box width="50%">
          <Heading pb={4} color="green.900">
            Route Guidebook
          </Heading>
          <Text color="green.900">View the route guidebook</Text>
        </Box>
        <Image
          source={require("../assets/img/guidebook.webp")}
          alt="View our route guidebook"
          maxWidth={150}
          maxHeight={150}
        />
      </Pressable>

      <Heading pt={4} pb={2}>
        About the route
      </Heading>
      <Text>{routeDetails.description}</Text>

      <Heading pt={4} pb={2}>
        Timetable
      </Heading>
      <Text>
        This bus runs: {routeDetails.frequency} View the full timetable at:{" "}
        <Link href={routeDetails.timetable.linkingUrl}>{routeDetails.timetable.displayText}</Link>
      </Text>

      <CreditFooter credits={routeDetails.credits} />
    </ScrollView>
  ) : (
    <View>
      <Heading py={4} textAlign="center">
        Error
      </Heading>
      <Text py={4}>
        Sorry, an error occurred loading the bus route data. Please return home or restart the application.
      </Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        display="flex"
        justifyContent="center"
        bgColor="gray.200"
        px={4}
        m={1}
        borderColor="gray.300"
        borderWidth={1}
      >
        <Text fontWeight="bold">Return Home</Text>
      </Button>
    </View>
  );
}
