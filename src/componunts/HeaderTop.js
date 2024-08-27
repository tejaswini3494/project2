"use client"
import { useState } from "react";

export default function HeaderTop() {
  const [tog2, setTog2] = useState(false);
  return (


    <>
    <div className="flex justify-between items-center pt-7 ">
      <div className="flex  lg:w-[360px] h-[34px]  justify-between items-center bg-[#EEF7F7] px-4 pt-2 pb-2 rounded-[30px]">
        <h1 className="text-[16px] text-[#62C3C6] font-normal">Suchen</h1>
        <img src="/Search.svg" alt="" srcset="" />
      </div>

      <div className="flex items-center  justify-between gap-[10px]">
        <div className="hidden lg:flex gap-[30px]">
          <div className="flex gap-1 items-center">
            <img src="Rectangle 1 (2).svg" alt="" />
            <a href="" className="text-[#045A5C] text-[16px] font-bold">
              Rezept einlösen
            </a>
          </div>
          <div className="flex  gap-1 items-center">
            <img src="Rectangle 1 (1).svg" alt="" />
            <a href="" className="text-[#045A5C] text-[16px]">
              Live Bestand
            </a>
          </div>
          <div className="flex  gap-1 items-center">
            <img src="Rectangle 1 (1).svg" alt="" />
            <a href="" className="text-[#045A5C] text-[16px]">
              Videosprechstunde
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <img src="Rectangle 1 (1).svg" alt="" />
            <a href="" className="text-[#045A5C] text-[16px]">
              FAQs
            </a>
          </div>
          <div className="flex  gap-1 items-center">
            <img src="Rectangle 1 (1).svg" alt="" />
            <a href="" className="text-[#045A5C] text-[16px]">
              Kontakt
            </a>
          </div>
        </div>
        <div className="flex items-center gap-[14px]">
          <div className="relative flex items-center">
            <img src="Vector.svg" alt="" />
            <div className="bg-[#62c3c661] lg:w-[18px] w-[15px] h-[15px] lg:h-[18px] rounded-full flex items-center justify-center absolute top-2 left-3 -z-10 opacity-65">
              <p className="text-[#28E3E9] ">1</p>
            </div>
          </div>
          <button
            className="bg-[#ECFEAA] py-2 md:py-1  px-[14px] md:px-[18px] rounded-t-3xl rounded-b-3xl rounded-tr-none rounded-bl-none text-[#045A5C]  text-[12px] md:text-[14px] ;
"
          >
            Anmelden
          </button>

<div className=" lg:hidden flex bg-[#b9e0e1] w-[30px] h-[20px] py-[1px] px-[6px] gap-[10px] rounded-md">
          <img src="/Group.svg" alt=""onClick={()=>{
  setTog2(!tog2)
}}  />
        </div>
        </div>
      </div>
    </div>





{/* responsive navbar  */}

<div  className={`lg:hidden  flex flex-col gap-[20px] left-0  right-0 ${
          tog2 ? "flex" : "hidden"
        }  fixed  py-8  top-0 bg-[white]  h-screen  justify-center  items-center`}>


          <img src="Vector2.svg" alt=""onClick={()=>{
  setTog2(!tog2)
}}  className="lg:hidden flex w-[12px] h-[12px]"/>

          <div className="flex gap-1 items-center">
            <img src="Rectangle 1 (2).svg" alt="" />
            <a href="" className="text-[#045A5C] text-[16px] font-bold">
              Rezept einlösen
            </a>
          </div>
          <div className="flex  gap-1 items-center">
            <img src="Rectangle 1 (1).svg" alt="" />
            <a href="" className="text-[#045A5C] text-[16px]">
              Live Bestand
            </a>
          </div>
          <div className="flex  gap-1 items-center">
            <img src="Rectangle 1 (1).svg" alt="" />
            <a href="" className="text-[#045A5C] text-[16px]">
              Videosprechstunde
            </a>
          </div>
          <div className="flex gap-1 items-center">
            <img src="Rectangle 1 (1).svg" alt="" />
            <a href="" className="text-[#045A5C] text-[16px]">
              FAQs
            </a>
          </div>
          <div className="flex  gap-1 items-center">
            <img src="Rectangle 1 (1).svg" alt="" />
            <a href="" className="text-[#045A5C] text-[16px]">
              Kontakt
            </a>
          </div>
        </div>
</>
  );
}
