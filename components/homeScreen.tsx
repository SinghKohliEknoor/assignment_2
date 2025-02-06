import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CityScreen from "./cityScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Calgary" options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-sharp" color={color} size={size} />
          ),
        }}>
        {() => <CityScreen city="Calgary" url="https://www.calgary.ca/home.html" />}
      </Tab.Screen>
      <Tab.Screen name="Edmonton" options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-sharp" color={color} size={size} />
          ),
        }}>
        {() => <CityScreen city="Edmonton" url="https://www.edmonton.ca/" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeScreen;
