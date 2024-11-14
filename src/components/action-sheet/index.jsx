import React, { useMemo, useRef } from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
/** Library */
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView, BottomSheetView, } from '@gorhom/bottom-sheet'
import { Portal } from '@gorhom/portal'
import { ms } from '../../utils/helpers/metrics'
import CloseIcon from "../../../assets/svgs/close.svg"
import { IconProps } from '../../utils/helpers/Iconprops'
import { Colors, Fonts } from '../../utils/styles'
import MusicPlayer from '../music-player'

const ActionSheet = ({ BottomSheetRef, SheetPoint }) => {
    const SnapPoints = useMemo(() => [SheetPoint], [])

    const HandleCloseBottomsheet = () => {
        BottomSheetRef?.current?.close()
    }

    return (
        <Portal hostName='BottomSheet'>
            <BottomSheet
                snapPoints={SnapPoints}
                enablePanDownToClose={true}
                backdropComponent={RenderBackdrop}
                handleIndicatorStyle={{ backgroundColor: "transparent", marginBottom: ms(-5) }}
                ref={BottomSheetRef}
                index={-1}
            >
                <BottomSheetView style={{ flex: 1, }}>
                    <View style={styles.qp_hadeing_container}>
                        <View style={styles.qp_hadeing}>
                            <Text style={styles.qp_hadeing_text} numberOfLines={1} ellipsizeMode="tail">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, natus!</Text>
                        </View>
                        <TouchableOpacity onPress={HandleCloseBottomsheet}>
                            <CloseIcon {...IconProps(ms(30))} fill="#4c4c4c" />
                        </TouchableOpacity>
                    </View>
                    <MusicPlayer/>
                </BottomSheetView>
            </BottomSheet>
        </Portal>
    )
}

export default ActionSheet

const RenderBackdrop = (props) => (
    <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
)

const styles = StyleSheet.create({
    qp_hadeing: {
        maxWidth: ms(350)
    },
    qp_hadeing_container: {
        paddingHorizontal: ms(10),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: ms(20),
        borderBottomWidth: ms(.6),
        borderColor: "#e9e9e9"
    },
    qp_hadeing_text: {
        fontFamily: Fonts.Font_600,
        fontSize: ms(18),
        color: Colors.qp_primary_dark
    },
});