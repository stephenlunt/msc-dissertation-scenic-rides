import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Box, Button, Text } from 'native-base';

type routeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Route'>;

export default function AllRoutes() {
  const navigation = useNavigation<routeScreenProp>();

  return (
    <Box alignItems='center'>
      <Text>All Routes</Text>
      <Button
        onPress={() => navigation.navigate('Route', { routeId: 'AD112' })}
      >
        Go to route
      </Button>
    </Box>
  );
}
