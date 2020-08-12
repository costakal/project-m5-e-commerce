const initialState = {
  status: "idle",
  category: null,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST-CATEGORY":
      return {
        ...state,
        status: "loading",
      };
    case "RECEIVE-CATEGORY":
      return {
        ...state,
        status: "ready",
        category: action.category,
      };
    case "RECEIVE-CATEGORY-ERROR":
      return {
        ...state,
        status: "error",
      };
    default: {
      return state;
    }
  }
}
