import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";


const middleware = [thunk];
function saveToLocalStore(state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch (error) {
      console.log(error);
    }
  }

  function loadFromLocalStore() {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
export default store;
