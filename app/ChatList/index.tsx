import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { db } from "../../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ChatList = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      // Example: fetch chats where user is participant
      const q = query(
        collection(db, "chats"),
        where("participants", "array-contains", auth.currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      const chatList = [];
      querySnapshot.forEach((doc) => {
        chatList.push({ id: doc.id, ...doc.data() });
      });
      setChats(chatList);
    };
    fetchChats();
  }, []);

  const navigateToChatRoom = (chatId) => {
    navigation.navigate("ChatRoom", { chatId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <View style={styles.chatContainer}>
            <Text style={styles.title}>
              Chat with {item.participants.join(", ")}
            </Text>
            <Button
              title="Open Chat"
              onPress={() => navigateToChatRoom(item.id)}
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
  chatContainer: {
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

export default ChatList;
