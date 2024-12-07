// import React, {useState} from 'react';
// import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList} from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
//
// const styles = StyleSheet.create({
//     pageStyle: {
//         backgroundColor: '#F17F29',
//         flex: 1,
//         padding: 20,
//     },
//     inputContainer: {
//         marginBottom: 15,
//     },
//     inputLabel: {
//         marginBottom: 5,
//     },
//     inputBox: {
//         borderWidth: 1,
//         padding: 10,
//         borderRadius: 5,
//         backgroundColor: '#fff',
//     },
//     incomeHistory: {
//         marginTop: 20,
//     },
//     incomeItem: {
//         padding: 10,
//         backgroundColor: '#fff',
//         marginBottom: 5,
//         borderRadius: 5,
//     },
//     btnStyle: {
//         alignSelf: 'center',
//         borderRadius: 25,
//         width: 200,
//         height: 45,
//         backgroundColor:'#7DDF64',
//         margin: 20,
//     },
// });
//
// const InputBox = ({label, onChangeText}) => {
//     return (
//         <View style={styles.inputContainer}>
//             <Text style={styles.inputLabel}>{label}</Text>
//             <TextInput style={styles.inputBox} onChangeText={onChangeText} keyboardType="numeric"/>
//         </View>
//     );
// };
//
// const NewMonth = ({navigation}) => {
//     const [income, setIncome] = useState('');
//     const [incomeHistory, setIncomeHistory] = useState([]);
//
//     const addIncomeToHistory = () => {
//         if (income){
//             setIncomeHistory((prev) => [...prev, parseFloat(income)]);
//             setIncome(''); // Clear the input box after adding
//         }
//     };
//
//     return (
//         <View style={styles.pageStyle}>
//             <InputBox label="Enter Income:" onChangeText={setIncome}/>
//             <Button title="Add Income" onPress={addIncomeToHistory}/>
//
//             <View style={styles.incomeHistory}>
//                 <Text>Income History:</Text>
//                 <FlatList
//                     data={incomeHistory}
//                     keyExtractor={(item, index) => index.toString()}
//                     renderItem={({ item, index }) => (
//                         <View style={styles.incomeItem}>
//                             <Text>#{index + 1}: ${item}</Text>
//                         </View>
//                     )}
//                 />
//             </View>
//
//             <TouchableOpacity style={styles.btnStyle} onPress={() => {navigation.navigate("Home")}}>
//                 <Text style={{textAlign:"center", paddingTop:12, color:'white'}}>Home Screen</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };
//
// export default NewMonth;


{/*<InputBox label ="Monthly Expense:" onChange Text={setExpense}/>*/}
{/*<View style={{padding: 10}}>*/}
{/*    <Text>Choose your top 3 spending categories:</Text>*/}
{/*    <RNPickerSelect*/}
{/*        value={choice1}*/}
{/*        onValueChange={(value) => setChoice1(value)}*/}
{/*        items={[*/}
{/*            {label:"Food", value:"Food"},*/}
{/*            {label:"Bills", value:"Bills"},*/}
{/*            {label:"Entertainment", value:"Entertainment"},*/}
{/*            {label:"Medical", value:"Medical"},*/}
{/*            {label:"Others", value:"Others"},*/}
{/*        ]}*/}
{/*    />*/}
{/*</View>*/}
{/*<View style={{padding: 10}}>*/}
{/*    <RNPickerSelect*/}
{/*        value={choice2}*/}
{/*        onValueChange={(value) => setChoice2(value)}*/}
{/*        items={[*/}
{/*            {label:"Food", value:"Food"},*/}
{/*            {label:"Bills", value:"Bills"},*/}
{/*            {label:"Entertainment", value:"Entertainment"},*/}
{/*            {label:"Medical", value:"Medical"},*/}
{/*            {label:"Others", value:"Others"},*/}
{/*        ]}*/}
{/*    />*/}
{/*</View>*/}
{/*<View style={{padding: 10}}>*/}
{/*    <RNPickerSelect*/}
{/*        value={choice3}*/}
{/*        onValueChange={(value) => setChoice3(value)}*/}
{/*        items={[*/}
{/*            {label:"Food", value:"Food"},*/}
{/*            {label:"Bills", value:"Bills"},*/}
{/*            {label:"Entertainment", value:"Entertainment"},*/}
{/*            {label:"Medical", value:"Medical"},*/}
{/*            {label:"Others", value:"Others"},*/}
{/*        ]}*/}
{/*    />*/}
{/*</View>*/}
