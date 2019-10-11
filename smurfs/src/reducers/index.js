import { START_FETCHING, FETCH_FAILURE, FETCH_SUCCESS } from "../actions";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
      return { ...state, isFetching: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, isFetching: false, smurfs: action.payload };
    case FETCH_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    default:
      return state;
  }
};
