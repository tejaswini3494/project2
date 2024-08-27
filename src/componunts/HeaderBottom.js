export default function HeaderBottom() {
  return (
    <div className="flex  justify-between items-center pt-[20px] flex-wrap">
      <div className="flex gap-[15px] items-center ">
        <img src="Rectangle 1 (2).svg" alt="" className="w-[20px] h-[26px]" />
        <h2 className="text-[#116A6C] lg:text-[36px]  text-[28px] font-semibold"> Blüten</h2>
      </div>

      <div className=" flex gap-[20px] items-center">
        <div className="hidden md:flex   w-[360px] h-[34px] justify-between items-center bg-[#8191911A] px-4 pt-2 pb-2 rounded-[30px]">
          <h1 className="text-[16px] text-[#62C3C6] font-normal">Suchen</h1>
          <img src="/Search.svg" alt="" srcset="" />
        </div>
        <div className="bg-[#b9e0e1] py-1 px-6 flex gap-[10px] rounded-md  md">
          <p className="text-[#365758]  text-[10px] md:text-[16px] font-medium">
            Sortieren nach
          </p>
          <img src="/Arrow_down.svg" alt="" />
        </div>

        <div className="bg-[#b9e0e1] py-1 px-6 flex gap-[10px] rounded-md ">
          <p className="text-[#365758]  text-[12px] md:text-[16px] font-medium">
            Verfügbarkeit
          </p>
          <img src="/Switch.svg" alt="" />
        </div>

        <div className=" hidden md:flex bg-[#b9e0e1] w-[48px] h-[34px] py-[2px] px-[12px] gap-[10px] rounded-md">
          <img src="/Group.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
