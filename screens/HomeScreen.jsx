import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ItemsOptions from 'components/atoms/ItemsOptions/ItemsOptions';
import { StyleSheet, Text, View } from 'react-native';


export default function Overview() {
  const navigation = useNavigation();

  return (
    <View className='flex-col items-center mt-10 border'>
      <Text className='text-gray-400 font-bold text-2xl'>HomeScreen Views</Text>
      <View className='flex-row flex-wrap border justify-around '>
        <ItemsOptions>1</ItemsOptions>
        <ItemsOptions>2</ItemsOptions>
        <ItemsOptions>3</ItemsOptions>
        <ItemsOptions>4</ItemsOptions>
        <ItemsOptions>5</ItemsOptions>
        <ItemsOptions>6</ItemsOptions>
        <ItemsOptions>7</ItemsOptions>
        <ItemsOptions>8</ItemsOptions>
      </View>
    </View>
  );
}
