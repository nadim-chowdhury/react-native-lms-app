import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import messaging from "@react-native-firebase/messaging";

const Notifications = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      // Handle push notifications here
      console.log("Received a notification", remoteMessage);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      {/* Display notifications */}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default Notifications;
