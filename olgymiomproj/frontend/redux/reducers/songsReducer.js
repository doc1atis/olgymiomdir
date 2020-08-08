import {
  LOAD_SONG,
  PAUSE_SONG,
  PLAY_SONG,
  SONG_IS_PLAYING,
  SONG_IS_PAUSED,
  SONG_HAS_ENDED,
} from "../actions/actionTypes";
const INITIAL_STATE = {
  isPlaying: false,
  play: false,
  songUrl: "",
  loaded: false,
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_SONG:
      return {
        ...state,
        loaded: action.payload.loaded,
        songUrl: action.payload.songUrl,
        play: action.payload.play,
      };
    case PLAY_SONG:
      return { ...state, play: action.payload.play };
    case PAUSE_SONG:
      return {
        ...state,
        play: action.payload.play,
      };
    case SONG_IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload.isPlaying,
      };
    case SONG_IS_PAUSED:
      return {
        ...state,
        isPlaying: action.payload.isPlaying,
      };
    case SONG_HAS_ENDED:
      return {
        ...state,
        isPlaying: action.payload.isPlaying,
        play: action.payload.play,
      };
    default:
      return state;
  }
}
