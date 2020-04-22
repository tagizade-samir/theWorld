import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs' 
import { HotPosts } from '../Components/TopTabNavScreens/HotPosts'
import { NewPosts } from '../Components/TopTabNavScreens/NewPosts'
import { BestPosts } from '../Components/TopTabNavScreens/BestPosts'

const RootTopTabNav = createMaterialTopTabNavigator()

export const MainTopTabNav = () => {
    return(
        <RootTopTabNav.Navigator>
            <RootTopTabNav.Screen name='Hot' component={HotPosts} />
            <RootTopTabNav.Screen name='New' component={NewPosts} />
            <RootTopTabNav.Screen name='Best' component={BestPosts} />
        </RootTopTabNav.Navigator>
    )
}