import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, Pressable, Box, Image, Heading, Text } from "native-base";

import { RootStackParamList } from "../../App";
import { busRoutes } from "../data/busRoutes";
import ImageCard from "../components/ImageCard";

type routeScreenProp = NativeStackNavigationProp<RootStackParamList, "Route">;

export default function Home() {
  const navigation = useNavigation<routeScreenProp>();

  return (
    <ScrollView mx={4} my={2}>
      <Text my={2} textAlign="center">
        Explore some of England's most scenic bus routes in the North East.
      </Text>

      {busRoutes.map((busRoute) => {
        return (
          <Pressable
            key={busRoute.id}
            onPress={() => navigation.navigate("Route", { id: busRoute.id })}
            position="relative"
            overflow="hidden"
            height={280}
            borderRadius={10}
            my={2}
          >
            <ImageCard
              height={280}
              imgSrc={busRoute.imgSrc}
              imgAlt={`Image of ${busRoute.name}`}
              heading={busRoute.id}
              innerText={busRoute.name}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
