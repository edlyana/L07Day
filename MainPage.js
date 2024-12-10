import React from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    btnStyle: {
        alignSelf: 'center',
        borderRadius: 25,
        width: 200,
        height: 50,
        backgroundColor:'#450B3F',
        margin: 10,
    },
    headingIntro: {
        fontStyle: 'italic',
        fontSize: 35,
        color: '#0F1020',
        textAlign: 'center',
        paddingTop: 30,
        margin: 10,
    },
    mainPage: {
        backgroundColor: '#CDC7E5',
        paddingBottom: 700,
    },
    subtitle: {
        fontSize: 18,
        color: '#0F1020',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 35,
    },
    iconStyle: {
        paddingLeft: 83,
    },
});

const MainPage = ({navigation}) => {
    return (
        <View style={styles.mainPage}>
            <StatusBar/>
            <Text style={styles.headingIntro}>Budget App</Text>
            <Text style={styles.iconStyle}><Icon name="wallet" size={250} color={"white"}/></Text>
            <Text style={styles.subtitle}>Your Expense and Income Manager</Text>
            <TouchableOpacity style={styles.btnStyle} onPress={() => {navigation.navigate("Home")}}>
                <Text style={{textAlign:"center", paddingTop:13, color:'white', fontSize:16}}>Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MainPage;
