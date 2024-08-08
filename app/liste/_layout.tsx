import Header from "@/components/layout/Header";
import { Stack } from "expo-router";

const layout = () => {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};
export default layout;
