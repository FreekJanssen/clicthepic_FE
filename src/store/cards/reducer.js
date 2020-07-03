const initialState = [];

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CARDS": {
      return action.payload;
    }

    default:
      return state;
  }
}
