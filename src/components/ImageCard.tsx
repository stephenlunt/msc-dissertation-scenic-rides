import { Box, Image, Heading, Text } from "native-base";
import { ImageSourcePropType } from "react-native";

type Props = {
  imgSrc: ImageSourcePropType;
  imgAlt: string;
  heading?: string;
  innerText?: string;
  height: number;
};

export default function ImageCard({
  imgSrc,
  imgAlt,
  heading,
  innerText,
  height
}: Props) {
  return (
    <>
      <Image source={imgSrc} alt={imgAlt} maxWidth={400} maxHeight={height} />
      <Box
        position="absolute"
        zIndex={10}
        bottom={0}
        width="100%"
        p={2}
        backgroundColor="transparentBlack"
      >
        <Heading color="white">{heading}</Heading>
        <Text color="white">{innerText}</Text>
      </Box>
    </>
  );
}
