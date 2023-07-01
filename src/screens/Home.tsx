import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScrollView, Pressable, Box, Image, Heading, Text } from "native-base";

import { RootStackParamList } from "../../App";
import { routes } from "../data/routes";
import ImageCard from "../components/ImageCard";

type routeScreenProp = NativeStackNavigationProp<RootStackParamList, "Route">;

export default function Home() {
  const navigation = useNavigation<routeScreenProp>();

  return (
    <ScrollView mx={4} my={2}>
      <Text my={2} textAlign="center">
        Explore some of England's most scenic bus routes in the North East.
      </Text>

      {routes.map((route) => {
        return (
          <Pressable
            key={route.id}
            onPress={() => navigation.navigate("Route", { id: route.id })}
            position="relative"
            overflow="hidden"
            height={280}
            borderRadius={10}
            my={2}
          >
            <ImageCard
              imgSrc={route.imgSrc}
              imgAlt={`Image of ${route.name}`}
              heading={route.id}
              innerText={route.name}
              height={280}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}