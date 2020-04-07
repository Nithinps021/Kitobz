import { combineReducers, applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import dataReducer from "./reducer/dataReducer";
import userReducer from "./reducer/userReducer";
import uiReducer from "./reducer/uiReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  ui: uiReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;