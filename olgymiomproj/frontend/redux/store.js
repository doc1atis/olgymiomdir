import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import allReducers from "./reducers/allReducers";
const initialState = {
  songsReducer: {
    songUrl: "https://olgybucket.s3.amazonaws.com/media/sale.mp3",
    loaded: true,
    play: false,
    isPaused: true,
  },
};
const middleware = [thunk];

const store = createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
