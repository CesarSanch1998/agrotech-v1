import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from 'components/atoms/Header/Header';
import ItemsOptions from 'components/atoms/ItemsOptions/ItemsOptions';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


export default function Overview() {
  const navigation = useNavigation();

  return (
    <>
      <Header>

      </Header>
      <ImageBackground source={require('../assets/img/fondo.png')} resizeMode="cover" className='flex-1'>
      <View className='flex-col items-center mt-10'>
        
          <Text className='text-white font-bold text-2xl'>HomeScreen Views</Text>
          <View className='flex-row flex-wrap justify-around '>
            <ItemsOptions>1</ItemsOptions>
            <ItemsOptions>2</ItemsOptions>
            <ItemsOptions>3</ItemsOptions>
            <ItemsOptions>4</ItemsOptions>
            <ItemsOptions>5</ItemsOptions>
            <ItemsOptions>6</ItemsOptions>
            <ItemsOptions>7</ItemsOptions>
            <ItemsOptions>8</ItemsOptions>
            <ItemsOptions>9</ItemsOptions>
          </View>
          
      </View>
      </ImageBackground>
    </>
  );
}
