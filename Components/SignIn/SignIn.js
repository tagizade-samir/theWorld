import React from 'react'
import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import {Signinstyles} from '../Style'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { FromInput } from './FormInput/FromInput'

export class SignIn extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            username: 'admin',
            password: 'deveducation',
            email: 'admin@deveducation.com',
            usernameInput:  '',
            passwordInput: '',
            colorText: 'black',
            colorPass: 'black'
        }
    }

    onUsernameChange = (text) => {
        this.setState({
            usernameInput: text
        })
    }

    onPasswordChange = (text) => {
        this.setState({
            passwordInput: text
        })
    }

    signIn = () => {
        const {usernameInput, passwordInput, email, username, password} = this.state
        if (usernameInput !== '' || passwordInput !== '') {
            if ((usernameInput == username || usernameInput == email) && passwordInput == password) {
                this.setState({usernameInput: ''})
                this.setState({passwordInput: ''})
                this.props.navigation.navigate('Home')
            } else {
                console.log('wrong')
            }
        } else {
            console.log('Username or password is empty')
        }
    }

    render() {
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

        return(
            <SafeAreaView style={{flex: 1}}>
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
                        <FromInput
                            onPasswordChange={this.onPasswordChange}
                            onUsernameChange={this.onUsernameChange}
                            usernameInput={this.state.usernameInput}
                            passwordInput={this.state.passwordInput}
                            colorText={this.state.colorText}
                            colorPass={this.state.colorPass} />
                        <View style={fromBtn}>
                            <TouchableOpacity style={signInBtn} onPress={this.signIn}>
                                <Text style={{textTransform: 'uppercase'}} >Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}