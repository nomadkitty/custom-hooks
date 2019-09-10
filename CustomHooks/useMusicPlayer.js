// This hook use React Context API, line 4 and line 7 can be changed to any name and path 
// below is the initial state object
// const [state, setState] = useState({
//   audioPlayer: new Audio(),
//   tracks: [],
//   currentTrackIndex: null,
//   isPlaying: false
// });

import { useContext } from 'react';
import { MusicContext } from '../contexts/MusicContext';

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicContext);

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState({ ...state, currentTrackIndex: index, isPlaying: true });
    }
  }

  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }

    setState({ ...state, isPlaying: !state.isPlaying });
  }

  function playPreviousTrack() {
    let newTrackIndex =
      state.currentTrackIndex === 0
        ? state.tracks.length - 1
        : state.currentTrackIndex - 1;
    playTrack(newTrackIndex);
  }

  function playNextTrack() {
    let newTrackIndex =
      state.currentTrackIndex === state.tracks.length - 1
        ? 0
        : state.currentTrackIndex + 1;
    playTrack(newTrackIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackIndex: state.currentTrackIndex,
    currentTrackName:
      state.tracks[state.currentTrackIndex] &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack
  };
};

export default useMusicPlayer;
