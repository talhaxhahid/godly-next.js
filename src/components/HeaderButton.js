import grainBg from "../assets/grain-bg.png";
import Image from "next/image";
import subtract from "../assets/subtract.svg";
import Link from "next/link";

export default function HeaderButton() {
  return (
    <Link href="#">
      <div>
        <div
          className="h-[14.4px] relative w-32 bg-[#1b1b1b] bg-repeat rounded-[3px] border-[0.4px] border-[#000] shadow-[0px 1px 1px 0px rgba(0, 0, 0, 0.25) inset, 0px -1px 1.2px 0px rgba(255, 255, 255, 0.03), 0px 2px 2.6px 0px rgba(0, 0, 0, 0.30)]"
          style={{ backgroundImage: `url(${grainBg.src})` }}
        >
          <div className="absolute max-w-[115px] bottom-1 left-1/2 -translate-x-1/2 flex-shrink-0">
            <div className=" bg-[#F3CA9E69] w-[115px] h-[4px] border-b border-dashed border-[#2D2B2B] " />
            <div
              className="w-[115px] h-16 bg-[#F3CA9E] bg-repeat absolute left-1/2 -translate-x-1/2 flex items-center justify-center p-[3px] "
              style={{ backgroundImage: `url(${grainBg.src})` }}
            >
              <div className="rounded-[6px] w-full h-full flex flex-col border-[0.4px] justify-between border-[#000] p-[5px]">
                <div className="all-unset flex w-full justify-between items-center gap-0">
                  <p className="text-[4px] text-[#1c1c1c] font-[marlton-sans] font-normal leading-trimmed">
                    CUST.
                  </p>
                  <p className="text-[4px] text-[#AB8459] font-[marlton-sans] font-normal leading-trimmed">
                    GODLY
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-xl text-center text-[#1c1c1c] leading-none font-medium inline-block">
                    GET A QUOTE
                  </p>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <div className="h-[2px] w-full bg-[#312E2C]" />
                  <div className="h-[1px] w-full bg-[#312E2C]" />
                </div>
              </div>
              <div className="absolute -bottom-2.5">
                <Image src={subtract} alt="subtract" width={115} height={11} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
