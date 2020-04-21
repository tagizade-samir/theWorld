import React from 'react'
import {Signinstyles} from '../../Style'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export const FromInput = (props) => {
    return (
        <View style={Signinstyles.formInput}>
            <TextInput
                style={[Signinstyles.input, {color: props.colorText}]} placeholder={'Username or email'}
                onChangeText={props.onUsernameChange}
                value={props.usernameInput}
            />
            <TextInput
                autoCompleteType={'password'}
                style={[Signinstyles.inputPass, {color: props.colorPass}]}
                placeholder={'Password'}
                textContentType={'newPassword'}
                secureTextEntry={true}
                onChangeText={props.onPasswordChange}
                value={props.passwordInput}
            />
        </View>
    )
}