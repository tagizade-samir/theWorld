import React from 'react'
import { View, Image, Text } from 'react-native'
import { PostsStyles } from '../../Style'

export const Post = (props) => {
    return(
        <View style={[PostsStyles.container, {backgroundColor: props.color}]}>
            <View style={PostsStyles.headLeft}>
                <Image source={require('../../assets/postImage.jpg')} style={PostsStyles.img} />
            </View>
            <View style={PostsStyles.headRight}>
                <Text>{props.name}</Text>
                <Text>{props.text}</Text>
                <Text>Likes: {props.likes}</Text>
            </View>
        </View>
    )
}