import React from "react";
import { Image, StatusBar, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import Header from "@/components/layout/Header";
import { useColor } from "@/hooks/useColor";
import HomeIcon from "@/assets/images/icons/home.png";
import PlaylistIcon from "@/assets/images/icons/playlist.png";
import HeartIcon from "@/assets/images/icons/heart.png";

const Layout = () => {
  const colors = useColor;

  return (
    <>
    <StatusBar barStyle="light-content"  translucent animated networkActivityIndicatorVisible={false} />
      <Tabs
      screenOptions={{
        header: () => <Header />,
        tabBarVisibilityAnimationConfig: {
          hide: {
            animation: "spring",
            config: {
              stiffness: 800,
              damping: 80,
              mass: 1,
              delay: 300,
            },
          },
          show: {
            animation: "timing",
            config: {
              duration: 400,
            },
          },
        },
        tabBarStyle: {
          backgroundColor: colors.secondarybg,
          borderBlockColor: colors.secondarybg,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarLabel: () => null,
        tabBarActiveTintColor: colors.Primary,
        tabBarInactiveTintColor: colors.Secondary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={HomeIcon}
              style={[
                styles.icon,
                {
                  width: size,
                  height: size,
                  tintColor: focused ? colors.Primary : colors.unActive,
                },
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="playlist"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={PlaylistIcon}
              style={[
                styles.icon,
                {
                  width: size,
                  height: size,
                  tintColor: focused ? colors.Primary : colors.unActive,
                },
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="like"
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={HeartIcon}
              style={[
                styles.icon,
                {
                  width: size,
                  height: size,
                  tintColor: focused ? colors.Primary : colors.unActive,
                },
              ]}
            />
          ),
        }}
      />
    </Tabs>
    
    </>
  
  );
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: "contain",
  },
});

export default Layout;
