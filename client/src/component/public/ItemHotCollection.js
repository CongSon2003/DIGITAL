import React, { memo } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { lowercaseLetters } from 'ultils/helper';
const ItemHotCollection = ({data, index}) => {
  return (
    <div className={`px-[10px] ${index <= 2 ? 'mb-5' : ''}`}>
      <div className='border flex max-md:flex-col p-[15px]'>
        <div className='text-center flex justify-center'>
          <img src={data.image} className='object-contain w-[200px] h-[200px]' alt=''/>
        </div>
        <div className='flex flex-col pl-[20px] gap-2'>
          <div className='uppercase font-semibold text-[#505050]'>{data?.title}</div>
          <ul>
            { data?.brand?.map((el, index) => {
            return (
              <li key={index} className='flex flex-initial items-center hover:text-main cursor-pointer gap-1 mb-[5px] text-[#808080] text-sm'>
                <FaAngleRight/>
                <Link to={`/products/${lowercaseLetters(data.title)}/${lowercaseLetters(el)}`}>{el}</Link>
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default memo(ItemHotCollection)