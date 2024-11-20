/** React Imports */
import React from 'react'
import { StyleSheet, View } from 'react-native'

/** Components */
import Layout from '../../components/layout'
import BannerList from '../../components/banner'

/** Data */
import { quick_play } from '../../utils/constant'
import { useNavigation } from '@react-navigation/native'

/** Main Export */
const VideoScreen = () => {

    const Navigation = useNavigation()

    const VideoClick = () => {
        Navigation.navigate("viewscreen")
    }

    return (
        <>
            <Layout>
                {
                    quick_play.video_data.map((item, index) => {
                        const isLastItem = index === quick_play.video_data.length - 1
                        return (
                            < View key={index}>
                                <BannerList
                                    {...{
                                        item,
                                        pressLong: VideoClick,
                                        isLastItem
                                    }}
                                />
                            </View>
                        )
                    })
                }
            </Layout>
            {/* <View style={styles.background}>

            </View> */}
        </>
    )
}

export default VideoScreen

const styles = StyleSheet.create({
    background:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode:"cover",
        backgroundColor:"red",
    }
});