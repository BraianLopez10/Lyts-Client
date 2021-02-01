import { SET_EXPLORER } from "../actions/typeAction";
const initialState = {
  posts: [],
  users: [],
  search: [],
};
export function reducerExplorer(state = initialState, action) {
  switch (action.type) {
    case SET_EXPLORER:
      return {
        ...state,
        posts: action.payload.posts,
        users: action.payload.users,
      };

    default:
      return {
        ...state,
      };
  }
}
export default reducerExplorer;
