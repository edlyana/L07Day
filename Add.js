import React, {useState} from 'react';
import {datasource} from './Data';
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import Home from "./Home";

const Add = ({navigation, setChoice1, setChoice2, setChoice3}) => {
    const [letter, setLetter] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('Others');

    return (
        <View style={{padding: 10}}>
            <Text>New Expenses</Text>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Item Name:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text) => setLetter(text)}/>
            </View>

            <View>
                <Text style={{fontWeight: 'bold'}}>Price:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(no) => setPrice(no)}/>
            </View>

            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        {label:{setChoice1}, value:{setChoice1}},
                        {label:{setChoice2}, value:{setChoice2}},
                        {label:{setChoice3}, value:{setChoice3}},
                        {label:"Others", value:"Others"},
                    ]}
                />
            </View>
            <Button title="SUBMIT" onPress={() => {
                let item = {key: letter}; //{key: d}
                let indexNum = 1;
                if(type == "Vowels") {
                    indexNum = 0;
                }
                datasource[indexNum].data.push(item);
                navigation.navigate('Home')
            }
            }
            />
        </View>
    );
};

export default Add;
