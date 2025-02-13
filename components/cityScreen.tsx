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
  const cityDescriptions: { [key: string]: string } = {
    Calgary:"Calgary is a vibrant city in Alberta, Canada, known for its stunning Rocky Mountain backdrop and the world-famous Calgary Stampede.It is a major hub for energy, technology, and outdoor activities, offering a perfect blend of urban life and nature.",
    Edmonton:"Edmonton, the capital of Alberta, is known for its scenic river valley and vibrant arts and culture scene. It is home to North America's largest mall, West Edmonton Mall, and hosts the world-famous Edmonton Fringe Festival."
  };
const CityScreen: React.FC<CityScreenProps> = ({ city, url }) => {
  const cityImage = cityImages[city]
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{city}</Text>
      <Image style={styles.image} source={cityImage}  />
      <Text style={styles.info}>{cityDescriptions[city]}</Text>
      <Button title="CITY PAGE LINK" color='red' onPress={() => Linking.openURL(url)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor:'lightgreen',
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