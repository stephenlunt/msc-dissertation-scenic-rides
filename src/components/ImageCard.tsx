import { Box, Image, Heading, Text } from "native-base";
import { ImageSourcePropType } from "react-native";

type Props = {
  height: number;
  imgSrc: ImageSourcePropType;
  imgAlt: string;
  heading?: string;
  innerText?: string;
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
      <Image
        source={imgSrc}
        alt={imgAlt}
        maxWidth={360}
        maxHeight={height}
        borderRadius={10}
      />
      {heading || innerText ? (
        <Box
          position="absolute"
          zIndex={10}
          bottom={0}
          width="100%"
          p={2}
          backgroundColor="transparentBlack"
        >
          {heading && <Heading color="white">{heading}</Heading>}
          {innerText && <Text color="white">{innerText}</Text>}
        </Box>
      ) : null}
    </>
  );
}
