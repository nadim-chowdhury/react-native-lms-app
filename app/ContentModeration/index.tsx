import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";
import { db } from "./firebaseConfig"; // Assuming Firebase Firestore setup
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const ContentModeration = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, "posts");
        const querySnapshot = await getDocs(postsRef);
        const postList = [];
        querySnapshot.forEach((doc) => {
          postList.push({ id: doc.id, ...doc.data() });
        });
        setPosts(postList);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };

    fetchPosts();
  }, []);

  const handleApprovePost = async (postId) => {
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        status: "approved", // Example: Update post status to approved
      });
      Alert.alert("Success", "Post approved.");
      // Optionally, update state or reload posts list
    } catch (error) {
      console.error("Error approving post:", error.message);
      Alert.alert("Error", "Failed to approve post.");
    }
  };

  const handleRejectPost = async (postId) => {
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        status: "rejected", // Example: Update post status to rejected
      });
      Alert.alert("Success", "Post rejected.");
      // Optionally, update state or reload posts list
    } catch (error) {
      console.error("Error rejecting post:", error.message);
      Alert.alert("Error", "Failed to reject post.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Content Moderation</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Text>{item.content}</Text>
            <Text>Status: {item.status}</Text>
            <Button
              title="Approve"
              onPress={() => handleApprovePost(item.id)}
            />
            <Button title="Reject" onPress={() => handleRejectPost(item.id)} />
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
  postItem: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default ContentModeration;

import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet, Alert } from "react-native";
import { db } from "./firebaseConfig"; // Assuming Firebase Firestore setup
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

const ContentModeration = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, "posts");
        const querySnapshot = await getDocs(postsRef);
        const postList = [];
        querySnapshot.forEach((doc) => {
          postList.push({ id: doc.id, ...doc.data() });
        });
        setPosts(postList);
      } catch (error) {
        console.error("Error fetching posts:", error.message);
      }
    };

    fetchPosts();
  }, []);

  const handleApprovePost = async (postId) => {
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        status: "approved", // Example: Update post status to approved
      });
      Alert.alert("Success", "Post approved.");
      // Optionally, update state or reload posts list
    } catch (error) {
      console.error("Error approving post:", error.message);
      Alert.alert("Error", "Failed to approve post.");
    }
  };

  const handleRejectPost = async (postId) => {
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        status: "rejected", // Example: Update post status to rejected
      });
      Alert.alert("Success", "Post rejected.");
      // Optionally, update state or reload posts list
    } catch (error) {
      console.error("Error rejecting post:", error.message);
      Alert.alert("Error", "Failed to reject post.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Content Moderation</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Text>{item.content}</Text>
            <Text>Status: {item.status}</Text>
            <Button
              title="Approve"
              onPress={() => handleApprovePost(item.id)}
            />
            <Button title="Reject" onPress={() => handleRejectPost(item.id)} />
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
  postItem: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default ContentModeration;