import { Heading, Text, Link } from "native-base";

import type { Credit } from "../data/types";

type Props = {
  credits: Credit[];
};

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
