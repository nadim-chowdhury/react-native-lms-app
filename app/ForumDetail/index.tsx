import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { auth, db } from "../../firebaseConfig";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";

const ForumDetail = ({ route }) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const { forumId } = route.params;

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), where("forumId", "==", forumId));
      const querySnapshot = await getDocs(q);
      const postList = [];
      querySnapshot.forEach((doc) => {
        postList.push({ id: doc.id, ...doc.data() });
      });
      setPosts(postList);
    };
    fetchPosts();
  }, []);

  const handlePost = async () => {
    if (newPost.trim() === "") return;
    await addDoc(collection(db, "posts"), {
      forumId,
      userId: auth.currentUser.uid,
      content: newPost,
      createdAt: new Date(),
    });
    setNewPost("");
    // Refresh posts
    fetchPosts();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write your post..."
          value={newPost}
          onChangeText={(text) => setNewPost(text)}
          multiline
        />
        <Button title="Post" onPress={handlePost} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  content: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

export default ForumDetail;
