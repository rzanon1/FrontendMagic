import * as React from 'react';
import {View, Text} from 'react-native';


export default function DecksScreen({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => navigation.navigate('Inicio')}
            style={{fontSize: 26, fontWeight: 'bold'}}>Decks</Text>
        </View>


    );
}