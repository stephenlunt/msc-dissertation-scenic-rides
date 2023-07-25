/**
 * Last modified: 22-07-2023
 * Modifying author: Stephen Lunt
 * File description: Shared TypeScript types exported to the remainder of the application.
 */

import { ImageSourcePropType } from "react-native";

/**
 * A latitude and longitude point.
 */
export type Coordinate = {
  lat: number;
  long: number;
};

/**
 * An accreditation containing a display friendly text and linking URL.
 */
export type Credit = {
  displayText: string;
  linkingUrl: string;
};

/**
 * An accreditation for images.
 */
export type ImageCredit = {
  imgSrc: ImageSourcePropType;
  displayText: string;
  linkingUrl?: string;
};
