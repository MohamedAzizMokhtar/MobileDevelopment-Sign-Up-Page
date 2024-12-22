import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

export default function App() {
  const [Email, setEmail] = useState("");
  const [FullName, setFullName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Submitted, setSubmitted] = useState(false);

  const handleRegister = () => {
    if (!Email || !FullName || !PhoneNumber || !Birthday || !Password || !ConfirmPassword) {
      Alert.alert("Please fill in all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      Alert.alert("Please enter a valid email.");
      return;
    }
    if (Password !== ConfirmPassword) {
      Alert.alert("Passwords do not match.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      {!Submitted ? (
        <ScrollView contentContainerStyle={styles.form}>
          <Text style={styles.title}>Sign-up</Text>

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={Email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Full Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            value={FullName}
            onChangeText={setFullName}
          />

          <Text style={styles.label}>Phone Number:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your number"
            value={PhoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Birthday:</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            value={Birthday}
            onChangeText={setBirthday}
          />

          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={Password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Text style={styles.label}>Confirm Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            value={ConfirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <View style={styles.button}>
            <Button title="Register" onPress={handleRegister} color="#6200EE" />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.welcome}>
          <Text style={styles.welcomeTitle}>Welcome, {FullName}!</Text>
          <Text style={styles.welcomeText}>Email: {Email}</Text>
          <Text style={styles.welcomeText}>Phone: {PhoneNumber}</Text>
          <Text style={styles.welcomeText}>Birthday: {Birthday}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
  welcome: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200EE",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
});
