import React from 'react'
import {StyleSheet} from 'react-native'
import {Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const ProfileStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 40
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        marginRight: 20
    },
})

export const PostsStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginBottom: 10
    },
    headLeft: {
        flex: 1,
        alignItems: 'center'
    },
    headRight: {
        flex: 3,
        paddingLeft: 20,
        justifyContent: 'space-between'
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    }
})

export const Signinstyles = StyleSheet.create({
    signInContainer: {
        flex: 1,
        backgroundColor: 'dimgray'
    },
    signInForm: {
        flex: 2,
        justifyContent: 'flex-start'
    },
    signInHead: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headImg: {

    },
    headText: {
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    },
    formInput: {
        alignItems: 'center'
    },
    fromBtn: {
        alignItems: 'center'
    },
    img: {
        width: 150,
        height: 170,
        resizeMode: 'contain',
    },
    input: {
        backgroundColor: 'white',
        width: 250,
        height: 40,
        marginBottom: 5,
        paddingLeft: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    inputPass: {
        backgroundColor: 'white',
        width: 250,
        height: 40,
        marginBottom: 10,
        paddingLeft: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    signInBtn: {
        backgroundColor: 'goldenrod',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 10
    }
})