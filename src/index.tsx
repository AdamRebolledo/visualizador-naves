import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store.js";
import { updateStartship } from "./redux/actions/startships_actions";

console.log("initial state: ", store.getState());

let unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(updateStartship({ nave: "type 1" }));
store.dispatch(updateStartship({ nave: "type 2" }));

unsubscribe();

ReactDOM.render(
 <React.StrictMode>
  <App />
 </React.StrictMode>,
 document.getElementById("root")
);

reportWebVitals();
