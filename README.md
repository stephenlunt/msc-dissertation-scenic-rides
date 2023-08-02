# Scenic Rides

Scenic Rides is a mobile guidebook for scenic bus routes in the North East of England. It's a React Native project for iOS and Android mobile devices.


## Project Commands

Before running the project, you must have the core dependencies installed. This includes [Node.js](https://nodejs.org/en) and a emulator (such as [Xcode](https://developer.apple.com/xcode/) or [Android Studio](https://developer.android.com/studio)).

### Development environment

To start a development environment run the following commands:

- Android: `npm run android`
- iOS: `npm run ios`

The development app can be access through a emulator or the Expo Go mobile app.

### Testing

Use the following command to run Jest unit tests:

- Testing: `npm run test`


### Build

TODO: ...


## Project structure

```
$ ROOT
│   # Application entrypoint
├── App.tsx
│
│   # Source code files
├── src
│   │   # Assets compiled into the application
│   ├── assets
│   │   # Reusable React components
│   ├── components
│   │   # Application data store
│   ├── data
│   │   # Application screens (pages)
│   ├── screens
│   │   # Helper functions
│   └── util
│
│   # Configuration files
├── .prettierrc.js
├── app.json
├── babel.config.js
├── package.json
└── tsconfig.json
```

## File Header Template
```
/**
 * Last modified: XX-XX-XXXX
 * Modifying author: ...
 * File description: ...
 */
```

## Open Source Libraries and Accreditations

Open source software used in the production of this application:

- React Native, MIT Licence, [Website](https://reactnative.dev/), [GitHub](https://github.com/facebook/react-native)
- Expo, MIT Licence, [Website](https://expo.dev/home), [GitHub](https://github.com/expo/expo)
- Native Base, MIT Licence, [Website](https://nativebase.io/), [GitHub](https://github.com/GeekyAnts/nativebase)
- React Navigation, MIT Licence, [Website](https://reactnavigation.org/), [GitHub](https://github.com/react-navigation/react-navigation)

The following accreditations are represent a complete list of sources and tools that were used for production
of content (text, images, maps, data points) for this application:

- [Go North East - AD122](https://www.gonortheast.co.uk/ad122/) - Route information and an image of the AD122 bus.
- [Go North East - AD122 Timetable](https://www.gonortheast.co.uk/services/GNE/AD12) - For timetable information on the bus route.
- [Google My Maps](https://www.google.com/mymaps) - For plotting and visualisation of data points, as well as static map images for attractions.
- [Canva](https://www.canva.com/) - For design of application graphics.
- [Northern Rail](https://www.northernrailway.co.uk/) - For information on Hexham and Haltwhistle train stations.
- [The Hadrian Hotel](https://www.hadrianhotel.co.uk/) - Information on The Hadrian Hotel.
- [George Hotel](https://bespokehotels.com/the-george-hotel/) - Information on the George Hotel.
- [Herding Hill Farm](https://www.herdinghillfarm.co.uk/) - Information on the Herding Hill Farm campsite.
- [Greenhead Hotel](https://www.greenheadbrampton.co.uk/) - Information on the Greenhead Hotel.
- [Hexham Abbey](https://www.hexhamabbey.org.uk/) - Information and images of Hexham Abbey.
- [English Heritage](https://www.english-heritage.org.uk/) - Information and images on the following attractions: Chesters Bridge, Brunton Turret, Planetrees Roman Wall, Chesters Roman Fort, Temple of Mithras, Housesteads Roman Fort, Cawfields, and Milecastle 42.
- [The Sill](https://www.thesill.org.uk/) - Information and images of The Sill Museum.
- [Vindolanda](https://www.vindolanda.com/) - Information and images of Vindolanda and the Roman Army Museum.
- [Roman Britain](https://www.roman-britain.co.uk/places/cawfields/) - Information and images of Cawfields.
- [Roman Army Museum](https://romanarmymuseum.com/) - Information and images of the Roman Army Museum.
- [Northumberland National Park](https://www.northumberlandnationalpark.org.uk/places-to-visit/hadrians-wall/thirlwall-castle/) - Information and images of Thirlwall Castle.