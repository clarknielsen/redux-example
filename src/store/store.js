// use redux to create a new store, passing in our reducer
import { createStore } from "redux";
import reducers from "./reducers.js";
export default createStore(reducers);