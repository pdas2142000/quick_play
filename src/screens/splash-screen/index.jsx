import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { ms } from '../../utils/helpers/metrics';

const SplashScreen = () => {
    return (
        <View style={styles.qp_container}>
            <View style={styles.qp_image_box}>
                <Image style={styles.qp_img} source={require("../../../assets/image/quick_play_logo.png")} />
            </View>
            <View style={{marginLeft:ms(20)}}>
                <ActivityIndicator size="small" />
            </View>
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    qp_container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    qp_image_box: {
        width: ms(260),
        height: ms(100),
    },
    qp_img: {
        width: "100%",
        height: "100%"
    }
});
