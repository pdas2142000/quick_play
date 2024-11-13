import React, { useMemo, useRef } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
/** Library */
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView, BottomSheetView, } from '@gorhom/bottom-sheet'
import { Portal } from '@gorhom/portal'
import { ms } from '../../utils/helpers/metrics'

const ActionSheet = ({ BottomSheetRef,SheetPoint }) => {
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
                handleIndicatorStyle={{backgroundColor:"transparent"}}
                ref={BottomSheetRef}
                index={-1}
            >
                <BottomSheetView style={{ flex: 1, }}>
                        <View style={{paddingHorizontal:ms(10)}}>
                            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, natus!</Text>
                        </View>
                </BottomSheetView>
            </BottomSheet>
        </Portal>
    )
}

export default ActionSheet

const RenderBackdrop = (props) => (
    <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
)
