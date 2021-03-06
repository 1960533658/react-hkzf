/* 租房小组组件 */
import React from "react";
// 引入样式
import "./HomeGroup.scss"

import { FC } from "react";
import { Flex,Grid } from "antd-mobile"

import { useEffect } from "react";
import { useState } from "react";

import { httpGet } from "../../utils/axios/http";
import { HomeAPI } from "../../API";
import { baseURL } from "../../utils/axios/axios";


//#region  租房小组数据类型推断
interface GroupType {
  id: number,
  imgSrc: string
  title: string,
  desc: string
}
//#endregion

const HomeGroup: FC<any> = () => {
  // 定义变量接收租房小组数据
  const [GroupData, setGroupData] = useState<GroupType[]>([])
  // 页面初始化加载时接收数据
  useEffect(() => {
    getGroupDate()
  }, [])
  // 定义接收租房小组数据的方法
  async function getGroupDate() {
    const response = await httpGet(HomeAPI.group, { area: "AREA%7C88cff55c-aaa4-e2e0"})
    if (response.status===200) {
      setGroupData(response.body)
    }
  }
  return (
    <div className="group">
      <Flex className="group-title" justify="between">
        <h3>租房小组</h3>
        <span>更多</span>
      </Flex>
      <Grid
        className="group-content"
        square={false}
        hasLine={false}
        columnNum={2}
        data={GroupData}
        renderItem={(item => (
          <Flex className="group-content-item" key={item!.id} justify="between">
            <div className="group-content-font">
              <h3>{item!.title}</h3>
              <span>{item!.desc}</span>
            </div>
            <div className="group-content-img">
              <img src={baseURL + item!.imgSrc} alt="图片加载失败" />
            </div>
          </Flex>
        ))}
      ></Grid>
    </div>
  )
}
export default HomeGroup;