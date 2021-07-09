import React, { FC } from "react";
// 轮播图组件
import HomeSwiper from "./HomeSwiper"; 
// 导航栏组件
import HomeNav from "./HomeNav";
// 首页导航组件
import HomeGroup from "./HomeGroup";
// 资讯组件
import HomeNews from "./HomeNews";
const Home: FC<any> = () => {
  return (
    <div className="Home">
      <HomeSwiper></HomeSwiper>
      {/* 首页导航 */}
      <HomeNav></HomeNav>
      {/* 租房小组 */}
      <HomeGroup></HomeGroup>
      {/* 资讯 */}
      <HomeNews></HomeNews>
    </div>
  )
}

export default Home;