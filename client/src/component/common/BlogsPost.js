import React, { memo } from "react";
import Slider from "react-slick";
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const BlogsPost = () => {
  return (
    <div className="flex flex-col w-full gap-[10px] mb-[30px] font-[Poppins]">
      <header className="border-b-2 border-solid border-[#ee3131] text-[20px]">
        <h2 className="uppercase py-[15px] font-semibold">Blog posts</h2>
      </header>
      <div className="mx-[-10px]">
        <Slider {...settings}>
          <div className="text-center px-[10px] py-[10px]">
            <img
              src="https://digital-world-2.myshopify.com/cdn/shop/articles/blog1.jpg?v=1492594896"
              alt="Blog Post 1"
              className="w-full h-auto mb-5"
            />
            <h3 className="text-base uppercase font-semibold mb-[15px]">
              Apple's new TV app goes live with unified search
            </h3>
            <p className="text-[13px] opacity-70">
              An update to Apple's iOS mobile software also brings hundreds of
              new emojis to your iPhone and iPad -- and keeps that beloved
              butt-looking peach....
            </p>
          </div>
          <div className="text-center px-[10px] py-[10px]">
            <img
              src="https://digital-world-2.myshopify.com/cdn/shop/articles/Photoroom_20250620_91904_CH.png?v=1750843029"
              alt="Blog Post 1"
              className="w-full h-auto mb-5"
            />
            <h3 className="text-base uppercase font-semibold mb-[15px]">
              Apple's new TV app goes live with unified search
            </h3>
            <p className="text-[13px] opacity-70">
              An update to Apple's iOS mobile software also brings hundreds of
              new emojis to your iPhone and iPad -- and keeps that beloved
              butt-looking peach....
            </p>
          </div>
          <div className="text-center px-[10px] py-[10px]">
            <img
              src="https://digital-world-2.myshopify.com/cdn/shop/articles/Photoroom_20250620_92041_CH_1.png?v=1750843003"
              alt="Blog Post 1"
              className="w-full h-auto mb-5"
            />
            <h3 className="text-base uppercase font-semibold mb-[15px]">
              Apple's new TV app goes live with unified search
            </h3>
            <p className="text-[13px] opacity-70">
              An update to Apple's iOS mobile software also brings hundreds of
              new emojis to your iPhone and iPad -- and keeps that beloved
              butt-looking peach....
            </p>
          </div>
          <div className="text-center px-[10px] py-[10px]">
            <img
              src="https://digital-world-2.myshopify.com/cdn/shop/articles/Photoroom_20250620_91935_CH_1.png?v=1750842719"
              alt="Blog Post 1"
              className="w-full h-auto mb-5"
            />
            <h3 className="text-base uppercase font-semibold mb-[15px]">
              Apple's new TV app goes live with unified search
            </h3>
            <p className="text-[13px] opacity-70">
              An update to Apple's iOS mobile software also brings hundreds of
              new emojis to your iPhone and iPad -- and keeps that beloved
              butt-looking peach....
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default memo(BlogsPost);
