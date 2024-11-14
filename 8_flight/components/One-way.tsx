
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Modal } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

interface IProps {
    onClose: () => void;
}

export default function OneWay({ onClose }: IProps) {
    const [calendarModalVisible, setCalendarModalVisible] = useState(false);  // State for calendar modal
    const [selectedDate, setSelectedDate] = useState("");  // State for selected date

    const onDateSelect = (day: any) => {
        setSelectedDate(day.dateString);  // Set selected date
        setCalendarModalVisible(false);  // Close modal after date selection
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onClose}>
                    <FontAwesome5 name="times" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Flight</Text>
                <View style={{ width: 24 }}></View>
            </View>
            <View style={styles.tabContainer}>
                <TouchableOpacity>
                    <Text style={styles.inactiveTabText}>Round-trip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.activeTab}>
                    <Text style={styles.activeTabText}>One-way</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.inactiveTabText}>Multi-city</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    <FontAwesome5 name="plane-departure" size={20} color="gray" style={styles.icon} />
                    <TextInput placeholder="From" style={styles.input} placeholderTextColor="gray" />
                </View>
                <View style={styles.inputWrapper}>
                    <FontAwesome5 name="plane-arrival" size={20} color="gray" style={styles.icon} />
                    <TextInput placeholder="To" style={styles.input} placeholderTextColor="gray" />
                    <FontAwesome5 name="exchange-alt" size={20} color="gray" style={styles.iconRight} />
                </View>
                <View style={styles.dateContainer}>
                    <TouchableOpacity style={styles.dateWrapper} onPress={() => setCalendarModalVisible(true)}>
                        <FontAwesome name="calendar" size={20} color="gray" style={styles.icon} />
                        <TextInput
                            value={selectedDate ? selectedDate : 'Fri, Jul 14'}
                            style={styles.input}
                            placeholderTextColor="gray"
                            editable={false}  // Make TextInput non-editable to prevent manual date input
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.travellerContainer}>
                    <View style={styles.travellerInfo}>
                        <FontAwesome name="user" size={20} color="gray" />
                        <Text style={styles.travellerText}>1 traveller</Text>
                        <Text style={styles.travellerText}>·</Text>
                        <FontAwesome name="briefcase" size={20} color="gray" />
                        <Text style={styles.travellerText}>Economy</Text>
                    </View>
                    <FontAwesome name="chevron-down" size={20} color="gray" />
                </View>
            </View>
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search flights</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={calendarModalVisible}
                onRequestClose={() => setCalendarModalVisible(false)}
            >
                <View style={styles.calendarContainer}>
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
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
        backgroundColor: '#00bcd4',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
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
