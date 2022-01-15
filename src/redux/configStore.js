import { createStore, combineReducers, applyMiddleware } from "redux";
import todos from "./modules/todos.js";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ todos });

const middleware = (store) => (next) => (action) => {
  console.log(store);
  console.log(next);
  console.log(action);
  if (window.confirm("Are you sure?")) {
    next(action);
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(middleware))
);

export default store;
