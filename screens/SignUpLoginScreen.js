import React,{Component} from 'react';
import{View,Text, TextInput, StyleSheet, TouchableOpacity,Alert } from 'react-native';

export default class SignUpLoginScreen extends Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'', 
        }
    }

    userLogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emaild, password)
  .then(() => {
  
   return Alert.alert("Successful Login")
    
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    return Alert.alert(errorMessage);
  
  });
    }

    userSignUp=(emailId,password)=>{
    firebase.auth().createUserWithEmailAndPassword(emaild, password)
    .then(() => {
    
     return Alert.alert("User Added Successfully")
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
  
      return Alert.alert(errorMessage);
    
    });
      }

render(){
    return(
    <View style={styles.container}>
<View>
    <Text style={styles.title}>Barter System</Text>
</View>

<View>
    <TextInput style={styles.inputBox}
    placeholder='abc@example.com'
    keyboardType="email-address"
    onChangeText={(text)=>{
        this.setState({
            emailId:text
        })
    }}>

    </TextInput>

    <TextInput style={styles.inputBox}
    secureTextEntry={true}
    placeholder="enter password"
    onChangeText={(text)=>{
        this.setState({
            password:text
        })
    }}>

    </TextInput>

<TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
onPress={()=>{
    this.userLogin(this.state.emailId, this.state.password)
}}>
    <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
onPress={()=>{
    this.userSignUp(this.state.emailId, this.state.password)
}}>
    <Text style={styles.buttonText}>Sign Up</Text>
</TouchableOpacity>
</View>
    </View>    
    )
}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"orange"
    },
    title:{
        fontSize:40,
        fontWeight:'bold',
        paddingBottom:30,
        color:"green",
    },
    inputBox:{
        width:300,
        height:40,
        borderBottomWidth:4,
        borderColor:"white",
        fontSize:20,
        margin:10,
        paddingLeft:10,
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:35,
        backgroundColor:"blue",
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:20,
    }
})