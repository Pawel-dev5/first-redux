import types from "./types";

const INITIAL_STATE = {
    listName: 'Favourite movies',
    list: [
      "TWP", "JPWM", "Przyjaciele"
    ]
  };

  const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case types.ADD_MOVIE:
        return {
          ...state, list: [...state.list, action.item]
        }
      case types.RESET_MOVIES:
        return {
          ...state, list: []
        }
      default:
        return state
    }
  };
  export default movieReducer;