import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, ScrollView, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CreateModal from './Create.Modal';

export default function Home() {
  const [modalVisible,setModalVisible]= useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
        <FontAwesome name="plane" size={24} color="white" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Explore flight</Text>
          <Text style={styles.welcome}>Welcome to flight booking</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.profileText}>A</Text>
          {/* <Image 
            source={require("")}
          /> */}
        </View>
      </View>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={24} color="gray" style={styles.searchIcon} 
          onPress={()=>setModalVisible(true)}
        />
        <TextInput 
          style={styles.searchInput} 
          placeholder="Find a flight"
          onPress={()=>setModalVisible(true)}
        />
      </View>
        {/* body */}
        <View>
          <Text style={styles.bestCitiesHeader}>The best cities for you</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cityCard}>
              <Image 
                source={require("../assets/hong-kong.png")} 
                style={styles.cityImage} 
              />
              <View style={styles.textBody}>
                <Text style={styles.cityName}>Hong Kong</Text>
                <Text style={styles.price}>from $33.00 to $38.00</Text> 
              </View>
            </View>
            
            <View style={styles.cityCard}>
              <Image 
                source={require("../assets/san-antonio.png")} 
                style={styles.cityImage} 
              />
              <View style={styles.textBody}>
                <Text style={styles.cityName}>San Antonio</Text>
                <Text style={styles.price}>from $48.00 to</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        {/* next-footer */}
        <View style={{ marginTop: 20 }}>
          <Text style={styles.exploreDestinations}>Explore Destinations</Text>
          <Image 
            source={require("../assets/anh-may-bay.png")} 
            style={styles.destinationImage} 
          />
        </View>
      </ScrollView>
      {/* menu-footer */}
      <View style={{ paddingTop: 10,}}>
        <View style={styles.menuIcon}>
          <AntDesign name="home" size={24} color="black"/>
          <FontAwesome6 name="earth-americas" size={24} color="black" />
          <AntDesign name="user" size={24} color="black" />
        </View>
        <View style={styles.menuText}>
          <Text>Home</Text>
          <Text>Explore</Text>
          <Text>Profile</Text>
        </View>
      </View>
      <CreateModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginTop:50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#38b2ac',
    padding: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcome: {
    color: 'gray',
  },
  profileContainer: {
    backgroundColor: '#4299e1',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  bestCitiesHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cityCard: {
    marginRight: 20,
    alignItems: 'center',
  },
  cityImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  cityName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  exploreDestinations: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  destinationImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },
  textBody: {
    padding: 20,
  },
  menuIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 7,
    paddingHorizontal: 7,
  },
  menuText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
});
