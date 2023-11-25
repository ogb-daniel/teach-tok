import React, { useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as MCQContext } from "../context/MCQContext";
import ForYou from "../components/ForYou";

const HomeScreen = () => {
  const { getMCQs }: any = useContext(MCQContext);

  useEffect(() => {
    getMCQs();
    getMCQs();
    getMCQs();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0, 0.40)" }}>
      <ForYou />
    </View>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
