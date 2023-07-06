import { useLayoutEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Text, Pressable } from "native-base";

import { RootStackParamList } from "../../App";
import type { BusRoute } from "../data/busRoutes";
import { busRoutes } from "../data/busRoutes";

/**
 * https://reactnavigation.org/docs/typescript/
 */
type Props = NativeStackScreenProps<RootStackParamList, "Route">;

export default function Route({ route, navigation }: Props) {
  const { id } = route.params;
  const [routeDetails, setRouteDetails] = useState<BusRoute>();

  useLayoutEffect(() => {
    setRouteDetails(busRoutes.filter((busRoute) => busRoute.id === id)[0]);
  }, []);

  return routeDetails ? (
    <Box>
      <Text>{routeDetails.id}</Text>
      <Text>{routeDetails.name}</Text>
      <Text>{routeDetails.description}</Text>
      <Pressable
        onPress={() =>
          navigation.navigate("Guidebook", { id: routeDetails.id })
        }
      >
        <Text>See Guidebook.</Text>
      </Pressable>
    </Box>
  ) : (
    <Box>Invalid bus route</Box>
  );
}
