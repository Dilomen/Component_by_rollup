import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter, Redirect, Link } from "react-router-dom";
import "./index.scss";
import { ConfigProvider } from "cps";
import Button from "./ButtonShow";
import Icon from "./IconShow";
import Modal from "./ModalShow";
const routers = [
  { name: "Button", path: "/button", component: Button },
  // { name: "Icon", path: "/icon", component: Icon },
  { name: "Modal", path: "/modal", component: Modal },
];

const App = () => (
  <BrowserRouter>
    <nav className="serein-nav">
    <div className="serein-scroll">
      {routers.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
      </div>
    </nav>
    <div className="serein-container">
      <div className="serein-scroll">
        <ConfigProvider>
          <Switch>
            {routers.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              ></Route>
            ))}
            <Redirect to="/form"></Redirect>
          </Switch>
        </ConfigProvider>
      </div>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App></App>, document.getElementById("root"));
