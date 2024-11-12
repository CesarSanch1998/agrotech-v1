import { View,Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header(){
    return(
        <View className="flex-row bg-white h-20 pt-10 px-4 justify-between">
            <Text className="text-3xl font-bold">AGRO
                <Text className="text-green-600">TECH</Text>
            </Text>
            <FontAwesome name="gear" size={25} color="black" />
        </View>
    )
}