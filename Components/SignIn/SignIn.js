import React from 'react'
import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import { Signinstyles } from '../Style'
import { TextInput, TouchableOpacity } from 'react-native'

export const SignIn = (props) => {
    const {
        signInContainer,
        signInForm,
        signInHead,
        headImg,
        headText,
        fromBtn,
        img,
        signInBtn
    } = Signinstyles

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor={'dimgray'} barStyle={'light-content'} />
            <View style={signInContainer}>
                <View style={signInHead} >
                    <View style={headImg}>
                        <Image style={img} source={require('../assets/world.png')} />
                    </View>
                    <View>
                        <Text style={headText}>Around The World</Text>
                    </View>
                </View>
                <View style={signInForm} >
                    <View style={Signinstyles.formInput}>
                        <TextInput
                            style={[Signinstyles.input, {color: props.colorText}]} placeholder={'Username or email'}
                            value={props.usernameInput}
                            onChangeText={props.onUsernameChange}
                        />
                        <TextInput
                            autoCompleteType={'password'}
                            style={[Signinstyles.inputPass, {color: props.colorPass}]}
                            placeholder={'Password'}
                            textContentType={'newPassword'}
                            secureTextEntry={true}
                            value={props.passwordInput}
                            onChangeText={props.onPasswordChange}
                        />
                    </View>
                    <View style={fromBtn}>
                        <TouchableOpacity style={signInBtn} onPress={props.signIn}>
                            <Text style={{ textTransform: 'uppercase' }} >Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
