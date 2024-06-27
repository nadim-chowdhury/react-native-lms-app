import React from "react";
import { View, Text, StyleSheet } from "react-native";
import i18n from "./localization";

const Greeting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.t("greeting")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Greeting;
