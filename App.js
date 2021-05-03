import React from "react";
import { Text } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import App from "./index";

const theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200EE",
    accent: "#FFFFFF",
    background: "#FFFFFF",
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
