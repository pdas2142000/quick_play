/** React Imports */
import React from 'react'
import { View } from 'react-native'

/** Components */
import Layout from '../../components/layout'
import BannerList from '../../components/banner'

/** Data */
import { quick_play } from '../../utils/constant'

/** Main Export */
const VideoScreen = () => {
    
    const LongPress = ()=>{
        console.log("helo i am quick play")
    }

    return (
        <Layout>
            {
                quick_play.video_data.map((item, index) => {
                    const isLastItem = index === quick_play.video_data.length - 1
                    return (
                        < View key={index}>
                            <BannerList
                                {...{
                                    item,
                                    pressLong:LongPress,
                                    isLastItem
                                }}
                            />
                        </View>
                    )
                })
            }
        </Layout>
    )
}

export default VideoScreen