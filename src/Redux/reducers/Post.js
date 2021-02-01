import { ADD_COMMENT, SET_POST } from "../actions/typeAction";

const initialState = {
  likes: [],
  _id: "",
  user: {
    img: "",
    _id: "",
    username: "",
  },
  caption: "linux",
  img: "",
  comments: [],
  createdAt: "",
  updatedAt: "",
  isLike: false,
  id: "",
};

function ReducerPost(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT: {
      return {
        ...state,
        comments: [...state.comments, action.payload.comment],
      };
    }
    case SET_POST:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default ReducerPost;
