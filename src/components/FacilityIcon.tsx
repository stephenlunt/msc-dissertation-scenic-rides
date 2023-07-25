import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Flex, Text } from "native-base";

export enum Facility {
  Toilets = "Toilets",
  CarPark = "Car Park",
  Camping = "Camping",
  Hotel = "Hotel"
}

type Props = { facility: Facility };

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
    default:
      return <MaterialCommunityIcons name="alert-circle-outline" size={24} color="black" />;
  }
}
