import React from 'react';
import {
    StatusBar,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, Alert
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

    btnStyle: {
        alignSelf: 'center',
        borderRadius: 50,
        width: 400,
        height: 50,
        backgroundColor:'#450B3F',
        margin: 3,
    },

    //footer section
    buttonstyle0: {
        justifyContent: 'space-evenly',
        borderRadius: 50,
        width: 105,
        height: 105,
        backgroundColor:'#450B3F',
    },
    textButton0: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    },

    //datasource rendering section
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

    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => {
                navigation.navigate("Edit", {index:index, category:section.title, key:item.key, price:item.price}); // .key is being called in Edit.js   // used to identify specific INDEX in datasource's array by SECTION (the 5 categories)
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
        <View style={[styles.container, {flex:1, backgroundColor:"#CDC7E5", paddingHorizontal: 10}]}>
            <StatusBar hidden={true}/>

            <TouchableOpacity style={styles.btnStyle} onPress={() => {navigation.navigate("MainPage")}}>
                <Text style={{textAlign:"center", paddingTop:10, color:'white', fontSize:20,}}>Main Screen</Text>
            </TouchableOpacity>

            <SectionList sections={datasource}
                         renderItem={renderItem}  // CALL FOR renderItem HERE
                         renderSectionHeader={({section: {title, bkColor, nameIcon}}) => (
                             <View style={[styles.sectionHeader, {backgroundColor: bkColor}]}>  // ADDED VIEW TO IMPLEMENT STLYINGS
                                 <Text style={styles.sectionTitle}>{title}</Text>
                                 <Icon name={nameIcon} size={25} color="#f5f5f5"/>
                             </View>
                         )}

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
