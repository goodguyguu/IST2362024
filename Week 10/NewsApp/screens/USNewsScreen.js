import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import List from '../components/List';
import newsData from '../data/newsData';

const USNewsScreen = ({ navigation }) => {
  const [usNews, setUsNews] = useState([]);

  useEffect(() => {
   
    const filteredNews = newsData.filter(item => item.agency === 'CNN' || item.agency === 'TechCrunch');
    setUsNews(filteredNews);
  }, []);

  return (
    <View style={styles.container}>
      <List data={usNews} onPressItem={(item) => navigation.navigate('NewsDetail', { newsItem: item })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, 
  },
});

export default USNewsScreen;
