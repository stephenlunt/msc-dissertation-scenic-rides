/**
 * Last modified: 25-07-2023
 * Modifying author: Stephen Lunt
 * File description: React component for the Attraction screen.
 */

import { useEffect, useState } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Heading, Box, Flex, Text, Link } from "native-base";

import { RootStackParamList } from "../../App";
import { type Attraction, attractionData } from "../data/attractions";
import { AttractionIconSwitcher } from "../components/AttractionIcon";
import ImageCard from "../components/ImageCard";
import CreditFooter from "../components/CreditFooter";

// Attraction screen navigation props
type AttractionScreenProps = NativeStackScreenProps<RootStackParamList, "Attraction">;

/**
 * The React default component export for the Attraction screen.
 */
export default function Attraction({ route, navigation }: AttractionScreenProps) {
  // Extract an attraction and route id parameter from the navigation props.
  const { id, routeId } = route.params;
  const [attraction, setAttraction] = useState<Attraction>();

  /**
   * Filter the attractions data by route and attraction id and store in React state.
   */
  useEffect(() => {
    const routeSpecificAttractions = attractionData.filter((route) => route.id === routeId)[0].attractions;
    setAttraction(routeSpecificAttractions.filter((attraction) => attraction.id === id)[0]);
  }, []);

  return attraction ? (
    <ScrollView mx={4}>
      <Heading py={4} textAlign="center">
        {attraction.name}
      </Heading>

      <ImageCard imgSrc={attraction.image.imgSrc} imgAlt={`Photo of ${attraction.name}`} height={250} />
      <Text fontSize="sm" color="gray.700">
        Image Credit: <Link href={attraction.image.linkingUrl}>{attraction.image.displayText}</Link>
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
      <Text>{attraction.freeEntry ? "Free entry" : "Paid entry"}</Text>

      <Heading pt={4} pb={2}>
        Opening Times
      </Heading>
      {attraction.openingTimes.other ? (
        <Text>{attraction.openingTimes.other}</Text>
      ) : (
        <Box>
          <Text>Weekdays: {attraction.openingTimes.weekday}</Text>
          <Text>Weekends: {attraction.openingTimes.weekend}</Text>
        </Box>
      )}

      <Heading pt={4} pb={2}>
        Map
      </Heading>
      <ImageCard imgSrc={attraction.map.imgSrc} imgAlt={`Map of ${attraction.name}`} height={200} />
      <Text fontSize="sm" color="gray.700">
        Credit: {attraction.map.displayText}
      </Text>

      <Heading pt={4} pb={2}>
        Contact Details
      </Heading>
      <Box>
        {attraction.contactDetails.phone && <Text>Tel: {attraction.contactDetails.phone}</Text>}
        {attraction.contactDetails.email && <Text>Email: {attraction.contactDetails.email}</Text>}
        {attraction.contactDetails.address && (
          <Text>
            Address: {attraction.contactDetails.address.street}, {attraction.contactDetails.address.town},{" "}
            {attraction.contactDetails.address.postcode}.
          </Text>
        )}
      </Box>

      <CreditFooter credits={attraction.credits} />
    </ScrollView>
  ) : (
    <Box>Invalid attraction</Box>
  );
}
