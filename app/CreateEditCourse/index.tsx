import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { auth, db, storage } from "../../firebaseConfig";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as DocumentPicker from "expo-document-picker";

const CreateEditCourse = ({ navigation, route }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [courseId, setCourseId] = useState(null);

  useEffect(() => {
    if (route.params?.courseId) {
      setCourseId(route.params.courseId);
      fetchCourseDetails(route.params.courseId);
    }
  }, [route.params]);

  const fetchCourseDetails = async (id) => {
    const courseDoc = await getDoc(doc(db, "courses", id));
    const courseData = courseDoc.data();
    setTitle(courseData.title);
    setDescription(courseData.description);
    setCategory(courseData.category);
  };

  const handleSave = async () => {
    const courseData = {
      title,
      description,
      category,
      instructor: auth.currentUser.uid,
    };
    let fileURL = "";

    if (file) {
      const response = await fetch(file.uri);
      const blob = await response.blob();
      const fileRef = ref(
        storage,
        `courses/${auth.currentUser.uid}/${file.name}`
      );
      await uploadBytes(fileRef, blob);
      fileURL = await getDownloadURL(fileRef);
      courseData.fileURL = fileURL;
    }

    if (courseId) {
      await updateDoc(doc(db, "courses", courseId), courseData);
    } else {
      const newCourseRef = doc(
        db,
        "courses",
        auth.currentUser.uid + "_" + Date.now()
      );
      await setDoc(newCourseRef, courseData);
    }

    navigation.goBack();
  };

  const pickFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "success") {
      setFile(result);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Course Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={(text) => setCategory(text)}
      />
      <Button title="Pick a file" onPress={pickFile} />
      {file && <Text>{file.name}</Text>}
      <Button title="Save Course" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default CreateEditCourse;
