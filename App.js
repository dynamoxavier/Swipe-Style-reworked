import React from "react";
import { StyleSheet } from "react-native";
import { UserProvider } from "./contexts/userContext";
import { LoadingProvider } from "./contexts/loadingContext";
import RootNavigator from "./navigation/RootNavigator";
import { ThemeProvider } from './contexts/themeContext';


export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LoadingProvider>
          <RootNavigator />
        </LoadingProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  tab: {
    paddingTop: 25,
  },
});
