import React, { Component } from 'react';
import {
    Alert,
    TextInput,
    View,
    Keyboard,
    TouchableOpacity,
    TouchableWithoutFeedback,
    AsyncStorage,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { boxes, boxesDark } from "../styles/boxes";


const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("screen").height;
const PERCENT = WIDTH / 100;

export default class AddTodo extends Component {

    static navigationOptions({ navigation }) {
        let nav = navigation;
        return {
            headerLeft: () => <TouchableOpacity onPress={() => nav.navigate("Home")} style={{ marginRight: 20 }}>
                <Text style={{ color: "#fff", fontSize: 13, fontWeight: "bold" }}>Back</Text>
            </TouchableOpacity>
        }
    }

    constructor() {
        super();
        this.state = {
            todos: [],
            header: "",
            desc: "",
            key: 'TODOLIST',
            addDesc: false
        }
    }

    componentDidMount = async () => {
        this.listener = this.props.navigation.addListener('didFocus', async () => {
            await AsyncStorage.getItem('TODOLIST').then((value) => {
                if (value !== null) {
                    this.setState({ todos: JSON.parse(value) });
                    // console.log(this.state.todos)
                }

            });
            this.setState({ addDesc: false })
        })

    }

    componentWillUnmount() {
        // Remove the event listener
        this.listener.remove();
    }
     


    saveData = () => {
        const { header, desc } = this.state;
        if (header !== '') {
            if (header.length > 2) {

                if (header.length < 50) {
                    let obj = {
                        header: header,
                        desc: desc,
                        key: Math.random().toString(),
                        isTrashed: false,
                        isCompleted: false
                    }

                    this.setState(prevState => {
                        return {
                            todos: [obj, ...prevState.todos]
                        }
                    }, async () => {
                        await AsyncStorage.setItem(this.state.key, JSON.stringify(this.state.todos));
                    })

                    this.setState({ header: "", desc: "" })
                    this.props.navigation.navigate('Ekran1');

                } else {
                    Alert.alert(
                        'OPPS!',
                        "Your header's length must be smaller than 50 charachters",
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: true },
                    );
                }
            } else {

                Alert.alert(
                    'OPPS!',
                    "Your header's length must be bigger than 2 charachters",
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: true },
                );
            }
        } else {
            Alert.alert(
                'OPPS!',
                'Yours must have an header!',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: true },
            );

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
                onPress={() => { Keyboard.dismiss(); }}
            >
                <KeyboardAvoidingView style={theme === "light" ? boxes.addTodoContainer : boxesDark.addTodoContainer} behavior="padding">
                    <View style={theme === "light" ? boxes.addTodoContainer : boxesDark.addTodoContainer}>
                        <TextInput
                            style={[theme === "light" ? boxes.addTodoInput : boxesDark.addTodoInput, { fontSize: 20 }]}
                            placeholder="Add new todo"
                            onChangeText={(text) => this.setState({ header: text })}
                            value={this.state.header}
                            maxLength={50} />
                        {this.state.addDesc ?
                            <TextInput
                                style={theme === "light" ? boxes.addDescInput : boxesDark.addDescInput}
                                multiline={true}
                                onChangeText={(text) => this.setState({ desc: text })}
                                placeholder="Add a description"
                                numberOfLines={4}
                                value={this.state.desc}
                                maxLength={200}
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
                                    // this.setTodo();
                                    this.saveData();
                                    // this.displayData();
                                    // this.setStorage();
                                    Keyboard.dismiss()
                                }}>
                                <Icon
                                    name="ios-add"
                                    style={theme === "light" ? boxes.AddTodoAddIcon : boxesDark.AddTodoAddIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        )
    }

}
