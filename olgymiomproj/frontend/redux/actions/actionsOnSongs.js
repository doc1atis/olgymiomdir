import {
  LOAD_SONG,
  PAUSE_SONG,
  PLAY_SONG,
  SONG_IS_PLAYING,
  SONG_IS_PAUSED,
  SONG_HAS_ENDED,
} from "./actionTypes";
import history from "../../src/history";
export function loadSong(songUrl) {
  history.push("/player/");
  return {
    type: LOAD_SONG,
    payload: {
      songUrl,
      loaded: true,
    },
  };
}
// what I want to perform on the song --> not reliable source of info
export function playSong() {
  return {
    type: PLAY_SONG,
    payload: {
      play: true,
    },
  };
}
// what I want to perform on the song --> not reliable source of info
export function pauseSong() {
  return {
    type: PAUSE_SONG,
    payload: {
      play: false,
    },
  };
}
// that's where you want to get reliable information because it come from the song object itself
export function songIsPlaying() {
  return {
    type: SONG_IS_PLAYING,
    payload: {
      isPlaying: true,
    },
  };
}
// that's where you want to get reliable information because it come from the song object itself
export function songIsPaused() {
  return {
    type: SONG_IS_PAUSED,
    payload: {
      isPlaying: false,
    },
  };
}
export function songHasEnded() {
  return {
    type: SONG_HAS_ENDED,
    payload: {
      play: false,
      isPlaying: false,
    },
  };
}
