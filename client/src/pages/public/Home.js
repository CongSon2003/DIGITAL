import React from "react";
import {
  GalleryAdvanced,
} from "../../component/public";
import { Bestseller } from '../../component/products'
import { Banner, BlogsPost, BrandsSlider } from '../../component/common'
import { DailyDeals, NewArrivals, HotCollections, FeatureProducts } from '../../component/public'
import { Sidebar } from '../../component/sideBar'
const Home = () => {
  return (
    <div className="flex flex-col gap-5 justify-center w-full items-center font-[Poppins]">
      <div className="flex flex-col justify-center gap-5">
        <div className="gap-5 md:flex flex-col hidden w-main">
          <div className="flex gap-5">
            <div className="w-[34%]">
              <Sidebar />
            </div>
            <Banner />
          </div>
          <div className="flex gap-5">
            <div className="w-[25%]">
              <DailyDeals/>
            </div>
            <div className="w-[73%]">
              <Bestseller />
            </div>
          </div>
        </div>
        <div className="max-md:flex flex-col hidden items-center">
          <div className="w-[97vw] mb-[20px] pl-5 pr-4">
            <Banner />
          </div>
          <div className="flex pl-5 pr-4 mb-5">
            <DailyDeals />
          </div>
          <Bestseller isResponsive= {true}/>
        </div>
        <div className="flex flex-col gap-5 w-main max-lg:w-[97vw] px-5">
          <FeatureProducts />
          <GalleryAdvanced />
          <NewArrivals />
          <HotCollections />
          <BlogsPost />
          <BrandsSlider/>
        </div>
      </div>
    </div>
  );
};

export default Home;
