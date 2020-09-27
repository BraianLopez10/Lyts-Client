import { SET_ID_LOGGED } from "../actions/typeAction";

const initialState = {
  idUserLogged: null,
};

export default function reducerGlobal(state = initialState, action) {
  switch (action.type) {
    case SET_ID_LOGGED:
      return {
        ...state,
        idUserLogged: action.payload.id,
      };
    default:
      return state;
  }
}
