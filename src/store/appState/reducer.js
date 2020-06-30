import {
  APP_LOADING,
  APP_DONE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  SET_LANGUAGE
} from "./actions";

const initialState = {
  loading: false,
  message: null,
  language: 'en'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING:
      return { ...state, loading: true };

    case APP_DONE_LOADING:
      return { ...state, loading: false };

    case SET_MESSAGE:
      return { ...state, message: action.payload };

    case CLEAR_MESSAGE:
      return { ...state, message: null };

    case SET_LANGUAGE:
      return { ...state, language: action.payload }

    default:
      return state;
  }
};
