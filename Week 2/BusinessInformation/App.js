import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/Images/logans.jpeg")}/>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text} >Logan's Roadhouse</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://logansroadhouse.com/locations/us/sc/myrtle-beach/1136-Oak-Forrest-Drive/")}>www.logansroadhouse.com</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:18438394666")}>(843) 839-4666</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://maps.app.goo.gl/xr4bRh8ybJUw9p5s5")}>Open in Google Maps</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ee1b2c",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex:3,
    paddingTop: 40,
    width: "100%",
  },
  image:{
    height: 300,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#fff303"
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
