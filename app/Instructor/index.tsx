import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Instructor = () => {
  return (
    <View style={styles.container}>
      <Text>Instructor Dashboard</Text>
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

export default Instructor;

import React from "react";
import { View, Button, StyleSheet } from "react-native";
import CourseList from "../components/Course/CourseList";

const Admin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Create Course"
        onPress={() => navigation.navigate("CreateEditCourse")}
      />
      <CourseList navigation={navigation} />
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
});

export default Admin;
