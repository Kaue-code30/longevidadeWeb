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
  arrayQuestions: QuestionsData[];
}

export default function BlockIntermediario({
  setBlock,
  banner,
  title,
  secondText,
  thirText,
  arrayQuestions,
  text,
  stage,
}: BlockProps) {
  return (
    <div
      style={{ backgroundImage: `url(${arvoreBranco.src})` }}
      className="h-auto pb-10 bg-contain bg-no-repeat bg-bottom z-10 w-full overflow-auto bg-primary-color"
    >
      <HeaderHome backgroundColor="bg-primary-color" />
      <div className="flex-col flex items-center pb-2 justify-start w-full h-3/4">
        <div className="w-full flex items-center px-10 justify-center h-[8%] pb-5">
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
        <div className="w-full flex items-center justify-center pt-5 flex-col h-auto">
          <div className="w-full z-50">
            <Image
              quality={100}
              className="flex w-full"
              src={banner}
              alt="Let's Forever"
              layout="responsive"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex items-start gap-5 w-4/5 justify-center flex-col pt-5 h-auto">
            <h1 className="text-lg font-medium">{title}</h1>
            <p className="text-base">{text}</p>
            {secondText && (
              <p className="text-base">
                {secondText}
              </p>
            )}
            {thirText && (
              <p className="text-base">
                {thirText}
              </p>
            )}
            <button
              onClick={() => {
                setBlock(false);
                return <Questions />;
              }}
              className="w-full flex items-center justify-center gap-2 bg-third-color text-second-color font-medium h-12 rounded-lg"
            >
              continuar <FaArrowRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
