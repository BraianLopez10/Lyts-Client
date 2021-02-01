import {
  ADD_COMMENT,
  ADD_FOLLOW,
  DELETE_FOLLOW,
  DISLIKE,
  LIKE,
  SET_FEED,
} from "../actions/typeAction";

const initialState = {
  follows: [],
  postsFollow: [],
  toFollow: [],
  postUser: [],
};

export default function reducerHome(state = initialState, action) {
  let updatePost;
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        postsFollow: [
          ...state.postsFollow.map((p) => {
            if (p._id === action.payload.idPost) {
              p.comments.unshift(action.payload.comment);
            }
            return p;
          }),
        ],
      };
    case LIKE:
      return {
        ...state,
        postsFollow: [
          ...state.postsFollow.map((p) => {
            if (p._id === action.payload.idPost) {
              p.isLike = true;
              p.likes.push(action.payload.idUser);
            }
            return p;
          }),
        ],
      };
    case DISLIKE:
      updatePost = state.postsFollow.map((p) => {
        if (p._id === action.payload.idPost) {
          p.isLike = false;
          p.likes = p.likes.filter((l) => l !== action.payload.idUser);
        }
        return p;
      });
      return {
        ...state,
        postsFollow: updatePost,
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
      return {
        ...state,
      };
  }
}
