import React from "react";

export default function HeaderMain() {
  return (
    <div className="flex items-start justify-between pt-[50px] md:flex-row flex-col gap-[10px] ">
      <div className="flex gap-[20px] items-center justify-between">
        <a href="" className="text-[#62C3C6] md:text-[16px] text-[12px] ">
          Home
        </a>
        <img src="ArrowRight.svg" alt="" />
        <a href="" className="text-[#62C3C6] md:text-[16px]  text-[12px]">
          Livebestand
        </a>
        <img src="ArrowRight.svg" alt="" />
        <a href="" className="text-[#045A5C] font-bold md:text-[16px] text-[12px]">
          Cannabis Blüten
        </a>
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className="text-[#365758] text-[14px] ">GKV mit Kostenübernahme?</p>
        <button className="text-[#045A5C] border-[2px] border-[#62C3C6] py-[7px] px-[20px]   rounded-t-3xl rounded-b-3xl rounded-tr-none rounded-bl-none text-[14px]">
          Preisoptionen
        </button>
      </div>
    </div>
  );
}
