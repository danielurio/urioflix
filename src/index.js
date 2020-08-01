import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterVideo from "./pages/register/Video";
import RegisterCategory from "./pages/register/Category";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/register/video" component={RegisterVideo} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route path="/" component={Home} exact />
      <Route component={() => <div>Error 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
