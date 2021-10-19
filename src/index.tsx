import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";
import showErrorMessage from "./lib/notify";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <SWRConfig
    value={{
      onError: error => {
        if (error) {
          console.log('new errorr');
          showErrorMessage(`Error: ${error.message}`);
        }
      },
      shouldRetryOnError: false
    }}
  >
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </SWRConfig>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
