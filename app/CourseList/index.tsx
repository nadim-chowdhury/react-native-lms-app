import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { auth, db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const CourseList = ({ navigation }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const q = query(collection(db, "courses"));
      const querySnapshot = await getDocs(q);
      const coursesList = [];
      querySnapshot.forEach((doc) => {
        coursesList.push({ id: doc.id, ...doc.data() });
      });
      setCourses(coursesList);
    };
    fetchCourses();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.courseContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button
        title="View Details"
        onPress={() =>
          navigation.navigate("CourseDetail", { courseId: item.id })
        }
      />
    </View>
  );

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
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default CourseList;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      let q = collection(db, "courses");
      if (searchQuery) {
        q = query(
          q,
          where("keywords", "array-contains", searchQuery.toLowerCase())
        );
      }
      const querySnapshot = await getDocs(q);
      const courseList = [];
      querySnapshot.forEach((doc) => {
        courseList.push({ id: doc.id, ...doc.data() });
      });
      setCourses(courseList);
    };
    fetchCourses();
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search courses..."
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <View style={styles.courseContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.instructor}</Text>
            <Text>{item.category}</Text>
            {/* Display other course details */}
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  courseContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default CourseList;