import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

const CourseDetail = ({ route, navigation }) => {
  const [course, setCourse] = useState(null);
  const { courseId } = route.params;

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const courseDoc = await getDoc(doc(db, "courses", courseId));
      setCourse(courseDoc.data());
    };
    fetchCourseDetails();
  }, []);

  const handleEnroll = async () => {
    await updateDoc(doc(db, "courses", courseId), {
      students: arrayUnion(auth.currentUser.uid),
    });
    alert("Enrolled successfully!");
    navigation.goBack();
  };

  if (!course) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <Text style={styles.category}>Category: {course.category}</Text>
      {course.fileURL && (
        <Text style={styles.file}>
          Course Material: <a href={course.fileURL}>Download</a>
        </Text>
      )}
      <Button title="Enroll" onPress={handleEnroll} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    marginBottom: 8,
  },
  file: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default CourseDetail;

import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

const CourseDetail = ({ route, navigation }) => {
  const [course, setCourse] = useState(null);
  const { courseId } = route.params;

  useEffect(() => {
    const fetchCourseDetails = async () => {
      const courseDoc = await getDoc(doc(db, "courses", courseId));
      setCourse(courseDoc.data());
    };
    fetchCourseDetails();
  }, []);

  const handleEnroll = async () => {
    await updateDoc(doc(db, "courses", courseId), {
      students: arrayUnion(auth.currentUser.uid),
    });
    alert("Enrolled successfully!");
    navigation.goBack();
  };

  if (!course) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <Text style={styles.category}>Category: {course.category}</Text>
      {course.fileURL && (
        <Text style={styles.file}>
          Course Material: <a href={course.fileURL}>Download</a>
        </Text>
      )}
      <Button title="Enroll" onPress={handleEnroll} />
      {auth.currentUser.role === "instructor" && (
        <View style={styles.instructorActions}>
          <Button
            title="Manage Assessments"
            onPress={() => navigation.navigate("Assessments", { courseId })}
          />
          <Button
            title="Manage Quizzes"
            onPress={() => navigation.navigate("Quizzes", { courseId })}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
    marginBottom: 8,
  },
  file: {
    fontSize: 16,
    marginBottom: 16,
  },
  instructorActions: {
    marginTop: 16,
  },
});

export default CourseDetail;
