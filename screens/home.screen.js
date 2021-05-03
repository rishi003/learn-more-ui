import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Collections")}
        mode="contained"
      >
        Go to Collections
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
