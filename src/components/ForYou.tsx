import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { Context as MCQContext } from "../context/MCQContext";
import ForYouHeader from "./ForYouHeader";
import QuestionView from "./QuestionView";

const ForYou = () => {
  const { state }: any = useContext(MCQContext);
  return (
    <View style={styles.container}>
      <ForYouHeader />
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <QuestionView question={item} />}
        pagingEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ForYou;
