/** React Imports */
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

/** Local Imports */
import { Colors, Fonts } from '../../utils/styles'
import { ms } from '../../utils/helpers/metrics'
import { IconProps } from '../../utils/helpers/Iconprops'

/** Icons */
import PlayIcon from "../../../assets/svgs/play.svg"
import DeleteIcon from "../../../assets/svgs/delete.svg"

/** Libraries */
import Animated, { Easing, withRepeat, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { BarIndicator } from 'react-native-indicators'

/** Main Export */
const BannerList = ({ item, pressLong, isLastItem, type, index }) => {
    const [isRotating, setIsRotating] = useState(false);
    const rotationValue = useSharedValue(0);

    const [rotatingItems, setRotatingItems] = useState([]);

    const toggleRotation = () => {
        setIsRotating(prev => !prev);
        setRotatingItems((prev) => {
            if (prev.includes(index)) {
                return prev.filter(itemIndex => itemIndex !== index);
            } else {
                return [...prev, index];
            }
        });

        if (isRotating) {
            rotationValue.value = 0;
        } else {
            rotationValue.value = withRepeat(
                withTiming(360, {
                    duration: 5000,
                    easing: Easing.linear,
                }),
                -1,
                false
            );
        }
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotationValue.value}deg` }],
        };
    });

    return (
        <View style={[styles.qp_banner, { marginBottom: isLastItem ? ms(15) : null }]}>
            <TouchableOpacity style={styles.qp_left_content} onPress={pressLong}>
                <View style={[styles.qp_img_box]}>
                    {
                        type == "audio" ? (
                            <Animated.Image
                                source={item.image}
                                style={[styles.qp_img, animatedStyle]} 
                            />
                        ) : (
                            <Image source={item.image} style={styles.qp_img} />
                        )
                    }
                    {rotatingItems.includes(index) && (
                        <View style={styles.qp_overlay}>
                            <BarIndicator
                                count={4}
                                size={15}
                                color={Colors.qp_white}
                            />
                        </View>
                    )}
                </View>
                <View style={[styles.qp_text_box, { maxWidth: type == "audio" ? ms(200) : ms(270), }]}>
                    <Text style={styles.qp_hade_text} numberOfLines={2} ellipsizeMode="tail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque.</Text>
                    <Text style={styles.qp_subtext} numberOfLines={1} ellipsizeMode="tail">Lorem ipsum dolor sit.</Text>
                </View>
            </TouchableOpacity>

            {
                type == "audio" && (
                    <View style={styles.qp_left_content}>
                        <TouchableOpacity onPress={toggleRotation}>
                            <PlayIcon {...IconProps(ms(30))} fill={Colors.qp_primary_dark} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <DeleteIcon {...IconProps(ms(24.7))} fill="#ff4545" style={{ marginLeft: ms(6) }} />
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    );
};

export default BannerList

const styles = StyleSheet.create({
    qp_image_box: {
        width: 100,
        height: 100,
    },
    qp_img: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    qp_banner: {
        backgroundColor: Colors.qp_white,
        marginTop: ms(15),
        paddingVertical: ms(5),
        borderRadius: ms(10),
        paddingHorizontal: ms(8),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    qp_img_box: {
        width: ms(70),
        height: ms(70),
        backgroundColor: "#f6f6fd",
        borderRadius: ms(40),
        padding: ms(5),
        overflow: "hidden",
    },
    qp_left_content: {
        flexDirection: "row",
        alignItems: "center"
    },
    qp_img: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: ms(100)
    },
    qp_text_box: {
        marginLeft: ms(15),
    },
    qp_hade_text: {
        marginBottom: ms(3),
        fontFamily: Fonts.Font_600,
        color: Colors.qp_primary_dark,
        fontSize: ms(15),
        lineHeight: ms(17)
    },
    qp_subtext: {
        fontFamily: Fonts.Font_600,
        color: Colors.qp_primary_gray,
        fontSize: ms(13)
    },
    qp_overlay: {
        backgroundColor: "rgba(56, 56, 56, 0.4)",
        position: "reletive",
        width: "100%",
        height: "100%",
        borderRadius: ms(100),
        top: ms(-60),
        alignItems: "center",
        justifyContent: "center"
    }
})