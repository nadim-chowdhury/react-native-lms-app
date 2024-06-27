import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";
import { db } from "./firebaseConfig"; // Assuming Firebase Firestore setup
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, "users");
        const querySnapshot = await getDocs(usersRef);
        const userList = [];
        querySnapshot.forEach((doc) => {
          userList.push({ id: doc.id, ...doc.data() });
        });
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchUsers();
  }, []);

  const handlePromoteUser = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        role: "admin", // Example: Update user role to admin
      });
      Alert.alert("Success", "User promoted to admin.");
      // Optionally, update state or reload users list
    } catch (error) {
      console.error("Error promoting user:", error.message);
      Alert.alert("Error", "Failed to promote user.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Management</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.username}</Text>
            <Text>Role: {item.role}</Text>
            <Button
              title="Promote to Admin"
              onPress={() => handlePromoteUser(item.id)}
            />
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  userItem: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default UserList;

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";
import { db } from "./firebaseConfig"; // Assuming Firebase Firestore setup
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, "users");
        const querySnapshot = await getDocs(usersRef);
        const userList = [];
        querySnapshot.forEach((doc) => {
          userList.push({ id: doc.id, ...doc.data() });
        });
        setUsers(userList);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchUsers();
  }, []);

  const handlePromoteUser = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        role: "admin", // Example: Update user role to admin
      });
      Alert.alert("Success", "User promoted to admin.");
      // Optionally, update state or reload users list
    } catch (error) {
      console.error("Error promoting user:", error.message);
      Alert.alert("Error", "Failed to promote user.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Management</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text>{item.username}</Text>
            <Text>Role: {item.role}</Text>
            <Button
              title="Promote to Admin"
              onPress={() => handlePromoteUser(item.id)}
            />
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  userItem: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default UserList;