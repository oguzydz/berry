import React, { Component } from 'react';


import { Alert, StyleSheet, Text, Button, TextInput, View, Keyboard, TouchableOpacity, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { boxes, boxesDark } from "../styles/boxes";



export default class EditTodo extends Component {

    constructor(props) {
        super(props);
        const { header, desc } = props.navigation.getParam('item');

        this.state = {
            todos: [],
            header: header,
            desc: desc,
            key: 'TODOLIST',
            routeName: props.navigation.getParam('screen'),
            addDesc: desc === "" ? false : true
        }


    }

    componentDidMount = () => {
        this.listener = this.props.navigation.addListener('didFocus', async () => {
            await AsyncStorage.getItem('TODOLIST').then((value) => {
                if (value !== null) {
                    this.setState({ todos: JSON.parse(value) });

                    const { header, desc } = this.props.navigation.getParam('item');
                    this.setState({
                        header: header,
                        desc: desc,
                        key: 'TODOLIST',
                        routeName: this.props.navigation.getParam('screen'),
                        addDesc: desc === "" ? false : true
                    })
                }

            });

            if (this.props.navigation.getParam('item') == null) {
                // this.props.navigation.navigate(this.props.navigation.getParam('screen'));
                console.log(this.props.navigation.getParam('screen'));

            } else {
                // console.log(this.props.navigation.getParam('item'))
            }
        })

    }

    componentWillUnmount() {
        // Remove the event listener
        this.listener.remove();
    }

    changeData = async () => {
        const { routeName, header, desc, } = this.state;
        const { key } = this.props.navigation.getParam('item');

        let todosJSON = await AsyncStorage.getItem(this.state.key);
        let todosArray = JSON.parse(todosJSON);

        // let alteredTodos = todosArray.filter(todo => todo.key == key)
        // let wthTodo = todosArray.filter(todo => todo.key != key)

        console.log(this.props.navigation.state.item)
        if (header !== '') {
            if (header.length > 2) {

                // console.log(this.state)

                this.setState(state => ({
                    todos: state.todos.map(todo => {
                        if (todo.key === key) {
                            // suppose to update
                            return {
                                ...todo,
                                header: header,
                                desc: desc
                            };
                        } else {
                            return todo;
                        }
                    })
                }), async () => {
                    await AsyncStorage.setItem(this.state.key, JSON.stringify(this.state.todos))
                    this.props.navigation.navigate(this.props.navigation.getParam('screen'))

                });

            }
        }
    }

    displayData = async () => {
        try {
            let user = await AsyncStorage.getItem(this.state.key);
            alert(user);
        } catch (err) {
            alert(err)
        }
    }

    render() {
        const { theme } = this.props.screenProps;
        return (
            <TouchableWithoutFeedback
                onPress={() => { Keyboard.dismiss(); }}>
                <View style={theme === "light" ? boxes.addTodoContainer : boxesDark.addTodoContainer}>
                    <TextInput
                        style={[theme === "light" ? boxes.addTodoInput : boxesDark.addTodoInput, { fontSize: 20 }]}
                        placeholder="Add New Todo"
                        onChangeText={(text) => this.setState({ header: text })}
                        value={this.state.header}
                    />
                    {this.state.addDesc ?
                        <TextInput
                            style={theme === "light" ? boxes.addDescInput : boxesDark.addDescInput}
                            multiline={true}
                            onChangeText={(text) => this.setState({ desc: text })}
                            placeholder="Add a description"
                            numberOfLines={1}
                            value={this.state.desc}
                            maxLength={300}
                        /> :
                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 15,
                            }}
                            onPress={() => this.setState({ addDesc: !this.state.addDesc })}>
                            <View style={theme === "light" ? boxes.addDescButton : boxesDark.addDescButton}>
                                <Text style={theme === "light" ? boxes.addDescText : boxesDark.addDescText}> Add a desc </Text>
                            </View>
                        </TouchableOpacity>
                    }


                    <View>
                        <TouchableOpacity
                            style={theme === "light" ? boxes.AddTodoButton : boxesDark.AddTodoButton}
                            onPress={() => {
                                this.changeData();
                                Keyboard.dismiss()
                            }}>
                            <Icon
                                name="ios-color-wand"
                                style={theme === "light" ? boxes.AddTodoAddIcon : boxesDark.AddTodoAddIcon}
                            />
                        </TouchableOpacity>
                    </View>


                </View>
            </TouchableWithoutFeedback>
        )
    }

}
