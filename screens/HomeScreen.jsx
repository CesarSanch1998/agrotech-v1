import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';


export default function Overview() {
  const navigation = useNavigation();

  return (
    <View className='flex-row justify-center mt-10'>
      <Text className='text-gray-400 font-bold text-2xl'>HomeScreen Views</Text>
    </View>
  );
}
