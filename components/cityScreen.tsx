import React from "react";
import { View, Text, Image, Button, Linking, StyleSheet } from "react-native";

type CityScreenProps = {
    city: string;
    url: string;
  };
  const cityImages: { [key: string]: any } = {
    Calgary: require('../assets/calgary.jpeg'),
    Edmonton: require('../assets/edmonton.jpg'),
  };
const CityScreen: React.FC<CityScreenProps> = ({ city, url }) => {
  const cityImage = cityImages[city]
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{city}</Text>
      <Image style={styles.image} source={cityImage}  />
      <Text style={styles.info}>{city} is a beautiful city in Canada known for its rich culture and vibrant life.</Text>
      <Button title="Go to city page" onPress={() => Linking.openURL(url)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  info: {
    textAlign: "center",
    marginBottom: 10,
  },
});

export default CityScreen;