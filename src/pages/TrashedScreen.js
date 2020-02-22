import React, { Component } from 'react';
import { Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity, AsyncStorage } from 'react-native';

import TodoItem from '../components/todoItem';
import { boxes, boxesDark } from '../styles/boxes';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
} from 'expo-ads-admob';



export default class TrashedScreen extends Component {


    state = {
        key: "TODOLIST",
        todos: [],
        trashed: []
    }

    componentDidMount() {
        this.listener = this.props.navigation.addListener('didFocus', async () => {
            await AsyncStorage.getItem(this.state.key).then((value) => {
                if (value !== null) {

                    let deger = JSON.parse(value);
                    let trashed = deger.filter(todo => todo.isTrashed != false);
                    this.setState({ trashed: trashed });
                    this.setState({ todos: JSON.parse(value) });

                }

            });
        })

    }

    componentWillUnmount() {
        // Remove the event listener
        this.listener.remove();
    }

    completeTodo = id => {
        this.setState(state => ({
            trashed: state.trashed.map(todo => {
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
        });

    };

    editTodo = (item) => {
        this.props.navigation.navigate("Ekran4", { item: item, screen: this.props.navigation.state.routeName })
    }

    deleteAllTrash = () => {
        Alert.alert(
            'OPPS!',
            "You really want to delete all trash todos?",
            [
                { text: 'No', onPress: () => console.log('OK Pressed') },
                {
                    text: 'Delete', onPress: async () => {
                        try {
                            let todosJSON = await AsyncStorage.getItem(this.state.key);
                            let todosArray = JSON.parse(todosJSON);

                            let getunTrashed = todosArray.filter(todo => todo.isTrashed !== true);

                            await AsyncStorage.removeItem(this.state.key);
                            await AsyncStorage.setItem(this.state.key, JSON.stringify(getunTrashed));
                            this.setState({ todos: JSON.parse(await AsyncStorage.getItem(this.state.key)) });
                            this.setState({ trashed: [] })

                            // console.log(this.state.trashed)
                        }
                        catch (error) {
                            console.log(error)
                        }
                    }
                },
            ],
            { cancelable: true },
        );
    }

    recycleItem = async (id) => {

        try {
            let todosJSON = await AsyncStorage.getItem(this.state.key);
            let todosArray = JSON.parse(todosJSON);

            let alteredTodos = todosArray.filter(todo => todo.key == id)
            let wthTodo = todosArray.filter(todo => todo.key != id)

            let changeTrash = alteredTodos.filter(todo => todo.isTrashed == true ? todo.isTrashed = false : null);

            let newTodos = wthTodo.concat(alteredTodos)

            console.log(newTodos)

            let trashed = wthTodo.filter(todo => todo.isTrashed == true);

            await AsyncStorage.removeItem(this.state.key);
            await AsyncStorage.setItem(this.state.key, JSON.stringify(newTodos));
            this.setState({ todos: JSON.parse(await AsyncStorage.getItem(this.state.key)) });
            this.setState({ trashed: trashed })
        }
        catch (error) {
            console.log(error)
        }
    }


    render() {

        const { theme } = this.props.screenProps;



        return (
            <TouchableWithoutFeedback
                onPress={() => { Keyboard.dismiss(); }}>
                <View style={theme === "light" ? boxes.container : boxesDark.container}>
                    <View style={theme === "light" ? boxes.content : boxesDark.content}>
                        {
                            this.state.trashed.length == 0 ?
                                <View style={theme === "light" ? boxes.noTodoBox : boxesDark.noTodoBox}>
                                    <Icon
                                        name="ios-sync"
                                        style={theme === "light" ? boxes.noTodoIcon : boxesDark.noTodoIcon}
                                    />
                                    <Text style={theme === "light" ? boxes.noTodoTitle : boxesDark.noTodoTitle}>There is no a trash!</Text>
                                </View> :
                                <FlatList
                                    style={[theme === "light" ? boxes.list : boxesDark.list, this.state.trashed.length === 0 ? { flex: 0 } : null]}
                                    data={this.state.trashed}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <TodoItem item={item} theme={theme} recycleItem={this.recycleItem} editTodo={this.editTodo} completeTodo={this.completeTodo} screen="trash" />
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
                            onPress={this.deleteAllTrash}>
                            <Icon
                                name="ios-cut"
                                style={theme === "light" ? [boxes.fixedAddIcon, { fontSize: 30, textAlignVertical: "center", justifyContent: "center" }] : [boxesDark.fixedAddIcon, { fontSize: 30 }]} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}