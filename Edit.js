import React, {useState} from 'react';
import {datasource} from './Data';
import {TextInput, View, Text, Button, Alert, StyleSheet, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    buttonstyle0: {
        justifyContent: 'space-evenly',
        borderRadius: 50,
        width: 80,
        height: 80,
        backgroundColor:'#B04C00',
    },
    textButton0: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },
    buttonContainer0: {
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})

const Edit = ({navigation, route}) => {
    const [itemName, setItemName] = useState(route.params.key); // .key is being called here by Home.js
    const [price, setPrice] = useState(route.params.price.toString()); // .price is being called here by Home.js
    const [category, setCategory] = useState(route.params.category);

    return (
        <View style={{padding: 10, backgroundColor:'#CDC7E5', flex:1}}>
            <Text style={{fontSize:20, textAlign:'center',fontWeight:'bold', color:'#f5f5f5', backgroundColor:'#B04C00', width:390, height:40, alignSelf:'center', paddingTop:6}}>Edit Item</Text>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold', fontSize:16, paddingBottom:5}}>Item Name:</Text>
                <TextInput style={{borderWidth: 1.5, borderRadius:50, borderColor:'#B04C00', paddingLeft:20, fontSize:18, backgroundColor:'#f5f5f5'}} value={itemName} onChangeText={(text) => setItemName(text)}/>
            </View>

            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold', fontSize:16, paddingBottom:5}}>Price:</Text>
                <TextInput style={{borderWidth: 1.5, borderRadius:50, borderColor:'#B04C00', paddingLeft:20, fontSize:18, backgroundColor:'#f5f5f5'}} value={price} onChangeText={(number) => setPrice(number)}/>
            </View>

            <View style={styles.buttonContainer0}>
                <TouchableOpacity style={styles.buttonstyle0} onPress={() => {
                    // TELLING TO FIND THE TITLE/CATEGORY THE USERS CLICKED ON. INSTEAD OF CODING OUT THE IF STATEMENTS OF 'if (route.params.category == "Others")'
                    let sectionIndex = datasource.findIndex((section) => section.title === route.params.category);
                    datasource[sectionIndex].data[route.params.index] = {key: itemName, price: price}; // SAVING CHANGES
                    navigation.navigate("Home");
                }}>
                    <Text style={styles.textButton0}>SAVE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonstyle0} onPress={() => {
                    let sectionIndex = datasource.findIndex((section) => section.title === route.params.category);

                    Alert.alert("Are you sure?", '',
                        // BUTTONS REPRESENTED IN THE '[ ]' BY '{},{}'
                        [{text:"Yes", onPress: () => {
                                datasource[sectionIndex].data.splice(route.params.index,1);  // TO REMOVE THE SPECIFIC item BY INDEX FROM datasource
                                navigation.navigate('Home');
                            }},
                            {text:"No"}
                        ])
                }}>
                    <Text style={styles.textButton0}>DELETE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Edit;
