import {
  SET_AUTH,
  SET_ID,
  SET_AUTH_DATA,
  ADD_FOLLOW,
  DELETE_FOLLOW,
  UPDATE_USER,
} from "../actions/typeAction";

const initialState = {
  id: "",
  username: "",
  name: "",
  img: "",
  authorization: false,
  follows: [],
};

export function reducerAuth(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        name: action.payload.name,
        bio: action.payload.bio,
        img: action.payload.img,
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
    case SET_AUTH:
      return {
        ...state,
        authorization: action.payload,
      };
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case SET_AUTH_DATA:
      return {
        ...state,
        username: action.payload.username,
        name: action.payload.name,
        img: action.payload.img,
        follows: action.payload.follows,
      };
    default:
      return state;
  }
}

export default reducerAuth;
