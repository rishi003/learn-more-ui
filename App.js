import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import MyComponent from "./components/appbar";

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#EEEEEE",
    accent: "#39464F",
    background: "#FFFFFF",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <MyComponent></MyComponent>
    </PaperProvider>
  );
}
