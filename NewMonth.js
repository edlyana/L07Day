import React, {useState} from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText}) => {
    return (
        // <View style={{padding: 20, paddingBottom: 5}}>
        <View>
            <Text>{label}</Text>
            <TextInput style = {{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    );
};

const NewMonth= ({navigation}) => {
    const [income, setIncome] = useState(0);
    const [save, setSave] = useState(0);
    const [expense, setExpense] = useState(0);

    return (
        <View>
            <InputBox label ="Monthly Income:" onChange Text={setIncome}/>
            <InputBox label ="Amt to Save:" onChange Text={setSave}/>
            <InputBox label ="Monthly Expense:" onChange Text={setExpense}/>
        </View>
    );
};

export default NewMonth;
