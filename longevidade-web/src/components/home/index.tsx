"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerHome from "@/assets/home/bannerHome.svg";
import logo from "@/assets/header/logo.png";
import backgroundLast from "@/assets/home/arvore-verde.png";
import { motion } from "framer-motion";
import { useState } from "react";
import Questions from "../questions";

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
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:'center'}} className=" px-8 h-full ">
              <div className="flex items-center pt-5 justify-center w-full h-[150px]">
                <Image className="w-[150px]" alt="" width={100} height={100} src={logo} />
              </div>
              <div className="flex text-center justify-start flex-col gap-5 pt-20 h-full w-full">
                <h1 className="text-2xl font-bold">
                  Conheça a sua saúde!
                </h1>
                <div className="flex items-center pt-5 justify-center w-full h-1/4">
                  <Image className="w-3/4" alt="" width={100} height={100} src={bannerHome} />
                </div>
                <h2 className="text-center pt-5 text-base">
                  Responda a esse questionário e receba na hora seu score de saúde.
                </h2>
                <h2 className="text-center text-base">
                  <span className="font-medium">
                    É grátis
                  </span>  e você ainda ganha o quanto seu score pode melhorar com ajustes no seu estilo de vida.
                </h2>
                <button onClick={() => setQuestionsInit(true)} className="w-full  h-10 flex items-center justify-center text-second-color gap-2 rounded-lg bg-third-color">começar agora <FaArrowRightLong/> </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
