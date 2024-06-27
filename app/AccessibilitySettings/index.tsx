import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Switch,
  AccessibilityInfo,
} from "react-native";

const AccessibilitySettings = () => {
  const [screenReaderEnabled, setScreenReaderEnabled] = React.useState(false);

  React.useEffect(() => {
    const fetchAccessibilityInfo = async () => {
      const isEnabled = await AccessibilityInfo.isScreenReaderEnabled();
      setScreenReaderEnabled(isEnabled);
    };

    fetchAccessibilityInfo();

    const subscription = AccessibilityInfo.addEventListener(
      "screenReaderChanged",
      (isEnabled) => {
        setScreenReaderEnabled(isEnabled);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const toggleScreenReader = () => {
    AccessibilityInfo.setAccessibilityFocus(); // Focus for screen readers
    setScreenReaderEnabled(!screenReaderEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accessibility Settings</Text>
      <View style={styles.setting}>
        <Text>Screen Reader:</Text>
        <Switch
          value={screenReaderEnabled}
          onValueChange={toggleScreenReader}
          style={styles.switch}
          accessibilityLabel="Toggle Screen Reader"
        />
      </View>
      <Button
        title="Adjust Text Size"
        onPress={AccessibilityInfo.openSettings}
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
  setting: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  switch: {
    marginLeft: 8,
  },
});

export default AccessibilitySettings;
