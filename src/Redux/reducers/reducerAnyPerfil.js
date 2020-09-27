import {
  LIKE_POST,
  DISLIKE_POST,
  ADD_COMMENT,
  GET_POST,
  UPDATE_SEGUIDORES,
  SET_USER_DATA,
} from "../actions/typeAction";

const initialState = { post: {}, user: {} };

export default function reducerAnyPerfil(state = initialState, action) {
  switch (action.type) {
    case LIKE_POST:
      // let newState = Object.assign({}, state);

      // newState.post.numLikes++;
      // newState.post.isLike=true;

      if (Object.keys(state.post).length > 0) {
        if (state.post._id === action.payload.idPost) {
          let postUpdate = { ...state.post };
          postUpdate.numLikes++;
          postUpdate.isLike = true;
          state.post = postUpdate;
        }
      }
      return {
        ...state,
      };
    case DISLIKE_POST:
      //Actualiza el datos del post de detalle

      if (Object.keys(state.post).length > 0) {
        if (state.post._id === action.payload.idPost) {
          let postUpdate = { ...state.post };
          postUpdate.numLikes--;
          postUpdate.isLike = false;
          state.post = postUpdate;
        }
      }
      return {
        ...state,
      };
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload.user,
      };

    case ADD_COMMENT:
      //Actualiza el datos del post de detalle
      if (Object.keys(state.post).length > 0) {
        if (state.post._id === action.payload.idPost) {
          let postUpdate = { ...state.post };
          postUpdate.comments.unshift(action.payload.comment);
          postUpdate.numComentarios++;
          state.post = postUpdate;
        }
      }
      return {
        ...state,
      };

    case GET_POST:
      return {
        ...state,
        post: action.payload.post[0],
      };
    case UPDATE_SEGUIDORES:
      if (action.payload.aumentar) {
        return {
          ...state,
          user: {
            ...state.user,
            numSeguidores: state.user.numSeguidores + 1,
          },
        };
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            numSeguidores: state.user.numSeguidores - 1,
          },
        };
      }
    default:
      return state;
  }
}
