import React from "react";
import { Appbar } from "react-native-paper";

const CustomNavBar = ({ navigation, previous, scene }) => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={scene.route.name} />
    </Appbar.Header>
  );
};

export default CustomNavBar;
