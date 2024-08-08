import { useColor } from "@/hooks/useColor";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "@/assets/images/logo.png";
import { SafeAreaView } from "react-native-safe-area-context";
const Header = () => {
  return (
    <View
      className="w-full h-[70px] "
      style={{ backgroundColor: useColor.secondarybg }}
    >
      <SafeAreaView className="w-full h-full">
        <View
          className="w-full h-full flex-row justify-between items-center px-5 "
          style={{ backgroundColor: useColor.secondarybg }}
        >
          <View className="flex-row items-center">
            <Text
              style={{ color: useColor.text }}
              className="text-xl font-bold text-white"
            >
              fauvette
            </Text>
          </View>
          <View className="flex-row items-center">
            <Image source={logo} style={{ height: 30, width: 30 }} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
