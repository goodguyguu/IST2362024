import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const BookmarkButton = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <TouchableOpacity onPress={toggleBookmark} style={styles.container}>
      <Image
        source={bookmarked ? require('../assets/bookmarked.png') : require('../assets/not-bookmarked.png')}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'black', 
  },
});

export default BookmarkButton;
