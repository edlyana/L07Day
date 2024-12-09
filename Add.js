import React, {useState} from 'react';
import {datasource} from './Data';
import {TextInput, View, Text, Button, TouchableOpacity, StyleSheet} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    buttonstyle0: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
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
})

const Add = ({navigation}) => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState();
    const [category, setCategory] = useState('Others');

    return (
        <View style={{padding: 10, backgroundColor:'#CDC7E5', flex:1}}>
            <Text style={{fontSize:20, textAlign:'center',fontWeight:'bold', color:'#f5f5f5', backgroundColor:'#B04C00', width:390, height:40, alignSelf:'center', paddingTop:6}}>New Expenses</Text>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold', fontSize:16, paddingBottom:5}}>Item Name:</Text>
                <TextInput style={{borderWidth: 1.5, borderRadius:50, borderColor:'#B04C00', paddingLeft:20, fontSize:18, backgroundColor:'#f5f5f5'}} onChangeText={(text) => setItemName(text)}/>
            </View>

            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold', fontSize:16, paddingBottom:5}}>Price:</Text>
                <TextInput style={{borderWidth: 1.5, borderRadius:50, borderColor:'#B04C00', paddingLeft:20, fontSize:18, backgroundColor:'#f5f5f5'}} onChangeText={(number) => setPrice(parseFloat(number))}/>
            </View>

            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold', fontSize:16, paddingVertical:5,}}>Choose Category:</Text>
                <RNPickerSelect
                    value={category}
                    onValueChange={(value) => setCategory(value)}
                    items={[
                        {label:"Food", value:"Food"},
                        {label:"Bills", value:"Bills"},
                        {label:"Entertainment", value:"Entertainment"},
                        {label:"Others", value:"Others"},
                        {label:"Income", value:"Income"},
                    ]}
                />
            </View>

            <TouchableOpacity style={styles.buttonstyle0} onPress={() => {
                let item = {key: itemName, price: parseFloat(price)}; //{key: d}
                let indexNum = 0;
                if(category === "Bills") {
                    indexNum = 1;
                }
                if(category === "Entertainment") {
                    indexNum = 2;
                }
                if(category === "Others") {
                    indexNum = 3;
                }
                if(category === "Income") {
                    indexNum = 4;
                }
                datasource[indexNum].data.push(item);
                navigation.navigate('Home')
            }
            }>
                <Text style={styles.textButton0}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Add;
