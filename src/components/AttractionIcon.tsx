import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Flex, Text } from "native-base";

export enum AttractionCategory {
  Castle = "Castle",
  Church = "Church",
  Museum = "Museum",
  Wall = "Wall"
}

type IconProps = { attraction: AttractionCategory; name: string };
type IconSwitcherProps = { attraction: AttractionCategory; color: string };

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

export function AttractionIconSwitcher({
  attraction,
  color
}: IconSwitcherProps) {
  switch (attraction) {
    case AttractionCategory.Castle:
      return <MaterialCommunityIcons name="castle" size={24} color={color} />;
    case AttractionCategory.Museum:
      return <MaterialIcons name="museum" size={24} color={color} />;
    case AttractionCategory.Wall:
      return <MaterialCommunityIcons name="wall" size={24} color={color} />;
    case AttractionCategory.Church:
      return <MaterialCommunityIcons name="church" size={24} color={color} />;
    default:
      return (
        <MaterialCommunityIcons
          name="alert-circle-outline"
          size={24}
          color={color}
        />
      );
  }
}
