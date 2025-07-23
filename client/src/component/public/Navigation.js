import React, { memo, useEffect, useState } from "react";
import { navigation } from "../../ultils/contant";
import { createSearchParams, Link, NavLink, useSearchParams } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import withBase from "HOCS/withBase";
const Navigation = ({navigate}) => {
  const [isHover, setIsHover] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const [searchParams] = useSearchParams();
  // const
  const handleHover = (id, on) => {
    if (on === "Move" && id === 3) {
      setIsHover(true);
    }
    if (on === "Leave" && id === 3) {
      setIsHover(false);
    }
  };
  const handleSearch = (event) => {
    if (event.key === "Enter" && valueSearch.length > 0) {
      // Xử lý sự kiện nhấn Enter
      navigate({
        pathname : '/search',
        search : createSearchParams({q : valueSearch}).toString()
      })
      // Bạn có thể gọi hàm đăng nhập hoặc thực hiện hành động khác ở đây
    }
  };
  useEffect(() => {
    const queryValue = searchParams.get('q');
    if (queryValue) { 
      setValueSearch(queryValue)
    } else { 
      setValueSearch('')
    }
  }, [searchParams])
  return (
    <div className="w-full flex justify-center font-[Poppins]">
      <div className="flex items-center justify-between w-main py-2 border-y">
        <div className="flex items-center gap-4 w-[80%]">
          {navigation.map((item) => {
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={
                  "relative pr-[30px] flex items-center gap-1 hover:text-main text-[#1D1D1D] font-[Poppins] text-sm"
                }
              >
                <div
                  onMouseMove={() => handleHover(item.id, "Move")}
                  onMouseLeave={() => handleHover(item.id, "Leave")}
                  className="flex items-center gap-1 py-1"
                >
                  <span>{item.value}</span>
                  {item.id !== 1 && <FaCaretDown />}
                </div>
                {item.id === 3 && isHover && (
                  <div
                    onMouseMove={() => handleHover(item.id, "Move")}
                    onMouseLeave={() => handleHover(item.id, "Leave")}
                    className="absolute bg-white z-50 shadow-2xl border hover:text-black text-black left-0 right-0 top-[29px] min-w-[230px] py-[30px] px-[10px]"
                  >
                    <ul className="flex flex-col gap-[10px] font-normal text-sm">
                      {item.type === "parent" &&
                        item.submenu.map((el) => (
                          <li className="px-5">
                            <Link
                              to={el.path}
                              onClick={() => setIsHover(false)}
                              className="hover:text-main text-[#505050]"
                            >
                              {el.text}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                {item.id === 4 && isHover && (
                  <div
                    onMouseMove={() => handleHover(item.id, "Move")}
                    onMouseLeave={() => handleHover(item.id, "Leave")}
                    className="absolute bg-white z-50 shadow-2xl border hover:text-black text-black left-0 right-0 top-[29px] min-w-[230px] py-[30px] px-[10px]"
                  >
                    <ul className="flex flex-col gap-[10px] font-normal text-sm">
                      {item.type === "parent" &&
                        item.submenu.map((el) => (
                          <li className="px-5">
                            <Link
                              to={el.path}
                              onClick={() => setIsHover(false)}
                              className="hover:text-main text-[#505050]"
                            >
                              {el.text}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </NavLink>
            );
          })}
          <NavLink className="hover:text-main text-[#1D1D1D] font-[Poppins] text-sm">
            CONTACT US
          </NavLink>
        </div>
        <div className="w-[20%] font-[Poppins] text-sm border-r border-l border-[red] px-[10px]">
          <input
            onKeyDown={handleSearch}
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
            id="SearSomeThing"
            type="text"
            placeholder="Search something"
            className="outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default withBase( memo(Navigation));
