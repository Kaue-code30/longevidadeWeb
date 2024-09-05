"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "@/assets/header/logo.png";
import { useState } from "react";
import Questions from "../questions";
import bannerHome from "@/assets/home/banneHome.png"

export default function Home() {
  const [questionsInit, setQuestionsInit] = useState(false);

  const handleQuestionInit = () => {
    setQuestionsInit(!questionsInit);
  };

  return (
    <section className="flex flex-col justify-center overflow-hidden gap-10 items-center w-full h-[100vh]">
      {questionsInit ? (
        <Questions />
      ) : (
        <>
          <div className="flex flex-col w-full h-full justify-end items-center">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center' }} className=" px-8 pt-2 w-full h-full ">
              <div className="flex items-center justify-center w-full h-[100px]">
                <Image className="w-[140px]" alt="" width={100} height={100} src={logo} />
              </div>
              <div className="flex text-center items-center justify-start flex-col gap-5 pt-10 h-full w-full">
                <h1 className="text-2xl text-black font-medium">
                  Conheça a sua saúde!
                </h1>
                <div className="flex flex-col items-center  w-full  h-[300px]  rounded-lg">
                  
                  <Image
                    quality={100}
                    className="flex w-full "
                    src={bannerHome.src}
                    alt="Let's Forever"
                    layout="responsive"
                    width={100}
                    height={100}
                  />
                  <div className="flex h-[100px] rounded-b-2xl p-2 -mt-5 w-[98%] items-center bg-second-color  justify-center">
                    <p className="text-black text-sm font-medium">
                      Responda a esse questionário e receba na hora seu <span className="uppercase font-bold text-third-color">score de saúde</span>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                  <p className="text-sm text-black">
                    <span className="font-medium">É grátis </span>e você ainda ganha o quanto seu SCORE pode melhorar com ajustes no seu estilo de vida.
                  </p>
                  <button onClick={() => setQuestionsInit(true)} className="w-full  h-10 flex items-center justify-center text-second-color gap-2 rounded-lg bg-third-color">começar agora <FaArrowRightLong /> </button>
                  <p className="text-xs opacity-85">
                    Tempo aproximado de 3 minutos para responder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
