import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View, Keyboard } from 'react-native';

export default function AddTodo({ storeData }) {

    const [text, setText] = useState("");

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
                value={text}
            />
            <Button
                onPress={() => {
                    storeData(text);
                    setText();
                    Keyboard.dismiss()
                }}
                title="add todo"
                color="#6b52ae"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
})