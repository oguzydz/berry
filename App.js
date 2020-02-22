import React, { Component } from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { DrawerNavigatorExample } from './src/components/Navigators';
import 'react-native-gesture-handler';
import { auth } from './src/firebase';

let AppContainer = createAppContainer(DrawerNavigatorExample);
const ThemeContext = React.createContext(null);

console.ignoredYellowBox = ['Setting a timer']; // to ignore yellowbox for firebase


import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      key: 'theme',
      theme: 'light'
    };
  }

  componentDidMount = async () => {
    this.fetchTheme();
    // this.bootstrap();
  }

  bootstrap = async () => {
    try {
      await auth.signInAnonymously();
    } catch (e) {
      switch (e.code) {
        case 'auth/operation-not-allowed':
          console.log('Enable anonymous in your firebase console.');
          break;
        default:
          console.error(e);
          break;
      }
    }
  }

  fetchTheme = async () => {
    let getTheme = await AsyncStorage.getItem(this.state.key);
    let JSONdata = JSON.parse(getTheme);
    if (JSONdata !== null) {
      this.setState({ theme: JSONdata })
      // console.log(JSONdata)
    } else if (JSONdata == null) {
      this.setState({ theme: "light" })
    }

  }




  render() {

    const toggleTheme = async () => {
      let response = await AsyncStorage.getItem(this.state.key);
      let JSONdata = JSON.parse(response);



      if (JSONdata !== null) {
        if (JSONdata == "light") {
          this.setState(() => ({
            theme: 'dark'
          }), async () => {
            await AsyncStorage.setItem(this.state.key, JSON.stringify(this.state.theme))
          });
        } else {
          this.setState(() => ({
            theme: 'light'
          }), async () => {
            await AsyncStorage.setItem(this.state.key, JSON.stringify(this.state.theme))
          });
        }
      } else {
        await AsyncStorage.setItem(this.state.key, JSON.stringify(this.state.theme));
      }

    }

    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        <AppContainer screenProps={{ theme: this.state.theme, getTheme: toggleTheme }} />

      </ThemeContext.Provider>
    );
  }

}


