import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Quizzes = () => {
  // Functionality for creating and managing quizzes
  const createQuiz = () => {
    // Implement quiz creation logic
    alert("Quiz created!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzes</Text>
      <Button title="Create Quiz" onPress={createQuiz} />
      {/* Display list of quizzes */}
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

export default Quizzes;
