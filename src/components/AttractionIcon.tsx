/**
 * Last modified: 25-07-2023
 * Modifying author: Stephen Lunt
 * File description: React component to manage icons for attractions.
 */

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Flex, Text } from "native-base";

// Enum of acceptable icon types and user-friendly text.
export enum AttractionCategory {
  Castle = "Castle / Fort",
  Church = "Church",
  Museum = "Museum",
  Wall = "Wall Section / Ruin",
  FreeEntry = "Free Entry",
  PaidEntry = "Paid Entry"
}

// Props type definitions.
type IconProps = { attraction: AttractionCategory; name: string };
type IconSwitcherProps = { attraction: AttractionCategory; color: string };

/**
 * Component to return an icon and attraction type.
 *
 * @param attraction the type of attraction.
 * @param name the name of the attraction.
 * @returns reusable React component for attraction icons.
 */
export default function AttractionIcon({ attraction, name }: IconProps) {
  return (
    <Flex direction="row" alignItems="center">
      <AttractionIconSwitcher attraction={attraction} color="white" />
      <Text pl={1} fontWeight="bold" color="white" shadow={3}>
        {name}
      </Text>
    </Flex>
  );
}

/**
 * Switch function to return the correct icon type.
 *
 * @param attraction the type of attraction.
 * @param color the desired icon color.
 * @returns an icon representing the attraction type.
 */
export function AttractionIconSwitcher({ attraction, color }: IconSwitcherProps) {
  switch (attraction) {
    case AttractionCategory.Castle:
      return <MaterialCommunityIcons name="castle" size={24} color={color} />;
    case AttractionCategory.Museum:
      return <MaterialIcons name="museum" size={24} color={color} />;
    case AttractionCategory.Wall:
      return <MaterialCommunityIcons name="wall" size={24} color={color} />;
    case AttractionCategory.Church:
      return <MaterialCommunityIcons name="church" size={24} color={color} />;
    case AttractionCategory.FreeEntry:
      return <MaterialIcons name="money-off" size={24} color="black" />;
    case AttractionCategory.PaidEntry:
      return <MaterialIcons name="attach-money" size={24} color="black" />;
    default:
      return <MaterialCommunityIcons name="alert-circle-outline" size={24} color={color} />;
  }
}
