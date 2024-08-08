import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
 
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { useColor } from "@/hooks/useColor";

interface PlaylistCardProps {
  imageUrl: string;
  title: string;
  plays: number;
  tags: string[];
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  imageUrl,
  title,
  plays,
  tags,
}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router.push("/liste")}
        style={styles.imageCover}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.plays}>plays {plays}</Text>
        <Text style={styles.tags}>{tags.join(", ")}</Text>
      </View>
      <TouchableOpacity style={styles.playButton} activeOpacity={0.8} onPress={() => router.push("/player")}>
      <Entypo name="controller-play" size={24} color={useColor.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} activeOpacity={0.8}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    borderRadius: 10,
    overflow: "hidden",
    width: 170,
    marginBottom: 20,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  info: {
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  plays: {
    color: "#ccc",
    fontSize: 14,
    marginVertical: 5,
  },
  tags: {
    color: "#ccc",
    fontSize: 14,
  },
  playButton: {
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
  },
  addButton: {
    position: "absolute",
    right: 10,
    bottom: 60,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 50,
  },
  imageCover: {
    borderRadius: 10,
    width: "auto",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlaylistCard;
