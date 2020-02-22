import React, { useState } from 'react';
import { Text, TouchableOpacity, AsyncStorage, Button, Dimensions, View } from 'react-native'



import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import NavigationDrawerStructure from './NavigationDrawerStructure';

import TrashedScreen from '../pages/TrashedScreen';
import Home from '../pages/HomeScreen';
import AddTodo from '../pages/AddTodo';
import About from '../pages/About';

import CustomSidebarMenu from '../components/CustomSidebarMenu';


import { boxes, boxesDark } from "../styles/boxes";


import Icon from 'react-native-vector-icons/Ionicons';
import EditTodo from '../pages/EditTodo';


const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Ekran1: {
    screen: Home,
    navigationOptions: ({ navigation, screenProps }) => {
      let nav = navigation;
      let props = screenProps;
      return {
        title: 'TODOS',
        headerLeft: () => <NavigationDrawerStructure navigationProps={nav} theme={props.theme} onPress={() => console.log(nav)} />,
        headerStyle: props.theme === "light" ? boxes.headerStyle : boxesDark.headerStyle,
        headerTitleStyle: props.theme === "light" ? boxes.headerTitle : boxesDark.headerTitle,
        headerRight: () =>
          <TouchableOpacity onPress={props.getTheme}>
            <Icon
              name={props.theme === "light" ? 'ios-moon' : 'ios-sunny'}
              style={boxes.themeIcon}
            />
          </TouchableOpacity>
        ,
      }
    },
  },

});



const SecondActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Ekran2: {
    screen: TrashedScreen,
    navigationOptions: ({ navigation, screenProps }) => {
      let nav = navigation;
      let props = screenProps;
      return {
        title: 'TRASH',
        headerLeft: () => <NavigationDrawerStructure navigationProps={nav} theme={screenProps.theme} onPress={() => console.log(nav)} />,
        headerStyle: props.theme === "light" ? boxes.headerStyle : boxesDark.headerStyle,
        headerTitleStyle: props.theme === "light" ? boxes.headerTitle : boxesDark.headerTitle,
        headerRight: () =>
          <TouchableOpacity onPress={props.getTheme}>
            <Icon
              name={props.theme === "light" ? 'ios-moon' : 'ios-sunny'}
              style={boxes.themeIcon}
            />
          </TouchableOpacity>
        ,
      }
    },
  },

});


const ThirdActivity_StackNavigator = createStackNavigator({
  Ekran3: {
    screen: AddTodo,
    navigationOptions: ({ navigation, screenProps }) => {
      let nav = navigation;
      let props = screenProps;
      return {
        title: 'NEW TODO',
        headerLeft: () => <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <TouchableOpacity onPress={() => nav.navigate("Ekran1")}>
            <Icon
              name="ios-arrow-back"
              style={props.theme == "light" ? boxes.menuIcon : boxesDark.menuIcon}
            />
          </TouchableOpacity>
        </View>,
        headerStyle: props.theme === "light" ? boxes.headerStyle : boxesDark.headerStyle,
        headerTitleStyle: props.theme === "light" ? boxes.headerTitle : boxesDark.headerTitle,
        headerRight: () =>
          <TouchableOpacity onPress={props.getTheme}>
            <Icon
              name={props.theme === "light" ? 'ios-moon' : 'ios-sunny'}
              style={boxes.themeIcon}
            />
          </TouchableOpacity>
        ,
      }
    },
  },
});



const FourthActivity_StackNavigator = createStackNavigator({
  Ekran4: {
    screen: EditTodo,
    navigationOptions: ({ navigation, screenProps }) => {
      let nav = navigation;
      let props = screenProps;
      return {
        title: 'EDIT TODO',
        headerLeft: () => <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <TouchableOpacity onPress={() => nav.navigate(nav.getParam('screen'))}>
            <Icon
              name="ios-arrow-back"
              style={props.theme == "light" ? boxes.menuIcon : boxesDark.menuIcon}
            />
          </TouchableOpacity>
        </View>,
        headerStyle: props.theme === "light" ? boxes.headerStyle : boxesDark.headerStyle,
        headerTitleStyle: props.theme === "light" ? boxes.headerTitle : boxesDark.headerTitle,
        headerRight: () =>
          <TouchableOpacity onPress={props.getTheme}>
            <Icon
              name={props.theme === "light" ? 'ios-moon' : 'ios-sunny'}
              style={boxes.themeIcon}
            />
          </TouchableOpacity>
        ,
      }
    },
  },
});

const FifthActivity_StackNavigator = createStackNavigator({
  Ekran5: {
    screen: About,
    navigationOptions: ({ navigation, screenProps }) => {
      let props = screenProps;

      return {
        title: 'ABOUT',
        headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} theme={screenProps.theme} onPress={() => console.log(navigation)} />,
        headerStyle: screenProps.theme === "light" ? boxes.headerStyle : boxesDark.headerStyle,
        headerTitleStyle: screenProps.theme === "light" ? boxes.headerTitle : boxesDark.headerTitle,
        headerRight: () =>
          <TouchableOpacity onPress={screenProps.getTheme}>
            <Icon
              name={props.theme === "light" ? 'ios-moon' : 'ios-sunny'}
              style={boxes.themeIcon}
            />
          </TouchableOpacity>
        ,
      }
    },
  },
});


export const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: ({ screenProps }) => ({
      drawerLabel: 'TODOS',
      drawerIcon: <Icon name="ios-albums" style={screenProps.theme === "light" ? boxes.drawerIcon : boxesDark.drawerIcon} />,
    }),

  },

  Screen2: {
    //Title
    screen: SecondActivity_StackNavigator,
    navigationOptions: ({ screenProps }) => ({
      drawerLabel: 'TRASH',
      drawerIcon: <Icon name="ios-trash" style={screenProps.theme === "light" ? boxes.drawerIcon : boxesDark.drawerIcon} />

    }),
  },
  Screen3: {
    screen: ThirdActivity_StackNavigator
  },
  Screen4: {
    screen: FourthActivity_StackNavigator
  },
  Screen5: {
    drawerLabel: 'ABOUT',
    screen: FifthActivity_StackNavigator
  }


}

  , {
    drawerType: "slide",
    keyboardDismissMode: "none",
    drawerPosition: "left",
    overlayColor: 1,

    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  })


