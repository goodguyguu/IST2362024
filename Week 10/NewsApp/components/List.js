import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const List = ({ data, onPressItem }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <ListItem item={item} onPress={onPressItem} />}
    keyExtractor={item => item.id}
  />
);

export default List;
