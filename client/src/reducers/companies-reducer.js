const initialState = {
    companies: null,
    status: 'idle'
};

export default function companiesReducer(state = initialState, action) {
    switch (action.type) {
      case 'REQUEST-ALL-COMPANIES':
        return {
          ...state,
          status: 'loading'
        }
      case 'RECEIVE-ALL-COMPANIES':
        return {
          ...state,
          status: 'ready',
          companies: action.companies
        }
      default: {
        return state;
      }
    }
  };