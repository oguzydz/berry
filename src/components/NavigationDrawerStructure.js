import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { boxes, boxesDark } from '../styles/boxes';


export default class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };

  render() {
    const { theme } = this.props;
    return (

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon
            name="ios-menu"
            style={theme == "light" ? boxes.menuIcon : boxesDark.menuIcon}
          />
        </TouchableOpacity>
      </View>

    )
  }


}
