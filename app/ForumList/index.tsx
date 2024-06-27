import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ForumList = ({ route, navigation }) => {
  const [forums, setForums] = useState([]);
  const { courseId } = route.params;

  useEffect(() => {
    const fetchForums = async () => {
      const q = query(
        collection(db, "forums"),
        where("courseId", "==", courseId)
      );
      const querySnapshot = await getDocs(q);
      const forumList = [];
      querySnapshot.forEach((doc) => {
        forumList.push({ id: doc.id, ...doc.data() });
      });
      setForums(forumList);
    };
    fetchForums();
  }, []);

  const navigateToForumDetail = (forumId) => {
    navigation.navigate("ForumDetail", { forumId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={forums}
        renderItem={({ item }) => (
          <View style={styles.forumContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Button
              title="View Forum"
              onPress={() => navigateToForumDetail(item.id)}
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
    justifyContent: "center",
    padding: 16,
  },
  forumContainer: {
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

export default ForumList;
