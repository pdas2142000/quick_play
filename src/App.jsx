import React from 'react';
import { AppNavigation } from './navigation/stack-nav'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PortalProvider } from '@gorhom/portal'
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';

const App = () => {

    LogBox.ignoreAllLogs(true)

    return (
        <>
        <GestureHandlerRootView>
            <PortalProvider>
                <NavigationContainer>
                    <AppNavigation/>
                </NavigationContainer>
            </PortalProvider>
        </GestureHandlerRootView>
        </>
    );
}

export default App;
