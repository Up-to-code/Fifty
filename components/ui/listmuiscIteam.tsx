import { useColor } from "@/hooks/useColor";
import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

interface ItemCartProps {
  title: string;
  description: string;
  imageUrl: string;
  aduioUrl: string;
}

const ItemCart: React.FC<ItemCartProps> = ({
  title,
  description,
  imageUrl,
  aduioUrl,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
      <Entypo name="controller-play" size={24} color={useColor.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,

    backgroundColor: useColor.secondarybg, // Spotify green
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff", // White text
  },
  description: {
    fontSize: 14,
    color: "#fff", // White text
    marginTop: 4,
  },
  button: {
    backgroundColor: "#191414", // Spotify dark
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  playButton: {

  
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
  },
});

export default ItemCart;
