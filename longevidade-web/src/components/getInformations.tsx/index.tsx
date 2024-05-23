import arvoreBranco from "@/assets/home/arvore-branca.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import bannerInformations from "@/assets/getInformations.svg";
import { Userdata } from "@/interfaces/userData";
import HeaderFinal from "../headerFinal";
import userAdd from "@/assets/user-add.svg";
import mail from "@/assets/mail.svg";
import Link from "next/link";

export interface BlockProps {
  userData: Userdata;
}

export default function GetInformations({ userData }: BlockProps) {
  return (
    <div
      style={{ backgroundImage: `url(${arvoreBranco.src})` }}
      className="h-full flex items-center justify-center flex-col bg-contain bg-no-repeat bg-bottom z-10 w-full overflow-hidden bg-second-color"
    >
      <HeaderFinal backgroundColor="bg-second-color" />
      <div className="flex-col flex items-center pb-2 justify-start pt-20 w-full h-full ">
        <div className="w-full flex items-center justify-center  flex-col h-4/5 ">
          <div className="w-full flex items-center justify-center  h-1/2">
            <Image
              quality={100}
              className="w-[78%] flex items-center justify-center h-full"
              src={bannerInformations}
              alt="Let's Forever"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-start gap-6 w-4/5 justify-start pt-4 flex-col h-[42,5%]]">
            <h1 className="text-[26px] text-left font-medium  ">
              Informe seu nome e e-mail para ter acesso ao seu resultado.
            </h1>
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
                className="bg-[#0000] border-b-[2px] focus-within:border-[#0000] border-[#D1D5DB] text-gray-900 text-sm block w-full ps-10 p-2.5"
                placeholder="Seu e-mail"
              />
            </div>
            <button
              onClick={() => {}}
              className="w-full flex items-center justify-center gap-2 bg-third-color text-second-color font-medium h-12 rounded-lg "
            >
              confirmar e acessar <FaArrowRight className="text-lg" />
            </button>
            <Link
              className="w-full flex items-center justify-center font-medium"
              href={""}
            >
              {" "}
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
