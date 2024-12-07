import React, {useState} from 'react';
import {
    StatusBar,
    Button,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput, ScrollView, Alert
} from 'react-native';
import {datasource} from './Data';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    headerText: {
        fontSize: 20,
        // margin: 10,
        textAlign: 'center',
        fontWeight:'bold',
    },
    buttonContainer:{
        borderWidth: 1,
        margin: 10,
    },
// ADD INCOME //
    pageStyle: {
        backgroundColor: '#F17F29',
        flex: 1,
        padding: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    inputLabel: {
        marginBottom: 5,
    },
    inputBox: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    incomeHistory: {
        marginTop: 20,
    },
    incomeItem: {
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 5,
        borderRadius: 5,
    },
    btnStyle: {
        alignSelf: 'center',
        borderRadius: 25,
        width: 200,
        height: 45,
        backgroundColor:'#7DDF64',
        margin: 20,
    },
});

// const InputBox = ({label, onChangeText}) => {
//     return (
//         <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>{label}</Text>
//             <TextInput style={styles.inputBox} onChangeText={onChangeText} keyboardType="numeric"/>
//         </View>
//     );
// };

const Home = ({navigation}) => {

    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.opacityStyle} onPress={() => {
                navigation.navigate("Edit", {index:index, category:section.title, key:item.key, price:item.price}); // .key is being called in Edit.js
            }}>
                <Text style={styles.textStyle} >{item.key}</Text>
                <Text style={styles.textStyle} >$ {item.price}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView>
            <View style={[styles.container, {marginBottom: 150}]}>
                <StatusBar hidden={true}/>
                <View style={styles.buttonContainer}>
                    <Button title="Summary of Monies" onPress={() => {
                        // // Calculate total income and expenses
                        // // let totalIncome = incomeHistory.reduce((acc, curr) => acc + curr, 0).toFixed(2);
                        // let totalExpenses = 0; // Replace with your actual calculation of total expenses
                        //
                        // // Determine surplus or deficit
                        // let summaryMessage = '';
                        // if (totalIncome > totalExpenses) {
                        //     summaryMessage = "You have a Surplus of $ " + (totalIncome - totalExpenses).toFixed(2);
                        // }
                        // else {
                        //     summaryMessage = "You have a Deficit of $ " + (totalExpenses - totalIncome).toFixed(2);
                        // }
                        //
                        // const msg = "Total Income: $ " + totalIncome + "\n" +
                        //     "Total Expenses: $ " + totalExpenses + "\n" +
                        //     summaryMessage;

                        Alert.alert({text:"Close"});
                    }}/>
                </View>
                <View>
                    <SectionList sections={datasource} renderItem={renderItem}
                                 renderSectionHeader={({section:{title, bkColor, nameIcon}})=>(
                                     <Text style={[styles.headerText, {backgroundColor:bkColor}]}>
                                         {title}
                                         <Icon name={nameIcon} size={25} color={"black"}/>
                                     </Text>
                                 )}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Add New Income/Expenses" onPress={()=> {navigation.navigate('Add')}}/>
                </View>

                // Next section ADD INCOME
                <View style={styles.pageStyle}>
                    {/*<InputBox label="Enter Income:" onChangeText={setIncome}/>*/}
                    {/*<Button title="Add Income" onPress={addIncomeToHistory}/>*/}

                    {/*<View style={styles.incomeHistory}>*/}
                    {/*    <Text>Income History:</Text>*/}
                    {/*    <FlatList data={totalIncome} renderItem={renderItem}/>*/}
                    {/*    <FlatList*/}
                    {/*        data={incomeHistory}*/}
                    {/*        keyExtractor={(item, index) => index.toString()}*/}
                    {/*        renderItem={({ item, index }) => (*/}
                    {/*            <View style={styles.incomeItem}>*/}
                    {/*                <Text>#{index + 1}: ${item}</Text>*/}
                    {/*            </View>*/}
                    {/*        )}*/}
                    {/*    />*/}
                    {/*</View>*/}

                    <TouchableOpacity style={styles.btnStyle} onPress={() => {navigation.navigate("MainPage")}}>
                        <Text style={{textAlign:"center", paddingTop:12, color:'white'}}>Home Screen</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
};

export default Home;
