import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Image, StyleSheet } from "react-native";
import { auth, db, storage } from "../../firebaseConfig";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
      const userData = userDoc.data();
      setName(userData.name);
      setProfilePicture(userData.profilePicture);
    };
    fetchUserProfile();
  }, []);

  const handleSave = async () => {
    if (profilePicture) {
      const response = await fetch(profilePicture);
      const blob = await response.blob();
      const profilePicRef = ref(
        storage,
        `profilePictures/${auth.currentUser.uid}`
      );
      await uploadBytes(profilePicRef, blob);
      const downloadURL = await getDownloadURL(profilePicRef);
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        name,
        profilePicture: downloadURL,
      });
    } else {
      await updateDoc(doc(db, "users", auth.currentUser.uid), { name });
    }
    navigation.goBack();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Pick a profile picture" onPress={pickImage} />
      {profilePicture && (
        <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
      )}
      <Button title="Save" onPress={handleSave} />
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    width: "80%",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 16,
    marginBottom: 16,
  },
});

export default EditProfile;
