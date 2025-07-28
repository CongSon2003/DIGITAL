import React, { memo, useEffect, useState } from "react";
import { ItemHotCollection } from "./";
import { useSelector } from "react-redux";
import Masonry from "react-masonry-css";
const HotCollections = () => {
  const [categories, setCategories] = useState([]);
  const app = useSelector((state) => state.appReducer);
  const shouldFilterOut = (item) => {
    const nameToExclude = ["Speaker", "Camera"];
    return nameToExclude.includes(item);
  };
  useEffect(() => {
    if (app.categories) {
      const getCategories = app.categories.filter(
        (item) => !shouldFilterOut(item.title)
      );
      setCategories(getCategories);
    }
  }, [app.categories]);
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
  };
  return (
    <div className="flex flex-col w-full gap-5 font-[Poppins]">
      <header className="border-b-2 border-solid border-[#ee3131] text-[20px]">
        <h2 className="uppercase pb-[15px] font-semibold">Hot Collections</h2>
      </header>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {categories?.map((child, index) => {
          return <ItemHotCollection index={index} key={index} data={child} />;
        })}
      </Masonry>
    </div>
  );
};

export default memo(HotCollections);
