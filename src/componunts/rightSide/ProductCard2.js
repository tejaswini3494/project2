
export default function Section({Data2}) {
    return (
      <>
     {Data2.map((item)=>{
      return (
          <>
          <div className="flex flex-col gap-[12px] w-[310px] h-[554px] border-[2px] border-[#28E3E9] rounded-t-3xl rounded-b-3xl rounded-tr-none rounded-bl-none shadow-xl">
        <div className="px-[20px] pt-[20px] ">

            <div className="flex justify-between">
          <div className="rounded-3xl py-[3px] px-[12px] bg-[#0d70523f] flex items-center gap-[4px] w-[125px]">
            <div className="w-[4px] h-[4px] text-[#0D7052] bg-[#0d7052] rounded-full"></div>
            <h2 className="text-[#0D7052] text-[12px] font-light">
             {item.heading}
            </h2>
          </div>
          <div className="rounded-3xl py-[3px] px-[12px] bg-[#0d70523f] flex items-center gap-[4px] w-[50px]">
            <h2 className="text-[#0D7052] text-[12px] font-light">
             {item.heading2}
            </h2>
          </div>

          </div>
          
        </div>
        <img src={item.img} alt="" />
  
        {/* body of  */}
  
        <div className="bg-[#62C3C64D] p-[24px] flex flex-col gap-[30px] h-[339px] border-t-[2px] border-[#28E3E9] rounded-tl-none rounded-b-3xl rounded-tr-none rounded-bl-none ">
          {/* ........ */}
          <div className=" flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[16px]">
                <div className="bg-[#62c3c69c] py-1 px-3 rounded-[4px] w-[74px] h-[24px] flex items-center justify-center">
                  <h3 className=" font-semibold text-[#365758] ">{item.name}</h3>
                </div>
  
                <div className="flex gap-[8px]">
                  <div className="bg-[#FCFCFA] rounded-[4px] py-[4px] px-[10px] w-[111px] h-[28px] flex items-center justify-center">
                    <p className="text-[#116A6C] text-[16px]">{item.btn1}</p>
                  </div>
                  <div className="bg-[#62C3C6] rounded-[4px] py-[4px] px-[10px] w-[111px] h-[28px] flex items-center justify-center">
                    <p className="text-[#FCFCFA] text-[16px]">{item.btn2} </p>
                  </div>
  
                  <img src={item.img2} alt="" />
                </div>
              </div>
              <div>
                <p className="text-[#116A6C] text-[18px] font-semibold">
                 {item.desciption}
                </p>
              </div>
            </div>
  
            <div className="flex gap-[8px] flex-col">
              <div className="flex justify-between">
                <p className="text-[#365758] text-[16px]">{item.text1}</p>
                <p className="text-[#365758] text-[16px]">{item.text2}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#365758] text-[16px]"> {item.text3}</p>
  
                <p className="text-[#365758] text-[16px]">{item.text4}</p>
              </div>
            </div>
          </div>
  
          {/* ...... */}
  
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[2px]">
              <div className="flex gap-[4px]">
                <p className="text-[#62C3C6] text-[24px] font-extrabold">{item.sign}</p>
                <p className="text-[#116A6C] text-[24px] font-extrabold">{item.number}</p>
                <p className="text-[#365758] text-[12px]">{item.number2}</p>
              </div>
  
              <p className="text-[#365758] text-[12px] font-light">{item.text5}</p>
            </div>
  
            <div className="bg-[#ECFEAA] h-[33px] w-[164px] py-[7px] px-[18px] rounded-t-3xl rounded-b-3xl rounded-tr-none rounded-bl-none">
              <p className="text-[#365758] text-[14px]">{item.button}</p>
            </div>
          </div>
        </div>
      </div>
  
          </>
      )
     })}
     </>
    );
  }
  