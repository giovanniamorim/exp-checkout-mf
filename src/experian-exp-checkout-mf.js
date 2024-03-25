import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Checkout from "./Checkout";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Checkout,
});

export const { bootstrap, mount, unmount } = lifecycles;
