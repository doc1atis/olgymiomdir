import {
  LOAD_SONG,
  PAUSE_SONG,
  PLAY_SONG,
  SONG_IS_PLAYING,
  SONG_IS_PAUSED,
  SONG_HAS_ENDED,
  ADD_PLAYER_IN_STATE,
  ADD_TIMER_ID_IN_STATE,
} from "../actions/actionTypes";
const INITIAL_STATE = {
  isPlaying: false,
  isPaused: false,
  play: true,
  songUrl: "",
  loaded: false,
  player: null,
  timerId: null,
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
        isPaused: action.payload.isPaused,
      };
    case SONG_IS_PAUSED:
      return {
        ...state,
        isPlaying: action.payload.isPlaying,
        isPaused: action.payload.isPaused,
      };
    case SONG_HAS_ENDED:
      return {
        ...state,
        isPaused: action.payload.isPaused,
        play: action.payload.play,
      };
    case ADD_PLAYER_IN_STATE:
      return {
        ...state,
        player: action.payload.player,
      };
    case ADD_TIMER_ID_IN_STATE:
      return { ...state, timerId: action.payload.timerId };
    default:
      return state;
  }
}
