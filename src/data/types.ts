/**
 * Last modified: 22-07-2023
 * Modifying author: Stephen Lunt
 * File description: Shared TypeScript types exported to the remainder of the application.
 */

import { ImageSourcePropType } from "react-native";

/**
 * A latitude and longitude point class. A class is used here instead of a type
 * to validate coordinate points are correct.
 */
export class Coordinate {
  private lat: number;
  private long: number;

  public constructor(lat: number, long: number) {
    if (lat > 90 || lat < -90) {
      throw new Error("Invalid latitude value.");
    }

    if (long > 180 || long < -180) {
      throw new Error("Invalid longitude value.");
    }

    this.lat = lat;
    this.long = long;
  }

  public getLat(): number {
    return this.lat;
  }

  public getLong(): number {
    return this.long;
  }
}

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

/**
 * An emun representing inbound/outbound travel directions.
 */
export enum Direction {
  Outbound,
  Inbound
}
