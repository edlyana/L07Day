import React from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {datasource} from './Data';

const styles = StyleSheet.create({
    btnStyle: {
        alignSelf: 'center',
        borderRadius: 25,
        width: 200,
        height: 45,
        backgroundColor:'#7DDF64',
        margin: 20,
    },
    headingIntro: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        padding: 30,
        margin: 10,
    },
    mainPage: {
        backgroundColor: '#F17F29',
        paddingBottom: 700,
    }
});

const MainPage = ({navigation}) => {
    return (
        <View style={styles.mainPage}>
            <StatusBar/>
            <Text style={styles.headingIntro}>Monthly Budget App</Text>
            <TouchableOpacity style={styles.btnStyle} onPress={() => {navigation.navigate("Home")}}>
                <Text style={{textAlign:"center", paddingTop:12, color:'white'}}>Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MainPage;
