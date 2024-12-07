import React, {useState} from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    pageStyle:{
        backgroundColor:'#F17F29',
        paddingBottom:700,
    }
})

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
    const [choice1, setChoice1] = useState(false);
    const [choice2, setChoice2] = useState(false);
    const [choice3, setChoice3] = useState(false);

    return (
        <View style={styles.pageStyle}>
            <InputBox label ="Monthly Income:" onChange Text={setIncome}/>
            <InputBox label ="Amt to Save:" onChange Text={setSave}/>
            <InputBox label ="Monthly Expense:" onChange Text={setExpense}/>
            <View style={{padding: 10}}>
                <Text>Choose your top 3 spending categories:</Text>
                <RNPickerSelect
                    value={choice1}
                    onValueChange={(value) => setChoice1(value)}
                    items={[
                        {label:"Food", value:"Food"},
                        {label:"Bills", value:"Bills"},
                        {label:"Entertainment", value:"Entertainment"},
                        {label:"Medical", value:"Medical"},
                        {label:"Others", value:"Others"},
                    ]}
                />
            </View>
            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={choice2}
                    onValueChange={(value) => setChoice2(value)}
                    items={[
                        {label:"Food", value:"Food"},
                        {label:"Bills", value:"Bills"},
                        {label:"Entertainment", value:"Entertainment"},
                        {label:"Medical", value:"Medical"},
                        {label:"Others", value:"Others"},
                    ]}
                />
            </View>
            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={choice3}
                    onValueChange={(value) => setChoice3(value)}
                    items={[
                        {label:"Food", value:"Food"},
                        {label:"Bills", value:"Bills"},
                        {label:"Entertainment", value:"Entertainment"},
                        {label:"Medical", value:"Medical"},
                        {label:"Others", value:"Others"},
                    ]}
                />
            </View>
        </View>
    );
};

export default NewMonth;
