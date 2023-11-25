import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { Context as MCQContext } from "../context/MCQContext";

const screenWidth = Dimensions.get("window").width;
const Option = ({ id, answer, choice, questionId }: any) => {
  const [animation] = useState(new Animated.Value(0));
  const { markMCQ }: any = useContext(MCQContext);
  const [pick, setPick] = useState(null);
  const handlePress = () => {
    markMCQ(questionId, id);
    Animated.timing(animation, {
      toValue: 1,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: false, // Note: Animated.timing with useNativeDriver: true does not support backgroundColor
    }).start();
  };
  useEffect(() => {
    if (choice && choice !== "A" && id === "A") {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500, // Adjust the duration as needed
        useNativeDriver: false, // Note: Animated.timing with useNativeDriver: true does not support backgroundColor
      }).start();
    }
  }, [choice]);
  const animatedStyleCorrect = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(255,255,255,0.50)", "#28B18FB2"],
    }),

    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [screenWidth, 0], // Slide in from the right
        }),
      },
    ],
  };
  const animatedStyleWrong = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(255,255,255,0.50)", "#DC5F5FB2"],
    }),

    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [screenWidth, 0], // Slide in from the right
        }),
      },
    ],
  };
  return (
    <TouchableOpacity
      style={{ marginTop: 10, overflow: "hidden" }}
      onPress={handlePress}
      activeOpacity={1}
      disabled={choice}
    >
      <View style={styles.option}>
        <Text style={styles.optionText}>{answer}</Text>
        <Animated.View
          style={[
            styles.option,
            {
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              //   opacity: 0.7,
            },
            choice && choice !== "A" && id === "A"
              ? animatedStyleCorrect
              : choice === "A"
              ? animatedStyleCorrect
              : animatedStyleWrong,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: "rgba(255,255,255,0.50)",
  },
  optionText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
    textShadowColor: "#000",
    zIndex: 1,
    textShadowOffset: {
      height: 1,
      width: 1,
    },
    textShadowRadius: 1,
  },
});
export default Option;
