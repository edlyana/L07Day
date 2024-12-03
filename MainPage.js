import React from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {datasource} from './Data';

const styles = StyleSheet.create({
    btnStyle: {
        alignSelf: 'center',
        borderRadius: 25,
        width: 200,
        height: 45,
        backgroundColor:'blue',
        margin: 20,
    },
    headingIntro: {
        fontSize: 25,
        color: 'blue',
        textAlign: 'center',
        padding: 30,
        margin: 10,
    },
});

const MainPage = ({navigation}) => {
    return (
        <View>
            <StatusBar/>
            <Text style={styles.headingIntro}>Monthly Budget App</Text>
            <TouchableOpacity style={styles.btnStyle} onPress={() => {navigation.navigate("Add")}}>
                <Text style={{textAlign:"center", paddingTop:12}}>Add Money Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnStyle} onPress={() => {navigation.navigate("Home")}}>
                <Text style={{textAlign:"center", paddingTop:12}}>Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MainPage;
