/**
 * Last modified: 26-07-2023
 * Modifying author: Stephen Lunt
 * File description: React component for the vertical progress bar
 * used on the Guidebook screen.
 */

import { Flex, Box } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

type Props = {
  percentage: number;
};

/**
 * The progress bar component uses a percentage representing the route completion
 * and relative/absolute position UI elements to create the visual effect of
 * a vertical scroll bar which updates as the route goes on.
 */
export default function ProgressBar({ percentage }: Props) {
  const [adjustedPercentage, setAdjustedPercentage] = useState<number>(2);

  /**
   * When the percentage prop is updated from it's root component in
   * Guidebook.tsx, we apply an adjustment on it. This is purely stylistic
   * to fix visual bugs at the upper/lower end of the scroll bar.
   */
  useEffect(() => {
    if (percentage < 2) {
      setAdjustedPercentage(2);
    } else if (percentage > 100) {
      setAdjustedPercentage(100);
    } else {
      setAdjustedPercentage(percentage);
    }
  }, [percentage]);

  return (
    <Box position="relative" height="full" width={7} mx={2}>
      <Flex position="absolute" left={3} bgColor="gray.200" height="full" width={2} borderRadius={10} />
      <Flex
        position="absolute"
        left={3}
        zIndex={10}
        bgColor="green.700"
        height={`${adjustedPercentage}%`}
        width={2}
        borderRadius={10}
        justifyContent="flex-end"
      />
      <Flex
        position="absolute"
        left={0.5}
        zIndex={50}
        height={`${adjustedPercentage}%`}
        width={7}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Flex
          width={7}
          height={7}
          bgColor="white"
          borderColor="borderColor"
          borderWidth={1}
          borderRadius={100}
          alignItems="center"
          justifyContent="center"
          justifyItems="center"
        >
          <MaterialCommunityIcons name="bus" size={24} color="black" />
        </Flex>
      </Flex>
    </Box>
  );
}
