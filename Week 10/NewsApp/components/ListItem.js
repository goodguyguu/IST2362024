import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ListItem = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)} style={styles.itemContainer}>
    <Image source={{ uri: item.imageUrl }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.headline}>{item.headline}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headline: {
    fontWeight: 'bold',
  },
  date: {
    color: '#666',
  },
});

export default ListItem;
