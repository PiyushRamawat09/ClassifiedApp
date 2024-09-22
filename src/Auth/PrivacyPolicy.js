import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    StatusBar,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native'
import {
    config,
    Font,
    Colors,
    mobileH,
    mobileW,
    localimag,
    Lang_chg
} from '../Provider/utilslib/Utils';
import HTMLView from 'react-native-htmlview';
import BuySellHeading from '../Componant/BuySellHeading';
import { useFocusEffect, useNavigation } from '@react-navigation/native';


export default function PrivacyPolicy() {

    //const [pagename, setpagename] = useState(props.route.params.pagename);
    const { navigate, goBack } = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: Colors.HomeBackColor }} >
            <SafeAreaView style={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={false}
                    barStyle="light-content"
                    networkActivityIndicatorVisible={true}
                />

                {/* ----------heading  and back icon----------- */}
                <BuySellHeading
                    onPress={() => {
                        goBack()
                    }}
                    heading={Lang_chg.Privacy_policy_txt[config.language]}
                />

                <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false} contentContainerStyle={{ width: mobileW, backgroundColor: Colors.HomeBackColor }} keyboardShouldPersistTaps='handled'>
                    {config.app_status == 1 &&
                        <View style={{ alignItems: 'center', marginTop: mobileH * 2 / 100, width: mobileW * 90 / 100, alignSelf: 'center' }}>
                            {
                                (this.state.datafound != 'NA')
                                    ?
                                    this.state.datafound.map((item, index) => (
                                        (item.content_type == this.state.contentpage)
                                            ?
                                            <HTMLView
                                                value={config.language == 0 ? item.content : item.content}
                                                stylesheet={styles12}
                                            />
                                            :
                                            null))
                                    :
                                    <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 19 }}>{this.state.data_not_found}</Text>
                            }

                        </View>}
                    {config.app_status == 0 &&
                        <View style={{ alignItems: 'center', marginTop: mobileH * 2 / 100, width: mobileW * 90 / 100, alignSelf: 'center', backgroundColor: Colors.HomeBackColor }}>
                            <Text style={{ alignSelf: 'center', marginTop: 10, fontSize: 19, color: Colors.whiteColor, textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                        </View>}
                </ScrollView>

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.HomeBackColor
    },
    view1:
    {
        backgroundColor: Colors.back_color,
        height: mobileH * 8 / 100,
        flexDirection: 'row',
        width: mobileW * 88 / 100,
        alignSelf: 'center',
        alignItems: 'center',
    },
})
const styles12 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // backgroundColor: 'red'
    },
    button:
    {
        marginBottom: 13,
        borderRadius: 6,
        paddingVertical: 12,
        width: '50%',
        margin: 15,
        backgroundColor: '#fa5252'
    },
    textbutton: {
        borderBottomColor: '#f2f2f2'
        , borderBottomWidth: 1,
        paddingVertical: 16,
        width: '95%',
        alignSelf: 'center'
    },
    textfont: {
        fontSize: 13,
        paddingLeft: 10
    },
    p: {
        fontWeight: '300',
        color: 'black',
        marginBottom: -50,
        lineHeight: 24,
        letterSpacing: 0.8,
        fontStyle: 'normal',
    },

})



