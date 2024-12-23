/**React Import */
import { KeyboardAvoidingView, Platform, SafeAreaView, } from 'react-native'
import React from 'react'

/** Library */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

/**Component */
import VideoScreen from '../../screens/video-screen'
import AudioScreen from '../../screens/audio-screen'

/**Icons */
import VideoActive from "../../../assets/svgs/active_video.svg"
import VideoInActive from "../../../assets/svgs/inactive_video.svg"
import MusicActive from "../../../assets/svgs/active_music.svg"
import MusicInActive from "../../../assets/svgs/inactive_music.svg"

/** Local Imports */
import { Colors, Fonts } from '../../utils/styles'
import { ms } from '../../utils/helpers/metrics'
import { IconProps } from '../../utils/helpers/Iconprops'
import NotificationScreen from '../../screens/test-screen'

const Tab = createBottomTabNavigator()

/** Main Export */
const BottomNav = () => {

    const TabConfig = [
        {
            name: "Video",
            component: VideoScreen,
            focusedIcon: VideoActive,
            unfocusedIcon: VideoInActive,
        },
        {
            name: "Audio",
            component: AudioScreen,
            focusedIcon: MusicActive,
            unfocusedIcon: MusicInActive,
        }
    ]

    const ScreenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
            const RouteConfig = TabConfig?.find(config => config.name === route.name)
            const IconComponent = focused ? RouteConfig.focusedIcon : RouteConfig.unfocusedIcon
            return <IconComponent {...IconProps(ms(28))} fill={color} /> 
        },
        tabBarActiveTintColor: Colors.qp_primary_dark,
        tabBarInactiveTintColor: Colors.qp_primary_gray,
        tabBarLabelStyle: {
            fontFamily: Fonts.Font_600,
            fontSize: ms(15),
        },
        tabBarStyle: {
            paddingTop: 0,
            position: 'absolute',
        },
        headerShown: false,
    })

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "android" ? 'height' : undefined}
            keyboardVerticalOffset={Platform.OS === 'android' ? -50 : 0}
        >
            <SafeAreaView style={{backgroundColor:"white"}}/>
            <Tab.Navigator screenOptions={ScreenOptions}  >
                {
                    TabConfig?.map(config => (
                        <Tab.Screen
                        key={config.name}
                        name={config.name}
                        component={config.component}
                        />
                    ))
                }
            </Tab.Navigator>
        </KeyboardAvoidingView>
    )
}

export default BottomNav

