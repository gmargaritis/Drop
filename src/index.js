import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  rootElement
);
