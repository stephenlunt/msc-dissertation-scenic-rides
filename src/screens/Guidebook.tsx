import { useLayoutEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Flex, Box, Text, Button, Heading } from "native-base";

import { RootStackParamList } from "../../App";
import type { BusStop } from "../data/busStops";
import { busStops } from "../data/busStops";
import ProgressBar from "../components/ProgressBar";

type Props = NativeStackScreenProps<RootStackParamList, "Guidebook">;

enum Direction {
  Outbound = "Hexham to Haltwhistle",
  Inbound = "Haltwhistle to Hexham"
}

export default function Guidebook({ route, navigation }: Props) {
  const { id } = route.params;
  const [stops, setStops] = useState<BusStop[]>();
  const [direction, setDirection] = useState<Direction>(Direction.Outbound);
  const [routePercentage, setRoutePercentage] = useState<number>(20); // TODO: make dynamic

  useLayoutEffect(() => {
    setStops(busStops.filter((busRoute) => busRoute.id === id)[0].stops);
  }, []);

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

  return stops ? (
    <ScrollView mx={4} my={2}>
      <Heading my={2} textAlign="center">
        Direction: {direction}
      </Heading>
      <Button onPress={swapDirection} bgColor="secondary" color="black">
        <Text>Swap</Text>
      </Button>

      <Flex flexDirection="row" my={4}>
        <ProgressBar percentage={routePercentage} />
        <Flex flexDirection="column" flexGrow={1}>
          {stops.map((stop, index) => {
            return (
              <>
                <Box
                  key={stop.sequence}
                  bgColor="backdrop"
                  p={4}
                  mb={4}
                  borderRadius={10}
                  borderColor="borderColor"
                  borderWidth={1}
                >
                  <Heading size="sm">
                    {index + 1}. {stop.name}
                  </Heading>
                </Box>
              </>
            );
          })}
        </Flex>
      </Flex>
    </ScrollView>
  ) : (
    <Box>Invalid bus route.</Box>
  );
}
