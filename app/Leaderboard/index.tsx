import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Leaderboard = ({ leaderboardData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={leaderboardData}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.rank}>{index + 1}</Text>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.points}>{item.points} points</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  rank: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 8,
  },
  username: {
    flex: 1,
    fontSize: 16,
    marginRight: 8,
  },
  points: {
    fontSize: 16,
    color: "gray",
  },
});

export default Leaderboard;
