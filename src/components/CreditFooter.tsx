/**
 * Last modified: 22-07-2023
 * Modifying author: Stephen Lunt
 * File description: React component to credit sources used in the application.
 */

import { Heading, Text, Link } from "native-base";

import type { Credit } from "../data/types";

type Props = {
  credits: Credit[];
};

/**
 * Returns a heading and list of all credits passed in as props.
 *
 * @param credits a credit containing a link and display text.
 * @returns a footer component to cite all credits.
 */
export default function CreditFooter({ credits }: Props) {
  return (
    <>
      <Heading pt={4} pb={2}>
        Credit
      </Heading>
      <Text>Information for this page was sourced from:</Text>
      {credits.map((credit, index) => {
        return (
          <Link key={index} href={credit.linkingUrl}>
            {credit.displayText}
          </Link>
        );
      })}
    </>
  );
}
