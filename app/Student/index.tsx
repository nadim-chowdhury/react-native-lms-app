import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Student = () => {
  return (
    <View style={styles.container}>
      <Text>Student Dashboard</Text>
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

export default Student;
