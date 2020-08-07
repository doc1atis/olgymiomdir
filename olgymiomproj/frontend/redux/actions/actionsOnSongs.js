import {
  LOAD_SONG,
  PAUSE_SONG,
  PLAY_SONG,
  SONG_IS_PLAYING,
  SONG_IS_PAUSED,
  SONG_HAS_ENDED,
  ADD_PLAYER_IN_STATE,
  ADD_TIMER_ID_IN_STATE,
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
export function playSong() {
  return {
    type: PLAY_SONG,
    payload: {
      play: true,
    },
  };
}
export function pauseSong() {
  return {
    type: PAUSE_SONG,
    payload: {
      play: false,
    },
  };
}
export function songIsPlaying() {
  return {
    type: SONG_IS_PLAYING,
    payload: {
      isPlaying: true,
      isPaused: false,
    },
  };
}
export function songIsPaused() {
  return {
    type: SONG_IS_PAUSED,
    payload: {
      isPlaying: false,
      isPaused: true,
    },
  };
}
export function songHasEnded() {
  return {
    type: SONG_HAS_ENDED,
    payload: {
      isPaused: true,
      play: false,
    },
  };
}
export function addPlayerInState(player) {
  return {
    type: ADD_PLAYER_IN_STATE,
    payload: {
      player: player,
    },
  };
}
export function addTimerIdInState(timerId) {
  return {
    type: ADD_TIMER_ID_IN_STATE,
    payload: {
      timerId: timerId,
    },
  };
}
