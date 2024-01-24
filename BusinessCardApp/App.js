import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/Images/meme.jpg")}/>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text} >Jarrod Brown</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox")}>Jarrod.brown33@gmail.com</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:7576375554")}>(7576375554)</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/goodguyguu/IST2362024")}>GitHub:goodguyguu</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#360cce",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex:3,
    paddingTop: 40,
    width: "100%",
  },
  image:{
    height: 500,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#839480"
  },
  informationContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 10,
  }
});
