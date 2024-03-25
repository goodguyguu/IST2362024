import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const NewsDetailScreen = ({ route }) => {
  
  const { newsItem } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: newsItem.imageUrl }} style={styles.image} />
      <Text style={styles.headline}>{newsItem.headline}</Text>
      <View style={styles.metadataContainer}>
        <Text style={styles.date}>{newsItem.date}</Text>
        <Text style={styles.author}>{newsItem.author}</Text>
        <Text style={styles.agency}>{newsItem.agency}</Text>
      </View>
      <Text style={styles.description}>{newsItem.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  headline: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  metadataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  date: {
    fontStyle: 'italic',
  },
  author: {
    fontWeight: 'bold',
  },
  agency: {
    fontWeight: 'bold',
  },
  description: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default NewsDetailScreen;
