import Image from 'next/image'
import React from 'react'

export default function SwapToken() {
  return (
    <div className="relative w-full mt-6 flex flex-col px-8 py-10 justify-center bg-[#000000CC] border border-[#464646] rounded-[10px] max-sm:px-6">
      <div className="flex justify-between">
        <p className="font-roboto leading-6 text-[20px] font-[600] whitespace-nowrap text-white">
          SWAP TOKENS
        </p>
        <Image width={24} height={28} src="/setting.png" />
      </div>

      <div className="relative h-[120px] flex flex-col md:flex-row justify-between items-center mt-12 space-y-1 md:space-y-0 md:space-x-1">
        {/* Left child box */}
        <div className="w-full md:w-1/2 h-full bg-[#1E1E1E] flex justify-around items-center">
          <div>
            <p className="font-roboto leading-[58.6px] text-[50px] font-[600] whitespace-nowrap text-white">
              0.00
            </p>
            <p className="font-roboto leading-4 text-[#666666] text-[15px] font-[500]">
              $0.00
            </p>
          </div>
          <div>
            <div className="bg-[#000000] flex justify-around items-center w-[122px] h-[48px]">
              <Image width={19} height={28} className="ml-2" src="/b.png" />
              <p className="font-roboto leading-[23.5px] text-[20px] font-[600] text-[#868686]">
                BTC
              </p>
              <Image width={6} height={10} src="/arrow.png" />
            </div>
            <p className="font-roboto leading-[16.5px] mt-3 text-[14px] font-[400] text-white">
              Balance: <span className="text-[#3980FF]">24.240</span>
            </p>
          </div>
        </div>

        {/* Right child box */}
        <div className="w-full md:w-1/2 h-full bg-[#1E1E1E] flex justify-around items-center">
          <div>
            <p className="font-roboto leading-[58.6px] text-[50px] font-[600] whitespace-nowrap text-white">
              0.00
            </p>
            <p className="font-roboto leading-4 text-[#666666] text-[15px] font-[500]">
              $0.00
            </p>
          </div>
          <div>
            <div className="bg-[#000000] flex justify-around items-center w-[122px] h-[48px]">
              <Image width={23.5} height={26} className="ml-2" src="/bn.png" />
              <p className="font-roboto leading-[23.5px] text-[20px] font-[600] text-[#868686]">
                BTC
              </p>
              <Image width={6} height={10} src="/arrow.png" />
            </div>
            <p className="font-roboto leading-[16.5px] mt-3 text-[14px] font-[400] text-white">
              Balance: <span className="text-[#3980FF]">63.790</span>
            </p>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img className='max-sm:w-8 max-sm:h-8' src="/swap.png" alt="Logo" width={50} height={50} />
        </div>
      </div>
      
      <div className="flex justify-center mt-7 max-sm:mt-16">
        <button className="w-[250px] h-[51px] font-roboto font-[500px] text-[16px] rounded-[8px_0_8px_0] bg-[#9945FF]">
          SWAP TOKENS
        </button>
      </div>
      
      <div className="flex justify-between items-center max-sm:mt-5">
        <div>
          <p className="font-roboto leading-[16.5px] mt-3 text-[14px] font-[400] text-white">
            1 BTC = 32.4039 ETH
          </p>
          <p className="font-roboto leading-[16.5px] mt-3 text-[#3980FF] text-[14px] font-[400]">
            Free exchange
          </p>
        </div>
        <p className="font-roboto leading-4 text-[#666666] text-[15px] font-[500]">
          Updates in 4s
        </p>
      </div>
    </div>
  );
}
