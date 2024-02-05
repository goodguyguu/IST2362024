import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StatusBar,
} from "react-native";

const responses = [
  "Yes, definitely.",
  "No, certainly not.",
  "Ask again later.",
  "It is uncertain.",
  "Nope",
  "Try Again Later",
];

export default function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    if (!question.trim()) {
      Alert.alert("Please enter a question");
      return;
    }
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    setResponse(randomResponse);
    setModalVisible(true);
    Alert.alert(question, randomResponse, [
      { text: "OK", onPress: () => setModalVisible(false) },
    ]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ask Anything, I Might Answer..."
        onChangeText={setQuestion}
        value={question}
      />
      <Button title="Ask" onPress={handlePress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#595963",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
});
