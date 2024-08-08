import { useColor } from "@/hooks/useColor";
import { router, useFocusEffect } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  const { Primary, bg } = useColor;
  useFocusEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 1000);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bg,
      }}
    >
      <ActivityIndicator
        style={{ transform: [{ scale: 2 }] }}
        color={Primary}
        size={"large"}
      />
    </View>
  );
}
