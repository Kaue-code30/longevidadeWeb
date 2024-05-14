import Image from "next/image";
import HeaderHome from "../header";
import { useEffect, useState } from "react";
import heart from "@/assets/home/heart.svg";
import backgroundLast from "@/assets/home/arvore-verde.png";
import { QuestionContent, QuestionsData } from "@/interfaces/questions";
import BlockIntermediario from "../blocoIntermediario";
import JsonQuestions from "@/json/blocos.json";

export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [blocoAtual, setBlocoAtual] = useState<QuestionsData[]>(
    JsonQuestions.primeiroBloco
  );

  const [blocoOne, setBlocoOne] = useState(true);
  const [blocoTwo, setBlocoTwo] = useState(false);
  const [blocoThree, setBlocoThree] = useState(false);
  const [blocoFour, setBlocoFour] = useState(false);

  const alterarBloco = () => {
    if (blocoTwo) {
      setCurrentQuestionIndex(0);
      console.log("UM AQUI");

      setOneBlock(true);
    } else if (blocoThree) {
      console.log("DOIS AQUI");
      setCurrentQuestionIndex(0);
      setSecondBlock(true);
    }
  };

  const [oneBlock, setOneBlock] = useState(false);
  const [secondBloc, setSecondBlock] = useState(false);
  const currentQuestion = blocoAtual[currentQuestionIndex];
  const [inputValue, setInputValue] = useState("");

  const handleAnswerClick = (answer: string) => {
    if (currentQuestionIndex < blocoAtual.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (blocoOne) {
        console.log("48");

        setBlocoTwo(true);
      } else if (!blocoOne && !blocoTwo) {
        console.log("52");

        setBlocoThree(true);
        setSecondBlock(true);
      }
      alterarBloco();
    }
  };

  useEffect(() => {
    if (blocoThree) {
      console.log("olá seu macaco");

      setBlocoAtual(JsonQuestions.terceiroBloco);
    } else if (blocoTwo) {
      setBlocoAtual(JsonQuestions.segundoBloco);
      console.log("olá seu fdp");
    }
  }, [oneBlock]);

  const handleHeightInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/\D/g, "");
    inputValue = inputValue.slice(0, 4);
    if (inputValue.length > 2) {
      inputValue = `${inputValue.slice(0, 2)}.${inputValue.slice(2)}`;
    }

    setInputValue(inputValue);
  };

  const handleInpuWheightChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const sanitizedValue = event.target.value.replace(/\D/g, "");
    const limitedValue = sanitizedValue.slice(0, 3);
    setInputValue(limitedValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const setBlock = (data: boolean) => {
    setOneBlock(data);
    setSecondBlock(data);
  };

  return (
    <section
      style={{ backgroundImage: `url(${backgroundLast.src})` }}
      className="h-screen bg-no-repeat bg-contain bg-bottom w-full bg-second-color"
    >
      {oneBlock && (
        <BlockIntermediario
          arrayQuestions={blocoAtual}
          banner=""
          text="Seu IMC é: 23.1"
          title="Seu IMC é: 23.1"
          stage={1}
          setBlock={setBlock}
        />
      )}
      {secondBloc && (
        <BlockIntermediario
          arrayQuestions={blocoAtual}
          banner=""
          text="Cu assado"
          title="Seu IMC é: 23.1"
          stage={1}
          setBlock={setBlock}
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
            <>
              {currentQuestion.id_pergunta === 2 ? (
                <>
                  <input
                    type="date"
                    required={true}
                    value={inputValue}
                    onChange={handleInputChange}
                    className="border-b-[1px] border-[#D1D5DB] bg-[#0000] h-10"
                  />
                  <button
                    onClick={() => handleAnswerClick(inputValue)}
                    className={`w-36 h-10 bg-primary-color text-[#000] font-medium rounded-lg ${
                      !inputValue && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!inputValue}
                  >
                    confirmar
                  </button>
                </>
              ) : currentQuestion.id_pergunta === 3 ? (
                <>
                  <input
                    type="number"
                    required={true}
                    value={inputValue}
                    onChange={handleHeightInputChange}
                    placeholder="00,00 Mt"
                    className="border-b-[1px] px-2 border-[#D1D5DB] bg-[#0000] h-10"
                  />
                  <button
                    onClick={() => handleAnswerClick(inputValue)}
                    className={`w-36 h-10 bg-primary-color text-[#000] font-medium rounded-lg ${
                      !inputValue && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!inputValue}
                  >
                    confirmar
                  </button>
                </>
              ) : currentQuestion.id_pergunta === 4 ? (
                <>
                  <input
                    type="number"
                    required={true}
                    value={inputValue}
                    onChange={handleInpuWheightChange}
                    placeholder="85 Kg"
                    maxLength={3}
                    size={3}
                    className="border-b-[1px] px-2 border-[#D1D5DB] bg-[#0000] h-10"
                  />

                  <button
                    onClick={() => handleAnswerClick(inputValue)}
                    className={`w-36 h-10 bg-primary-color text-[#000] font-medium rounded-lg ${
                      !inputValue && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!inputValue}
                  >
                    confirmar
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  key={index}
                  onClick={() => handleAnswerClick(data.valor.toString())}
                  className={`${
                    data.resposta.length > 10 ? "h-16 px-2" : "h-16"
                  } w-full h-10 rounded-lg bg-primary-color text-black`}
                >
                  {data.resposta}
                </button>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
