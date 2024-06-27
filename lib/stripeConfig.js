import { StripeProvider } from "@stripe/stripe-react-native";

const stripeConfig = {
  publishableKey: "your_stripe_publishable_key", // Replace with your Stripe publishable key
};

export const configureStripe = () => {
  return <StripeProvider publishableKey={stripeConfig.publishableKey} />;
};
