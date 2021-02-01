import { combineReducers } from "redux";
import reducerPerfil from "./Perfil";
import reducerAuth from "./Auth";
import reducerHome from "./Home";
import reducerPost from "./Post";

const reducers = combineReducers({
  perfil: reducerPerfil,
  home: reducerHome,
  auth: reducerAuth,
  post: reducerPost,
});

export default reducers;
