import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import Layout from '../../components/layout';
import { quick_play } from '../../utils/constant';

const VideoScreen = () => {
    return (
        <Layout>
            {/* {
                quick_play.video_data.map((item,index)=>{
                    return(
                        <View key={index}>
                            <Text>hello</Text>
                        </View>
                    )
                })
            } */}
            
        </Layout>
    );
}

export default VideoScreen;

const styles = StyleSheet.create({
    qp_image_box: {
        width: 100,
        height: 100,
    },
    qp_img:{
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
});
