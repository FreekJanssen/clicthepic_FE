const initialState = [];

export default function cardsReducer(state = initialState, action) {
  let newState = [...state];

  switch (action.type) {
    case "SET_CARDS": {
      newState = action.payload;
      break;
    }

    default: {
      // do nothing
    }
  }

  return newState;
}
