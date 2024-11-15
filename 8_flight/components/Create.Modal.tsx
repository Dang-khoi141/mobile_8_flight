
import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import OneWay from "./One-way";
import MultiCity from "./Multi-city";
import { Calendar } from 'react-native-calendars';
import CreateModalWhereTo from "./ModalWhereTo";
import CreateModalWhereFrom from "./ModalWhereFrom";
import CreateModalTravellerOptions from "./ModalTraveller";

interface Iprops {
    modalVisible: boolean;
    setModalVisible: (v: boolean) => void;
}

const CreateModal = (prop: Iprops) => {
    const { modalVisible, setModalVisible } = prop;
    const [oneWayModalVisible, setOneWayModalVisible] = useState(false);
    const [multiCityModalVisible, setMultiCityModalVisible] = useState(false);
    const [calendarModalVisible, setCalendarModalVisible] = useState(false);  // State for calendar modal
    const [selectedDateFrom, setSelectedDateFrom] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [modalVisibleFrom, setModalVisibleFrom] = useState(false);
    const [modalVisibleTo, setModalVisibleTo] = useState(false);
    const [travellerModalVisible, setTravellerModalVisible] = useState(false);

    const onDateSelectFrom = (day: any) => {
        setSelectedDateFrom(day.dateString);
        setCalendarModalVisible(false);
    };

    const onDateSelect = (day: any) => {
        setSelectedDate(day.dateString);
        setCalendarModalVisible(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <FontAwesome5 name="times" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Flight</Text>
                    <View style={{ width: 24 }}></View>
                </View>

                {/* Tab Container */}
                <View style={styles.tabContainer}>
                    <TouchableOpacity style={styles.activeTab}>
                        <Text style={styles.activeTabText}>Round-trip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setOneWayModalVisible(true); setMultiCityModalVisible(false); }}>
                        <Text style={styles.inactiveTabText}>One-way</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setMultiCityModalVisible(true); setOneWayModalVisible(false); }}>
                        <Text style={styles.inactiveTabText}>Multi-city</Text>
                    </TouchableOpacity>
                </View>

                {/* Input Fields */}
                <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.inputWrapper}
                   >
                        <FontAwesome5 name="plane-departure" size={20} color="gray" style={styles.icon} 
                        onFocus={() => setModalVisibleFrom(true)}/>
                        <TextInput placeholder="From" style={styles.input} placeholderTextColor="gray"
                        onFocus={() => setModalVisibleFrom(true)}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inputWrapper}
                    >
                        <FontAwesome5 name="plane-arrival" size={20} color="gray" style={styles.icon}  
                        onFocus={() => setModalVisibleTo(true)}/>
                        <TextInput placeholder="To" style={styles.input} placeholderTextColor="gray" 
                        onFocus={() => setModalVisibleTo(true)}
                        />
                        <FontAwesome5 name="exchange-alt" size={20} color="gray" style={styles.iconRight} />
                    </TouchableOpacity>
                    <View style={styles.dateContainer}>
                        {/* Ngày đi */}
                        <TouchableOpacity
                            style={styles.dateWrapper}
                            onPress={() => setCalendarModalVisible(true)}  // Open calendar modal on press
                        >
                            <FontAwesome name="calendar" size={20} color="gray" style={styles.icon} />
                            <Text style={styles.input}>{selectedDateFrom || "Fri, Jul 14"}</Text>
                        </TouchableOpacity>

                        {/* Ngày về */}
                        <TouchableOpacity
                            style={styles.dateWrapper}
                            onPress={() => setCalendarModalVisible(true)}  // Open calendar modal on press
                        >
                            <FontAwesome name="calendar" size={20} color="gray" style={styles.icon} />
                            <Text style={styles.input}>{selectedDate || "Fri, Jul 14"}</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.travellerContainer}>
                <TouchableOpacity 
                    style={styles.travellerInfo}
                    onPress={() => setTravellerModalVisible(true)} // Mở modal khi nhấn
                >
                    <FontAwesome name="user" size={20} color="gray" />
                    <Text style={styles.travellerText}>1 traveller</Text>
                    <Text style={styles.travellerText}>·</Text>
                    <FontAwesome name="briefcase" size={20} color="gray" />
                    <Text style={styles.travellerText}>Economy</Text>
                </TouchableOpacity>
                <FontAwesome name="chevron-down" size={20} color="gray" />
            </View>
                </View>

                {/* Search Button */}
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Search flights</Text>
                </TouchableOpacity>
            </View>

            {/* Calendar Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={calendarModalVisible}
                onRequestClose={() => setCalendarModalVisible(false)}
            >
                <View style={styles.calendarContainer}>
                    <Calendar
                        onDayPress={onDateSelectFrom}  // Select date and close modal
                        markedDates={{
                            [selectedDateFrom]: { selected: true, selectedColor: '#00bcd4' }
                        }}
                    />

                    <Calendar
                        onDayPress={onDateSelect}  // Select date and close modal
                        markedDates={{
                            [selectedDate]: { selected: true, selectedColor: '#00bcd4' }
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => setCalendarModalVisible(false)}
                        style={styles.closeCalendarButton}
                    >
                        <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {/* Modal for One-way */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={oneWayModalVisible}
                onRequestClose={() => setOneWayModalVisible(false)}
            >
                <OneWay onClose={() => setOneWayModalVisible(false)} />
            </Modal>

            {/* Modal for Multi-city */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={multiCityModalVisible}
                onRequestClose={() => setMultiCityModalVisible(false)}
            >
                <MultiCity onClose={() => setMultiCityModalVisible(false)} />
            </Modal>

            {/* Modal where to */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleTo}
                onRequestClose={() => setModalVisibleTo(false)}
            >
                <CreateModalWhereTo onClose={() => setModalVisibleTo(false)} />
            </Modal>
             {/* Modal where from */}
             <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisibleFrom}
                onRequestClose={() => setModalVisibleFrom(false)}
            >
                <CreateModalWhereFrom onClose={() => setModalVisibleFrom(false)} />
            </Modal>
              {/* Modal cho lựa chọn hành khách */}
              <Modal
                animationType="slide"
                transparent={true}
                visible={travellerModalVisible}
                onRequestClose={() => setTravellerModalVisible(false)}
            >
                <CreateModalTravellerOptions onClose={() => setTravellerModalVisible(false)} />
            </Modal>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        paddingBottom: 4,
    },
    activeTabText: {
        fontSize: 16,
        fontWeight: '500',
    },
    inactiveTabText: {
        fontSize: 16,
        color: 'gray',
    },
    inputContainer: {
        marginBottom: 16,
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
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 8,
        flex: 1,
        marginRight: 8,
    },
    travellerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingTop: 8,
    },
    travellerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    travellerText: {
        color: 'gray',
        marginHorizontal: 4,
    },
    searchButton: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        backgroundColor: '#00bcd4',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginLeft: 17,
    },
    searchButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    calendarContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    closeCalendarButton: {
        alignSelf: 'center',
        backgroundColor: '#00bcd4',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginTop: 10,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default CreateModal;
