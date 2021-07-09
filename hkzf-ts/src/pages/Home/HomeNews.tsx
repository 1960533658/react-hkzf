import React, { FC } from "react"
import { useState } from "react";
import { useEffect } from "react";
import { HomeAPI } from "../../API";
import { baseURL } from "../../utils/axios/axios";
import { httpGet } from "../../utils/axios/http";
import "./HomeNews.scss"
//#region  news数据类型
interface HomeNewsType {
  id: number,
  from: string,
  date: string,
  title: string,
  imgSrc: string
}
//#endregion
const HomeNews: FC<any> = () => {
  const [HomeNewsData, setHomeNewsData] = useState<HomeNewsType[]>([])
  useEffect(() => {
    getNews()
  }, [])
  async function getNews() {
    const response = await httpGet(HomeAPI.news, { area: "AREA%7C88cff55c-aaa4-e2e0" })
    if (response.status === 200) setHomeNewsData(response.body);
  }
  return (
    <div className="homenews">
      <h3>最新资讯</h3>
      {HomeNewsData.map(item => (
        <div key={item!.id} className="news-item">
          <img src={baseURL + item!.imgSrc} alt="" className="new-item img" />
          <div className="new-item-content">
            <p className="new-item-content-title">{item!.title}</p>
            <div className="new-item-content-tips">
              <span>{item.from}</span>
              <span>{item.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default HomeNews;