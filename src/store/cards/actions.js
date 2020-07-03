import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appLoading, appDoneLoading } from "../appState/actions";

export function setCards(cards) {
  return {
    type: "SET_CARDS",
    payload: cards,
  };
}

export const fetchCards = (category) => async (dispatch, getState) => {
  const { appState } = getState();
  dispatch(appLoading());

  try {
    const response = await axios.post(`${apiUrl}/card`, {
      category: category,
      language: appState.language,
    });

    dispatch(setCards(response.data));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};
