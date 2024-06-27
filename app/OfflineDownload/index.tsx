import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OfflineDownload = ({ courseId, courseTitle }) => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = async () => {
    try {
      // Simulate downloading course materials (save to AsyncStorage)
      await AsyncStorage.setItem(
        `course_${courseId}`,
        "Course materials downloaded"
      );
      setIsDownloaded(true);
      Alert.alert(
        "Downloaded",
        `Course materials for ${courseTitle} downloaded successfully.`
      );
    } catch (error) {
      console.error("Error downloading:", error.message);
      Alert.alert("Error", "Failed to download course materials.");
    }
  };

  const handleRemoveDownload = async () => {
    try {
      // Remove downloaded course materials from AsyncStorage
      await AsyncStorage.removeItem(`course_${courseId}`);
      setIsDownloaded(false);
      Alert.alert(
        "Removed",
        `Downloaded materials for ${courseTitle} removed successfully.`
      );
    } catch (error) {
      console.error("Error removing download:", error.message);
      Alert.alert("Error", "Failed to remove downloaded materials.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isDownloaded ? "Downloaded" : "Download Course Materials"}
      </Text>
      {isDownloaded ? (
        <Button title="Remove Download" onPress={handleRemoveDownload} />
      ) : (
        <Button title="Download" onPress={handleDownload} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default OfflineDownload;
