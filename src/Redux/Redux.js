import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";

const initialiState = {};

let store;
if (process.env.NODE_ENV === "development") {
  try {
    store = createStore(
      reducers,
      initialiState,
      compose(
        applyMiddleware(ReduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
      )
    );
  } catch {
    store = createStore(
      reducers,
      initialiState,
      compose(applyMiddleware(ReduxThunk))
    );
  }
} else {
  store = createStore(
    reducers,
    initialiState,
    compose(applyMiddleware(ReduxThunk))
  );
}

export default store;
