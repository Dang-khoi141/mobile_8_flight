// import React, { useState } from 'react';
// import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const FlashListCT = ({ onSelectCity, cities }) => {
//   const [searchText, setSearchText] = useState('');

//   const filteredCities = cities.filter((city) =>
//     city.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.cityItem}
//       onPress={() => onSelectCity(item)}
//     >
//       <Text style={styles.cityText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={filteredCities}
//         keyExtractor={(item) => item}
//         renderItem={renderItem}
//         style={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     maxHeight: 300,
//   },
//   cityItem: {
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
//   cityText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   list: {
//     maxHeight: 300,
//   },
// });

// export default FlashListCT;
