import { Flex, Box } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

type Props = {
  percentage: number;
};

export default function ProgressBar({ percentage }: Props) {
  // The adjusted percentage ensure correct visual alignment versus the raw percentage.
  const [adjustedPercentage, setAdjustedPercentage] = useState<number>();

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
          borderRadius="100%"
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
