/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import withBase from "HOCS/withBase";
import Masonry from "react-masonry-css";
import { ItemProduct } from "component/products";
import { apigetProducts } from "apis";
import ReactPaginate from "react-paginate";
const Search = ({ navigate }) => {
  const [searchParams] = useSearchParams();
  const [valueSearch, setValueSearch] = useState("");
  const [valueInputSearch, setValueInputSearch] = useState("");
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [numberSearches, setNumberSearches] = useState(0);
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(endOffset);
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = currentProduct.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(numberSearches / itemsPerPage);
  const fetApiGetProducts = async (queries) => {
    const result = await apigetProducts(queries);
    if (result.success) {
      setCurrentProduct(result.response);
      setNumberSearches(result.NumberSearches);
    }
  };
  console.log(numberSearches);
  useEffect(() => {
    const queryQ = searchParams.get("q");
    const queryPage = searchParams.get("page") || 0;
    if (queryQ || queryPage) {
      fetApiGetProducts({ title: queryQ, page : queryPage });
      setValueSearch(queryQ);
      setValueInputSearch(queryQ);
    }
    if (queryPage) {
      setCurrentPage(queryPage - 1)
    }
  }, [searchParams]);
  const handleSearch = (event) => {
    navigate({
      pathname: "/search",
      search: createSearchParams({ q: valueInputSearch }).toString(),
    });
    setValueSearch(valueInputSearch)
  };
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % currentProduct.length;
    const page = event.selected + 1;
    console.log(newOffset);
    console.log(event.selected);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    navigate({
      pathname: "/search",
      search: createSearchParams({ q: valueSearch, page }).toString(),
    });
  };
  const handleSearchPressEnter = (event) => {
    if (event.key === 'Enter' && valueInputSearch.length > 0) {
      navigate({
      pathname: "/search",
      search: createSearchParams({ q: valueInputSearch }).toString(),
    });
    setValueSearch(valueInputSearch)
    }
  }
  console.log(pageCount);
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
                  value={valueInputSearch}
                  onChange={(e) => setValueInputSearch(e.target.value)}
                  className="h-[45px] w-1/4 bg-[#f6f6f6] px-[8px] py-[10px]"
                  placeholder="Search something"
                  onKeyDown={handleSearchPressEnter}
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
            <div className="w-full flex justify-center mt-10 mb-2">
              <div className="w-main flex justify-center">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  className="flex items-center gap-3"
                  pageClassName=""
                  pageLinkClassName="w-full h-full py-[8px] px-[14px] border rounded hover:bg-gray-200 hover:text-black"
                  previousLinkClassName= "w-full py-[6px] px-[12px] rounded inline-block rounded"
                  nextClassName="bg-gray-200 rounded"
                  previousClassName="bg-gray-200 rounded border"
                  nextLinkClassName = "w-full py-[6px] px-[12px] rounded inline-block rounded border"
                  activeClassName=""
                  activeLinkClassName="border-none bg-main text-white rounded hover:bg-main hover:text-white"
                  pageCount={pageCount}
                  forcePage={currentPage}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withBase(Search);
