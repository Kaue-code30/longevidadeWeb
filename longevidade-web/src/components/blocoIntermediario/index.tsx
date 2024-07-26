import HeaderHome from "@/components/header/index";
import arvoreBranco from "@/assets/home/arvore-branca.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Questions from "../questions";
import { QuestionsData } from "@/interfaces/questions";

export interface BlockProps {
  banner: string;
  title: string;
  text: string;
  secondText?: string;
  thirText?: string;
  setBlock: (data: boolean) => void;
  stage: number;
  Imc?: boolean;
  arrayQuestions: QuestionsData[];
}

export default function BlockIntermediario({
  setBlock,
  banner,
  title,
  secondText,
  thirText,
  arrayQuestions,
  Imc,
  text,
  stage,
}: BlockProps) {
  return (
    <div
      className="h-full  z-10 w-full overflow-hidden "
    >
      <HeaderHome backgroundColor="bg-primary-color" />
      <div className="flex-col flex items-center justify-start w-full h-full">
        <div className="w-full flex items-center px-10 justify-center h-[8%] pb-5">
          <ul className="w-full justify-between items-center flex h-full">
            <li className="flex gap-3 items-center justify-center">
              <div className="flex items-center justify-center w-5 h-5 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
              <div className="w-4 h-[1px] bg-[#366A48]"></div>
            </li>
            <li className={`flex ${stage === 1 ? "opacity-50" : ""} gap-3 items-center justify-center`}>
              <div className="flex items-center justify-center w-5 h-5 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
              <div className="w-4 h-[1px] bg-[#366A48]"></div>
            </li>
            <li className={`flex ${stage === 1 || stage === 2 ? "opacity-50" : ""} gap-3 items-center justify-center`}>
              <div className="flex items-center justify-center w-5 h-5 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
              <div className="w-4 h-[1px] bg-[#366A48]"></div>
            </li>
            <li className={`flex ${stage === 1 || stage === 2 ? "opacity-50" : ""} gap-3 items-center justify-center`}>
              <div className="flex items-center justify-center w-5 h-5 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
              <div className="w-4 h-[1px] bg-[#366A48]"></div>
            </li>
            <li className={`flex ${stage === 1 || stage === 2 || stage === 3 ? "opacity-50" : ""} gap-3 items-center justify-center`}>
              <div className="flex items-center justify-center w-5 h-5 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full flex items-center justify-center flex-col">
          <div className=" flex w-full h-[160px] z-50">
            <Image
              quality={100}
              className="flex object-cover items-start justify-end w-full"
              src={banner}
              alt="Let's Forever"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center gap-5 w-full bg-second-color justify-center flex-col pb-10 pt-5 h-full">
            <div className="w-[80%] flex gap-4  items-center justify-center flex-col">


              <h1 className={` ${Imc === false ? "text-xl text-[#22382A]" : "text-base"} font-bold`}>{title}</h1>
              {/* <p className="text-base">{text}</p> */}
              {Imc === true && text ? (
                <div className="w-full rounded-lg flex items-center shadow-md justify-center h-20 bg-[#366A48]">
                  <p className="text-center font-medium text-base text-second-color">
                    {text}
                  </p>

                </div>
              ) : (
                <p className="text-sm">
                  {text}
                </p>
              )}
              {secondText && (
                <p className="text-sm">
                  {secondText}
                </p>
              )}
              {thirText && (
                <p className="text-sm font-medium">
                  {thirText}
                </p>
              )}
              {Imc && (
                <p className="text-sm font-normal">
                  Vamos seguir com esse questionário para termos uma visão mais ampla sobre sua saúde.
                </p>
              )}
              <div className="flex items-center justify-center top-[90%] fixed bg-[#366A48] w-full h-24">


                <button
                  onClick={() => {
                    setBlock(false);
                    return <Questions />;
                  }}
                  className="w-[90%] flex items-center justify-center gap-2 bg-third-color text-second-color font-medium h-12 rounded-lg"
                >
                  continuar <FaArrowRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
