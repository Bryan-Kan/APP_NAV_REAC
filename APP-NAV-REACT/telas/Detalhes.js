import React from "react";
import { Button, View, Text } from "react-native";

export default function DetalhesScreen ({navigation}){
    return(
        <View>
            <Text>Detalhes</Text>
            <Button 
                title="Voltar"
                onPress={()=> navigation.goBack()}
            />
        </View>
    );
}