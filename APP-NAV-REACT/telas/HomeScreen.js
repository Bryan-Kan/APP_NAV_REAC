import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen ({navigation}){
    return(
        <View>
            <Text>Home Screen</Text>
            <Button 
                title="Ir para Detalhes"
                onPress={()=> navigation.navigate('Detalhes')}
            />
        </View>
    );
}