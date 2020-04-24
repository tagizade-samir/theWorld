import React from 'react'
import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import { Signinstyles } from '../Style'
import { TextInput, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {userLogin} from '../../Redux/userActions'

const SignIn = (props) => {
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

    let usernameInput = '', passInput = ''

    const loginCheck = () => {
        if (usernameInput == props.username && passInput == props.password) {
            props.userLogin(true)
        }
    }

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
                            style={[Signinstyles.input]}
                            placeholder={'Username or email'}
                            onChangeText={(text) => usernameInput = text}
                        />
                        <TextInput
                            autoCompleteType={'password'}
                            style={[Signinstyles.inputPass]}
                            placeholder={'Password'}
                            textContentType={'newPassword'}
                            secureTextEntry={true}
                            onChangeText={(text) => passInput = text}
                        />
                    </View>
                    <View style={fromBtn}>
                        <TouchableOpacity style={signInBtn} onPress={loginCheck} >
                            <Text style={{ textTransform: 'uppercase' }} >Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const mapStateToProps =function (state)  {
    return {
        username: state.username,
        password: state.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLogin: (value) => {
            dispatch(userLogin(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)