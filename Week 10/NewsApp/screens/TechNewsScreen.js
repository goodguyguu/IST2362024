import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


const techNewsData = [
  {
    id: '1',
    headline: 'Innovations in AI Technology',
    date: '2024-03-24',
    author: 'Jane Doe',
    agency: 'TechNews Daily',
    description: 'Exploring the latest breakthroughs in artificial intelligence...',
    imageUrl: 'https://example.com/ai-technology.jpg',
  },
  {
    id: '2',
    headline: 'The Future of Quantum Computing',
    date: '2024-03-23',
    author: 'John Smith',
    agency: 'Quantum Times',
    description: 'Quantum computing is set to revolutionize the way we solve complex problems...',
    imageUrl: 'https://example.com/quantum-computing.jpg',
  },
  
];

const TechNewsScreen = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('NewsDetail', { newsItem: item })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.headline}>{item.headline}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={techNewsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
});

export default TechNewsScreen;
