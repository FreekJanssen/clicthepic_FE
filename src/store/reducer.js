import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import cardsReducer from "./cards/reducer";

export default combineReducers({
  appState,
  user,
  cardsPage: cardsReducer,
});
