import React from 'react';
import { Button } from 'react-native';

const NavButton = ({ title, onPress }) => (
  <Button title={title} onPress={onPress} />
);

export default NavButton;
