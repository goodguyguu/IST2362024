import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import OrderReviewScreen from './screens/OrderReviewScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [repairTime, setRepairTime] = useState('Standard');
  const [selectedServices, setSelectedServices] = useState([]);
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);
  const [currentPrice, setCurrentPrice] = useState(0);

  const handleOrderSubmission = (time, services, newsletter, membership) => {
    setRepairTime(time);
    setSelectedServices(services);
    setNewsletter(newsletter);
    setRentalMembership(membership);

    let totalPrice = services.reduce((acc, service) => acc + service.price, 0);
    if (time === 'Expedited') {
      totalPrice += 50;
    } else if (time === 'Next Day') {
      totalPrice += 100;
    }
    if (membership) {
      totalPrice += 100;
    }

    setCurrentPrice(totalPrice);
    setCurrentScreen('OrderReview');
  };

  const handleReturnHome = () => {
    setRepairTime('Standard');
    setSelectedServices([]);
    setNewsletter(false);
    setRentalMembership(false);
    setCurrentScreen('Home');
  };

  return (
    <View style={styles.container}>
      {currentScreen === 'Home' ? (
        <HomeScreen onOrderSubmit={handleOrderSubmission} />
      ) : (
        <OrderReviewScreen
          repairTime={repairTime}
          selectedServices={selectedServices}
          newsletter={newsletter}
          rentalMembership={rentalMembership}
          totalPrice={currentPrice}
          onReturnHome={handleReturnHome}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4832c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
