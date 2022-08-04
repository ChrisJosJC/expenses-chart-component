import React from 'react'

export function Header() {
  return (
    <div className="flex mb-1 bg-soft-red p-5 md:w-3/6 sm:w-full lg:w-2/6 rounded-lg justify-between">
        <div className=" ">
          <h2 className="font-thin text-white sm:text-2xl md:text-xs font-">My balance</h2>
          <b className="text-white text-2xl font-bold">$921.48</b>
        </div>
        <img src="/logo.svg" alt="" />
      </div>
  )
}
