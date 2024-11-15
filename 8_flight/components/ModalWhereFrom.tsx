import { Modal, Pressable, StyleSheet, Text, View, Dimensions, FlatList, TextInput } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";

const { height } = Dimensions.get('window'); // Lấy chiều cao của màn hình

interface IProps {
    onClose: () => void;
}

const CreateModalWhereFrom = ({ onClose }: IProps) => {
   

    // Dữ liệu mẫu cho FlatList
    const data = [
        { id: '1', title: 'Lodon' },
        { id: '2', title: 'Tokyo' },
        { id: '3', title: 'NewYork' },
        { id: '4', title: 'Bangkok' },
        { id: '5', title: 'HoChiMinh' },
        { id: '6', title: 'Moscow' },
    ];

    const [searchQuery, setSearchQuery] = useState('');

    // Lọc dữ liệu dựa trên từ khóa tìm kiếm
    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.container}>
           
            
                <View style={styles.modalContainer}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.textTitle}>Where from ?</Text>
                        <AntDesign
                            onPress={onClose}
                            name="close" size={24} color="black" />
                    </View>

                    {/* Body */}
                    <View style={styles.body}>
                    <View style={styles.inputWrapper}>
                    <FontAwesome5 name="plane-departure" size={20} color="gray" style={styles.icon} />
                    <TextInput placeholder="From" style={styles.input} placeholderTextColor="gray" />
                </View>
                <View style={styles.inputWrapper}>
                    <FontAwesome5 name="plane-arrival" size={20} color="gray" style={styles.icon} />
                    <TextInput placeholder="To" style={styles.input} placeholderTextColor="gray" />
                    <FontAwesome5 name="exchange-alt" size={20} color="gray" style={styles.iconRight} />
                </View>
                        {/* <FlatList
                            data={filteredData}
                            renderItem={({ item }) => (
                                <View style={styles.item}>
                                    <Text>{item.title}</Text>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                        /> */}
                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                        {/* Có thể thêm các nút hoặc thông tin khác ở đây */}
                    </View>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 8,
    },
    icon: {
        marginRight: 8,
      },
      iconRight: {
        marginLeft: 'auto',
      },
      input: {
        flex: 1,
        height: 40,
        color: 'gray',
        
      },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
    },
    modalContainer: {
        position: 'absolute',
        bottom: 0,
        height: height * 0.95, // Chiếm 95% chiều cao màn hình
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5,
        borderTopWidth: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        paddingVertical: 10,
    },
    textTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },
    body: {
        flex: 1,
        padding: 10,
    },
   
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    footer: {
        padding: 10,
        // Thêm các thuộc tính khác nếu cần
    },
});

export default CreateModalWhereFrom;
