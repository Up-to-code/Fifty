import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useColor } from "@/hooks/useColor";

const HeaderListMusic = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1652731011413-93d4c5aa5c7c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.image}
        resizeMethod="resize"
      />
      <LinearGradient
        colors={["transparent", useColor.Primary]}
        style={styles.overlay}
      >
        <Text style={styles.text}>Playlist</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 208, // 52 * 4 (height in pixels)
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 12,
    marginBottom: 8,
  },
});

export default HeaderListMusic;
