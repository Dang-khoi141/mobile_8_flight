import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





  const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (email === 'k' && password === '123') {
        navigation.navigate('Home'); // Điều hướng đến màn hình 'Main'
      } else {
        alert('Thông tin đăng nhập không đúng!');
      }
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require("../assets/icon.png")} style={styles.logo} />
          <Text style={styles.title}>Hello Again!</Text>
          <Text style={styles.subtitle}>Log into your account</Text>
        </View>
  
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Entypo name="mail" size={20} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email address"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputWrapper}>
            <AntDesign name="lock" size={20} color="black" style={styles.icon} />
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginLeft: 17, width: '100%' }}>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#aaa"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <AntDesign name="eyeo" size={24} color="black" style={{ alignItems: "center", marginTop: 15, marginRight: 40 }} />
            </View>
          </View>
        </View>
  
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.continueButton} onPress={handleLogin}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
  
        <Text style={styles.orText}>or</Text>
  
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="#4267B2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  inputContainer: {
    width: '100%',
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 20,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 40,
    color: '#333',
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 13,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  forgotPasswordText: {
    color: '#4AA7C0',
  },
  continueButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#00C0C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#aaa',
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: 'row',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default LoginScreen