import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Certificates = () => {
  // Function to generate and download certificates
  const generateCertificate = () => {
    // Implement certificate generation logic here
    alert("Certificate downloaded!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Certificates</Text>
      {/* Display list of certificates */}
      <Button title="Generate Certificate" onPress={generateCertificate} />
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default Certificates;
