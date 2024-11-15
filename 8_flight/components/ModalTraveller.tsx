import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


interface IProps {
    onClose: () => void;
}
const CreateModalTravellerOptions = ({ onClose }: IProps) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState('Economy');

  const handleAdultsIncrement = () => setAdults(adults + 1);
  const handleAdultsDecrement = () => setAdults(adults > 1 ? adults - 1 : 1);

  const handleChildrenIncrement = () => setChildren(children + 1);
  const handleChildrenDecrement = () => setChildren(children > 0 ? children - 1 : 0);

  const handleInfantsIncrement = () => setInfants(infants + 1);
  const handleInfantsDecrement = () => setInfants(infants > 0 ? infants - 1 : 0);

  const handleCabinClassChange = (cabinClass) => setCabinClass(cabinClass);

  return (
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Traveller</Text>
            <TouchableOpacity onPress={onClose}>
              <FontAwesome name="times" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.optionContainer}>
              <Text style={styles.optionLabel}>Adults</Text>
              <View style={styles.optionControls}>
                <TouchableOpacity onPress={handleAdultsDecrement}>
                  <FontAwesome name="minus-circle" size={24} color="gray" />
                </TouchableOpacity>
                <Text style={styles.optionValue}>{adults}</Text>
                <TouchableOpacity onPress={handleAdultsIncrement}>
                  <FontAwesome name="plus-circle" size={24} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.optionContainer}>
              <Text style={styles.optionLabel}>Children</Text>
              <View style={styles.optionControls}>
                <TouchableOpacity onPress={handleChildrenDecrement}>
                  <FontAwesome name="minus-circle" size={24} color="gray" />
                </TouchableOpacity>
                <Text style={styles.optionValue}>{children}</Text>
                <TouchableOpacity onPress={handleChildrenIncrement}>
                  <FontAwesome name="plus-circle" size={24} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.optionContainer}>
              <Text style={styles.optionLabel}>Infants</Text>
              <View style={styles.optionControls}>
                <TouchableOpacity onPress={handleInfantsDecrement}>
                  <FontAwesome name="minus-circle" size={24} color="gray" />
                </TouchableOpacity>
                <Text style={styles.optionValue}>{infants}</Text>
                <TouchableOpacity onPress={handleInfantsIncrement}>
                  <FontAwesome name="plus-circle" size={24} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.optionContainer}>
              <Text style={styles.optionLabel}>Cabin Class</Text>
              <View style={styles.optionCabinControls}>
                <TouchableOpacity
                  style={[
                    styles.cabinClassButton,
                    cabinClass === 'Economy' && styles.activeButton,
                  ]}
                  onPress={() => handleCabinClassChange('Economy')}
                >
                  <Text style={[styles.cabinClassText, cabinClass === 'Economy' && styles.activeText]}>
                    Economy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.cabinClassButton,
                    cabinClass === 'Premium Economy' && styles.activeButton,
                  ]}
                  onPress={() => handleCabinClassChange('Premium Economy')}
                >
                  <Text style={[styles.cabinClassText, cabinClass === 'Premium Economy' && styles.activeText]}>
                    Premium Economy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.cabinClassButton,
                    cabinClass === 'Business' && styles.activeButton,
                  ]}
                  onPress={() => handleCabinClassChange('Business')}
                >
                  <Text style={[styles.cabinClassText, cabinClass === 'Business' && styles.activeText]}>
                    Business
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.cabinClassButton,
                    cabinClass === 'First' && styles.activeButton,
                  ]}
                  onPress={() => handleCabinClassChange('First')}
                >
                  <Text style={[styles.cabinClassText, cabinClass === 'First' && styles.activeText]}>
                    First
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.modalFooter}>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={onClose}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: '90%',
        maxHeight: '80%',
      },
      modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      modalBody: {
        padding: 16,
      },
      optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
      },
      optionLabel: {
        fontSize: 16,
        color: 'gray',
      },
      optionControls: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      optionCabinControls: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      optionValue: {
        fontSize: 16,
        marginHorizontal: 12,
      },
      cabinClassButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 8,
      },
      activeButton: {
        backgroundColor: '#00bcd4',
        borderColor: '#00bcd4',
      },
      cabinClassText: {
        fontSize: 14,
        color: 'gray',
      },
      activeText: {
        color: 'white',
      },
      modalFooter: {
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'flex-end',
      },
      doneButton: {
        backgroundColor: '#00bcd4',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
      },
      doneButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default CreateModalTravellerOptions;
