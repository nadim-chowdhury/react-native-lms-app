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
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const ChatRoom = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { chatId } = route.params;

  useEffect(() => {
    const fetchMessages = async () => {
      const q = query(
        collection(db, "messages").orderBy("createdAt", "asc"),
        where("chatId", "==", chatId)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messageList = [];
        querySnapshot.forEach((doc) => {
          messageList.push({ id: doc.id, ...doc.data() });
        });
        setMessages(messageList);
      });
      return () => unsubscribe();
    };
    fetchMessages();
  }, []);

  const handleSend = async () => {
    if (newMessage.trim() === "") return;
    await addDoc(collection(db, "messages"), {
      chatId,
      userId: auth.currentUser.uid,
      content: newMessage,
      createdAt: new Date(),
    });
    setNewMessage("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
          multiline
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
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

export default ChatRoom;
