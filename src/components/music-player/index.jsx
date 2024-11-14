import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ms } from '../../utils/helpers/metrics';
import Slider from '@react-native-community/slider';
import { Colors, Fonts } from '../../utils/styles';
import PlayIcon from "../../../assets/svgs/play.svg"
import PauseIcon from "../../../assets/svgs/pause.svg"
import BackwordIcon from "../../../assets/svgs/backword.svg"
import ForwardIcon from "../../../assets/svgs/forward.svg"
import PlaynextIcon from "../../../assets/svgs/playnext.svg"
import PlaypreviousIcon from "../../../assets/svgs/playprevious.svg"
import { IconProps } from '../../utils/helpers/Iconprops';

const MusicPlayer = () => {
    return (
        <View style={styles.qp_content} >
            <View style={styles.qp_profile_box}>
                <Image style={styles.qp_img} source={require("../../../assets/image/dummy/man1.jpg")} />
            </View>
            <View style={styles.qp_slider_container}>
                <Slider
                    style={{ width: "100%", height: 20 }}
                    minimumValue={0}
                    // maximumValue={duration}
                    // value={currentTime}
                    // onValueChange={handleSliderChange}
                    minimumTrackTintColor={Colors.qp_primary_dark}
                    maximumTrackTintColor={Colors.qp_background}
                    thumbTintColor={Colors.qp_primary_dark}
                />
            </View>
            <View style={styles.qp_timer_content}>
                <Text style={styles.qp_time}>00:00</Text>
                <Text style={styles.qp_time}>00:00</Text>
            </View>
            <View style={styles.qp_controls}>
                {
                    Action.map((val) => {
                        const Icon = val.Icon
                        return (
                            <TouchableOpacity key={val.id} >
                                <Icon {...IconProps(ms(val.size))} fill={Colors.qp_primary_dark} />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
    );
}

export default MusicPlayer;

const styles = StyleSheet.create({
    qp_content: {
        padding: ms(15),
        flex: 1,
        alignItems: "center"
    },
    qp_profile_box: {
        width: ms(130),
        height: ms(130),
        borderRadius: ms(100),
        backgroundColor: "#f6f6fd",
        padding: ms(5),
        overflow: "hidden",
        marginTop: ms(35)
    },
    qp_img: {
        width: "100%",
        height: "100%",
        borderRadius: ms(100)
    },
    qp_slider_container: {
        marginTop: ms(20),
        width: "100%"
    },
    qp_timer_content: {
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%"
    },
    qp_time: {
        fontFamily: Fonts.Font_700,
        fontSize: ms(15),
        color: Colors.qp_primary_dark
    },
    qp_controls: {
        width: "100%",
        backgroundColor: Colors.qp_background,
        borderRadius: ms(15),
        height: ms(70),
        marginTop: ms(20),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingHorizontal: ms(15)
    }
});

const Action = [
    {
        id: 6,
        Icon: PlaypreviousIcon,
        size: 42
    },
    // {
    //     id: 2,
    //     Icon: PauseIcon,
    //     size:30
    // },
    {
        id: 3,
        Icon: BackwordIcon,
        size: 37
    },
    {
        id: 1,
        Icon: PlayIcon,
        size: 42
    },
    {
        id: 4,
        Icon: ForwardIcon,
        size: 42
    },
    {
        id: 5,
        Icon: PlaynextIcon,
        size: 42
    },

]
