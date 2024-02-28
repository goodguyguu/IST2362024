import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OrderReviewScreen = ({ route, navigation }) => {
  const { repairTime, selectedServices, newsletter, rentalMembership, totalPrice } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Review</Text>
      <Text style={styles.text}>Service Time: {repairTime}</Text>
      {selectedServices.map((service, index) => (
        <Text key={index} style={styles.text}>
          {service.name} - ${service.price}
        </Text>
      ))}
      {newsletter && <Text style={styles.text}>Newsletter Signup: FREE</Text>}
      {rentalMembership && <Text style={styles.text}>Rental Membership: $100</Text>}
      <Text style={styles.text}>Subtotal: ${totalPrice.toFixed(2)}</Text>
      <Text style={styles.text}>Sales Tax (6%): ${(totalPrice * 0.06).toFixed(2)}</Text>
      <Text style={styles.text}>Total: ${(totalPrice * 1.06).toFixed(2)}</Text>
      <Button title="Return Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: '#000000', 
  },
});

export default OrderReviewScreen;
