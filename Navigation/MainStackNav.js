import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {SignIn} from '../Components/SignIn/SignIn'
import {Home} from '../Components/Home/Home'

const RootMainStackNav = createStackNavigator()

export const MainStackNav = () => {
    return(
        <RootMainStackNav.Navigator>
            <RootMainStackNav.Screen
                options={{headerShown: false}}
                name='SignIn'
                component={SignIn} />
            <RootMainStackNav.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}} />
        </RootMainStackNav.Navigator>
    )
}