import { ADD_FOLLOW, DELETE_FOLLOW, SET_FEED } from "../actions/typeAction";

const initialState = {
  follows: [],
  postsFollow: [],
  toFollow: [],
};

export default function reducerHome(state = initialState, action) {
  switch (action.type) {
    case ADD_FOLLOW:
      return {
        ...state,
        follows: [...state.follows, action.payload],
      };
    case DELETE_FOLLOW:
      return {
        ...state,
        follows: [...state.follows.filter((f) => f._id !== action.payload)],
      };
    case SET_FEED:
      return {
        ...action.payload,
      };
    case ADD_FOLLOW:
      return {
        ...state,
        follows: [...state.follows, action.payload],
      };
    case DELETE_FOLLOW:
      return {
        ...state,
        follows: [...state.follows.filter((f) => f._id !== action.payload)],
      };
    default:
      return state;
  }
}
