import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, IconButton, Surface } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

const Home = ({ navigation }) => {
  const [defaultCollection, setDefaultCollection] = useState();

  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Collections")}
        mode="contained"
      >
        Go to Collections
      </Button>
      <Surface style={style.bottomBar}>
        <TouchableOpacity>
          <Icon name="documents-outline" size={25} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon name="duplicate-outline" size={25} color="black" />
        </TouchableOpacity>
      </Surface>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    paddingVertical: 18,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default Home;
