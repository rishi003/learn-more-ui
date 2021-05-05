import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Button,
  IconButton,
  Surface,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import CollectionList from "../components/CollectionList";

const Home = ({ navigation }) => {
  const [defaultCollection, setDefaultCollection] = useState();
  const [visible, setVisible] = useState(false);
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Collections")}
        mode="contained"
      >
        Go to Collections
      </Button>
      <CollectionList isVisible={visible} />
      <Surface style={style.bottomBar}>
        <TouchableRipple
          rippleColor="rgba(0, 0, 0, .32)"
          onPress={() => setVisible(!visible)}
          style={{ paddingVertical: 18, width: "50%", alignItems: "center" }}
        >
          <Icon name="documents-outline" size={25} color="black" />
        </TouchableRipple>

        <TouchableRipple
          rippleColor="rgba(0, 0, 0, .32)"
          onPress={() => console.log("Pressed")}
          style={{ paddingVertical: 18, width: "50%", alignItems: "center" }}
        >
          <Icon name="duplicate-outline" size={25} color="black" />
        </TouchableRipple>
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
    width: "100%",
    flex: 1,
    alignItems: "center",

    flexDirection: "row",
  },
});

export default Home;
