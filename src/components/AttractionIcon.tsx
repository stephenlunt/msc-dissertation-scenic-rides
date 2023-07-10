import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Flex, Text } from "native-base";

export enum AttractionCategory {
  Castle,
  Church,
  Museum,
  Wall
}

type IconProps = { attraction: AttractionCategory; name: string };
type IconSwitcherProps = { attraction: AttractionCategory };

export default function AttractionIcon({ attraction, name }: IconProps) {
  return (
    <Flex direction="row" alignItems="center">
      <IconSwitcher attraction={attraction} />
      <Text pl={1} fontWeight="bold">
        {name}
      </Text>
    </Flex>
  );
}

function IconSwitcher({ attraction }: IconSwitcherProps) {
  switch (attraction) {
    case AttractionCategory.Castle:
      return <MaterialCommunityIcons name="castle" size={24} color="black" />;
    case AttractionCategory.Museum:
      return <MaterialIcons name="museum" size={24} color="black" />;
    case AttractionCategory.Wall:
      return <MaterialCommunityIcons name="wall" size={24} color="black" />;
    case AttractionCategory.Church:
      return <MaterialCommunityIcons name="church" size={24} color="black" />;
    default:
      return (
        <MaterialCommunityIcons
          name="alert-circle-outline"
          size={24}
          color="black"
        />
      );
  }
}
