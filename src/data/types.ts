/**
 * Shared TypeScript types
 */

import { ImageSourcePropType } from "react-native";

/**
 * Latitude and longitude point.
 */
export type Coordinate = {
  lat: number;
  long: number;
};

/**
 * A accreditation containing a display friendly text and linking URL.
 */
export type Credit = {
  displayText: string;
  linkingUrl: string;
};

/**
 * A accreditation for images.
 */
export type ImageCredit = {
  imgSrc: ImageSourcePropType;
  displayText: string;
  linkingUrl: string;
};
