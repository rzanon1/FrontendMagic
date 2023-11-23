import * as React from 'react';
import {View, Text} from 'react-native';


export default function ConfigScreen({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => navigation.navigate('Inicio')}
            style={{fontSize: 26, fontWeight: 'bold'}}>Configurações</Text>
        </View>


    );
}