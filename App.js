import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import List from './components/List';
import Profile from './components/Profile';

const Tap = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackScreen(){
  return (
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='menu' component={List}/>
    <Stack.Screen name='profile' component={Profile}/>
  </Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <View>
      <Text style={styles.header}>Student Information Portal</Text>
      </View>
      <NavigationContainer>
        <Tap.Navigator screenOptions={({route})=>({
          tabBarActiveTintColor:'#65B741',
          tabBarInactiveTintColor:'#C1F2B0',
          tabBarIcon:({focused, color})=>{
            let iconName='';
            let sz=focused?20:25;
            if(route.name==='Home'){
              return <Entypo name="home" size={sz} color={color} />
            }else{
              return <Entypo name="menu" size={sz} color={color} />
            }
          }
        })}>
          <Tap.Screen name='Home' component={Home}/>
          <Tap.Screen name = 'List' component={StackScreen}/>
        </Tap.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'24px'
  },
  header:{
    fontSize:36,
    marginTop:100,
  },
  title:{
    width:500,
    height:100,
    border: '1px solid black'
  }
});
