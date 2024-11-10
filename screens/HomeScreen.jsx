import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';


export default function Overview() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen Views</Text>
    </View>
  );
}
