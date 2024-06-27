import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BadgesPoints = ({ badges, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Badges</Text>
      <View style={styles.badgesContainer}>
        {badges.map((badge, index) => (
          <Text key={index} style={styles.badge}>
            {badge}
          </Text>
        ))}
      </View>
      <Text style={styles.title}>Points</Text>
      <Text style={styles.points}>{points}</Text>
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
  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  badge: {
    padding: 8,
    backgroundColor: "#00bcd4",
    color: "white",
    borderRadius: 8,
    margin: 4,
  },
  points: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default BadgesPoints;
