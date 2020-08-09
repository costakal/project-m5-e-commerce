const initialState = {
  status: "idle",
  items: null,
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST-ALL-ITEMS':
      return {
        ...state,
        status: 'loading'
      }
    case 'RECEIVE-ALL-ITEMS':
      return {
        ...state,
        status: 'ready',
        items: action.items
      }
    default: {
      return state;
    }
  }
};
