import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

interface IProps {
    onClose: () => void;
}

export default function MultiCity({ onClose }: IProps) {
    const [flights, setFlights] = useState([
        { from: '', to: '', date: '' },
        { from: '', to: '', date: '' },
    ]);

    const addFlight = () => {
        setFlights([...flights, { from: '', to: '', date: '' }]);
    };

    const updateFlight = (index: number, field: 'from' | 'to' | 'date', value: string) => {
        const updatedFlights = [...flights];
        updatedFlights[index][field] = value;
        setFlights(updatedFlights);
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
            {flights.map((flight, index) => (
                <View key={index} style={styles.flightContainer}>
                    <Text style={styles.flightTitle}>Flight {index + 1}</Text>
                    <View style={styles.inputContainer}>
                        <FontAwesome5 name="plane-departure" size={20} color="gray" />
                        <TextInput
                            placeholder="From"
                            style={styles.input}
                            value={flight.from}
                            onChangeText={(text) => updateFlight(index, 'from', text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <FontAwesome5 name="plane-arrival" size={20} color="gray" />
                        <TextInput
                            placeholder="To"
                            style={styles.input}
                            value={flight.to}
                            onChangeText={(text) => updateFlight(index, 'to', text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <FontAwesome name="calendar" size={20} color="gray" />
                        <TextInput
                            placeholder="Fri, Jul 14"
                            style={styles.input}
                            value={flight.date}
                            onChangeText={(text) => updateFlight(index, 'date', text)}
                        />
                    </View>
                </View>
            ))}
            <TouchableOpacity style={styles.addButton} onPress={addFlight}>
                <Text style={styles.addButtonText}>Add flight</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <View style={styles.footerItem}>
                    <FontAwesome name="user" size={20} color="gray" />
                    <Text style={styles.footerText}>1 traveller</Text>
                </View>
                <View style={styles.footerItem}>
                    <FontAwesome name="briefcase" size={20} color="gray" />
                    <Text style={styles.footerText}>Economy</Text>
                </View>
                <FontAwesome name="chevron-down" size={20} color="gray" />
            </View>
            <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search flights</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f4f6',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 16,
    },
    tabText: {
        color: 'gray',
    },
    activeTabText: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        paddingBottom: 4,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        paddingBottom: 4,
    },
    inactiveTab: {
        paddingBottom: 4,
    },
    inactiveTabText: {
        fontSize: 16,
        color: 'gray',
    },
    flightContainer: {
        width: '100%',
        marginBottom: 16,
    },
    flightTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e5e7eb',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    addButton: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#3b82f6',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
        marginBottom: 16,
    },
    addButtonText: {
        color: '#3b82f6',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
    },
    footerItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        marginLeft: 8,
        color: 'gray',
    },
    searchButton: {
        width: '100%',
        backgroundColor: '#00bcd4',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
    },
    searchButtonText: {
        color: 'white',
    },
});