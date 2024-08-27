export default function Footer() {
    return (
      <div className="bg-[#1A8D91] rounded-xl rounded-b-none mt-[50px] p-[50px]">
        <div className="w-[1300px] mx-auto flex justify-between md:flex-row flex-col gap-[20px]">
          {/* Section 1 */}
          <div>
            <p className="text-[#FFFFFF] text-[12px] font-light">AGB</p>
            <p className="text-[#FFFFFF] text-[12px] font-light">Impressum</p>
            <p className="text-[#FFFFFF] text-[12px] font-light">Datenschutz</p>
          </div>
  
          {/* Section 2 */}
          <div className="flex flex-col flex-wrap">
            <div className="flex flex-wrap md:flex-row flex-col gap-[14px]">
              <div className="flex gap-1 items-center">
                <img src="Rectangle 1 (2).svg" alt="" />
                <a href="" className="text-[#FFFFFF] text-[16px]">
                  Rezept einlösen
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <img src="Rectangle 1 (2).svg" alt="" />
                <a href="" className="text-[#FFFFFF] text-[16px]">
                  Live Bestand
                </a>
              </div>
            </div>
  
            <div className="flex flex-wrap md:flex-row flex-col">
              <div className="flex gap-1 items-center">
                <img src="Rectangle 1 (2).svg" alt="" />
                <a href="" className="text-[#FFFFFF] text-[16px]">
                  Videosprechstunde
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <img src="Rectangle 1 (2).svg" alt="" />
                <a href="" className="text-[#FFFFFF] text-[16px]">
                  FAQs
                </a>
              </div>
              <div className="flex gap-1 items-center">
                <img src="Rectangle 1 (2).svg" alt="" />
                <a href="" className="text-[#FFFFFF] text-[16px]">
                  Kontakt
                </a>
              </div>
            </div>
          </div>
  
          {/* Section 3 */}
          <div className="w-[200px]">
            <p className="text-[#FFFFFF] text-[12px] font-light">Standort</p>
            <p className="text-[16px] text-[#FFFFFF] font-extrabold">
              Bergstraße 49 - 57
              <br />
              69469 Weinheim
              <br />
              (3 Glocken Quartier)
            </p>
          </div>
  
          {/* Section 4 */}
          <div>
            <p className="text-[12px] text-[#FFFFFF]">Telefon</p>
            <p className="text-[16px] text-[#FFFFFF] font-extrabold">
              0223 545 5250
            </p>
          </div>
  
          {/* Section 5 */}
          <div>
            <p className="text-[#FFFFFF] text-[12px] font-light">
              Öffnungszeiten
            </p>
            <div>
              <p className="text-[12px] text-[#FFFFFF]">Mo-Fr</p>
              <p className="text-[16px] text-[#FFFFFF] font-extrabold">
                
              09:00 – 18:00 Uhr
            </p>
          </div>
          <div>
            <p className="text-[12px] text-[#FFFFFF] font-light">Sa</p>
            <p className="text-[16px] text-[#FFFFFF] font-extrabold">
              09:00 – 14:00 Uhr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
