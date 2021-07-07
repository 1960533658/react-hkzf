/* Home中的Swiper组件 */
import React, { FC, useEffect, useState } from "react"
import { HomeAPI } from "../../API"
import { httpGet } from "../../utils/axios/http"
import { Carousel } from "antd-mobile"
import { baseURL } from "../../utils/axios/axios"
//#region  定义轮播图的数据类型
interface SwiperType {
  alt: string,
  id: number,
  imgSrc: string
}
//#endregion

const HomeSwiper = () => {
  // 定义轮播图数据，声明类型
  const [SwiperData, setSwiperData] = useState<SwiperType[]>([])
  // 定义数据用以判断轮播图数据书否已经成功获取并赋值
  const [hasSwiperData, setHasSwiperData] = useState<boolean>(false)
  // 页面初始化获取轮播图数据
  useEffect(() => {
    getSwiperData()
  }, [])
  // 定义轮播图数据获取方法
  function getSwiperData() {
    httpGet(HomeAPI.swiper).then(response => {
      // 把获取到的数据赋值
      setSwiperData(response.body)
      // 修改值为true说明已经成功赋值
      setHasSwiperData(true)
      console.log(hasSwiperData);
    })
  }
  return (
    <div className="swiper">
      {/* antd-mobile组件初始化之后再添加顺序，会导致轮播图无法自动轮播 */}
      {/* 所以当数据未获取的时候不能渲染轮播图组件 */}

      {!hasSwiperData ? ("") :
        (<Carousel
          autoplay={true}
          infinite
          autoplayInterval={2000}
        >
          {SwiperData.map(item => (
            <img
              key={item.id}
              src={`${baseURL}${item.imgSrc}`}
              alt={item.alt}
              onLoad={() => {
                window.dispatchEvent(new Event("resize"))
              }}
            />
          ))}
        </Carousel>)}
    </div>
  )
}
export default HomeSwiper