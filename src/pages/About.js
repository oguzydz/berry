import React, { Component } from 'react';
import { View, Text, Linking, TouchableOpacity } from "react-native";
import { styles } from '../styles/about';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
} from 'expo-ads-admob';





export default class About extends Component {

    goSocial = (where) => {
        if (where == "oguzydz") {
            Linking.openURL('https://' + where + '.com')
        } else {
            Linking.openURL('https://' + where + '.com/oguzydz')
        }
    }

    getStarted = () => {
        const url = 'mailto:oguzydzapp@gmail.com?subject=Berry\'den%20Geliyorum&amp;body=Uygulama%20veya%20ba%C5%9Fka%20fikirlerim%20var%3A%0A';
        Linking.openURL(url);
    }

    render() {
        const { theme } = this.props.screenProps;
        return (
            <View style={theme == "light" ? styles.light.container : styles.dark.container}>

                <Text style={theme == "light" ? styles.light.h1 : styles.dark.h1}>
                    I'm {"\n"}Oğuz Yıldız!
                </Text>

                <Text style={theme == "light" ? styles.light.h4 : styles.dark.h4}>
                    I like dabbling in various parts of frontend development and like to learn about new technologies.
                </Text>

                <View style={styles.light.hr}></View>

                <View style={styles.light.socialIcons}>
                    <Icon
                        onPress={() => this.goSocial('linkedin')}
                        style={theme == "light" ? styles.light.icon : styles.dark.icon}
                        name="logo-linkedin"
                    />
                    <Icon
                        onPress={() => this.goSocial('github')}
                        style={theme == "light" ? styles.light.icon : styles.dark.icon}
                        name="logo-github"
                    />
                    <Icon
                        onPress={() => this.goSocial('twitter')}
                        style={theme == "light" ? styles.light.icon : styles.dark.icon}
                        name="logo-twitter"
                    />
                    <Icon
                        onPress={() => this.goSocial('instagram')}
                        style={theme == "light" ? styles.light.icon : styles.dark.icon}
                        name="logo-instagram"
                    />
                    <Icon
                        onPress={() => this.goSocial('oguzydz')}
                        style={theme == "light" ? styles.light.icon : styles.dark.icon}
                        name="ios-desktop"
                    />
                </View>

                <TouchableOpacity
                    onPress={() => this.getStarted()}
                    style={theme == "light" ? styles.light.button : styles.dark.button}>
                    <Text style={styles.light.buttonText}>
                        LET'S GET STARTED
                    </Text>
                </TouchableOpacity>

                <AdMobBanner
                    style={{ position: "absolute", bottom: 0 }}
                    bannerSize="smartBannerPortrait"
                    servePersonalizedAds
                    // adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID
                    adUnitID="ca-app-pub-9786663498474045/7315132402"
                    onDidFailToReceiveAdWithError={err => {
                        console.log(err)
                    }}
                    onAdViewDidReceiveAd={() => {
                        // console.log("Ad Recieved");
                    }}
                />

            </View>
        )
    }
}

