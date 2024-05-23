import Image from "next/image";
import HeaderHome from "../header";
import { useEffect, useState } from "react";
import heart from "@/assets/home/heart.svg";
import backgroundLast from "@/assets/home/arvore-verde.png";
import { QuestionsData } from "@/interfaces/questions";
import BlockIntermediario from "../blocoIntermediario";
import JsonQuestions from "@/json/blocos.json";
import bannerOneBlock from "@/assets/BlocoIntermediario/oneBlock.png";
import bannerTwoBlock from "@/assets/home/gymImage.png";
import bannerThreeBlock from "@/assets/BlocoIntermediario/thirdBlock.png";
import bannerFour from "@/assets/BlocoIntermediario/fourthBlock.png";
import { Userdata } from "@/interfaces/userData";
import { answersData } from "@/interfaces/answer";
import { motion } from "framer-motion";
import BlockEncerramento from "../blocoEncerramento";

export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [blocoAtual, setBlocoAtual] = useState<QuestionsData[]>(
    JsonQuestions.primeiroBloco
  );
  const [blocoOne, setBlocoOne] = useState(true);
  const [blocoTwo, setBlocoTwo] = useState(false);
  const [blocoThree, setBlocoThree] = useState(false);
  const [blocoFour, setBlocoFour] = useState(false);
  const [blocoFive, setBlocoFive] = useState(false);
  const [oneBlock, setOneBlock] = useState(false);
  const [secondBloc, setSecondBlock] = useState(false);
  const [thirdBlco, setThirdBlock] = useState(false);
  const [fourthBlco, setFourthBlock] = useState(false);
  const currentQuestion = blocoAtual[currentQuestionIndex];
  const [inputValue, setInputValue] = useState("");
  const [inputValueAltura, setInputValueAltura] = useState(Number);
  const [inputValuePeso, setInputValuePeso] = useState(Number);
  const [userData, setUserData] = useState<Userdata>({});
  const [finshe, setFinshe] = useState(false)

  const calculateImc = () => {
    const peso = userData.peso;
    const altura = userData.altura;
    const imc = peso && altura ? peso / (altura * altura) : 0;
    let result;
    if (imc < 18.5) {
      result = {
        imc: imc.toFixed(2),
        descricao: "Magreza",
      };
    } else if (imc > 18.5 || imc <= 24.9) {
      result = {
        imc: imc.toFixed(2),
        descricao: "Normal",
      };
    } else if (imc > 24.9 || imc <= 29.9) {
      result = {
        imc: imc.toFixed(2),
        descricao: "Sobrepeso",
      };
    } else if (imc > 29.9 || imc <= 39.9) {
      result = {
        imc: imc.toFixed(2),
        descricao: "Obesidade",
      };
    } else if (imc > 39.9) {
      result = {
        imc: imc.toFixed(2),
        descricao: "Obesidade grave",
      };
    }
    return result;
  };

  const calculateAge = (birthdate: any) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleAnswerClick = ({
    answerNumber,
    answer,
    numberQuestion,
    perguntaNumber,
  }: answersData) => {
    verifiedAnswers({ answerNumber, answer, numberQuestion, perguntaNumber });

    if (perguntaNumber === 21 && calculateAge(userData.idade) < 40) {
      setFourthBlock(true);
      setBlocoFour(false);
      setBlocoFive(true);
      setCurrentQuestionIndex(0);
    } else if (
      perguntaNumber === 20 &&
      calculateAge(userData.idade) >= 45 &&
      userData.genero === "Masculino"
    ) {
      setFourthBlock(true);
      setBlocoFour(false);
      setBlocoFive(true);
      setCurrentQuestionIndex(0);
    } else if (currentQuestionIndex < blocoAtual.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (blocoOne) {
        setOneBlock(true);
        setBlocoOne(false); // desativa blocoOne
        setBlocoTwo(true); // ativa blocoTwo
      } else if (blocoTwo) {
        setSecondBlock(true);
        setBlocoTwo(false); // desativa blocoTwo
        setBlocoThree(true); // ativa blocoThree
      } else if (blocoThree) {
        if (
          perguntaNumber === 24 &&
          calculateAge(userData.idade) < 45 &&
          userData.genero === "Masculino"
        ) {
          setThirdBlock(true);
          setBlocoThree(false);
          setBlocoFive(true);
        } else {
          setThirdBlock(true);
          setBlocoThree(false);
          setBlocoFour(true);
        }
      } else if (blocoFour) {
        setFourthBlock(true);
        setBlocoFour(false);
        setBlocoFive(true);
      }
       else if (blocoFive) {
        setFourthBlock(false);
        setBlocoFour(false);
        setBlocoFive(false);
        setFinshe(true)
      }

      if (
        perguntaNumber === 24 &&
        userData.genero === "Feminino" &&
        calculateAge(userData.idade) >= 15
      ) {
        setCurrentQuestionIndex(2);
      } else if (perguntaNumber === 21 && calculateAge(userData.idade) >= 40) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setCurrentQuestionIndex(0);
      }
    }
  };

  useEffect(() => {
    if (blocoFive) {
      setBlocoAtual(JsonQuestions.quintoBloco);
    } else if (blocoFour) {
      setBlocoAtual(JsonQuestions.quartoBloco);
    } else if (blocoThree) {
      setBlocoAtual(JsonQuestions.terceiroBloco);
    } else if (blocoTwo) {
      setBlocoAtual(JsonQuestions.segundoBloco);
    }
  }, [blocoTwo, blocoThree, blocoFour]);

  const handleHeightInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputValue = event.target.value;

    // Remover caracteres que não sejam dígitos ou ponto decimal
    inputValue = inputValue.replace(/[^\d.]/g, "");

    // Dividir a parte inteira e decimal
    const [integerPart, decimalPart] = inputValue.split(".");

    // Limitar a parte inteira a dois dígitos
    let formattedIntegerPart = integerPart.slice(0, 2);

    // Adicionar zeros à parte decimal se necessário para garantir dois dígitos
    let formattedDecimalPart = decimalPart
      ? decimalPart.padEnd(2, "0").slice(0, 2)
      : "00";

    // Se houver parte decimal, adicionar o ponto decimal
    if (formattedDecimalPart !== "00") {
      formattedDecimalPart = "." + formattedDecimalPart;
    } else {
      formattedDecimalPart = "";
    }

    // Montar o valor formatado
    const formattedValue = formattedIntegerPart + formattedDecimalPart;

    // Definir o valor formatado no estado ou realizar outra ação, como atualização de estado
    setInputValueAltura(Number(formattedValue));
  };

  const handleWheigthInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^\d.]/g, "");

    setInputValuePeso(Number(inputValue));
  };

  const verifiedAnswers = ({
    answerNumber,
    answer,
    numberQuestion,
    perguntaNumber,
  }: answersData) => {
    const updatedUserData: Userdata = { ...userData };

    switch (numberQuestion) {
      case 1:
        updatedUserData.genero = answer;
        break;
      case 2:
        updatedUserData.idade = answerNumber;
      case 3:
        updatedUserData.altura = inputValueAltura;
      case 4:
        updatedUserData.peso = inputValuePeso;
      case 5:
        updatedUserData.pergunta_5 = parseInt(answerNumber);
      case 6:
        updatedUserData.pergunta_6 = parseInt(answerNumber);
      case 7:
        updatedUserData.pergunta_7 = parseInt(answerNumber);
      case 8:
        updatedUserData.pergunta_8 = parseInt(answerNumber);
      case 9:
        if (updatedUserData.peso && updatedUserData.altura) {
          updatedUserData.pergunta_9 =
            updatedUserData.peso / (updatedUserData.altura * 2);
        }
      case 10:
        updatedUserData.pergunta_10 = parseInt(answerNumber);
      case 11:
        updatedUserData.pergunta_11 = parseInt(answerNumber);
      case 12:
        updatedUserData.pergunta_12 = parseInt(answerNumber);
      case 13:
        updatedUserData.pergunta_13 = parseInt(answerNumber);
      case 14:
        updatedUserData.pergunta_14 = parseInt(answerNumber);
      case 15:
        updatedUserData.pergunta_15 = parseInt(answerNumber);
      case 16:
        updatedUserData.pergunta_16 = parseInt(answerNumber);
      case 17:
        updatedUserData.pergunta_17 = parseInt(answerNumber);
      case 18:
        updatedUserData.pergunta_18 = parseInt(answerNumber);
      case 19:
        if (perguntaNumber === 19) {
          updatedUserData.pergunta_19 = parseInt(answerNumber);
        } else {
          updatedUserData.pergunta_19 = null;
        }

      case 20:
        if (perguntaNumber === 20) {
          updatedUserData.pergunta_20 = parseInt(answerNumber);
        } else {
          updatedUserData.pergunta_20 = null;
        }
      case 21:
        if (perguntaNumber === 21) {
          updatedUserData.pergunta_21 = parseInt(answerNumber);
        } else {
          updatedUserData.pergunta_21 = null;
        }
      case 22:
        if (perguntaNumber === 22) {
          updatedUserData.pergunta_22 = parseInt(answerNumber);
        } else {
          updatedUserData.pergunta_22 = null;
        }
      case 23:
        updatedUserData.pergunta_23 = parseInt(answerNumber);
      case 24:
        updatedUserData.pergunta_24 = parseInt(answerNumber);
      case 25:
        updatedUserData.pergunta_25 = parseInt(answerNumber);
      case 26:
        updatedUserData.pergunta_26 = parseInt(answerNumber);
      case 27:
        updatedUserData.pergunta_27 = parseInt(answerNumber);
      default:
        break;
    }

    setUserData(updatedUserData);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const setBlock = (data: boolean) => {
    setOneBlock(data);
    setSecondBlock(data);
    setThirdBlock(data);
    setFourthBlock(data);
  };

  return (
    <motion.section
      style={{ backgroundImage: `url(${backgroundLast.src})` }}
      className="h-full bg-no-repeat bg-contain bg-bottom w-full bg-second-color"
    >
      {oneBlock && (
        <BlockIntermediario
          arrayQuestions={blocoAtual}
          banner={bannerOneBlock.src}
          title={`Seu IMC é: ${calculateImc()?.imc}`}
          text={`A descrição do seu IMC é: ${calculateImc()?.descricao}`}
          stage={1}
          setBlock={setBlock}
        />
      )}
      {secondBloc && (
        <BlockIntermediario
          arrayQuestions={blocoAtual}
          banner={bannerTwoBlock.src}
          text="Cu assado"
          title="Seu IMC é: 23.1"
          stage={2}
          setBlock={setBlock}
        />
      )}
      {thirdBlco && (
        <BlockIntermediario
          arrayQuestions={blocoAtual}
          banner={bannerThreeBlock.src}
          text="Cu do cleiton ta assado"
          title="Seu IMC é: 23.1"
          stage={3}
          setBlock={setBlock}
        />
      )}
      {fourthBlco && (
        <BlockIntermediario
          arrayQuestions={blocoAtual}
          banner={bannerFour.src}
          text="Quarto bloco"
          title="Seu IMC é: 23.1"
          stage={4}
          setBlock={setBlock}
        />
      )}
      {(finshe && (
        <BlockEncerramento userData={userData}  stage={4} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " title="Você completou todas as etapas."  />
      ))}

      <HeaderHome backgroundColor="#FFF" />
      <div className="w-full h-full">
        <div className="w-full flex justify-start items-center px-10 h-[10%]">
          <div className="w-16 h-16 flex items-center justify-center bg-second-color border shadow-lg rounded-full">
            <h1 className="text-2xl font-black">
              {currentQuestion && currentQuestion.id_pergunta}
            </h1>
            <Image
              className={`${finshe === true ? "[display:none]":""} absolute w-16 ml-24 ${oneBlock && finshe ? "hidden" : "flex"}`}
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
              {currentQuestion.descricao.startsWith(
                "Qual sua data de nascimento?"
              ) ? (
                <>
                  <input
                    key={index}
                    type="date"
                    required={true}
                    value={inputValue}
                    onChange={handleInputChange}
                    className="border-b-[1px] border-[#D1D5DB] bg-[#0000] h-10"
                  />
                  <button
                    onClick={() =>
                      handleAnswerClick({
                        answerNumber: inputValue,
                        numberQuestion: currentQuestion.pergunta,
                        perguntaNumber: currentQuestion.pergunta,
                      })
                    }
                    className={`w-36 h-10 bg-primary-color text-[#000] font-medium rounded-lg ${
                      !inputValue && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!inputValue}
                  >
                    confirmar
                  </button>
                </>
              ) : currentQuestion.descricao.startsWith(
                  "Qual sua altura (em metros)?"
                ) ? (
                <>
                  <input
                    type="number"
                    required={true}
                    value={inputValueAltura}
                    onChange={handleHeightInputChange}
                    placeholder="00,00 Mt"
                    className="border-b-[1px] px-2 border-[#D1D5DB] bg-[#0000] h-10"
                  />
                  <button
                    onClick={() =>
                      handleAnswerClick({
                        answerNumber: inputValue,
                        numberQuestion: currentQuestion.pergunta,
                        perguntaNumber: currentQuestion.pergunta,
                      })
                    }
                    className={`w-36 h-10 bg-primary-color text-[#000] font-medium rounded-lg ${
                      !inputValue && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!inputValue}
                  >
                    confirmar
                  </button>
                </>
              ) : currentQuestion.descricao.startsWith(
                  "Quanto você acredita que pesa atualmente(em kg)?"
                ) ? (
                <>
                  <input
                    type="number"
                    required={true}
                    value={inputValuePeso}
                    onChange={handleWheigthInputChange}
                    placeholder="85 Kg"
                    maxLength={3}
                    size={3}
                    className="border-b-[1px] px-2 border-[#D1D5DB] bg-[#0000] h-10"
                  />

                  <button
                    onClick={() =>
                      handleAnswerClick({
                        answerNumber: inputValue,
                        numberQuestion: currentQuestion.pergunta,
                        perguntaNumber: currentQuestion.pergunta,
                      })
                    }
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
                  onClick={() =>
                    handleAnswerClick({
                      answerNumber: data.valor.toString(),
                      answer: data.resposta,
                      numberQuestion: currentQuestion.pergunta,
                      perguntaNumber: currentQuestion.pergunta,
                    })
                  }
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
    </motion.section>
  );
}
