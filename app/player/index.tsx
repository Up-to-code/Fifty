import React from "react";
import { View, StyleSheet } from "react-native";
import AudioPlayer from "@/components/layout/Payler"; // Adjust the import path accordingly

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <AudioPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
});

export default App;
