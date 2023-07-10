import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, Pressable, Box, Image, Heading, Text } from "native-base";

import { RootStackParamList } from "../../App";
import { busRoutes } from "../data/busRoutes";
import ImageCard from "../components/ImageCard";

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, "Route">;

export default function Home() {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <ScrollView px={4} py={2}>
      <Text my={2} textAlign="center">
        Explore some of England's most scenic bus routes in the North East.
      </Text>

      {busRoutes.map((busRoute) => {
        return (
          <Box key={busRoute.id}>
            <Pressable
              onPress={() => navigation.navigate("Route", { id: busRoute.id })}
              position="relative"
              overflow="hidden"
              height={280}
              borderRadius={10}
              my={1}
            >
              <ImageCard
                height={280}
                imgSrc={busRoute.imgSrc}
                imgAlt={`Image of ${busRoute.name}`}
                heading={busRoute.id}
                innerText={busRoute.name}
              />
            </Pressable>
            <Text fontSize="sm" color="gray.700">
              Image Credit: Go North East
            </Text>
          </Box>
        );
      })}
    </ScrollView>
  );
}
