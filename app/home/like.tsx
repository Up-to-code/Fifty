import HeaderListMuisc from "@/components/ui/HeaderListMuisc";
import IteamCart from "@/components/ui/listmuiscIteam";
import { useColor } from "@/hooks/useColor";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<HeaderListMuisc />}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <IteamCart 
          title="speed work"
          imageUrl="https://images.unsplash.com/photo-1570611318746-3a043ac8f256?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          aduioUrl="https://p.scdn.co/mp3-preview/0c7c5b7a2f5a5b6a6b2c0a5b8f7a5b6b2c0a5b8?cid=774b29d4f13844c495f206cafdad9c86"
          description="one two three"
        />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: useColor.bg,
  },
});

export default Index;
