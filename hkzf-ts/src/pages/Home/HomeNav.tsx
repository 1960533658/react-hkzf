import React, { FC } from "react";
import { Flex } from "antd-mobile"

// 导入scss样式文件
import "./HomeNav.scss"

//#region  导入本地导航栏图片
import nav1 from "../../assets/images/nav-1.png"
import nav2 from "../../assets/images/nav-2.png"
import nav3 from "../../assets/images/nav-3.png"
import nav4 from "../../assets/images/nav-4.png"
//#endregion

//#region  导航栏数据类型推断
interface NavType {
  imgSrc: string,
  title: string,
  path: string,
}
//#endregion

//#region  Nav数据（因为导航栏数据是不变的，所以数据资源保存在本地即可
const NavData: NavType[] = [
  { imgSrc: nav1, title: "整租", path: "/findhouse" },
  { imgSrc: nav2,title:"合租",path: "/findhouse"},
  { imgSrc: nav3,title:"地图找房",path: "/findhouse"},
  { imgSrc: nav4, title: "去出租", path: "/findhouse" }
]
//#endregion

const HomeNav: FC<any> = () => {
  return (
      <Flex className="nav" justify="between">
        {NavData.map(item => (
          <Flex.Item key={item.title}>
            <img src={item.imgSrc} alt="图片加载失败" />
            <p>{item.title}</p>
          </Flex.Item>
        ))}
      </Flex>
  )
}
export default HomeNav;