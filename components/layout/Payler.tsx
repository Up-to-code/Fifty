import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { Audio } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useAudioStore } from "@/store/useAudioStore";

const AudioPlayer: React.FC = () => {
  const {
    currentTrackIndex,
    tracks,
    isPlaying,
    setCurrentTrackIndex,
    setIsPlaying,
  } = useAudioStore((state) => ({
    currentTrackIndex: state.currentTrackIndex,
    tracks: state.tracks,
    isPlaying: state.isPlaying,
    setCurrentTrackIndex: state.setCurrentTrackIndex,
    setIsPlaying: state.setIsPlaying,
  }));
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isBuffering, setIsBuffering] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    loadSound(tracks[currentTrackIndex]?.audioUrl);

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [currentTrackIndex]);

  const loadSound = async (uri: string | undefined) => {
    if (!uri) return;
    setLoading(true);
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri },
      { shouldPlay: isPlaying },
      updateStatus
    );
    setSound(newSound);
    setLoading(false);
  };

  const updateStatus = (status: any) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
      setIsBuffering(status.isBuffering);

      if (status.didJustFinish && !status.isLooping) {
        handleNextTrack();
      }
    }
  };

  const togglePlayback = async () => {
    if (!sound) return;
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
    setShowControls(!isPlaying); // Show controls when playing, hide when paused
  };

  const seekTo = async (positionMillis: number) => {
    if (sound) {
      await sound.setPositionAsync(positionMillis);
    }
  };

  const handleVolumeChange = async (value: number) => {
    if (sound) {
      await sound.setVolumeAsync(value);
      setVolume(value);
    }
  };

  const handleNextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setShowControls(true); // Show controls when switching tracks
  };

  const handlePreviousTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setShowControls(true); // Show controls when switching tracks
  };

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!tracks[currentTrackIndex]) return null;

  const currentTrack = tracks[currentTrackIndex];

  return (
    <View style={styles.container}>
      <Image source={{ uri: currentTrack.imageUrl }} style={styles.artwork} />
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.gradient}
      />
      <Text style={styles.title}>{currentTrack.title}</Text>
      <Text style={styles.artist}>{currentTrack.artist}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#1DB954" style={styles.loader} />
      ) : (
        <>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>{formatTime(position)}</Text>
            <Slider
              style={styles.progressBar}
              minimumValue={0}
              maximumValue={duration}
              value={position}
              onValueChange={(value) => seekTo(value)}
              minimumTrackTintColor="#1DB954"
              maximumTrackTintColor="#333"
            />
            <Text style={styles.progressText}>{formatTime(duration)}</Text>
          </View>

          {showControls && (
            <View style={styles.controlsContainer}>
              <TouchableOpacity
                onPress={handlePreviousTrack}
                style={styles.controlButton}
              >
                <MaterialIcons name="skip-previous" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={togglePlayback}
                style={styles.playButton}
              >
                {isPlaying ? (
                  <MaterialIcons name="pause" size={24} color="#fff" />
                ) : (
                  <MaterialIcons name="play-arrow" size={24} color="#fff" />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleNextTrack}
                style={styles.controlButton}
              >
                <MaterialIcons name="skip-next" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.volumeContainer}>
            <TouchableOpacity
              onPress={() => handleVolumeChange(Math.max(0, volume - 0.1))}
              style={styles.volumeButton}
            >
              <FontAwesome5 name="volume-down" size={20} color="#fff" />
            </TouchableOpacity>
            <Slider
              style={styles.volumeSlider}
              minimumValue={0}
              maximumValue={1}
              value={volume}
              onValueChange={handleVolumeChange}
              minimumTrackTintColor="#1DB954"
              maximumTrackTintColor="#333"
            />
            <TouchableOpacity
              onPress={() => handleVolumeChange(Math.min(1, volume + 0.1))}
              style={styles.volumeButton}
            >
              <FontAwesome5 name="volume-up" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {isBuffering && (
            <Text style={styles.bufferingText}>Buffering...</Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  artwork: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "#1DB954",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  artist: {
    color: "#aaa",
    fontSize: 18,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginTop: 16,
  },
  progressText: {
    color: "#fff",
    fontSize: 12,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#333",
    borderRadius: 2,
    marginHorizontal: 8,
  },
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
  },
  controlButton: {
    padding: 12,
    borderRadius: 24,
    marginHorizontal: 8,
  },
  playButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  volumeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  volumeButton: {
    padding: 8,
    borderRadius: 24,
    marginHorizontal: 8,
  },
  volumeSlider: {
    flex: 1,
    height: 4,
    backgroundColor: "#333",
    borderRadius: 2,
    marginHorizontal: 8,
  },
  bufferingText: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 16,
  },
  loader: {
    marginTop: 32,
  },
});

export default AudioPlayer;
