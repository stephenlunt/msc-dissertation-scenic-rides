/**
 * Last modified: 10-07-2023
 * Modifying author: Stephen Lunt
 * File description: A reusable image component.
 */

import { Box, Image, Heading, Text } from "native-base";
import { ImageSourcePropType } from "react-native";

// Image component props
type Props = {
  height: number;
  imgSrc: ImageSourcePropType;
  imgAlt: string;
  heading?: string;
  innerText?: string;
};

/**
 * Returns an image sized for mobile with an optional heading and text field.
 */
export default function ImageCard({ imgSrc, imgAlt, heading, innerText, height }: Props) {
  return (
    <>
      <Image source={imgSrc} alt={imgAlt} maxHeight={height} borderRadius={10} />
      {heading || innerText ? (
        <Box position="absolute" zIndex={10} bottom={0} width="100%" p={2} backgroundColor="transparentBlack">
          {heading && <Heading color="white">{heading}</Heading>}
          {innerText && <Text color="white">{innerText}</Text>}
        </Box>
      ) : null}
    </>
  );
}
