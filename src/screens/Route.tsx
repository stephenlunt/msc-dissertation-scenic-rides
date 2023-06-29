import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box } from 'native-base';
import { RootStackParamList } from '../../App';

/**
 * https://reactnavigation.org/docs/typescript/
 */
type Props = NativeStackScreenProps<RootStackParamList, 'Route'>;

export default function Route({ route, navigation }: Props) {
  const { routeId } = route.params;
  return <Box>{routeId}</Box>;
}
