import {
  SET_USER,
  SET_FOLLOW,
  SET_UNFOLLOW,
  LOGOUT,
  UPDATE_PROFILE,
  UPDATE_SEGUIDORES
} from "../actions/typeAction";

const initialState = {
  follows: [],
  posts: []
};

export default function reducerUser(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      const userLogged = action.payload.user;
      return {
        ...userLogged
      };
    case SET_UNFOLLOW:
      let index = state.follows.findIndex(
        follow => follow.follow._id === action.payload.idFollow
      );
      if (index !== -1) {
        state.follows.splice(index);
        return (state = {
          ...state,
          numSeguiendo: state.numSeguiendo - 1
        });
      } else {
        return {
          ...state
        };
      }

    case SET_FOLLOW:
      return {
        ...state,
        follows: [...state.follows, { ...action.payload.follow }]
      };
    case UPDATE_PROFILE:
      let data = {};
      action.payload.user.name && (data.name = action.payload.user.name);
      action.payload.user.lastname &&
        (data.lastname = action.payload.user.lastname);
      action.payload.user.bio && (data.bio = action.payload.user.bio);
      action.payload.user.img && (data.img = action.payload.user.img);
      console.log(data);
      return {
        ...state,
        ...data
      };
    case LOGOUT:
      return initialState;


    case UPDATE_SEGUIDORES:
      if (action.payload.aumentar) {
        const newFollow = {
          follow: {
            img: action.payload.user.img,
            userName: action.payload.user.userName,
            _id: action.payload.user._id
          }
        }
        return {
          ...state,
          numSeguidores: state.numSeguidores + 1,
          follows: [...state.follows, newFollow]
        };
      } else {

        return {
          ...state,
          numSeguidores: state.numSeguidores - 1,
          follows: state.follows.filter((fo) => {
            return fo.follow._id !== action.payload.user._id
          })
        };
      }


    default:
      return state;
  }
}
