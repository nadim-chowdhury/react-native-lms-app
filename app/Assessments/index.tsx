import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Assessments = () => {
  // Functionality for creating and managing assessments
  const createAssessment = () => {
    // Implement assessment creation logic
    alert("Assessment created!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assessments</Text>
      <Button title="Create Assessment" onPress={createAssessment} />
      {/* Display list of assessments */}
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

export default Assessments;
