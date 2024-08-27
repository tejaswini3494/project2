import React from "react";

export default function Hersteller() {
  return (
    <div className="flex flex-col  gap-[20px] md:items-center">
      <div className="flex  gap-10">
        <h3 className="text-[18px] text-[#365758] font-semibold text-center">
          Hersteller
        </h3>
        <img src="Arrow_down.svg" alt="" className=" " />
      </div>
      <div className="flex flex-col gap-[16px] ">
        <div className="flex gap-[10px] items-center">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-[16px] h-[16px] text-[#62C3C6] border-[1px] border-[#62C3C6]"
          />
          <label htmlFor="" className="text-[#365758] text-[16px]">
            ADREXpharma
          </label>
        </div>
        <div className="flex gap-[10px] items-center">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-[16px] h-[16px] text-[#62C3C6] border-[1px] border-[#62C3C6]"
          />
          <label htmlFor="" className="text-[#365758] text-[16px]">
            Aurora
          </label>
        </div>
        <div className="flex gap-[10px] items-center">
          <input
            type="checkbox"
            name=""
            id=""
            checked
            className="w-[16px] h-[16px] text-[#62C3C6] border-[1px] border-[#62C3C6]"
          />
          <label htmlFor="" className="text-[#365758] text-[16px]">
            Avaay
          </label>
        </div>
        <div className="flex gap-[10px] items-center">
          <input
            type="checkbox"
            name=""
            id=""
            checked
            className="bg-[#62c3c64d] w-[16px] h-[16px] text-[#62C3C6] border-[1px] border-[#62C3C6]"
          />
          <label htmlFor="" className="text-[#365758] text-[16px]">
            Bedrocan
          </label>
        </div>
        <div className="flex gap-[10px] items-center">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-[16px] h-[16px] text-[#62C3C6] border-[1px] border-[#62C3C6] "
          />
          <label htmlFor="" className="text-[#365758] text-[16px]">
            Cannamedical
          </label>
        </div>
      </div>

      <button className="text-[#045A5C] border-[2px] border-[#ECFEAA] py-[7px] px-[20px]   rounded-t-3xl rounded-b-3xl rounded-tr-none rounded-bl-none text-[14px]">
        mehr anzeigen
      </button>
      <hr className="border-[#62c3c640] border-[1px]" />
    </div>
  );
}
