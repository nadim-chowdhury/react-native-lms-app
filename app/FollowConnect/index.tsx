import React from "react";
import { View, Button, StyleSheet } from "react-native";

const FollowConnect = ({ user, isFollowing, onFollowToggle }) => {
  return (
    <View style={styles.container}>
      {!isFollowing ? (
        <Button title={`Follow ${user}`} onPress={() => onFollowToggle(true)} />
      ) : (
        <Button
          title={`Unfollow ${user}`}
          onPress={() => onFollowToggle(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default FollowConnect;
