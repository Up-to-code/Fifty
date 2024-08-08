
import PlaylistCard from "@/components/ui/Cart";
import { useColor } from "@/hooks/useColor";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { bg } = useColor;
const images = [
  "https://images.unsplash.com/photo-1497405417022-3fefbce30a70?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHxsb2ZpJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1443186547344-2437c72a228e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI0fHxsb2ZpJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1520614829617-44ad1894380c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHxsb2ZpJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1508073890584-e7aa13246994?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQxfHxsb2ZpJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1479707406242-e8929e87e734?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYzfHxsb2ZpJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1511132081771-2a63dab7b512?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY4fHxsb2ZpJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D",
];
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => (
          <PlaylistCard
            imageUrl={images[--item % images.length]}
            title="speed work"
            plays={65526}
            tags={["one", "tow", "three"]}
          />
        )}
        keyExtractor={(item) => item.toString()}
      />
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bg,
    paddingHorizontal: 20,
  },
});

export default Home;
