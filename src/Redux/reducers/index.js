import { combineReducers } from "redux";
import reducerPerfil from "./Perfil";
import reducerAuth from "./Auth";
import reducerHome from "./Home";
import reducerPost from "./Post";
import reducerExplorer from "./Explorer";

const reducers = combineReducers({
  perfil: reducerPerfil,
  home: reducerHome,
  auth: reducerAuth,
  post: reducerPost,
  explorer: reducerExplorer,
});

export default reducers;
