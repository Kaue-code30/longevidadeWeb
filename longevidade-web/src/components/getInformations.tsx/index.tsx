import arvoreBranco from "@/assets/home/arvore-branca.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import bannerInformations from "@/assets/getInformations.svg";
import { ResponseAPI, Userdata } from "@/interfaces/userData";
import HeaderFinal from "../headerFinal";
import userAdd from "@/assets/user-add.svg";
import mail from "@/assets/mail.svg";
import Link from "next/link";
import { useState } from "react";
import { useClientData } from "@/hooks/userData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { motion } from "framer-motion";
import DashUser from "../dashUser";

export interface BlockProps {
  userData: Userdata;
}

export default function GetInformations({ userData }: BlockProps) {
  const [emailUser, setEmailUser] = useState("");
  const [nameUser, setNameUser] = useState("");
  const { mutate, isPending, isSuccess, response } = useClientData();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailUser(event.target.value);
  };
  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameUser(event.target.value);
  };

  const objectPost = () => {
    const userPost: Userdata = {
      nome: nameUser,
      email: emailUser,
      idade: Number(userData.idade),
      genero: userData.genero,
      dataNascimento: userData.dataNascimento,
      peso: userData.peso,
      altura: userData.altura,
      pergunta_5: userData.pergunta_5,
      pergunta_6: userData.pergunta_6,
      pergunta_7: userData.pergunta_7,
      pergunta_8: userData.pergunta_8,
      pergunta_10: userData.pergunta_10,
      pergunta_11: userData.pergunta_11,
      pergunta_12: userData.pergunta_12,
      pergunta_13: userData.pergunta_13,
      pergunta_14: userData.pergunta_14,
      pergunta_15: userData.pergunta_15,
      pergunta_16: userData.pergunta_16,
      pergunta_17: userData.pergunta_17,
      pergunta_18: userData.pergunta_18,
      pergunta_19: userData.pergunta_19,
      pergunta_20: userData.pergunta_20,
      pergunta_21: userData.pergunta_21,
      pergunta_22: userData.pergunta_22,
      pergunta_23: userData.pergunta_23,
      pergunta_24: userData.pergunta_24,
      pergunta_25: userData.pergunta_25,
      pergunta_26: userData.pergunta_26,
      pergunta_27: userData.pergunta_27,
      pergunta_28: userData.pergunta_28,
    };

    mutate(userPost);
  };

  return (
    <QueryClientProvider client={new QueryClient()}>
      {response?.data.porcentagem_atual && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 10 }}
          transition={{ duration: 1 }}
        >
          <DashUser
            porcentagem_atual={Number(
              response?.data.porcentagem_atual.toFixed(2)
            )}
            projecao_30_dias={Number(
              response?.data.projecao_30_dias?.toFixed(2)
            )}
            projecao_60_dias={response?.data.projecao_60_dias}
          />
        </motion.div>
      )}
      <div
        className={` ${response?.data.porcentagem_atual ? "[display:none]" : ""
          } w-full h-full overflow-hidden`}
      >
        <div
          style={{ backgroundImage: `url(${arvoreBranco.src})` }}
          className={`h-full items-center justify-center ${response?.data.porcentagem_atual ? "[display:none]" : "flex"
            } flex-col gap-3 bg-contain bg-no-repeat bg-bottom z-10 w-full pb-10  bg-second-color`}
        >
          {isPending && (
            <div className="w-full flex items-center justify-center absolute z-10  h-screen bg-[#00000068]">
              <motion.div className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10">
                <motion.div
                  className="w-14 h-14 border-third-color  border-b-[3px] bg-transparent"
                  animate={{
                    rotate: [0, 90, 180, 360],
                    borderRadius: ["100%"],
                  }}
                  transition={{
                    duration: 0.5,

                    repeat: Infinity,
                  }}
                ></motion.div>
              </motion.div>
            </div>
          )}

          <HeaderFinal backgroundColor="bg-second-color" />
          <div className="flex-col flex items-center pb-2 justify-start w-full h-full ">
            <div className="w-full flex items-center flex-col h-4/5 ">
              <div className="w-full flex items-center justify-center  h-1/2">
                <Image
                  quality={100}
                  className="w-[60%] flex items-center justify-center"
                  src={bannerInformations}
                  alt="Let's Forever"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex items-start gap-6 w-4/5 justify-start pt-4 flex-col h-[42,5%]]">
                <h1 className="text-[24px] text-center   font-medium  ">
                  Receba agora mesmo seu resultado. É grátis!
                </h1>
                <p className="text-center">
                  Informe seu nome e e-mail para acessar seu <span className="font-medium">ESCORE DE SAÚDE.</span>
                </p>
                <div className="relative w-full ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <Image
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      src={userAdd}
                      alt="Insira seu nome"
                      width={20}
                      height={20}
                    />
                  </div>
                  <input
                    value={nameUser}
                    onChange={handleName}
                    type="text"
                    id="input-group-1"
                    className="bg-[#0000] border-b-[2px] focus-within:border-[#0000] border-[#D1D5DB] text-gray-900 text-sm block w-full ps-10 p-2.5"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="relative w-full ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <Image
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      src={mail}
                      alt="Insira seu endereço de e-mail"
                      width={20}
                      height={20}
                    />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    value={emailUser}
                    onChange={handleEmail}
                    className="bg-[#0000] border-b-[2px] focus-within:border-[#0000] border-[#D1D5DB] text-gray-900 text-sm block w-full ps-10 p-2.5"
                    placeholder="Seu e-mail"
                  />
                </div>
                {response?.data.status === 404 && <p className="text-[#ff00009f]">O e-mail informado já está cadastrado! Por favor, utilize outro e-mail.</p>}

                <button
                  onClick={() => objectPost()}
                  className="w-full flex items-center justify-center gap-2 bg-third-color text-second-color font-medium h-12 rounded-lg "
                >
                  confirmar e acessar <FaArrowRight className="text-lg" />
                </button>
                <p className="text-center">
                  Ao clicar em confirmar você aceita nossa<Link
                    className="w-full flex items-center justify-center font-medium"
                    href={"/politica-privacidade"}
                    target="_blank"
                  >
                    {" "}
                    Política de Privacidade.
                  </Link>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
