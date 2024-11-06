import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { ms } from '../../utils/helpers/metrics';

const Layout = ({children}) => {
    return (
        <View style={styles.qp_layout_screen}>
            {children}
        </View>
    );
}

export default Layout;

const styles = StyleSheet.create({
    qp_layout_screen:{
        paddingHorizontal:ms(15),
        flex:1,
        backgroundColor:"#f9f9fa"
    }
});