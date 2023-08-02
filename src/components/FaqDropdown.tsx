/**
 * Last modified: 31-07-2023
 * Modifying author: Stephen Lunt
 * File description: Reusable React component featuring a heading and answer
 * that reveals/hides on click.
 */

import { useState } from "react";
import { Box, Heading, Pressable, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  heading: string;
  children: JSX.Element;
};

export default function FaqDropdown({ heading, children }: Props) {
  const [expanded, setExpanded] = useState<boolean>(false);

  function toggleExpanded() {
    setExpanded((prevValue) => !prevValue);
  }

  return (
    <Box my={2}>
      <Pressable
        onPress={toggleExpanded}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderTopColor="borderColor"
        borderTopWidth={1}
        py={1}
      >
        <Text fontWeight="bold" fontSize="lg" maxWidth="3/4">
          {heading}
        </Text>
        {expanded ? (
          <MaterialIcons name="arrow-drop-up" size={32} color="black" />
        ) : (
          <MaterialIcons name="arrow-drop-down" size={32} color="black" />
        )}
      </Pressable>
      {expanded ? children : null}
    </Box>
  );
}
