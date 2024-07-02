import HeaderHome from "@/components/header/index";
import arvoreBranco from "@/assets/home/arvore-branca.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import bannerEncerramento from "@/assets/bannerEncerramento.svg";
import { Userdata } from "@/interfaces/userData";
import GetInformations from "../getInformations.tsx";
import { useState } from "react";

export interface BlockProps {
  title: string;
  text: string;
  stage: number;
  secondText: string;
  userData: Userdata;
}

export default function BlockEncerramento({
  title,
  text,
  stage,
  secondText,
  userData,
}: BlockProps) {
  const [getInformations, setGetInformations] = useState(false);

  return (
    <div
      style={{ backgroundImage: `url(${arvoreBranco.src})` }}
      className="h-full bg-contain bg-no-repeat bg-bottom z-10 w-full  bg-primary-color"
    >
      {getInformations && <GetInformations userData={userData} />}
      <div className={` ${getInformations === true ? "[display:none]" : ""} w-full h-full`}>
        <HeaderHome backgroundColor="bg-primary-color" />
        <div className="flex-col flex items-center pb-2 justify-start w-full h-3/4 ">
          <div className="w-full flex items-center px-10 justify-center h-[8%] pb-5 ">
            <ul className="w-full justify-between items-center flex h-full">
            <li className="flex gap-3 items-center justify-center">
              <div className="flex items-center justify-center w-7 h-7 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
              <div className="w-4 h-[1px] bg-[#366A48]"></div>
            </li>
            <li className={`flex ${stage === 1 ? "opacity-50" : ""} gap-3 items-center justify-center`}>
              <div className="flex items-center justify-center w-7 h-7 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
              <div className="w-4 h-[1px] bg-[#366A48]"></div>
            </li>
            <li className={`flex ${stage === 1 || stage === 2 ? "opacity-50" : ""} gap-3 items-center justify-center`}>
              <div className="flex items-center justify-center w-7 h-7 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
              <div className="w-4 h-[1px] bg-[#366A48]"></div>
            </li>
            <li className={`flex ${stage === 1 || stage === 2 ? "opacity-50" : ""} gap-3 items-center justify-center`}>
              <div className="flex items-center justify-center w-7 h-7 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
              <div className="w-4 h-[1px] bg-[#366A48]"></div>
            </li>
            <li className={`flex ${stage === 1 || stage === 2 || stage === 3 ? "opacity-50" : ""} gap-3 items-center justify-center`}>
              <div className="flex items-center justify-center w-7 h-7 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
            </li>
            </ul>
          </div>
          <div className="w-full flex items-center justify-center  flex-col h-4/5 ">
            <div className="w-full flex items-center justify-center  h-1/2">
              <Image
                quality={100}
                className="w-[90%] flex items-center justify-center h-full"
                src={bannerEncerramento}
                alt="Let's Forever"
                width={100}
                height={100}
              />
            </div>
            <div className="flex items-start gap-4 w-4/5 justify-start pt-4 flex-col h-1/2">
              <h1 className="text-3xl text-left font-medium  ">{title}</h1>
              <p className="text-base">{text}</p>
              {secondText && (
                <p  className="text-base">
                  {secondText}
                </p>
              )}

              <button
                onClick={() => {
                  setGetInformations(true);
                }}
                className="w-full relative flex p-3 items-center justify-center gap-2 bg-third-color text-second-color font-medium   rounded-lg "
              >
               ver meu resultado <FaArrowRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
