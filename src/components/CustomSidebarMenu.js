//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import { boxes, boxesDark } from '../styles/boxes';


export default class CustomSidebarMenu extends Component {
  constructor() {
    super();

    this.items = [
      {
        id: 1,
        navOptionThumb: 'ios-albums',
        navOptionName: 'TODOS',
        screenToNavigate: 'Screen1',
      },
      {
        id: 2,
        navOptionThumb: 'ios-trash',
        navOptionName: 'TRASH',
        screenToNavigate: 'Screen2',
      },
      {
        id: 3,
        navOptionThumb: 'ios-finger-print',
        navOptionName: 'ABOUT',
        screenToNavigate: 'Screen5',
      }
    ];
  }
  render() {
    const { theme } = this.props.screenProps;
    // console.log(global.currentScreenIndex);

    return (
      <View
        style={theme === "light" ? boxes.sideMenuContainer : boxesDark.sideMenuContainer}>

        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                global.currentScreenIndex = key;
                this.props.navigation.navigate(item.screenToNavigate);
              }}
            >
              <View

                style={[
                  {
                    backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
                  },
                  theme === "light" ? boxes.sideMenuBox : boxesDark.sideMenuBox
                ]}
              >
                <View style={{ marginRight: 10, marginLeft: 20 }}>

                  <Icon
                    name={item.navOptionThumb}
                    style={theme === "light" ? boxes.drawerIcon : boxesDark.drawerIcon}
                  />

                </View>

                <Text
                  style={[
                    theme === "light" ? boxes.drawerText : boxesDark.drawerText,
                    {
                      fontWeight: global.currentScreenIndex === key ? 'bold' : 'normal',

                    }
                  ]}
                >
                  {item.navOptionName}
                </Text>
              </View>
            </TouchableOpacity>
          ))}


        </View>
      </View>
    );
  }
}
