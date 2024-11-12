import { Pressable, Text, View } from "react-native";

export default function ItemsOptions({children}){
    return(
            <Pressable className="border rounded-md w-5/12 m-4 active:bg-slate-300">
                <Text className="text-6xl text-center p-8">{children}</Text>
            </Pressable>
            
    )
}