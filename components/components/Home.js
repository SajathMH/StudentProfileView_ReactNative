import {View, Text, TextInput, StyleSheet, Pressable, Image} from "react-native"; 
import {useState} from "react";

export default function Login(){
    const [msg, setMsg] = useState(false)

    return(
        <View style={styles.mainContainer}>
            <Image style={styles.img} source={require('../assets/Images/Uov.png')} width={300} height={100}/>
        </View>
    )
}

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'white'
    },
    heading:{
        color:'black',
        fontSize:28,
        fontWeight:"bold"
    },
    button:{
        fontSize:24,
        padding:10,
        marginVertical:8,
        backgroundColor:"#F5B041",
        borderRadius:10,
        borderColor:"black",
        borderWidth:2
    },
    buttontext:{
        color:"#FF5733",
        fontSize:26,
        textAlign:"center"
    },
    img:{
        width:328,
        height:100,
        
    }
})