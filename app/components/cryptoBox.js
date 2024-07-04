"use client"; 

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../utils/axiosMock'

function CryptoBox() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/assets')
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="w-full mt-6 flex flex-col px-8 py-10 justify-center items-start bg-[#000000CC] border border-[#464646] rounded-[10px] overflow-x-scroll no-scrollbar">
      <div className="grid grid-cols-5 gap-[168px] border-b pb-4 border-[#4F4F4F] max-sm:gap-[240px]">
        <p className="font-roboto leading-6 text-[20px] text-white font-[600]">
          ASSETS
        </p>
        <p className="font-roboto leading-6 text-[20px] text-white font-[600] whitespace-nowrap">
          {'LAST TRADE'}
        </p>
        <p className="font-roboto leading-6 text-[20px] text-white font-[600] whitespace-nowrap">
          24H %
        </p>
        <p className="font-roboto leading-6 text-[20px] text-white font-[600] whitespace-nowrap">
          24H CHANGE
        </p>
        <p className="font-roboto leading-6 text-[20px]  text-[#3980FF] font-[600] whitespace-nowrap">
          {'MORE >'}
        </p>
      </div>
      <div className="w-full flex flex-col">
        {data.map((crypto, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-[168px]  py-6 items-center max-sm:gap-[240px] "
          >
            <div className="flex items-center max-sm:w-20">
              <Image
                width={64}
                height={64}
                layout="fixed"
                src={crypto.icon}
                alt={`${crypto.name} icon`}
              />
              <p className="ml-3 font-roboto text-white leading-5 text-[18px] font-[500]">
                {crypto.name}/<span className="text-[#666666]">USD</span>
              </p>
            </div>
            <p className="font-roboto leading-6 text-white text-[20px] font-[600]">
              ${crypto.lastTrade}
            </p>
            <p
              className={`font-roboto leading-6 text-[20px] text-white font-[600] ${
                crypto.dayPercentage.includes('-') &&
                crypto.dayPercentage !== '+0.00'
                  ? 'text-[#FF5454]'
                  : crypto.dayPercentage === '+0.00'
                  ? 'text-[#666666]'
                  : 'text-[#6DFFDC]'
              }`}
            >
              {crypto.dayPercentage}%
            </p>

            <p
              className={`font-roboto leading-6 text-[20px] font-[600] ${
                crypto.dayChange.includes('-') && crypto.dayChange !== '+0.00'
                  ? 'text-[#FF5454]'
                  : crypto.dayChange === '0.00'
                  ? 'text-[#666666]'
                  : 'text-[#6DFFDC]'
              }`}
            >
              ${crypto.dayChange}
            </p>
            <button className="w-[74px] h-[36px] bg-[#6DFF8B] text-black font-roboto leading-5 text-[18px] font-[6500] ">
              Trade
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CryptoBox
