import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-ionicons';

import HomeScreen from './screens/homeScreen';
import DecksScreen from './screens/decksScreen';
import ConfigScreen from './screens/configScreen';

const nomeInicio = 'Inicio';
const nomeDecks = 'Decks';
const nomeConfig = 'Config';

const Tab = createBottomTabNavigator();


export default function MainContainer(){
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={nomeInicio}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn == nomeInicio){
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn == nomeDecks ) {
                        iconName = focused ? 'albums' : 'albums-outline'
                    } else if (rn == nomeConfig ){
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}
            }}
            
            >

                <Tab.Screen name={nomeInicio} component={HomeScreen}/>
                <Tab.Screen name={nomeDecks} component={DecksScreen}/>  
                <Tab.Screen name={nomeConfig} component={ConfigScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}