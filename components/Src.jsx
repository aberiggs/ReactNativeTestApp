import React, {useState} from 'react';
import {StyleSheet, Button, Pressable, FlatList, Text, TextInput, View, Keyboard} from 'react-native';
import Checkbox from 'expo-checkbox';

import {textStyle} from '../styles/Main.js'

const Main = (props) => {
    if (props.page === 0) {
        return (
            <Counter />
        )
    } else if (props.page === 1) {
        return (
            <Todo />
        )
    } else {
        return (
            <Error />
        )
        
    }
}

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={counterStyle.main}>
            <Text style={textStyle.big}>My Counter: {count}</Text>
            <Button title={`Click me to make it ${count+1}`} onPress={() => setCount(count+1)}/>
            <Button title={(count > 0) ? `Click me to make it ${count-1}` : "Can't go below 0!"} onPress={() => setCount(count-1)} disabled={count <= 0}/>
        </View>
    )
}

const Todo = () => {
    const [elementText, setElementText] = useState("");
    const [listItems, setListItems] = useState([]);

    const addElement = () => {
        setElementText("");
        setListItems([...listItems, {key: elementText}])
    }

    const List = (props) => {
        const [isChecked, setChecked] = useState(false);
        return(
            <View style={todoStyle.listEle}>
                <Checkbox value={isChecked} onValueChange={setChecked}/>
                <Text style={textStyle.smallMed}>{props.item.key}</Text>
            </View>
        )
    }

    return (
        <View style={todoStyle.main}>
            <Text style={textStyle.med}>Welcome to your todo list!</Text>
            <TextInput style={{
                height: 40, 
                color: 'pink',
                borderWidth: 1,
                borderRadius: 6,
                borderColor: 'white',
                padding: 10,
                margin: 5,
                fontSize: 15,
                width: '80%',
                }} placeholder={'Enter todo item here'} placeholderTextColor={'lightblue'} onSubmitEditing={Keyboard.dismiss} onChangeText={newText => setElementText(newText)} defaultValue={elementText} 
            />
            <Pressable disabled={(elementText.trim().length === 0)} onPress={() => addElement()}>
                <Text style={[textStyle.smallMed, {color: 'lightblue'}]}>Add Element </Text>
            </Pressable>

            <View style={todoStyle.list}>
                <FlatList  data={listItems} showsVerticalScrollIndicator={false} renderItem={({item}) => <List item={item} />} />
            </View>
        
        </View>
    )
}

const Error = () => {
    return (
        <View style={styles.main}>
            <Text>Error</Text>
        </View>
    )
}

const counterStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}) 

const todoStyle = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    add: {
        width: '100%',
        alignItems: 'left'
    },
    highlight: {
        color: 'red'
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 40,    
        justifyContent: 'start',    
    },
    listEle: {
        
        justifyContent: 'start',
        alignItems: 'center',
        flexDirection: 'row',
        //marginHorizontal: 30,

    }
}) 

export default Main;
