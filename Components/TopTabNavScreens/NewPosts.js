import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Post } from './PostItem/Post'
import {NewPostsData} from '../Data/Data'

export const NewPosts = () => {
    const Posts = NewPostsData.map(post => 
        <Post
            name={post.name}
            likes={post.Likes}
            text={post.Text}
            key={post.id}
            color={'darkgreen'} />)

    return(
        <SafeAreaView style={{flex: 1}}>
           <ScrollView style={{paddingLeft: 10, paddingRight: 10}}>
               {Posts}
           </ScrollView>
       </SafeAreaView>
    )
}