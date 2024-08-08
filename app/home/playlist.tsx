import { useColor } from '@/hooks/useColor';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const playlist = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View>
          <Text className="text-3xl text-white">Home</Text>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : useColor.bg
  },
})

export default playlist;
