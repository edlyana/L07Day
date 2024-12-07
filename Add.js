import React, {useState} from 'react';
import {datasource} from './Data';
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import Home from "./Home";

const Add = ({navigation, setChoice1, setChoice2, setChoice3}) => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('Others');

    return (
        <View style={{padding: 10}}>
            <Text>New Expenses</Text>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Item Name:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(text) => setItemName(text)}/>
            </View>

            <View>
                <Text style={{fontWeight: 'bold'}}>Price:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText={(no) => setPrice(no)}/>
            </View>

            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={category}
                    onValueChange={(value) => setCategory(value)}
                    items={[
                        {label:{setChoice1}, value:{setChoice1}},
                        {label:{setChoice2}, value:{setChoice2}},
                        {label:{setChoice3}, value:{setChoice3}},
                        {label:"Others", value:"Others"},
                    ]}
                />
            </View>

            <Button title="SUBMIT" onPress={() => {
                let item = {key: itemName, price: price}; //{key: d}
                let indexNum = 0;
                if(category == "Bills") {
                    indexNum = 1;
                }
                if(category == "Entertainment") {
                    indexNum = 2;
                }
                if(category == "Others") {
                    indexNum = 3;
                }
                datasource[indexNum].data.push(itemName);
                navigation.navigate('Home')
            }
            }
            />
        </View>
    );
};

export default Add;
