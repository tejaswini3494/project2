import React from 'react'

export default function GeneticBestrahltung(props) {
  return (
    <div className="flex flex-col  gap-[20px] items-center ">
        <h3 className="text-[18px] text-[#365758] font-semibold text-center">{props.text1}</h3>
        <div className="flex justify-between items-center gap-[4px]">
           <button className='bg-[#62C3C6] px-[12px] py-[4px] rounded-md text-[#FCFCFA] text-[16px]  md:w-[80px] w-full'>{props.text2}</button>
           <button className='bg-[#62c3c683] px-[12px] py-[4px] rounded-md text-[#045A5C] text-[16px]  md:w-[80px] w-full'>{props.text3}</button>
           <button className='bg-[#62c3c684] px-[12px] py-[4px] rounded-md text-[#045A5C] text-[16px] md:w-[80px] w-full'>{props.text4}</button>
        </div>
        <hr className="border-[#62c3c640] border-[1px]"/>
    </div>
  )
}
