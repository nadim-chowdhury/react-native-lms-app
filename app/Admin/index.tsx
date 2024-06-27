import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Admin = () => {
  return (
    <View style={styles.container}>
      <Text>Admin Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Admin;
