// 引入好客租房字体图标样式
import "./assets/fonts/iconfont.css"

import React, { FC, useEffect,  useState } from 'react'
import { TabBar } from 'antd-mobile'
import { renderRoutes, RouteConfig } from "react-router-config"
import './App.css'

//#region  TabBar数据类型定义
interface TabBarType {
  // 标题说明
  title: string,
  // key和路由
  key: string
  // 字体图标标签
  icon: any
}
//#endregion

const TabBarList: Array<TabBarType> = [
  { title: "首页", key: "/home", icon: <i className="iconfont icon-ind"></i> },
  { title: "找房", key: "/findhouse", icon: <i className="iconfont icon-findHouse"></i> },
  { title: "资讯", key: "/news", icon: <i className="iconfont icon-infom"></i> },
  { title: "我的", key: "/my", icon: <i className="iconfont icon-my"></i> }
]

const App: FC<RouteConfig> = (props) => {

  //#region  页面加载时重新设置当前路径地址 当页面为/时，不会重定向页面之后不会重新给selectTab为Home
  useEffect(() => {
    let pathName = props.location!.pathname
    setSelectTab(pathName)
  }, [props.location?.pathname])
  //#endregion

  //#region  声明useState 实时获取当前patchName
  const [selectedTab, setSelectTab] = useState(props.location!.pathname)
  // console.log(selectedTab);
  //#endregion


  //#region TabBar隐藏  

  // 声明useState 确定是否使tabBar隐藏
  const [isShowTabBar, setIsShowTabBar] = useState(false)
  // 定义需要让tabBar显示的路由数据
  const showPathName: Array<string> = ["/home", "/findhouse", "/news", "/my"]
  useEffect(() => {
    // 判断路由是否需要隐藏
    if (showPathName.includes(props.location!.pathname)) {
      setIsShowTabBar(false)
    } else {
      setIsShowTabBar(true)
    }
  },[props.location!.pathname])
  //#endregion

  return (
    <div className="App">
      {/* <div>{selectedTab}</div> */}
      {renderRoutes(props.route.routes)}
      <div className="tab-bar">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={isShowTabBar}
        >
          {TabBarList.map((item) => (
            <TabBar.Item
              title={item.title}
              key={item.key}
              icon={item.icon}
              selectedIcon={item.icon}
              selected={selectedTab === item.key}
              onPress={() => {
                // 当点击TabBar手动路由跳转
                props.history.push(item.key)
                // 设置选中的值
                setSelectTab(item.key)
              }}
            >
            </TabBar.Item>
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default App
