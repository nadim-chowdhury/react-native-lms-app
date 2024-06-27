import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars"; // Install react-native-calendars package

const CalendarScreen = () => {
  const handleDateSelect = (day) => {
    // Implement logic to handle date selection
    alert(`Selected date: ${day.dateString}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Calendar</Text>
      <Calendar
        onDayPress={handleDateSelect}
        style={styles.calendar}
        markedDates={{
          "2024-06-01": { selected: true, marked: true, selectedColor: "blue" },
          "2024-06-15": { marked: true },
          "2024-06-20": { marked: true, dotColor: "red", activeOpacity: 0 },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  calendar: {
    marginTop: 16,
  },
});

export default CalendarScreen;
