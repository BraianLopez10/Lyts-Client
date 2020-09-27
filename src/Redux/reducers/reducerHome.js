import {
  GET_ALL_POSTS,
  LIKE_POST,
  DISLIKE_POST,
  ADD_COMMENT,
} from "../actions/typeAction";

const initialState = {
  allPost: [],
  notications: [],
};

export default function reducerHome(state = initialState, action) {
  let index;
  switch (action.type) {
    case LIKE_POST:
      index = state.allPost.findIndex((p) => p._id === action.payload.idPost);
      if (index !== -1) {
        let postUpdated = { ...state.allPost[index] };
        postUpdated.isLike = true;
        postUpdated.numLikes++;
        state.allPost[index] = postUpdated;
      }
      return {
        ...state,
      };
    case DISLIKE_POST:
      index = state.allPost.findIndex((p) => p._id === action.payload.idPost);
      if (index !== -1) {
        let postUpdated = { ...state.allPost[index] };
        postUpdated.isLike = false;
        postUpdated.numLikes--;
        state.allPost[index] = postUpdated;
      }
      return {
        ...state,
      };
    case ADD_COMMENT:
      index = state.allPost.findIndex((p) => p._id === action.payload.idPost);
      if (index !== -1) {
        let postUpdated = { ...state.allPost[index] };
        postUpdated.numComentarios++;
        postUpdated.comments = [
          action.payload.comment,
          ...postUpdated.comments,
        ];
        state.allPost[index] = postUpdated;
      }
      return {
        ...state,
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        allPost: action.payload.allPosts,
      };

    default:
      return state;
  }
}
