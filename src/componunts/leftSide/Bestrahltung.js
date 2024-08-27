export default function Bestrahltung() {
  return (
    <div className="flex flex-col  gap-[20px] items-center ">
      <h3 className="text-[18px] text-[#365758] font-semibold text-center">
        Bestrahltung
      </h3>
      <div className="flex justify-between items-center gap-[4px]">
        <button className="bg-[#62C3C6] px-[12px] py-[4px] rounded-md text-[#FCFCFA] text-[16px] ">
          bestrahlt
        </button>
        <button className="bg-[#62c3c683] px-[12px] py-[4px] rounded-md text-[#045A5C] text-[16px]  ">
          nicht bestrahlt
        </button>
      </div>
      <hr className="border-[#62c3c640] border-[1px]" />
    </div>
  );
}
