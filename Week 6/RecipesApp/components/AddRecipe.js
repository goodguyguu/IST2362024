import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../Styles/GStyles';

const AddRecipe = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Recipe Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Recipe Text"
        value={text}
        onChangeText={setText}
      />
      <Button title="Save" onPress={() => { onSave(title, text); setTitle(''); setText(''); }} />
    </View>
  );
};

export default AddRecipe;
