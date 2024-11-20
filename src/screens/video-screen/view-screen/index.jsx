import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import { ms } from '../../../utils/helpers/metrics';
import LeftIcon from "../../../../assets/svgs/left.svg"
import { IconProps } from '../../../utils/helpers/Iconprops';
import { Colors, Fonts } from '../../../utils/styles';
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';

const ViewScreen = () => {

    const videoRef = useRef(null);
    const [isLandscape, setIsLandscape] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const background = require('../../../../assets/video/SampleVide.mp4');

    const progress = useSharedValue(30);
    const min = useSharedValue(0);
    const max = useSharedValue(100);


    const handleOrientationChange = (orientation) => {
        if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
            setIsLandscape(true);
        } else if (orientation === 'PORTRAIT') {
            setIsLandscape(false);
        }
    };

    useEffect(() => {
        Orientation.lockToLandscape();

        Orientation.addOrientationListener(handleOrientationChange);

        return () => {
            Orientation.removeOrientationListener(handleOrientationChange);
            Orientation.unlockAllOrientations();
        };
    }, []);

    const handlePress = () => {
        setShowOverlay(true); // Show the overlay
        setTimeout(() => {
            setShowOverlay(false); // Hide the overlay after 3 seconds
        }, 1000000);
    }


    return (
        <>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.qp_container}>
                    <View style={[styles.qp_potrate_screen, { height: isLandscape ? "100%" : ms(250) }]}>
                        <Video
                            source={background}
                            ref={videoRef}
                            style={styles.backgroundVideo}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {showOverlay && (
                <View style={styles.qp_overlay}>
                    <View style={[styles.qp_overlay_contaient,{ paddingTop: isLandscape? ms(20) : ms(70),paddingBottom: isLandscape ? ms(60):ms(190),}]}>
                        <View style={[styles.qp_hading_box,
                            // { paddingLeft: isLandscape ? ms(20) : ms(15),marginTop: isLandscape ? ms(20) :ms(70) }

                        ]}>
                            <TouchableOpacity style={styles.qp_back}>
                                <LeftIcon {...IconProps(ms(27))} fill={Colors.qp_white} />
                            </TouchableOpacity>
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={styles.qp_video_hade}
                            >
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, adipisci.
                            </Text>
                        </View>
                        <View style={{ height: ms(20), paddingHorizontal: ms(10), }}>
                            <Slider
                                style={{ borderRadius: ms(50) }}
                                progress={progress}
                                minimumValue={min}
                                maximumValue={max}
                                theme={{
                                    disableMinTrackTintColor: '#fff',
                                    maximumTrackTintColor: '#fff',
                                    minimumTrackTintColor: 'red',
                                    cacheTrackTintColor: '#333',
                                    bubbleBackgroundColor: '#666',
                                    heartbeatColor: '#999',
                                }}
                            />
                        </View>
                    </View>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode: "cover",
    },
    qp_potrate_screen: {
        width: "100%",
    },
    qp_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    },
    qp_overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    qp_overlay_contaient: {
        height: "100%",
        justifyContent: "space-between",
        paddingHorizontal: ms(15)
    },
    qp_back: {
        width: ms(25),
        height: ms(25),
        borderRadius: ms(50),
        alignItems: "center",
        justifyContent: "center"
    },
    qp_video_hade: {
        fontFamily: Fonts.Font_600,
        fontSize: ms(17),
        color: Colors.qp_white,
        marginLeft: ms(8)
    },
    qp_hading_box: {
        alignItems: "center",
        flexDirection: 'row',
        paddingRight: ms(50),
    },
    container: {
        backgroundColor: "red",
        height: ms(100)
    }
});
export default ViewScreen;
