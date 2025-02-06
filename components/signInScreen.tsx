import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import credentials from "../credentials.json";

type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
};

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, "SignIn">;

type Props = {
  navigation: SignInScreenNavigationProp;
};

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validateInput = (): string => {
    const usernameValid = username.length >= 5;
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    
    if (!usernameValid) return "Username must be at least 5 characters long.";
    if (!passwordValid) return "Password must be at least 8 characters with an uppercase, lowercase, number, and special character.";
    return "";
  };

  const handleSignIn = () => {
    const error = validateInput();
    if (error) return Alert.alert("Invalid Input", error);
    
    const user = credentials.users.find((cred: { username: string; password: string }) => cred.username === username);
    if (!user) return Alert.alert("Error", "Username not found.");
    if (user.password !== password) return Alert.alert("Error", "Incorrect password.");
    
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default SignInScreen;
