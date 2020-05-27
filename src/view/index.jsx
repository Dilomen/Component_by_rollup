import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, HashRouter, Redirect, Link } from "react-router-dom";
import "./index.scss";
import { ConfigProvider } from "cps";
import Start from './Start'
import Button from "./ButtonShow";
import Icon from "./IconShow";
import Modal from "./ModalShow";
import Notification from "./NotificationShow";
import DragList from './DragListShow'
import previewImage from './previewImageShow'
const routers = [
  { name: "开始使用", path: "/start", component: Start },
  { name: "Button", path: "/button", component: Button },
  { name: "Icon", path: "/icon", component: Icon },
  { name: "Modal", path: "/modal", component: Modal },
  // {name: "Notification", path: "/notification", component: Notification},
  { name: "DragList", path: "/dragList", component: DragList },
  { name: "previewImage", path: "/previewImage", component: previewImage },
];

const App = () => (
  <HashRouter>
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
            <Redirect to="/start"></Redirect>
          </Switch>
        </ConfigProvider>
        <div className="serein-footer">
          <li>欢迎一起学习交流！！！</li>
          <li>我的博客：<a target="__blank" href="https://www.dilomen.top">https://www.dilomen.top</a></li>
          <li>CSDN：<a target="__blank" href="https://blog.csdn.net/Dilomen">https://blog.csdn.net/Dilomen</a></li>
          <li>Github：<a target="__blank" href="https://github.com/Dilomen">https://github.com/Dilomen</a></li>
        </div>
      </div>
    </div>
  </HashRouter>
);

ReactDOM.render(<App></App>, document.getElementById("root"));
