import React, { Component } from 'react';
import { Text, View, FlatList, TouchableWithoutFeedback, Keyboard, TouchableOpacity, AsyncStorage, Dimensions } from 'react-native';

import TodoItem from '../components/todoItem';
import { boxes, boxesDark } from '../styles/boxes';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob';



import { auth, app, db } from '../firebase/index';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      key: "TODOLIST",
      todos: [],
      unTrashed: []
    }
  }

  bannerError() {
    try {
      // console.log("succeed");
    } catch (error) {
      console.log("this is the ", error);
    }
  }

  componentDidMount = () => {
    this.listener = this.props.navigation.addListener('didFocus', async () => {
      await AsyncStorage.getItem(this.state.key).then((value) => {
        if (value !== null) {

          let deger = JSON.parse(value);
          let unTrashed = deger.filter(todo => todo.isTrashed === false);

          this.setState({ unTrashed: unTrashed });
          this.setState({ todos: JSON.parse(value) });

        }
      });

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

      this.onSignIn(); // kaç tane kullanıcı olduğunu gösteriyor!
    })




  }

  componentWillUnmount() {
    // Remove the event listener
    this.listener.remove();
  }


  onSignIn = async () => {
    // Get the users ID
    const uid = auth.currentUser.uid;
    // Create a reference
    const ref = db.ref('users').child(uid).set({ 'isAnonymous': true });
  }

  editTodo = (item) => {
    this.props.navigation.navigate("Ekran4", { item: item, screen: this.props.navigation.state.routeName })
  }

  completeTodo = id => {
    this.setState(state => ({
      unTrashed: state.unTrashed.map(todo => {
        if (todo.key === id) {
          // suppose to update
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          };
        } else {
          return todo;
        }
      })
    }));


    this.setState(state => ({
      todos: state.todos.map(todo => {
        if (todo.key === id) {
          // suppose to update
          return {
            ...todo,
            isCompleted: !todo.isCompleted
          };
        } else {
          return todo;
        }
      })
    }), async () => {
      await AsyncStorage.setItem(this.state.key, JSON.stringify(this.state.todos))
      // console.log(await AsyncStorage.getItem(this.state.key))
    });
  };

  deleteItem = async (id) => {
    try {
      let todosJSON = await AsyncStorage.getItem(this.state.key);
      let todosArray = JSON.parse(todosJSON);

      let alteredTodos = todosArray.filter(todo => todo.key == id)
      let wthTodo = todosArray.filter(todo => todo.key != id)

      let trashed = alteredTodos.filter(todo => todo.isTrashed == false ? todo.isTrashed = true : null);


      let newTodos = wthTodo.concat(trashed)
      let unTrashed = wthTodo.filter(todo => todo.isTrashed == false);

      await AsyncStorage.removeItem(this.state.key);
      await AsyncStorage.setItem(this.state.key, JSON.stringify(newTodos));
      this.setState({ todos: JSON.parse(await AsyncStorage.getItem(this.state.key)) });
      this.setState({ unTrashed: unTrashed })
    }
    catch (error) {
      console.log(error)
    }
  }



  deleteAllItems = async () => {

    try {
      await AsyncStorage.removeItem(this.state.key, () => {
        alert("hepsi silindi")
      });
    } catch (error) {
      console.log(error)
    }
  }


  feedback = () => {
    Keyboard.dismiss();
    // this.props.navigationProps.closeDrawer();
  }


  render() {

    const { theme } = this.props.screenProps;
    return (
      <TouchableWithoutFeedback
        onPress={this.feedback}>
        <View style={[theme === "light" ? boxes.container : boxesDark.container]}>

          {/* <TouchableOpacity onPress={this.deleteAllItems}>
            <Text>Delete All</Text>
          </TouchableOpacity> */}

          <View style={theme === "light" ? boxes.content : boxesDark.content}>
            {
              this.state.unTrashed.length == 0 ?
                <View style={theme === "light" ? boxes.noTodoBox : boxesDark.noTodoBox}>
                  <Icon
                    name="ios-sync"
                    style={theme === "light" ? boxes.noTodoIcon : boxesDark.noTodoIcon}
                  />
                  <Text style={theme === "light" ? boxes.noTodoTitle : boxesDark.noTodoTitle}>There is no a todo!</Text>
                </View>
                :
                <FlatList
                  style={[theme === "light" ? boxes.list : boxesDark.list, this.state.todos.length === 0 ? { flex: 0 } : null]}
                  data={this.state.unTrashed}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                    <TodoItem
                      item={item}
                      page="Home"
                      theme={this.props.screenProps.theme}
                      deleteItem={this.deleteItem}
                      editTodo={this.editTodo}
                      completeTodo={this.completeTodo} />
                  )}>
                </FlatList>
            }

          </View>
          <AdMobBanner
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
          <View
            style={theme === "light" ? boxes.fixedButtonView : boxesDark.fixedButtonView}>
            <TouchableOpacity
              style={theme === "light" ? boxes.fixedButton : boxesDark.fixedButton}
              onPress={() => this.props.navigation.navigate("Ekran3")}>
              <Icon
                name="ios-add"
                style={theme === "light" ? boxes.fixedAddIcon : boxesDark.fixedAddIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback >
    );

  }

}