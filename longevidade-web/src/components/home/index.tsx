import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import bannerHome from "@/assets/home/bannerHome.svg";
import logo from "@/assets/header/logo.png";
import backgroundLast from "@/assets/home/arvore-verde.png"

export default function Home() {
  return (
    <section className="flex justify-center items-center pt-10 overflow-hidden flex-col w-full h-screen">
      <div className="flex items-center px-10 justify-center w-full h-auto">
        <Image
          className="w-3/4"
          src={logo}
          alt="Let's Go Forever Image"
          width={100}
          height={100}
        />
      </div>
      <div className="w-full h-[70%] gap-6 px-10 flex items-center justify-center flex-col">
        <Image
          className="w-full"
          src={bannerHome}
          alt="Let's Go Forever Image"
          width={100}
          height={100}
        />
        <h1 className="text-3xl font-bold text-center w-full">Protocolo Let's Go Forever 60 dias</h1>
        <p className="text-base text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
      </div>
      <div className="h-1/5 flex px-10 items-start justify-center bg-second-color bg-no-repeat bg-cover w-full" style={{backgroundImage:`url(${backgroundLast.src})`}}>
            <button className="w-full flex items-center justify-center gap-2 h-10 bg-third-color rounded-lg text-second-color font-medium -mt-3" >
                começar agora <FaArrowRightLong className="text-xl"/>
            </button>
      </div>
    </section>
  );
}
