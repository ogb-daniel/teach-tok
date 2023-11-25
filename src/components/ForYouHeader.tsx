import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const ForYouHeader = () => {
  const [count, setCount] = useState({ minute: 0, second: 0 });
  useEffect(() => {
    const interval = setInterval(() => {
      if (count.second === 59) {
        setCount({ minute: count.minute + 1, second: 0 });
      } else {
        setCount((prevCount) => ({
          minute: prevCount.minute,
          second: prevCount.second + 1,
        }));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <View style={styles.mainHeader}>
      <View style={styles.timer}>
        <MaterialCommunityIcons name="timer" size={20} color="#b5b4b1" />
        <Text style={{ color: "white" }}>
          {count.minute
            ? `${count.minute}m${count.second}s`
            : `${count.second}s`}
        </Text>
      </View>
      <View style={styles.forYou}>
        <Text style={{ color: "#fff", fontSize: 20 }}>For You</Text>
        <View style={{ height: 4, width: 30, backgroundColor: "#fff" }} />
      </View>
      <FontAwesome name="search" size={20} color="#fff" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 10,
    top: 52,
    marginHorizontal: 15,
  },
  forYou: {
    gap: 5,
    alignItems: "center",
  },
  timer: {
    flexDirection: "row",
    gap: 4,

    alignItems: "center",
  },
});
export default ForYouHeader;
