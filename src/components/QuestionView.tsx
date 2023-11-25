import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { Context as MCQContext } from "../context/MCQContext";
import Option from "./Option";
import Description from "./Description";
import PlayList from "./PlayList";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
const NO_WIDTH_SPACE = "​";
const screenHeight = Dimensions.get("window").height;

const QuestionView = ({ question }: any) => {
  const highlight = (string: string) =>
    string?.split(" ").map((word, i) => (
      <Text key={i}>
        <Text style={styles.question}>{word} </Text>
        {NO_WIDTH_SPACE}
      </Text>
    ));
  return (
    <View style={{ height: screenHeight - 78 }}>
      <Image source={{ uri: question.image }} style={styles.image} />
      <View style={styles.backDrop} />
      <View style={styles.main}>
        <Text style={{ width: 224 }}>{highlight(question.question)}</Text>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View style={styles.options}>
            {question.options.map(
              ({ answer, id }: { id: string; answer: string }) => (
                <Option
                  questionId={question.id}
                  id={id}
                  choice={question.choice}
                  answer={answer}
                  key={id}
                />
              )
            )}
            <Description
              name={question.user.name}
              description={question.description}
            />
          </View>
          <View style={styles.sideActions}>
            <View>
              <Image
                source={{ uri: question.user.avatar }}
                style={{
                  width: 45,
                  height: 45,
                  borderColor: "white",
                  borderWidth: 1,
                  borderRadius: 100,
                }}
              />
              <AntDesign
                name="pluscircle"
                size={24}
                color="#28B18F"
                style={{ textAlign: "center", top: -14 }}
              />
            </View>
            <View>
              <Ionicons name="heart" size={45} color="white" />
              <Text
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                87
              </Text>
            </View>
            <View>
              <FontAwesome name="commenting" size={45} color="white" />
              <Text
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                2
              </Text>
            </View>
            <View>
              <FontAwesome name="bookmark" size={45} color="white" />
              <Text
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                203
              </Text>
            </View>
            <View>
              <FontAwesome5 name="share" size={45} color="white" />
              <Text
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                17
              </Text>
            </View>
          </View>
        </View>
      </View>
      <PlayList playlist={question.playlist} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backDrop: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0, 0.40)",
  },
  main: {
    flex: 1,
    marginTop: 150,
    marginHorizontal: 15,
    justifyContent: "space-between",
  },
  question: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
    lineHeight: 26.25,
    backgroundColor: "rgba(0,0,0,0.60)",
  },
  options: { flex: 1, alignSelf: "flex-end" },
  sideActions: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 380,
  },
});
export default QuestionView;
