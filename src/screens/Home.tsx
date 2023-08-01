/**
 * Last modified: 10-07-2023
 * Modifying author: Stephen Lunt
 * File description: React component for the Home screen.
 */

import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, Pressable, Box, Text, Link } from "native-base";

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
  ) : (
    <Box>Error</Box>
  );
}
