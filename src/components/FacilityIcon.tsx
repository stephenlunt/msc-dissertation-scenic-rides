/**
 * Last modified: 25-07-2023
 * Modifying author: Stephen Lunt
 * File description: React component to manage icons for bus stop facilities.
 */

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Flex, Text } from "native-base";

// Enum of acceptable icon types and user-friendly text.
export enum Facility {
  Toilets = "Toilets",
  CarPark = "Car Park",
  Camping = "Camping",
  Hotel = "Hotel",
  WiFi = "Wi-Fi",
  FoodAndDrink = "Food & Drink",
  Shop = "Shop"
}

// Props type definitions.
type Props = { facility: Facility };

/**
 * Component to return the facility icon and type.
 *
 * @param facility the type of facility.
 * @returns a component with the facility icon and display name.
 */
export default function FacilityIcon({ facility }: Props) {
  return (
    <Flex
      direction="row"
      alignItems="center"
      bgColor="gray.50"
      p={1}
      mr={2}
      borderColor="borderColor"
      borderWidth={1}
      borderRadius={5}
    >
      <IconSwitcher facility={facility} />
      <Text px={1}>{facility}</Text>
    </Flex>
  );
}

/**
 * Switch function to return the correct MaterialIcon type.
 *
 * @param facility the type of facility.
 * @returns an icon representing the facility.
 */
function IconSwitcher({ facility }: Props) {
  switch (facility) {
    case Facility.Toilets:
      return <MaterialCommunityIcons name="toilet" size={24} color="black" />;
    case Facility.CarPark:
      return <MaterialCommunityIcons name="parking" size={24} color="black" />;
    case Facility.Camping:
      return <MaterialCommunityIcons name="campfire" size={24} color="black" />;
    case Facility.Hotel:
      return <MaterialIcons name="hotel" size={24} color="black" />;
    case Facility.WiFi:
      return <MaterialIcons name="wifi" size={24} color="black" />;
    case Facility.FoodAndDrink:
      return <MaterialCommunityIcons name="food-fork-drink" size={24} color="black" />;
    case Facility.Shop:
      return <MaterialIcons name="shopping-cart" size={24} color="black" />;
    default:
      return <MaterialCommunityIcons name="alert-circle-outline" size={24} color="black" />;
  }
}
