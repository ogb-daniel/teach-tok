import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const PlayList = ({ playlist }: any) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="video-collection" size={24} color="white" />
      <Text style={{ color: "white", marginLeft: 5 }}>{playlist}</Text>
      <MaterialIcons
        name="navigate-next"
        size={24}
        color="white"
        style={{ marginLeft: "auto" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
});
export default PlayList;
