import types from "./types";

const INITIAL_STATE = {
    listName: 'Best',
    list: [
      'Tom', 'Julia', "Leo"
    ]
  };

  const actorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_ACTOR:
        return {
          ...state, list: [...state.list, action.item]
        }
      case types.RESET_ACTORS:
        return {
          ...state, list: []
        }
      default:
        return state
    }
  };
  export default actorsReducer;