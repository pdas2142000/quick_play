import React from 'react';
import { View, StyleSheet,ScrollView,} from 'react-native';
import { ms } from '../../utils/helpers/metrics';
import { Colors } from '../../utils/styles';

const Layout = ({ children }) => {
    return (
        <View style={styles.qp_layout_screen}>
            <ScrollView showsVerticalScrollIndicator={true} >
                <View style={styles.qp_layout_content}>
                    {children}
                </View>
            </ScrollView>
        </View>
    );
}

export default Layout;

const styles = StyleSheet.create({
    qp_layout_screen: {
        backgroundColor: Colors.qp_background,
        flex: 1,
    },
    qp_layout_content:{
        paddingHorizontal: ms(15),
    }
});