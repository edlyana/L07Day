import React, {useState} from 'react';
import {datasource} from './Data';
import {TextInput, View, Text, Button, Alert} from "react-native";

const Edit = ({navigation, route}) => {
    const [itemName, setItemName] = useState(route.params.key); // .key is being called here by Home.js
    const [price, setPrice] = useState(route.params.price.toString());
    const [category, setCategory] = useState(route.params.category);

    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Item Name:</Text>
                <TextInput value={itemName} style={{borderWidth: 1}} onChangeText={(text) => setItemName(text)}/>
            </View>

            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Price:</Text>
                <TextInput value={price} style={{borderWidth: 1}} onChangeText={(number) => setPrice(number)}/>
            </View>

            <View style={{flexDirection:'row'}}>
                <View style={{margin:10, flex:1}}>
                    {/*<Button title="SAVE" onPress={() => {*/}
                    {/*    let indexNum = 0;*/}
                    {/*    if (route.params.category == "Bills") {*/}
                    {/*        indexNum = 1;*/}
                    {/*    }*/}
                    {/*    if (route.params.category == "Entertainment") {*/}
                    {/*        indexNum = 2;*/}
                    {/*    }*/}
                    {/*    if (route.params.category == "Others") {*/}
                    {/*        indexNum = 3;*/}
                    {/*    }*/}
                    {/*    datasource[indexNum].data[route.params.index].key = itemName;*/}
                    {/*    datasource[indexNum].data[route.params.index].price = price;*/}
                    {/*    navigation.navigate('Home');*/}
                    {/*}}/>*/}
                    <Button
                        title="SAVE"
                        onPress={() => {
                            let sectionIndex = datasource.findIndex((section) => section.title === route.params.category);
                            datasource[sectionIndex].data[route.params.index] = { key: itemName, price: price };
                            navigation.navigate("Home");
                        }}
                    />
                </View>

                <View style={{margin:10, flex:1}}>
                    <Button title="DELETE" onPress={() => {
                        let sectionIndex = datasource.findIndex(
                            (section) => section.title === route.params.category
                        );
                        // let indexNum = 0;
                        // if (route.params.category == "Bills") {
                        //     indexNum = 1;
                        // }
                        // if (route.params.category == "Entertainment") {
                        //     indexNum = 2;
                        // }
                        // if (route.params.category == "Others") {
                        //     indexNum = 3;
                        // }
                        Alert.alert("Are you sure?", '',
                            [{text:"Yes", onPress: () => {
                                    datasource[sectionIndex].data.splice(route.params.index,1);
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
