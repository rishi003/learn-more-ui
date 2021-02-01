import * as React from "react";
import { Appbar } from "react-native-paper";
import { Platform } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const MyComponent = () => (
  <Appbar.Header>
    <Appbar.Action icon="menu" onPress={() => {}} />
    <Appbar.Content title="Dashboard" />
    <Appbar.Action icon="arrow-decision" onPress={() => {}} />
  </Appbar.Header>
);

export default MyComponent;
