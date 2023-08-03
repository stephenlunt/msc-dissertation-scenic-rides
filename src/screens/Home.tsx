/**
 * Last modified: 10-07-2023
 * Modifying author: Stephen Lunt
 * File description: React component for the Home screen.
 */

import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, ScrollView, Pressable, Box, Flex, Text, Link, Button, Heading } from "native-base";

import { RootStackParamList } from "../../App";
import { type BusRoute, busRoutesData } from "../data/busRoutes";
import ImageCard from "../components/ImageCard";

// Navigation props for the home screen.
type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, "Home">;

/**
 * The React default component export for the home screen.
 */
export default function Home() {
  const navigation = useNavigation<HomeScreenProp>();
  const [busRoutes, setBusRoutes] = useState<BusRoute[]>();

  useEffect(() => {
    setBusRoutes(busRoutesData);
  }, []);

  return busRoutes ? (
    <View height="full">
      <ScrollView px={4} py={2}>
        <Text my={2} textAlign="center">
          Explore some of England's most scenic bus routes in the North East.
        </Text>

        {/* For each bus route display a linking image card. */}
        {busRoutes.map((busRoute) => {
          return (
            <Box key={busRoute.id}>
              <Pressable
                onPress={() => navigation.navigate("BusRoute", { id: busRoute.id })}
                position="relative"
                overflow="hidden"
                height={280}
                borderRadius={10}
                my={1}
              >
                <ImageCard
                  height={280}
                  imgSrc={busRoute.image.imgSrc}
                  imgAlt={`Image of ${busRoute.name}`}
                  heading={busRoute.id}
                  innerText={busRoute.name}
                />
              </Pressable>
              <Text fontSize="sm" color="gray.700">
                Image Credit: <Link href={busRoute.image.linkingUrl}>{busRoute.image.displayText}</Link>
              </Text>
            </Box>
          );
        })}
      </ScrollView>

      {/* Help and about links */}
      <Flex direction="column" position="absolute" bottom={10} left={3}>
        <Button
          onPress={() => navigation.navigate("Help")}
          bgColor="gray.200"
          px={4}
          m={1}
          borderColor="gray.300"
          borderWidth={1}
        >
          <Text fontWeight="bold">Help</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate("About")}
          bgColor="gray.200"
          px={4}
          m={1}
          borderColor="gray.300"
          borderWidth={1}
        >
          <Text fontWeight="bold">About</Text>
        </Button>
      </Flex>
    </View>
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
