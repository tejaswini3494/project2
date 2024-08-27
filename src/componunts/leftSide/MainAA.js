"use client";
import MainA from "./MainA";
import Hersteller from "./Hersteller";
import GeneticBestrahltung from "./GeneticBestrahltung";
import Terpene from "./Terpene";
import { useState } from "react";

export default function MainAA() {
  const [tog, setTog] = useState(false);

  return (
    <>
      <div className="w-[250px] flex flex-col gap-[20px]">
        <div
          className="flex items-center justify-center bg-[#62c3c62c] rounded-md"
          onClick={() => {
            setTog(!tog);
          }}
        >
          <h2 className=" text-[#045A5C] text-[24px] font-semibold">Filter</h2>
        </div>
        <div className={`hidden md:flex flex-col gap-5`}>
          <MainA text1="Preis" text2="5 €" text3="10 €" />
          <Hersteller />
          <MainA text1="THC Gehalt" text2="11%" text3="18%" />
          <MainA text1="CBD Gehalt" text2="1%" text3="5%" />
          <GeneticBestrahltung
            text1="Genetik"
            text2="Indica"
            text3="Sativa"
            text4="Hybrid"
          />
          <GeneticBestrahltung
            text1="Bestrahltung"
            text2="bestrahlt"
            text3="nicht bestrahlt"
          />
          <Terpene />

          <div className="flex items-center justify-center gap-[4px]">
            <img src="Vector2.svg" alt="" className="w-[12px] h-[12px]" />
            <button className="text-[16px] text-[#0D0D0D]">
              alle Filter zurücksetzen
            </button>
          </div>
        </div>
      </div>

      {/* responsive */}
      <div
        className={`md:hidden  flex flex-col gap-[20px] left-0 ${
          tog ? "flex" : "hidden"
        } w-full  fixed  py-8  top-0 bg-[white]  h-screen overflow-scroll items-center`}
      >
        <img
          src="Vector2.svg"
          alt=""
          className="w-[12px] h-[12px]  top-[0px] right-[4px] md:absolute "
          onClick={() => {
            setTog(!tog);
          }}
        />
        <div className="flex items-center justify-center bg-[#62c3c62c] rounded-md ">
          <h2 className=" text-[#045A5C] text-[24px] font-semibold">Filter</h2>
        </div>

        <MainA text1="Preis" text2="5 €" text3="10 €" />
        <Hersteller />
        <MainA text1="THC Gehalt" text2="11%" text3="18%" />
        <MainA text1="CBD Gehalt" text2="1%" text3="5%" />
        <GeneticBestrahltung
          text1="Genetik"
          text2="Indica"
          text3="Sativa"
          text4="Hybrid"
        />
        <GeneticBestrahltung
          text1="Bestrahltung"
          text2="bestrahlt"
          text3="nicht bestrahlt"
        />
        <Terpene />

        <div className="flex items-center justify-center gap-[4px]">
          <img src="Vector2.svg" alt="" className="w-[12px] h-[12px]" />
          <button className="text-[16px] text-[#0D0D0D]">
            alle Filter zurücksetzen
          </button>
        </div>
      </div>
    </>
  );
}
