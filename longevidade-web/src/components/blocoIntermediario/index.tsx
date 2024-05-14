import HeaderHome from "@/components/header/index";
import backgroundOne from "@/assets/home/gymImage.png";
import arvoreBranco from "@/assets/home/arvore-branca.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export interface BlockProps {
  func: () => void;
  teste: number;
}

export default function BlockIntermediario({ func, teste }: BlockProps) {
  console.log(teste);

  return (
    <div
      style={{ backgroundImage: `url(${arvoreBranco.src})` }}
      className="h-full bg-contain bg-no-repeat bg-bottom z-10 w-full overflow-hidden bg-primary-color"
    >
      <HeaderHome backgroundColor="bg-primary-color" />
      <div className="flex-col flex items-center pb-2 justify-start w-full h-3/4 ">
        <div className="w-full flex items-center px-10 justify-center h-[8%] ">
          <ul className="w-full justify-between items-center flex h-full">
            <li className="flex gap-3 items-center justify-center">
              <div className="flex items-center justify-center w-7 h-7 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
              <div className="w-12 h-[1px] bg-[#366A48]"></div>
            </li>

            <li className="flex gap-3 items-center justify-center">
              <div className="flex items-center justify-center w-7 h-7 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
              <div className="w-12 h-[1px] bg-[#366A48]"></div>
            </li>

            <li className="flex gap-3 items-center justify-center">
              <div className="flex items-center justify-center w-7 h-7 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
              <div className="w-12 h-[1px] bg-[#366A48]"></div>
            </li>
            <li className="flex gap-3 items-center justify-center">
              <div className="flex items-center justify-center w-7 h-7 bg-[#366A48] rounded-full">
                <div className="w-1/2 h-1/2 rounded-full bg-second-color"></div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full flex items-center justify-center pt-5 flex-col h-4/5 ">
          <div className="w-full  h-1/2">
            <Image
              quality={100}
              className="w-full h-full"
              src={backgroundOne.src}
              alt="Let's Forever"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-start gap-6 w-4/5 justify-center flex-col pt-5 h-1/2">
            <h1 className="text-2xl font-bold  ">
              Lorem, ipsum dolor sit amet
            </h1>
            <p className="text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              assumenda alias delectus
            </p>

            <button
              onClick={func}
              className="w-36 flex items-center justify-center gap-2 bg-third-color text-second-color font-medium h-10 rounded-lg "
            >
              continuar <FaArrowRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
