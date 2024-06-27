import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { auth, db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ProgressTracker = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const q = query(
        collection(db, "courses"),
        where("students", "array-contains", auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      const enrolledCourses = [];
      querySnapshot.forEach((doc) => {
        enrolledCourses.push(doc.data());
      });
      setCourses(enrolledCourses);
    };
    fetchEnrolledCourses();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.courseContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.progress}>Progress: {calculateProgress(item)}</Text>
    </View>
  );

  const calculateProgress = (course) => {
    // Implement logic to calculate progress based on completed assignments, quizzes, etc.
    // For example, return a percentage completion
    return "50%"; // Placeholder for demonstration
  };

  return (
    <FlatList
      data={courses}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  progress: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default ProgressTracker;
