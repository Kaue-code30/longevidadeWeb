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
    <section className="flex justify-center items-center flex-col w-full h-screen">
      {questionsInit ? (
        <Questions />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center pt-10 px-10 justify-center w-full h-auto"
          >
            <Image
              className="w-3/4"
              src={logo}
              alt="Let's Go Forever Image"
              width={100}
              height={100}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[70%] gap-6 px-10 flex items-center justify-center flex-col"
          >
            <motion.h1
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-medium text-center w-full"
            >
              Conheça a sua saúde!
            </motion.h1>
            <Image
              className="w-4/5"
              src={bannerHome}
              alt="Let's Go Forever Image"
              width={100}
              height={100}
            />

            <motion.p
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg text-center font-normal"
            >
              Responda a esse questionário e receba na hora seu <span className="text-[#ff4f4f]">score de saúde</span>
            </motion.p>
            <motion.p
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className=" text-center text-lg font-normal"
            >
              <span className="text-[#ff4f4f]" >É gratis</span>   e você ainda ganha o quanto seu score pode melhorar com ajustes no seu estilo de vida.
            </motion.p>
          </motion.div>
          <div
            className="h-1/5 flex px-10 items-start justify-center bg-second-color bg-no-repeat bg-cover w-full"
            style={{ backgroundImage: `url(${backgroundLast.src})` }}
          >
            <motion.button
              onClick={() => handleQuestionInit()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full shadow-md flex items-center justify-center gap-2 h-12 bg-third-color rounded-lg text-second-color font-medium -mt-3"
            >
              {questionsInit ? "Voltar" : "Começar agora"}{" "}
              <FaArrowRightLong className="text-xl" />
            </motion.button>
          </div>
        </>
      )}
    </section>
  );
}
