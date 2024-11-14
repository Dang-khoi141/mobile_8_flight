import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFC107",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    fontWeight: "600",
    color: '#000',
    marginBottom: 20,
  },
  body: {
    width: '80%',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: "#ddbe3b",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ddbe3b",
    borderRadius: 5,
  },
  icon: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
  },
});

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>LOGIN</Text>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Name'
            placeholderTextColor="#000"
          />
          <FontAwesome name="user" size={24} color="black" style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry
            placeholderTextColor="#000"
          />
          <TouchableOpacity>
            <AntDesign name="lock1" size={24} color="black" style={styles.icon}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
