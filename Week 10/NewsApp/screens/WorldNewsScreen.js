import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../components/List';
import newsData from '../data/newsData';

const WorldNewsScreen = ({ navigation }) => {
  const [worldNews, setWorldNews] = useState([]);

  useEffect(() => {
    const filteredNews = newsData.filter(item => item.agency !== 'CNN' && item.agency !== 'TechCrunch');
    setWorldNews(filteredNews);
  }, []);

  return (
    <View style={styles.container}>
      <List data={worldNews} onPressItem={(item) => navigation.navigate('NewsDetail', { newsItem: item })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, 
  },
});

export default WorldNewsScreen;
