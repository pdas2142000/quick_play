/** React Import */
import React, { useEffect, useState } from 'react'

/** Liabary*/
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PortalHost } from '@gorhom/portal'

/** Components */
import BottomNav from '../bottom-nav'
import SplashScreen from '../../screens/splash-screen'

/** Screen */

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='login'
        >
            <Stack.Screen name='home' component={BottomNav} />
        </Stack.Navigator>
    )
}

export const AppNavigation = () => {

    const [Loading, SetLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            SetLoading(false)
        }, 2800)
    }, [])

    if (Loading) {
        return <SplashScreen />
    } else {
        return (
            <>
                <MainStack />
                <PortalHost name="BottomSheet" />
            </>
        )
    }
}






