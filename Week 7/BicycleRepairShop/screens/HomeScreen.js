import React, { useState, useMemo } from 'react';
import { View, Text, Button, Switch, StyleSheet } from 'react-native';
import RadioButtonGroup from 'react-native-radio-buttons-group';
import BouncyCheckboxGroup from 'react-native-bouncy-checkbox-group';

const HomeScreen = ({ onOrderSubmit }) => {
  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: '0',
        label: 'Standard',
        value: 'Standard',
        price: 0,
      },
      {
        id: '1',
        label: 'Expedited',
        value: 'Expedited',
        price: 50,
      },
      {
        id: '2',
        label: 'Next Day',
        value: 'Next Day',
        price: 100,
      },
    ],
    []
  );

  const serviceOptions = [
    { id: 0, name: 'Basic Tune-Up', price: 50 },
    { id: 1, name: 'Comprehensive Tune-Up', price: 75 },
    { id: 2, name: 'Flat Tire Repair', price: 20 },
    { id: 3, name: 'Brake Servicing', price: 50 },
    { id: 4, name: 'Gear Servicing', price: 40 },
    { id: 5, name: 'Chain Servicing', price: 15 },
    { id: 6, name: 'Frame Repair', price: 35 },
    { id: 7, name: 'Safety Check', price: 25 },
    { id: 8, name: 'Accessory Install', price: 10 },
  ];

  const [repairTime, setRepairTime] = useState('Standard');
  const [selectedServices, setSelectedServices] = useState([]);
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  const handleRepairTimeChange = (selectedButton) => {
    setRepairTime(selectedButton.value);
  };

  const handleServiceChange = (selectedServices) => {
    setSelectedServices(selectedServices);
  };

  const handleSubmit = () => {
    onOrderSubmit(repairTime, selectedServices, newsletter, rentalMembership);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <RadioButtonGroup
        radioButtons={repairTimeRadioButtons}
        onPress={handleRepairTimeChange}
      />
      <BouncyCheckboxGroup
        data={serviceOptions}
        onChange={handleServiceChange}
      />
      <Switch
        value={newsletter}
        onValueChange={setNewsletter}
      />
      <Switch
        value={rentalMembership}
        onValueChange={setRentalMembership}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8d1919',
  },
  text: {
    color: '#000000',
  },
});

export default HomeScreen;
