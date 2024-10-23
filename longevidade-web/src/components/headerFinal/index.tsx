import Image from "next/image";
import logo from "../../assets/header/logo.svg";
import { motion } from "framer-motion";

export interface HeaderProps {
  backgroundColor: string;
}

export default function HeaderFinal({backgroundColor} : HeaderProps ) {
  return (
    <header className={`h-[150px] w-full bg-[${backgroundColor}] `}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}} className="flex justify-center px-10 items-center w-full h-full ">
        <Image
          className="w-28 "
          height={100}
          width={100}
          src={logo.src}
          alt="logo"
        />
      </motion.div>
    </header>
  );
}
