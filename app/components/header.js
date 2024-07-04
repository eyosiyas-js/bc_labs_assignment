import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className="w-full mt-6 flex justify-between items-center ">
      <Image
        src="/name.png"
        alt="Next.js Logo"
        width={193}
        height={25}
        priority
      />
      <div className="flex space-x-12 max-sm:hidden">
        <p className="text-[14px] font-roboto text-white  leading-[16.41px]">Exchage</p>
        <p className="text-[14px] text-white font-roboto leading-[16.41px]">
          Last Transactions
        </p>
        <p className="text-[14px] text-white font-roboto leading-[16.41px]">
          Invite Friend
        </p>
        <p className="text-[14px]  text-white font-roboto leading-[16.41px]">
          Notifications
        </p>
      </div>
      <div className="flex space-x-5">
        <button className=" w-[64px] text-white h-[36px] font-[500px] font-roboto text-[14px] border rounded-[8px_0_8px_0] border-[#9945FF]">
          LOG IN
        </button>
        <button className=" w-[74px] text-white h-[36px] font-[500px] font-roboto text-[14px] rounded-[8px_0_8px_0] bg-[#9945FF]">
          SIGN UP
        </button>
      </div>
    </div>
  )
}

export default Header
