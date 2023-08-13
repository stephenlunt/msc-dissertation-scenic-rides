/**
 * Last modified: 01-08-2023
 * Modifying author: Stephen Lunt
 * File description: Reusable error message component.
 */

import { View, Heading, Button, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../App";

type Props = {
  msg: string;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function ErrorMessage({ msg }: Props) {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View>
      <Heading py={4} textAlign="center">
        Error
      </Heading>
      <Text px={4} textAlign="center">
        {msg}
      </Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        display="flex"
        justifyContent="center"
        bgColor="gray.200"
        px={4}
        m={4}
        borderColor="gray.300"
        borderWidth={1}
      >
        <Text fontWeight="bold">Return Home</Text>
      </Button>
    </View>
  );
}
