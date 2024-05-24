import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import HeaderFinal from "../headerFinal";

// Importação dinâmica do Chart com desativação da renderização no lado do servidor
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DashUser() {
  const state = {
    options: {
      chart: {
        id: "basic-bar",
        foreColor: '#373d3f'
      },
      stroke: {
        show: true,
        width: 8,
        colors: ["#366A48"],
        curve: 'smooth' as "smooth"
      },
      grid: {
        show: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal', // 'horizontal' or 'vertical'
          shadeIntensity: 0.5,
          gradientToColors: ["#366A48"], // array of colors to which the gradient transitions
          inverseColors: true,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100] // Define the posição de cada parada de cor no gradiente
        }
      }
    },
    series: [
      {
        name: "Você",
        data: [10, 15, 10, 20]
      }
    ]
  };

  return (
    <motion.div className="h-[180vh] overflow-auto w-full flex items-center gap-5 justify-start flex-col bg-primary-color ">
      <HeaderFinal backgroundColor="bg-primary-color" />
      <div className="w-[85%] flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl flex flex-col w-full gap-5 font-medium">
          Seu resultado é de:{" "}
          <span className="text-[#366A48] text-4xl font-extrabold">
            50 pontos
          </span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. 
        </p>
      </div>
      <div className="w-[85%] h-full overflow-auto flex flex-col gap-5">
        <div className="w-full p-5 h-[370px] rounded-2xl bg-second-color">
          <Chart
            options={state.options}
            series={state.series}
            type="line"
            width="300"
            height="300"
          />
        </div>
        <div className="w-full h-[370px] rounded-2xl bg-second-color"></div>
        <div className="w-full h-[370px] rounded-2xl bg-second-color"></div>
      </div>
    </motion.div>
  );
}
