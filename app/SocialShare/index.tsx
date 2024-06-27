import React from "react";
import { View, Button, Share, StyleSheet } from "react-native";

const SocialShare = ({ shareMessage }) => {
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: shareMessage,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared via:", result.activityType);
        } else {
          console.log("Shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Dismissed");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Share Progress" onPress={handleShare} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default SocialShare;
