import { useLayoutEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Box, Heading, Text, Pressable, Image } from "native-base";

import { RootStackParamList } from "../../App";
import type { BusRoute } from "../data/busRoutes";
import { busRoutesData } from "../data/busRoutes";

/**
 * https://reactnavigation.org/docs/typescript/
 */
type RouteScreenProps = NativeStackScreenProps<RootStackParamList, "Route">;

export default function Route({ route, navigation }: RouteScreenProps) {
  const { id } = route.params;
  const [routeDetails, setRouteDetails] = useState<BusRoute>();

  useLayoutEffect(() => {
    setRouteDetails(busRoutesData.filter((busRoute) => busRoute.id === id)[0]);
  }, []);

  return routeDetails ? (
    <ScrollView mx={4} pb={4}>
      <Heading py={4} textAlign="center">
        {routeDetails.name}
      </Heading>
      <Text pb={4}>{routeDetails.description}</Text>

      <Pressable
        onPress={() =>
          navigation.navigate("Guidebook", { id: routeDetails.id })
        }
        height={180}
        bgColor="green.300"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        borderRadius={10}
        my={2}
        p={4}
      >
        <Box width="50%">
          <Heading pb={4} color="green.900">
            Route Guidebook
          </Heading>
          <Text color="green.900">View the route guidebook</Text>
        </Box>
        <Image
          source={require("../assets/img/guidebook.jpeg")}
          alt="View our route guidebook"
          maxWidth={150}
          maxHeight={150}
        />
      </Pressable>

      <Heading textAlign="center">Credit</Heading>
      <Text>Information for this route was sourced from: ...</Text>
    </ScrollView>
  ) : (
    <Box>Invalid bus route</Box>
  );
}
