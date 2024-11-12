import { Pressable, Text, View, Image } from "react-native";

export default function ItemsOptions({ children }) {
    return (
        <Pressable className="rounded-3xl w-28 h-28 m-4 active:scale-95 px-1 bg-white">
            <Image
                className="w-24 h-24"
                source={
                    require('../../../assets/img/vaca.png')
                }
            />
        </Pressable>

    )
}