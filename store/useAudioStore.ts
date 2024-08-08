// src/store/useAudioStore.ts

import create from 'zustand';

interface AudioStore {
  currentTrackIndex: number;
  tracks: Track[];
  isPlaying: boolean;
  setCurrentTrackIndex: (index: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setTracks: (tracks: Track[]) => void;
}

interface Track {
  title: string;
  artist: string;
  imageUrl: string;
  audioUrl: string;
}

export const useAudioStore = create<AudioStore>((set) => ({
  currentTrackIndex: 0,
  tracks: [],
  isPlaying: false,
  setCurrentTrackIndex: (index) => set({ currentTrackIndex: index }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setTracks: (tracks) => set({ tracks }),
}));
