import React, { memo, useEffect, useState } from "react";
import { CardProduct } from "../products";
import { apigetProducts } from "../../apis";
import Masonry from "react-masonry-css";
const FeatureProducts = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const result = await apigetProducts({ sort: "-totalRatings", limit: 9 });
    if (result?.success) setProducts(result.response);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // mx-[-10px]
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="flex flex-col w-full gap-5 font-[Poppins]">
      <header className="border-b-2 border-solid border-[#ee3131] text-[20px]">
        <h2 className="uppercase pb-[15px] font-semibold">Featured Products</h2>
      </header>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {products?.map((product) => (
          <CardProduct key={product?._id} data={product} />
        ))}
      </Masonry>
    </div>
  );
};

export default memo(FeatureProducts);
