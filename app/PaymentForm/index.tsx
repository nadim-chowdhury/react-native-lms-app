import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";

const PaymentForm = () => {
  const [email, setEmail] = useState("");
  const { confirmPayment, handleCardAction } = useStripe();

  const handlePayment = async () => {
    // Example: Create payment method and confirm payment
    const { paymentMethod, error } = await confirmPayment({
      type: "Card",
      billingDetails: {
        email,
      },
    });

    if (error) {
      console.error("Failed to confirm payment:", error.message);
    } else {
      console.log("Payment successful:", paymentMethod);
      // Handle successful payment, e.g., update subscription status
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text style={styles.label}>Card details:</Text>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        style={styles.cardField}
        onCardChange={(cardDetails) => {
          console.log("cardDetails", cardDetails);
        }}
      />
      <Button title="Pay" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  cardField: {
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
  },
});

export default PaymentForm;
