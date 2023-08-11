/**
 * Last modified: 01-08-2023
 * Modifying author: Stephen Lunt
 * File description: React component for the Help screen, it acts as a FAQ user manual
 * for the application.
 */

import { ScrollView, Text } from "native-base";

import FaqDropdown from "../components/FaqDropdown";

/**
 * The React default component export for the help screen.
 *
 * @returns the help screen component.
 */
export default function Help() {
  return (
    <ScrollView mx={4} pb={4}>
      <Text my={2}>
        If you require assistance with our application, please refer to our list of frequently asked questions provided
        below.
      </Text>

      <FaqDropdown heading="How do I view information on a bus route?">
        <Text>
          To view a specific bus route, from the home screen click on the image with the bus number or route name you'd
          like to view. This will take you to a page with additional information on the route.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="Do you provide an accurate bus timetable?">
        <Text>
          We only provide a rough timetable for routes detailing how often buses depart. This is because bus operators
          could change timetables at short notice, therefore, always check the link provided for an up-to-date timetable
          from the bus operator to avoid disappointment.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="How do I access a buses guidebook?">
        <Text>
          From a bus routes page, click the box titled "Route Guidebook" to view the guidebook. The guidebook will show
          you a list of stops and attractions along the route.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="How does the guidebook work?">
        <Text>
          The guidebook uses your device location to show your position along the bus route in relation to nearby
          attractions and stops. Use it to see what's upcoming on the route and where you can visit in the local area.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="How do I change my direction of travel?">
        <Text>
          To change your direction of travel on the guidebook screen, click the switch icon in the top right corner. You
          should see the title of the route swap the origin and destination locations if successful.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="Do I need to give you my location to use the app?">
        <Text>
          No, allowing the application to access your device location is completely optional. However, if you do decide
          to not grant permission, some location features such as route tracking will be disabled. This setting can be
          changed in your device settings at any time.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="How do I see what's at the bus stations/stops?">
        <Text>
          Bus stations and stops without an attraction will have a small piece of text explaining what's at the stop
          including its facilities such as toilet, food and drink, or hotels to stay.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="How do I view more about an attraction?">
        <Text>
          To view more about an individual attraction, click on its picture from the guidebook screen. This will take
          you to a new screen containing a description of the attraction and other useful information like its opening
          time and contact details.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="Do you provide opening times for attractions?">
        <Text>
          Yes, if opening times can be found on the attraction's website we will display them in the app. Some unmanned
          rural attractions may display as "opening during any reasonable hours" where set hours are not provided.
          Always check the attraction's website for the most up-to-date hours to avoid disappointment.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="Are attractions free to enter?">
        <Text>
          We list attractions as free to enter if the attraction's website confirms this. However, always check an
          official website before visiting to get the most accurate and up-to-date information.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="How do I contact an attraction?">
        <Text>
          Each attraction's contact details are provided on the attraction-specific screen. If no details are provided,
          this means we could not find any ourselves to list.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="How can I get to the attraction's website?">
        <Text>
          For each attraction listed in our application, we provide a link to its website so you can find out more about
          where we got our information from and read more yourself.
        </Text>
      </FaqDropdown>

      <FaqDropdown heading="Do I need a mobile signal to use the app?">
        <Text>No. Our application is capable of working offline, regardless of how rural your route may be.</Text>
      </FaqDropdown>
    </ScrollView>
  );
}
