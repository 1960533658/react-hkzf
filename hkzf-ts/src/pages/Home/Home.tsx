import React, { FC } from "react";
import HomeSwiper from "./HomeSwiper"; 
import HomeGroup from "./HomeGroup";
const Home: FC<any> = () => {
  return (
    <div className="Home">
      <h1>Home组件</h1>
      <HomeSwiper></HomeSwiper>
      <HomeGroup></HomeGroup>
    </div>
  )
}

export default Home;