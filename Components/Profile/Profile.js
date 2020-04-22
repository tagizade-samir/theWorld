import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import {ProfileStyles} from '../Style'

export const Profile = ({navigation, route}) => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={ProfileStyles.container}>
                <View style={ProfileStyles.avatar}>
                    <Image style={ProfileStyles.img} source={require('../assets/postImage.jpg')} />
                </View>
                <View style={ProfileStyles.desc}>
                    <Text>Name: Samir</Text>
                    <Text>Age: 24</Text>
                    <Text>Status: Learning React Native</Text>
                    <Text>Username: {route.params.data.username}</Text>
                    <Text>E-mail: {route.params.data.email} </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}