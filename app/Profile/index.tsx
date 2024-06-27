import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { auth } from "../../firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Profile = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
      setUser(userDoc.data());
    };
    fetchUserProfile();
  }, []);

  if (!user) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user.profilePicture }}
        style={styles.profilePicture}
      />
      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate("EditProfile")}
      />
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
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default Profile;
