
import React from "react";
import { RouteConfig } from "react-router-config";
import { Redirect } from "react-router-dom";
//#region  组件的导入
import App from "../App";
import FindHouse from "../pages/FindHoust/FindHoust";
import Home from "../pages/Home/Home";
import My from "../pages/My/My";
import News from "../pages/News/News";
//#endregion

const routes: RouteConfig[] = [
  {path: "/", component: App, routes: [
    { path: "/", exact: true, render: () => <Redirect to={"/home"} /> },
    { path: "/home", component: Home },
    { path: "/findhouse", component:  FindHouse},
    { path: "/news", component: News },
    { path: "/my", component: My },
  ]}
]
export default routes;