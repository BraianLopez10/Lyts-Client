import {
  SET_PERFIL,
  ADD_FOLLOW,
  DELETE_FOLLOW,
  UPDATE_USER,
} from "../actions/typeAction";

const initialState = {
  googleId: "",
  img: "",
  follows: [],
  bio: "",
  _id: "",
  name: "",
  email: "",
  username: "",
  createdAt: "",
  updatedAt: "2021-01-28T03:43:22.263Z",
  posts: [],
};

export default function reducerAnyPerfil(state = initialState, action) {
  switch (action.type) {
    case ADD_FOLLOW:
      return {
        ...state,
        follows: [...state.follows, action.payload],
      };
    case UPDATE_USER:
      return {
        ...state,
        name: action.payload.name,
        bio: action.payload.bio,
        img: action.payload.img,
      };
    case DELETE_FOLLOW:
      return {
        ...state,
        follows: [...state.follows.filter((f) => f._id !== action.payload)],
      };
    case SET_PERFIL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
