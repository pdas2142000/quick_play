/** React Imports */
import React, { useRef } from 'react'
import { View } from 'react-native'

/** Components */
import Layout from '../../components/layout'
import { quick_play } from '../../utils/constant'
import BannerList from '../../components/banner'
import ActionSheet from '../../components/action-sheet'

/** Main Export */
const AudioScreen = () => {

    const SheetRef = useRef(null)

    const LongPress = ()=>{
        if (SheetRef.current) {
            SheetRef.current.snapToIndex(0)
        }
    }

    return (
        <Layout>
            {
                quick_play.video_data.map((item, index) => {
                    const isLastItem = index === quick_play.video_data.length - 1
                    return (
                        <View key={index}>
                            <BannerList
                                {...{
                                    item,
                                    pressLong: LongPress,
                                    isLastItem,
                                    type:"audio",
                                    index
                                }}
                            />
                        </View>
                    )
                })
            }
            <ActionSheet
                {...{
                    BottomSheetRef:SheetRef,
                    SheetPoint:"45%"
                }}
            />
            
        </Layout>
    )
}

export default AudioScreen
