import React, { useEffect, useRef, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const ViewScreen = () => {

    const videoRef = useRef(null);
    const [isLandscape, setIsLandscape] = useState(false);
    const background = require('../../../../assets/video/SampleVide.mp4');


  
    useEffect(() => {
        // Lock to landscape on mount
        Orientation.lockToLandscape();

        // Add listener for orientation change
        const orientationChangeListener = Orientation.addOrientationListener((orientation) => {
            if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
                setIsLandscape(true);
            } else if (orientation === 'PORTRAIT') {
                setIsLandscape(false);
            }
        });

        // Cleanup listener and unlock orientation on unmount
        return () => {
            Orientation.removeOrientationListener(orientationChangeListener);
            Orientation.unlockAllOrientations();
        };
    }, []);

    return (
        <>
        <SafeAreaView style={{backgroundColor:"red"}}/>
            <Video
                source={background}
                ref={videoRef}
                style={styles.backgroundVideo}
            />
        </>
    );
}

export default ViewScreen;

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode: "cover"
    },
});