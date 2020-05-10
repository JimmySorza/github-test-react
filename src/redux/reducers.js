// Initial State

const initialState = {
  gists: [],
  detail: {}
};

// Reducers (Modifies The State And Returns A New State)
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GISTS':
      const { listGists } = action;
      return {...state, gists: listGists};
      case 'SET_DETAIL':
      const { detail } = action;
      return {...state, detail };
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default reducers;
