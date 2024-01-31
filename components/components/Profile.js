import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, FlatList} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function Profile({ navigation, route }) {
  const selectedStudentId = route.params?.selectedStudentId;

const StuItem = ({ item }) => (
    <View>
      <Text>{item.firstName}</Text>
      <Text>{item.lastName}</Text>
      <Text>{item.age}</Text>
      <Text>{item.course}</Text>
      <Text>{item.gender}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Student Profile</Text>
      <Text style={styles.buttontext}>{selectedStudentId.studentId}</Text>
      <FlatList data={[selectedStudentId]} renderItem={StuItem}/>
      <Pressable onPress={()=>navigation.popToTop()}><Text style={styles.btn}>Move Back to List</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
  },
  button: {
    fontSize: 24,
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#C1F2B0',
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  buttontext: {
    color: "#FF5733",
    fontSize: 26,
    textAlign: "center",
  },
  btn:{
    fontSize: 18,
    padding:10,
    backgroundColor	:'#C1F2B0'
  }
});
