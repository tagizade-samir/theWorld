import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Post } from './PostItem/Post'
import {BestPostsData} from '../Data/Data'

export const BestPosts = () => {
    const Posts = BestPostsData.map(post => 
        <Post
            name={post.name}
            likes={post.Likes}
            text={post.Text}
            key={post.id}
            color={'darkgoldenrod'} />)

    return(
        <SafeAreaView style={{flex: 1}}>
           <ScrollView style={{paddingLeft: 10, paddingRight: 10}}>
               {Posts}
           </ScrollView>
       </SafeAreaView>
    )
}