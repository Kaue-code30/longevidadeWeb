import Image from "next/image";
import HeaderHome from "../header";
import { useEffect, useState } from "react";
import heart from "@/assets/home/heart.svg";
import backgroundLast from "@/assets/home/arvore-verde.png";
import { QuestionContent } from "@/interfaces/questions";
import BlockIntermediario from "../blocoIntermediario";

export default function Questions({ content }: QuestionContent) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [oneBlock, setOneBlock] = useState(false);
  const currentQuestion = content[currentQuestionIndex];
  const [inputValue, setInputValue] = useState("");

  const handleAnswerClick = (answer: number) => {
    console.log(answer);
    
    setOneBlock(false);
    if (currentQuestionIndex < content.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Todas as perguntas foram respondidas");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const renderInput = () => {
    if (currentQuestion.descricao.includes("idade")) {
      return (
        <input type="date" value={inputValue} onChange={handleInputChange} />
      );
    } else if (
      currentQuestion.descricao.includes("peso") ||
      currentQuestion.descricao.includes("altura")
    ) {
      return (
        <input type="number" value={inputValue} onChange={handleInputChange} />
      );
    } else {
      return null;
    }
  };

  const setBlock = () => {
    setOneBlock(currentQuestionIndex === 6);
  };
  
  
  useEffect(() => {
    setBlock();
  }, [currentQuestionIndex]);

  return (
    <section
      style={{ backgroundImage: `url(${backgroundLast.src})` }}
      className="h-screen bg-no-repeat bg-contain bg-bottom w-full bg-second-color"
    >
      {oneBlock && (
        <BlockIntermediario
          teste={currentQuestion.id_pergunta}
          func={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        />
      )}
      <HeaderHome backgroundColor="#FFF" />
      <div className="w-full h-full">
        <div className="w-full flex justify-start items-center px-10 h-[10%]">
          <div className="w-16 h-16 flex items-center justify-center bg-second-color border shadow-lg rounded-full">
            <h1 className="text-2xl font-black">
              {currentQuestion.id_pergunta}
            </h1>
            <Image
              className={`absolute w-16 ml-24 ${oneBlock ? "hidden" : "flex"}`}
              src={heart}
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full px-10 h-full">
          <h1 className="text-3xl font-bold">{currentQuestion.descricao}</h1>
          {currentQuestion.respostas.map((data, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(data.valor)}
              className={`${data.resposta.length > 10 ? "h-16 px-2" : "h-16"} w-full h-10 rounded-lg bg-primary-color text-black`}
            >
              {data.resposta}
            </button>
          ))}
          {renderInput()}
        </div>
      </div>
    </section>
  );
}
