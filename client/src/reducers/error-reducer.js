const initialState = {
  error: null,
  message: null,
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case "ERROR-404":
      return {
        error: "404",
        message: action.error,
      };
    default: {
      return state;
    }
  }
}
