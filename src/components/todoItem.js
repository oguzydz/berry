import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { boxes, boxesDark } from '../styles/boxes';
import Icon from 'react-native-vector-icons/Ionicons';
import ReadMore from 'react-native-read-more-text';



export default class TodoItem extends Component {

    render() {
        const { theme, deleteItem, screen, editTodo, recycleItem, completeTodo, item } = this.props;
        return (
            <View style={[theme === "light" ? boxes.box : boxesDark.box]} >
                <View style={{ flex: 1, }}>
                    <TouchableOpacity
                        style={{
                            marginLeft: 8,
                            textAlignVertical: "center",
                            alignSelf: "center",
                            flexDirection: "row",
                            flex: 1,
                        }}
                        onPress={() => completeTodo(item.key)}>
                        <Icon
                            name={item.isCompleted !== true ? "ios-radio-button-off" : "ios-radio-button-on"}
                            style={[{
                                fontSize: 25,
                                fontWeight: "bold",
                                alignSelf: "center",
                                textAlignVertical: "center",
                            }, theme === "light" ? { color: "#5639a1" } : { color: "#000" }]} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ flex: 5, padding: 15 }} onPress={() => editTodo(item)}>
                    <Text style={[theme === "light" ? boxes.boxHeader : boxesDark.boxHeader, item.desc.length == 0 ? { flex: 1, textAlignVertical: "center" } : null, item.isCompleted ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid' } : null]}>
                        {item.header}
                    </Text>
                    {item.desc.length !== 0 ?
                        <ReadMore
                            numberOfLines={1}
                            onReady={this._handleTextReady}>
                            <Text style={[theme === "light" ? boxes.boxText : boxesDark.boxText, item.isCompleted ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid' } : null]}>
                                {item.desc}
                            </Text>
                        </ReadMore> : null
                    }
                </TouchableOpacity>

                <View style={{ flex: 1 }} >
                    <View style={{ flexDirection: "column", flex: 1 }}>
                        <TouchableOpacity
                            style={theme == "light" ? screen == "trash" ? boxes.trashBoxRecycleBox : boxes.todoItemTrashBox : screen == "trash" ? boxesDark.trashBoxRecycleBox : boxesDark.todoItemTrashBox}
                            onPress={() => screen != "trash" ? deleteItem(item.key) : recycleItem(item.key)}>
                            <View>
                                <Icon
                                    name={screen == "trash" ? "ios-sync" : "ios-trash"}
                                    style={theme == "light" ? screen == "trash" ? boxes.trashBoxRecycleIcon : boxes.todoItemTrashIcon : screen == "trash" ? boxesDark.todoItemTrashIcon : boxesDark.trashBoxRecycleIcon}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => editTodo(item)} style={theme === "light" ? boxes.todoItemSettingsBox : boxesDark.todoItemSettingsBox}>
                            <View >
                                <Icon
                                    name="ios-more"
                                    style={theme === "light" ? boxes.todoItemSettingsIcon : boxesDark.todoItemSettingsIcon}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>



            </View>
        )


    }
}

