import analytics from "@react-native-firebase/analytics";

const trackEvent = async () => {
  await analytics().logEvent("course_view", {
    course_id: "your_course_id",
    user_id: "current_user_id",
  });
};
