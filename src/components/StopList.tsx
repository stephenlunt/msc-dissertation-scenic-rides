/**
 * Last modified: 26-07-2023
 * Modifying author: Stephen Lunt
 * File description: React component for the stop list used on the
 * Guidebook screen.
 */

import { Flex, Box, Heading, Pressable, ScrollView, Badge, Image, Text, Link } from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../../App";
import { STOP_HEIGHT, IMAGE_HEIGHT } from "../const";
import { BusStop } from "../data/busStops";
import { Attraction } from "../data/attractions";
import AttractionIcon from "./AttractionIcon";
import FacilityIcon from "./FacilityIcon";

// Props for navigation and stop list
type StopListComponentProp = NativeStackNavigationProp<RootStackParamList, "Attraction">;

type Props = {
  busRouteId: string;
  stops: BusStop[];
  attractions: Attraction[];
};

/**
 * The stop list component renders each of the bus stops with their attractions
 * for the Guidebook screen and sets up linking to the Attraction screens.
 */
export default function StopList({ busRouteId, stops, attractions }: Props) {
  const navigation = useNavigation<StopListComponentProp>();

  return (
    <Flex flexDirection="column" flexShrink={1} mr={4}>
      {/* For each bus stop, a box is created */}
      {stops.map((stop, index) => {
        let multipleAttractions: boolean = stop.attractions ? stop.attractions.length > 1 : false;

        return (
          <Box key={stop.sequence} mb={4} h={`${STOP_HEIGHT}px`} borderBottomColor="borderColor" borderBottomWidth={1}>
            <Heading pb={2}>{stop.name}</Heading>
            <Badge colorScheme="info" width="20" mb={2}>{`STOP ${index + 1}`}</Badge>

            {/* If the stop has attractions, the attractions are render on a horizontal scroll ScrollView
            and width adjusted based on if there are greater than 1 attraction for that stop */}
            {stop.attractions ? (
              <ScrollView horizontal={multipleAttractions ? true : false}>
                {stop.attractions.map((attractionId, index) => {
                  let currentAttraction = attractions.filter((attraction) => attraction.id === attractionId)[0];

                  return (
                    <Pressable
                      key={index}
                      onPress={() =>
                        navigation.navigate("Attraction", {
                          id: currentAttraction.id,
                          busRouteId: busRouteId
                        })
                      }
                      bgColor="green.300"
                      position="relative"
                      borderRadius={10}
                      h={`${IMAGE_HEIGHT}px`}
                      w={multipleAttractions ? 64 : "100%"}
                      mr={multipleAttractions ? 2 : 0}
                    >
                      <Image
                        source={currentAttraction.image?.imgSrc}
                        alt={`Photo of ${currentAttraction.name}`}
                        h={`${IMAGE_HEIGHT}px`}
                        borderRadius={10}
                        resizeMode="cover"
                      />
                      <Box
                        position="absolute"
                        zIndex={10}
                        bottom={0}
                        width="100%"
                        p={2}
                        backgroundColor="transparentBlack"
                        borderBottomRadius={10}
                      >
                        <AttractionIcon attraction={currentAttraction.icon} name={currentAttraction.name} />
                      </Box>
                    </Pressable>
                  );
                })}
              </ScrollView>
            ) : (
              <Box bgColor="backdrop" borderRadius={10} h={`${IMAGE_HEIGHT}px`} px={2} py={4}>
                <Heading fontSize="md" mb={1}>
                  Stop Details
                </Heading>
                <Text>{stop.details}</Text>

                {stop.facilities ? (
                  <Box mt={2}>
                    <Heading size="sm" mb={1}>
                      Facilities
                    </Heading>
                    <Flex direction="row" flexWrap="wrap" mb={1} py={1}>
                      {stop.facilities.allFacilities.map((f, i) => {
                        return <FacilityIcon key={i} facility={f} />;
                      })}
                    </Flex>
                    <Text fontSize="sm">
                      Credit: <Link href={stop.facilities.credit.linkingUrl}>{stop.facilities.credit.displayText}</Link>
                    </Text>
                  </Box>
                ) : null}
              </Box>
            )}
          </Box>
        );
      })}
    </Flex>
  );
}
