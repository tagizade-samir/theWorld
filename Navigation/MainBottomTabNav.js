import React from 'react'
import { Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MainTopTabNav } from './MainTopTabNav'
import { Profile } from '../Components/Profile/Profile'
import { Settings } from '../Components/Settings/Settings'

const RootBottomTabNav = createBottomTabNavigator()

export const MainBottomTabNav = ({data}) => {
    return(
        <RootBottomTabNav.Navigator
            tabBarOptions={{
                labelStyle: {
                    fontSize: 15,
                    textAlign: 'center',
                },
                activeBackgroundColor: 'white',
                inactiveBackgroundColor: 'lightgray',
                activeTintColor: 'steelblue',
                inactiveTintColor: 'black',
            }}>
            <RootBottomTabNav.Screen name='Posts' component={MainTopTabNav} />
            <RootBottomTabNav.Screen
                name='Profile'
                component={Profile}
                initialParams={{data}} />
            <RootBottomTabNav.Screen name='Settings' component={Settings} />
        </RootBottomTabNav.Navigator>
    )
}