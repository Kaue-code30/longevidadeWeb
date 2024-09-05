import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import HeaderFinal from "../headerFinal";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRight, FaCircleArrowDown } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import bannerCard from "@/assets/card-header.png";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { ResponseAPI } from "@/interfaces/userData";

// Importação dinâmica do Chart com desativação da renderização no lado do servidor
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DashUser({ porcentagem_atual, projecao_30_dias, projecao_60_dias }: ResponseAPI) {


  const state = {
    options: {
      chart: {
        id: "basic-bar",
        foreColor: "#373d3f",
      },
      colors: ["#366A48"], // Define a cor das séries
      stroke: {
        show: true,
        width: 8,
        colors: ["#366A48"],
        curve: "smooth" as "smooth",
      },
      grid: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal", // 'horizontal' or 'vertical'
          shadeIntensity: 0.5,
          gradientToColors: ["#366A48"], // array of colors to which the gradient transitions
          inverseColors: true,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100], // Define the posição de cada parada de cor no gradiente
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        theme: "dark", // ou 'light' para uma aparência clara
        style: {
          fontSize: "1px",
          fontFamily: "Poppins",
        },
        onDatasetHover: {
          highlightDataSeries: true,
        },
        marker: {
          show: true,
        },
        x: {
          show: false, // ou true para mostrar
        },
        z: {
          formatter: undefined,
          title: "Size: ",
        },
        fixed: {
          enabled: false,
          position: "Left",
          offsetX: 0,
          offsetY: 0,
        },
      },
    },
    series: [
      {
        name: "Você",
        data: [
          { x: 1, y: Number(porcentagem_atual), label: 'Ponto 1' },
          { x: 2, y: Number(projecao_30_dias), label: 'Ponto 2' },
          { x: 3, y: Number(projecao_60_dias?.toFixed(0)), label: 'Ponto 3' }
        ],
      },
    ]
  };

  return (
    <motion.div className="max-h-[300vh] pb-32 overflow-auto w-full flex items-center gap-5 justify-start flex-col bg-primary-color ">
      <HeaderFinal backgroundColor="bg-primary-color" />
      <div className="w-full h-32 pt-6 flex items-start fixed top-[87.8%] z-50 justify-center bg-third-color">
        <button className="flex items-center justify-center w-4/5 bg-[#366A48] h-10 rounded-lg text-second-color gap-2">assinar plano agora <FaArrowRight className="font-medium text-second-color" /></button>
      </div>
      <div className="w-[85%] flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl flex flex-col w-full font-medium">
          Considerando suas  respostas sobre seu histórico familiar, pessoal e de hábitos de vida, seu <span className="text-[#366A48] font-semibold">SCORE DE SAÚDE</span>  atual é de:
        </h1>
      </div>
      <div className="w-[85%] h-full overflow-hidden flex flex-col gap-5">
        <div className="w-full flex flex-col justify-center items-start gap-3 pt-8 p-5 h-[400px] rounded-2xl bg-second-color">
          <h1 className="text-[#366A48] text-2xl font-extrabold">{porcentagem_atual} Pts</h1>
          <h2 className="w-4/5">Você pode subir {(projecao_30_dias && porcentagem_atual) ? (Number(projecao_30_dias.toFixed(2)) - Number(porcentagem_atual.toFixed(2))).toFixed(2) : ""} pontos em 30 dias</h2>
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="280"
            height="250"
          />
        </div>
        <div className="w-full h-auto py-10 p-5 flex flex-col gap-4 rounded-2xl bg-second-color">
          <h1 className="text-[#366A48] text-2xl font-medium w-4/5">
            Protocolo Let’s Go Forever 60 dias
          </h1>
          <div className="flex items-end gap-2 justify-start">
            <h2 className="font-bold text-5xl">R$ 00,00</h2>
            <h2 className="text-lg">/mês</h2>
          </div>
          <ul className="flex flex-col gap-4">
            <li>
              <span className="flex gap-2 items-center">
                <IoIosCheckmarkCircle size={"20px"} fill="#366A48" />
                <h3>Lorem Ipsum is simply</h3>
              </span>
            </li>
            <li>
              <span className="flex gap-2 items-center">
                <IoIosCheckmarkCircle size={"20px"} fill="#366A48" />
                <h3>Lorem Ipsum is simply</h3>
              </span>
            </li>
            <li>
              <span className="flex gap-2 items-center">
                <IoIosCheckmarkCircle size={"20px"} fill="#366A48" />
                <h3>Lorem Ipsum is simply</h3>
              </span>
            </li>
            <li>
              <span className="flex gap-2 items-center">
                <IoIosCheckmarkCircle size={"20px"} fill="#366A48" />
                <h3>Lorem Ipsum is simply</h3>
              </span>
            </li>
            <li>
              <span className="flex gap-2 items-center">
                <IoIosCheckmarkCircle size={"20px"} fill="#366A48" />
                <h3>Lorem Ipsum is simply</h3>
              </span>
            </li>
            <li>
              <span className="flex gap-2 items-center">
                <IoIosCheckmarkCircle size={"20px"} fill="#366A48" />
                <h3>Lorem Ipsum is simply</h3>
              </span>
            </li>
          </ul>
          <Link className="w-full" href={""}>
            <button className="flex items-center justify-center gap-3 w-full h-12 rounded-lg text-[#FFF] bg-third-color">
              {" "}
              assinar plano agora <FaArrowRight size={"20px"} />{" "}
            </button>
          </Link>
        </div>
        <div className="w-full h-[550px] gap-10 rounded-2xl bg-second-color">
          <div className="w-full h-2/5 rounded-t-2xl">
            <Image
              className="w-full rounded-t-2xl"
              src={bannerCard.src}
              width={100}
              height={100}
              alt="Let's go Forever"
            />
          </div>
          <div className="flex w-full h-auto pt-5  flex-col gap-3 p-5">
            <h2 className="text-2xl text-[#366A48] font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Link className="w-full" href={""}>
              <button className="flex items-center justify-center gap-3 w-full h-12 rounded-lg text-[#FFF] bg-third-color">
                {" "}
                faça download agora <IoArrowDownCircleOutline
                  size={"20px"}
                  fontWeight={"bold"}
                />{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
