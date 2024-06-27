import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { ZoomUs } from "react-native-zoom-sdk";

const JoinMeeting = ({ meetingId, meetingPassword }) => {
  const handleJoinMeeting = async () => {
    try {
      await ZoomUs.joinMeeting({
        meetingNumber: meetingId,
        meetingPassword,
        displayName: "John Doe", // Participant's display name
      });
    } catch (error) {
      console.error("Failed to join meeting:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Join Meeting" onPress={handleJoinMeeting} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default JoinMeeting;
