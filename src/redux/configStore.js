import { createStore, combineReducers, applyMiddleware } from "redux";
import todos from "./modules/todos.js";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ todos });

const middleware = (store) => (next) => (action) => {
  if (action.type === "DELETE_TODO") {
    if (window.confirm("Are you sure?")) {
      next(action);
    }
  } else {
    next(action);
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middleware))
);

export default store;
