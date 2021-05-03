import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home.screen";
import Collections from "./screens/collections.screen";
import CustomNavBar from "./components/CustomNavBar";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavBar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Collections" component={Collections} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
