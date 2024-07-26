import Image from "next/image";
import logo from "../../assets/header/logo.svg";
import { motion } from "framer-motion";

export interface HeaderProps {
  backgroundColor: string;
}

export default function HeaderHome({backgroundColor} : HeaderProps ) {
  return (
    <header className={`h-[15%] pt-5 w-full bg-[${backgroundColor}] `}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8}} className="flex justify-start px-10 items-center w-full h-full ">
        <Image
          className="w-24 "
          height={100}
          width={100}
          src={logo.src}
          alt="logo"
        />
      </motion.div>
    </header>
  );
}
