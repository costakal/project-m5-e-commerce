const initialState = {
  status: "idle",
  categories: null,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST-ALL-CATEGORIES":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE-ALL-CATEGORIES":
      return {
        ...state,
        status: "ready",
        categories: action.categories,
      };
    default: {
      return state;
    }
  }
}
