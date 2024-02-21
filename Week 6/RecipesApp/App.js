import React, { useState } from 'react';
import { 
  View, 
  User,
  Project,
  Text, 
  Button, 
  FlatList, 
  Modal, 
  TextInput, 
  StyleSheet} from 'react-native';

function AddRecipeModal({ isVisible, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  // Render a modal that appears based on the isVisible
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Add Recipe</Text>
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
        <Button title="Save" onPress={() => {
          onSave(title, text);
          setTitle('');
          setText('');
        }} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </Modal>
  );
}

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]); //manage  the list of recipes
  const [isAddRecipeVisible, setAddRecipeVisible] = useState(false);


  //Adding a new recipe function
  const handleAddRecipe = (title, text) => {
    setRecipes(currentRecipes => [...currentRecipes, { title, text }]);
    setAddRecipeVisible(false);
  };


  // function to handle deleting a recipe by index
  const handleDeleteRecipe = (index) => {
    setRecipes(currentRecipes => currentRecipes.filter((_, i) => i !== index));
  };

  // Shows app on the screen
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipes App</Text>
      <Button title="Add Recipe" onPress={() => setAddRecipeVisible(true)} />
      <FlatList
        data={recipes}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.recipeItem}>
            <Text>{item.title}</Text>
            <Button title="View" onPress={() => alert(item.text)} />
            <Button title="Delete" onPress={() => handleDeleteRecipe(index)} />
          </View>
        )}
      />
      <AddRecipeModal 
        isVisible={isAddRecipeVisible} 
        onClose={() => setAddRecipeVisible(false)} 
        onSave={handleAddRecipe}
      />
    </View>
  );
};

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4b11b5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingTop: 300,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7aef06',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#28d07c',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  recipeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
});

export default RecipeApp;
