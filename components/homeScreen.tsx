import React from "react";
import {StyleSheet} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CityScreen from "./cityScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calgary" options={{
        tabBarStyle: styles.tabBar,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-sharp" color={color} size={size} />),
            tabBarLabelStyle: styles.tabLabel,
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
        }}>
        {() => <CityScreen city="Calgary" url="https://www.calgary.ca/home.html" />}
      </Tab.Screen>
      <Tab.Screen name="Edmonton" options={{
        tabBarStyle: styles.tabBar,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-sharp" color={color} size={size} />),
            tabBarLabelStyle: styles.tabLabel,
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
        }}>
        {() => <CityScreen city="Edmonton" url="https://www.edmonton.ca/" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#222", 
    paddingBottom: 5,
    height: 60,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "lightblue", 
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black", 
  },
});

export default HomeScreen;
