import React from 'react'

const Search = () => {
  return (
    <div className='w-full'>
      <div className='w-full bg-white flex justify-center'>
        <div className='w-main flex flex-col gap-4'>
          <div className='flex flex-col'>
            <div className='w-full text-center'>
              <h1 className='text-2xl font-medium text-[#505050] p-5'>Your search for "a" revealed the following:</h1>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search