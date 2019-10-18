import React from "react";
import { render } from "react-dom";

render(
  <h1>Hola, mundo!</h1>,
  document.querySelector("#root")
);

if (module.hot) {
  module.hot.accept();
}