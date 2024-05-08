import Image from "next/image";
import logo from "../../assets/header/logo.svg"

export default function HeaderHome(){
    return(
        <header className="h-1/5 w-full p-10">
           <div className="flex justify-center items-center w-full h-full ">
                <Image className="w-3/4 " height={100} width={100} src={logo.src} alt="logo"/>
           </div>
        </header>
    )
}