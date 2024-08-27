

export default function MainA(props) {
  return (
    <>
    <div className="flex flex-col  gap-[20px] items-center ">
        <h3 className="text-[18px] text-[#365758] font-semibold text-center">{props.text1}</h3>
        <div className="flex gap-[8px] flex-col">
            <img src="slider.svg" alt="" />
            <div className="flex justify-between items-center">
                <div className="bg-[#81919140] py-1 px-5 rounded-full w-[116px] h-[24px] flex items-center ">
                  <p className="font-normal text-[#365758] text-[16px]">{props.text2}</p>
                </div>
                <div className="text-[18px] text-[#585555] h-[21px] w-[10px]">-</div>
                <div className="bg-[#81919140] py-1 px-5 rounded-full w-[116px] h-[24px] flex items-center ">
                  <p className="font-normal text-[#365758] text-[16px]">{props.text3}</p>
                </div>
                
            </div>
        </div>
        <hr className="border-[#62c3c640] border-[1px]"/>
    </div>
    
    </>
  )
}
