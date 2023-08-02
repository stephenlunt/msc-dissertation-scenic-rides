/**
 * Last modified: 01-08-2023
 * Modifying author: Stephen Lunt
 * File description: React component for the About screen.
 */

import { ScrollView, Heading, Text, Flex, Link } from "native-base";

export default function About() {
  return (
    <ScrollView mx={4} pb={4}>
      <Heading py={4} textAlign="center">
        About the App
      </Heading>
      <Text mb={4}>
        Scenic Rides is a mobile guidebook for scenic bus routes in England. We hope to help enhance your journey by
        providing relevant information about local towns and attractions along the route, all in an easy-to-access place
        on your mobile phone.
      </Text>
      <Text mb={4} color="gray.700">
        Version: 1.0.0
      </Text>

      <Heading>Open source libraries</Heading>
      <Flex mb={4}>
        <Link href="https://reactnative.dev/">React Native (MIT)</Link>
        <Link href="https://expo.dev/home">Expo (MIT)</Link>
        <Link href="https://nativebase.io/">Native Base (MIT)</Link>
        <Link href="https://reactnavigation.org/">React Navigation (MIT)</Link>
      </Flex>

      <Heading>All accreditations</Heading>
      <Flex mb={4}>
        <Link href="https://www.gonortheast.co.uk/ad122/">Go North East</Link>
        <Link href="https://www.google.com/mymaps">Google My Maps</Link>
        <Link href="https://www.canva.com/">Canva</Link>
        <Link href="https://www.northernrailway.co.uk/">Northern Rail</Link>
        <Link href="https://www.hadrianhotel.co.uk/">The Hadrian Hotel</Link>
        <Link href="https://bespokehotels.com/the-george-hotel/">George Hotel</Link>
        <Link href="https://www.herdinghillfarm.co.uk/">Herding Hill Farm</Link>
        <Link href="https://www.greenheadbrampton.co.uk/">Greenhead Hotel</Link>
        <Link href="https://www.hexhamabbey.org.uk/">Hexham Abbey</Link>
        <Link href="https://www.english-heritage.org.uk/">English Heritage</Link>
        <Link href="https://www.thesill.org.uk/">The Sill</Link>
        <Link href="https://www.vindolanda.com/">Vindolanda</Link>
        <Link href="https://www.roman-britain.co.uk/places/cawfields/">Roman Britain</Link>
        <Link href="https://romanarmymuseum.com/">Roman Army Museum</Link>
        <Link href="https://www.northumberlandnationalpark.org.uk/places-to-visit/hadrians-wall/thirlwall-castle/">
          Northumberland National Park
        </Link>
      </Flex>
    </ScrollView>
  );
}
