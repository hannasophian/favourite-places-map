import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <head>
      <link href="css/style.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Permanent+Marker&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap" rel="stylesheet" />


    </head>
    <body>
      <App />
    </body>
  </React.StrictMode>,
  document.getElementById("root")
);
