import { useLayoutEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Heading, Box, Flex, Text, Link } from "native-base";

import { RootStackParamList } from "../../App";
import type { Attraction } from "../data/attractions";
import { attractionData } from "../data/attractions";
import ImageCard from "../components/ImageCard";
import CreditFooter from "../components/CreditFooter";
import { AttractionIconSwitcher } from "../components/AttractionIcon";

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
    <ScrollView mx={4} pb={4}>
      <Heading py={4} textAlign="center">
        {attraction.name}
      </Heading>

      <ImageCard
        imgSrc={attraction.image.imgSrc}
        imgAlt={`Photo of ${attraction.name}`}
        height={250}
      />
      <Text fontSize="sm" color="gray.700">
        Image Credit:{" "}
        <Link href={attraction.image.linkingUrl}>
          {attraction.image.displayText}
        </Link>
      </Text>

      <Heading pt={4} pb={2}>
        About {attraction.name}
      </Heading>
      <Text>{attraction.description}</Text>

      <Heading pt={4} pb={2}>
        Attraction Type
      </Heading>
      <Flex flexDirection="row" alignItems="center">
        <AttractionIconSwitcher attraction={attraction.icon} color="black" />
        <Text pl={2}>{attraction.icon}</Text>
      </Flex>

      <CreditFooter credits={attraction.credits} />
    </ScrollView>
  ) : (
    <Box>Invalid attraction</Box>
  );
}
