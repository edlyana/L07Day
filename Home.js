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
        textAlign: 'center',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight:'bold',
        borderWidth:1.5,
        width: 412,
        height: 33,
    },
    buttonContainer0: {
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
        borderRadius: 50,
        width: 400,
        height: 50,
        backgroundColor:'#B04C00',
        margin: 3,
    },

    //footer section
    buttonstyle0: {
        justifyContent: 'space-evenly',
        borderRadius: 50,
        width: 105,
        height: 105,
        backgroundColor:'#B04C00',
    },
    textButton0: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },

    //TESTING !!!!!!!!!!!!!!!!!!!!!!!!!!
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20, // Ensure padding at the bottom for scrolling
    },
    sectionListContainer: {
        paddingHorizontal: 10,
    },
    sectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#CDC7E5",
        marginVertical: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
        marginVertical: 2,
    },
    itemKey: {
        fontSize: 16,
        fontWeight: "500",
    },
    itemPrice: {
        fontSize: 16,
        color: "#333",
    },
});

const Home = ({navigation}) => {

    const renderSectionHeader = ({section: {title, bkColor, nameIcon}}) => (
        <View style={[styles.sectionHeader, {backgroundColor: bkColor}]}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Icon name={nameIcon} size={25} color="black" />
        </View>
    );

    const renderCategory = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => {
                navigation.navigate("Edit", {index:index, category:section.title, key:item.key, price:item.price}); // .key is being called in Edit.js
            }}>
                <Text style={styles.itemKey}>{item.key}</Text>
                <Text style={styles.itemPrice}>$ {item.price}</Text>
            </TouchableOpacity>
        );
    };

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    const calculateTotal = () => {
        const total = {};
        let expenseTotal = 0;
        let totalIncome = 0;

        datasource.forEach((category) => {
            const totalPrice = category.data.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);  // Ensures 'price' is a number
            if (category.title === "+ Income") {
                totalIncome = totalPrice;
            }
            else {
                total[category.title] = totalPrice.toFixed(2);
                expenseTotal += totalPrice;
            }
        });

        let summaryMessage = "";
        if (totalIncome > expenseTotal) {
            summaryMessage = `\nYou have a Surplus of $${(totalIncome - expenseTotal).toFixed(2)}`;
        }
        else {
            summaryMessage = `\nYou have a Deficit of $${(expenseTotal - totalIncome).toFixed(2)}`;
        }

        Alert.alert(
            "Summary of Income & Expenses",
            `Total Income: $${totalIncome.toFixed(2)} \nTotal Expenses: $${expenseTotal.toFixed(2)} \n${summaryMessage}`,
            [{text: "Close"}]);
    };

    return (
        <View style={[styles.container, {flex:1, backgroundColor:"#CDC7E5"}]}>
            <StatusBar hidden={true}/>

            <TouchableOpacity style={styles.btnStyle} onPress={() => {navigation.navigate("MainPage")}}>
                <Text style={{textAlign:"center", paddingTop:10, color:'white', fontSize:20,}}>Main Screen</Text>
            </TouchableOpacity>

            <SectionList sections={datasource}
                         renderItem={renderCategory}
                         renderSectionHeader={renderSectionHeader}
                         keyExtractor={(item, index) => `${item.key}-${index}`}
                         contentContainerStyle={styles.sectionListContainer}
                         // renderItem={renderItem}
                         // renderSectionHeader={({section:{title, bkColor, nameIcon}})=>(
                         //     <Text style={[styles.headerText, {backgroundColor:bkColor}]}>
                         //         {title}
                         //         <Icon name={nameIcon} size={25} color={"black"}/>
                         //     </Text>
                         // )}

                         ListFooterComponent = {
                             <View style={styles.buttonContainer0}>
                                 <TouchableOpacity style={styles.buttonstyle0} onPress={()=> {navigation.navigate('Add')}}>
                                     <Text style={styles.textButton0}>Add New Income/Expenses</Text>
                                 </TouchableOpacity>

                                 <TouchableOpacity style={styles.buttonstyle0} onPress={calculateTotal}>
                                     <Text style={styles.textButton0}>View   Summary</Text>
                                 </TouchableOpacity>
                             </View>
                         }
            />
        </View>
    );
};

export default Home;


// const InputBox = ({label, onChangeText}) => {
//     return (
//         <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>{label}</Text>
//             <TextInput style={styles.inputBox} onChangeText={onChangeText} keyboardType="numeric"/>
//         </View>
//     );
// };

// Next section ADD INCOME
// <View style={styles.pageStyle}>
//     {/*<InputBox label="Enter Income:" onChangeText={setIncome}/>*/}
//     {/*<Button title="Add Income" onPress={addIncomeToHistory}/>*/}
//
//     {/*<View style={styles.incomeHistory}>*/}
//     {/*    <Text>Income History:</Text>*/}
//     {/*    <FlatList data={totalIncome} renderItem={renderItem}/>*/}
//     {/*    <FlatList*/}
//     {/*        data={incomeHistory}*/}
//     {/*        keyExtractor={(item, index) => index.toString()}*/}
//     {/*        renderItem={({ item, index }) => (*/}
//     {/*            <View style={styles.incomeItem}>*/}
//     {/*                <Text>#{index + 1}: ${item}</Text>*/}
//     {/*            </View>*/}
//     {/*        )}*/}
//     {/*    />*/}
//     {/*</View>*/}
//
//     <TouchableOpacity style={styles.btnStyle} onPress={() => {navigation.navigate("MainPage")}}>
//         <Text style={{textAlign:"center", paddingTop:12, color:'white'}}>Home Screen</Text>
//     </TouchableOpacity>
// </View>
