import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Description = ({ name, description }: any) => {
  return (
    <View style={{ marginTop: 30, gap: 5 }}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>
        {description?.split("#")[0]}{" "}
        <Text style={{ fontWeight: "600" }}>#{description?.split("#")[1]}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "600",
    fontSize: 15,
    color: "#fff",
  },
  description: {
    color: "#fff",
  },
});
export default Description;
