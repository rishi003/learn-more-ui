import React from "react";
import { Text, View } from "react-native";
import { List } from "react-native-paper";
import posed from "react-native-pose";

const CollectionList = ({ isVisible }) => {
  const Container = posed.View({
    visible: {
      opacity: 1,
      transition: { duration: 3000 },
    },
    hidden: {
      opacity: 0,
    },
  });
  return (
    <Container
      pose={isVisible ? "visible" : "hidden"}
      style={{
        position: "absolute",
        zIndex: 2,
        width: "90%",
        backgroundColor: "#FFFFFF",
      }}
    >
      <List.Section>
        <List.Subheader>Collections</List.Subheader>
        <List.Item title="Good Will Hunting" />
        <List.Item title="The Balcklist" />
        <List.Item title="Algorithams and Data Structures" />
      </List.Section>
    </Container>
  );
};

export default CollectionList;
