import { useLayoutEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Box, Text } from "native-base";

import { RootStackParamList } from "../../App";
import type { Route, Attraction } from "../data/attractions";
import { attractionData } from "../data/attractions";

type AttractionScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Attraction"
>;

export default function Attraction({
  route,
  navigation
}: AttractionScreenProps) {
  const { id, routeId } = route.params;
  const [attraction, setAttraction] = useState<Attraction>();

  useLayoutEffect(() => {
    const routeSpecificAttractions = attractionData.filter(
      (route) => route.id === routeId
    )[0].attractions;

    setAttraction(
      routeSpecificAttractions.filter((attraction) => attraction.id === id)[0]
    );
  }, []);

  return attraction ? (
    <Box>
      <Text>{attraction.name}</Text>
    </Box>
  ) : (
    <Box>Invalid attraction</Box>
  );
}
