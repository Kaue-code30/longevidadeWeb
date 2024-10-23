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
      className="h-[110vh] bg-contain bg-no-repeat bg-bottom z-10 w-full  bg-primary-color"
    >
      {getInformations && <GetInformations userData={userData} />}
      <div className={` ${getInformations === true ? "[display:none]" : ""} w-full h-full`}>
        <HeaderHome backgroundColor="bg-primary-color" />
        <div className="flex-col flex items-center pb-2 justify-start w-full h-3/4 ">
          <div className="w-full flex items-center px-10 justify-center h-[8%] pb-5 ">
            <ul className="w-full justify-center  gap-5 items-center flex h-full">
              <li className="flex gap-3 items-center justify-center">
                <div className="flex items-center justify-center w-6 h-6 bg-[#366A48] rounded-full">
                  <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
                </div>
                <div className="w-4 h-[1px] bg-[#366A48]"></div>
              </li>
              <li className={`flex ${stage === 1 ? "opacity-50" : ""} gap-5 items-center justify-center`}>
                <div className="flex items-center justify-center w-6 h-6 bg-[#366A48] rounded-full">
                  <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
                </div>
                <div className="w-4 h-[1px] bg-[#366A48]"></div>
              </li>
              <li className={`flex ${stage === 1 || stage === 2 ? "opacity-50" : ""} gap-4 items-center justify-center`}>
                <div className="flex items-center justify-center w-6 h-6 bg-[#366A48] rounded-full">
                  <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
                </div>
                <div className="w-4 h-[1px] bg-[#366A48]"></div>
              </li>
              <li className={`flex ${stage === 1 || stage === 2 ? "opacity-50" : ""} gap-4 items-center justify-center`}>
                <div className="flex items-center justify-center w-6 h-6 bg-[#366A48] rounded-full">
                  <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
                </div>
                <div className="w-4 h-[1px] bg-[#366A48]"></div>
              </li>
              <li className={`flex ${stage === 1 || stage === 2 || stage === 3 ? "opacity-50" : ""} gap-4 items-center justify-center`}>
                <div className="flex items-center justify-center w-6 h-6 bg-[#366A48] rounded-full">
                  <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full flex items-center pt-10 justify-center mt-10 flex-col h-4/5 ">
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
            <div className="flex bg-second-color items-center gap-4 w-full justify-center pb-20 pt-10 flex-col h-full">
              <div className="w-[80%] flex gap-4  items-center justify-center flex-col">


                <h1 className="text-2xl w-full text-left font-bold  text-third-color ">{title}</h1>
                <p className="text-base font-medium text-[#22382A]">{text}</p>
                {secondText && (
                  <p className="text-base">
                    Receba agora mesmo e <span className="font-medium">grátis</span>  o seu <span className="font-medium"> SCORE DE SAÚDE</span>  e o potencial que você pode alcançar apenas melhorando seu estilo de vida.
                  </p>
                )}
                <div className="flex items-center justify-center top-[88%]  fixed bg-[#366A48] w-full h-24">
                  <button
                    onClick={() => {
                      setGetInformations(true);
                    }}
                    className="w-[80%] relative flex p-3 items-center justify-center gap-2 bg-third-color text-second-color font-medium   rounded-lg "
                  >
                    ver meu resultado <FaArrowRight className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
