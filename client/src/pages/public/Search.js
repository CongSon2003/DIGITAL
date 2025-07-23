/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import withBase from "HOCS/withBase";
import Masonry from "react-masonry-css";
import { ItemProduct } from "component/products";
import { apigetProducts } from "apis";
const Search = ({ navigate }) => {
  const [searchParams] = useSearchParams();
  const [valueSearch, setValueSearch] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const fetApiGetProducts = async (queries) => {
    const result = await apigetProducts(queries);
    if (result.success) { 
      setCurrentItems(result.response);
    }
  };
  useEffect(() => {
    const queryValue = searchParams.get("q");
    if (queryValue) {
      fetApiGetProducts({ title: queryValue});
      setValueSearch(queryValue);
    }
  }, [searchParams]);
  const handleSearch = () => {
    navigate({
      pathname: "/search",
      search: createSearchParams({ q: valueSearch }).toString(),
    });
  };
  return (
    <div className="w-full">
      <div className="w-full bg-white flex justify-center">
        <div className="w-main flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="w-full text-center">
              <h1 className="text-2xl font-medium mb-[50px] text-[#505050] p-5">{`Your search for "${valueSearch}" revealed the following:`}</h1>
              <div className="flex items-center justify-center mb-[45px]">
                <input
                  type="text"
                  value={valueSearch}
                  onChange={(e) => setValueSearch(e.target.value)}
                  className="h-[45px] w-1/4 bg-[#f6f6f6] px-[8px] py-[10px]"
                  placeholder="Search something"
                />
                <button
                  onClick={handleSearch}
                  className="bg-main hover:bg-[#333333] cursor-pointer text-white w-[45px] h-[45px] flex justify-center items-center"
                >
                  <IoSearchSharp size={20} />
                </button>
              </div>
            </div>
            <div>
              <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {currentItems?.map((element) => (
                  <ItemProduct
                    isNew={false}
                    key={element?._id}
                    itemProductData={element}
                    normal={true}
                  />
                ))}
              </Masonry>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withBase(Search);
