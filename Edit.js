import React, {useState} from 'react';
import {datasource} from './Data';
import {TextInput, View, Text, Button, Alert} from "react-native";
// import RNPickerSelect from 'react-native-picker-select';
// import Home from "./Home";

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = useState(route.params.key); // .key is being called here by Home.js
    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Letter:</Text>
                <TextInput value={letter} style={{borderWidth: 1}} onChangeText={(text) => setLetter(text)}/>
            </View>

            <View style={{flexDirection:'row'}}>
                <View style={{margin:10, flex:1}}>
                    <Button title="SAVE" onPress={() => {
                        let indexNum = 1;
                        if (route.params.type == "Vowels") {
                            indexNum = 0;
                        }
                        datasource[indexNum].data[route.params.index].key = letter;
                        navigation.navigate('Home');
                    }}/>
                </View>

                <View style={{margin:10, flex:1}}>
                    <Button title="DELETE" onPress={() => {
                        let indexNum = 1;
                        if (route.params.type == "Vowels") {
                            indexNum = 0;
                        }
                        Alert.alert("Are you sure?", '',
                            [{text:"Yes", onPress: () => {
                                    datasource[indexNum].data.splice(route.params.index,1);
                                    navigation.navigate('Home');
                                }},
                                {text:"No"}
                            ])
                    }}/>
                </View>
            </View>
        </View>
    );
};

export default Edit;
