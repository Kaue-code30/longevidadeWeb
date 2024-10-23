import Image from "next/image";
import HeaderHome from "../header";
import { useEffect, useState } from "react";
import heart from "@/assets/home/heart.svg";
import academy from "@/assets/home/academy.svg";
import plant from "@/assets/home/plant.svg";
import wine from "@/assets/home/wine.svg";
import doctor from "@/assets/home/doctor.svg";
import backgroundLast from "@/assets/home/arvore-verde.png";
import { QuestionsData } from "@/interfaces/questions";
import BlockIntermediario from "../blocoIntermediario";
import JsonQuestions from "@/json/blocos.json";
import bannerOneBlock from "@/assets/BlocoIntermediario/oneBlock.png";
import bannerTwoBlock from "@/assets/home/gymImage.png";
import bannerIdosa from "@/assets/velhaJogandoTenis.png";
import bannerThreeBlock from "@/assets/BlocoIntermediario/thirdBlock.png";
import bannerFour from "@/assets/BlocoIntermediario/fourthBlock.png";
import mulherCabeloRosa from "@/assets/mulherSorrindoCabeloRosa.png";
import { Userdata } from "@/interfaces/userData";
import { answersData } from "@/interfaces/answer";
import { motion } from "framer-motion";
import BlockEncerramento from "../blocoEncerramento";
import { BiArrowBack } from "react-icons/bi";

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
  const [blocoFaltante, setBlocoFaltante] = useState(false);
  const [oneBlock, setOneBlock] = useState(false);
  const [secondBloc, setSecondBlock] = useState(false);
  const [thirdBlco, setThirdBlock] = useState(false);
  const [fourthBlco, setFourthBlock] = useState(false);
  const currentQuestion = blocoAtual[currentQuestionIndex];
  const [inputValue, setInputValue] = useState("");
  const [inputValueAltura, setInputValueAltura] = useState("");
  const [inputValuePeso, setInputValuePeso] = useState("");
  const [userData, setUserData] = useState<Userdata>({});
  const [finshe, setFinshe] = useState(false);
  const [itsWomen, setWomen] = useState(false);
  const [isVoltar, setVoltar] = useState(false);






  const voltar = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1)
  }

  const calculateImc = () => {
    const peso = userData.peso;
    const altura = userData.altura;
    const imc = peso && altura ? peso / (altura * altura) : 0;
    let result;
    if (imc < 18.5) {
      result = {
        imc: imc.toFixed(2),
        descricao: "Seu Índice de Massa Corpórea (IMC) está abaixo do normal. Isso pode indicar que você está abaixo do peso recomendado para sua altura. Fique atento à sua alimentação! Vamos seguir com esse questionário para termos uma visão mais ampla sobre sua saúde",
      };
    } else if (imc > 18.5 && imc <= 24.9) {
      result = {
        imc: imc.toFixed(2),
        descricao: "Seu Índice de Massa Corpórea (IMC) é considerado normal, parabéns! Você está com o peso recomendado para a sua altura!",
      };
    } else if (imc > 24.9 && imc <= 29.9) {
      result = {
        imc: imc.toFixed(2),
        descricao: "Seu Índice de Massa Corpórea (IMC) está acima do recomendado. Você está classificado como sobrepeso, de acordo com a Organização Mundial de Saúde. Você pode reverter essa condição, só depende de você!",
      };
    } else if (imc > 29.9 && imc <= 39.9) {
      result = {
        imc: imc.toFixed(2),
        descricao: "Seu IMC está bem acima do recomendado. Você está classificado como obeso, de acordo com a Organização Mundial de Saúde. Com força de vontade e uma equipe de saúde, você tem tudo para reverter essa condição!",
      };
    } else if (imc > 39.9) {
      result = {
        imc: imc.toFixed(2),
        descricao: "Seu IMC está muito acima do recomendado. Você está classificado como obeso mórbido, de acordo com a Organização Mundial de Saúde. Vamos seguir nesse questionário e ver como podemos te ajudar para uma jornada mais saudável.",
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

    if (perguntaNumber === 21 && Number(userData.idade) < 40) {

      setFourthBlock(true);
      setBlocoFour(false);
      setBlocoFive(true);
      setCurrentQuestionIndex(0);
    } else if (
      perguntaNumber === 20 &&
      Number(userData.idade) >= 45 &&
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
          Number(userData.idade) < 45 &&
          userData.genero === "Masculino"
        ) {
          // setThirdBlock(true);
          setBlocoFaltante(true);
          setBlocoThree(false);
          setBlocoFive(true);
          // console.log("entrou na 152")
        } else if (Number(userData.idade) < 15) {

          setBlocoFaltante(true);
          setBlocoThree(false); // desativa blocoTwo
          setBlocoFive(true);
        } else {
          setThirdBlock(true);
          setBlocoThree(false);
          setBlocoFour(true);
        }
      } else if (blocoFour) {
        setThirdBlock(false);
        setBlocoFaltante(false)
        setFourthBlock(true);
        setBlocoFour(false);
        setBlocoFive(true);
        // console.log("entrou 162");

      } else if (blocoFive) {
        setFourthBlock(false);
        setBlocoFour(false);
        setBlocoFive(false);
        // console.log("entrou 168");

        setFinshe(true);
      }

      if (
        perguntaNumber === 24 &&
        userData.genero === "Feminino" &&
        Number(userData.idade) >= 15
      ) {
        setWomen(true)



        setCurrentQuestionIndex(2);
      } else if (perguntaNumber === 21 && Number(userData.idade) >= 40) {
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
    }
    else if (blocoTwo) {
      setBlocoAtual(JsonQuestions.segundoBloco);
    }
  }, [blocoTwo, blocoThree, blocoFour]);

  const handleHeightInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputValue = event.target.value;

    // Remover caracteres que não sejam dígitos
    inputValue = inputValue.replace(/[^\d]/g, "");

    // Se o input estiver vazio, apenas atualizar o estado para uma string vazia
    if (inputValue.length === 0) {
      setInputValueAltura("");
      return;
    }

    // Adicionar ponto decimal após o primeiro dígito para formato 1.75
    let formattedValue;
    if (inputValue.length === 1) {
      formattedValue = inputValue; // Para um único dígito, apenas manter o dígito
    } else if (inputValue.length === 2) {
      formattedValue = inputValue[0] + "." + inputValue[1]; // Para dois dígitos, adicionar ponto decimal entre eles
    } else {
      // Limitar a parte inteira a 1 dígito e a decimal a 2 dígitos
      const integerPart = inputValue.slice(0, 1);
      const decimalPart = inputValue.slice(1, 3).padEnd(2, "0");

      formattedValue = integerPart + "." + decimalPart;
    }

    // Definir o valor formatado no estado ou realizar outra ação, como atualização de estado
    setInputValueAltura(formattedValue);
  };

  const handleWheigthInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let inputValue = event.target.value;

    inputValue = inputValue.replace(/[^\d.]/g, "");

    setInputValuePeso(inputValue);
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

      case 2:
        updatedUserData.dataNascimento = answerNumber;
        updatedUserData.idade = calculateAge(answerNumber);
      case 3:
        updatedUserData.altura = Number(inputValueAltura);
      case 4:
        updatedUserData.peso = Number(inputValuePeso);
      case 5:
        updatedUserData.pergunta_5 = parseInt(answerNumber);
      case 6:
        updatedUserData.pergunta_6 = parseInt(answerNumber);
      case 7:
        updatedUserData.pergunta_7 = parseInt(answerNumber);
      case 8:
        updatedUserData.pergunta_8 = parseInt(answerNumber);
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
      case 27:
        updatedUserData.pergunta_28 = parseInt(answerNumber);
      default:
        break;
    }

    setUserData(updatedUserData);
  };
  const getImageSrc = () => {

    if (blocoTwo) {
      // console.log("entrou");
      return wine;
    } else if (blocoThree) {
      return academy;
    } else if (blocoFour) {
      return doctor;
    } else if (blocoFive) {
      return plant;
    } else {
      return heart;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const setBlock = (data: boolean) => {
    setOneBlock(data);
    setSecondBlock(data);
    setThirdBlock(data);
    setFourthBlock(data);
    setBlocoFaltante(data);

  };

  useEffect(() => {
    if (itsWomen && currentQuestionIndex === 2) {
      setVoltar(false)

    } else if (currentQuestionIndex >= 1) {
      setVoltar(true)

    } else {
      setVoltar(false)
    }
  },[currentQuestionIndex])

  return (
    <motion.section
      style={{ backgroundImage: `url(${backgroundLast.src})` }}
      className={`h-[120vh] bg-no-repeat overflow-auto overflow-x-hidden bg-contain bg-bottom w-full bg-second-color `}
    >
      {oneBlock && (
        <BlockIntermediario
          arrayQuestions={blocoAtual}
          banner={bannerOneBlock.src}
          title={`Muito bem! Essas perguntas iniciais começam a montar seu score de saúde.`}
          text={`Até aqui, destacamos seu Índice de Massa Corpórea (IMC) é de: ${calculateImc()?.imc}`}
          secondText={`${calculateImc()?.descricao}`}
          stage={1}
          Imc
          setBlock={setBlock}
        />
      )}
      {secondBloc && (
        <BlockIntermediario
          arrayQuestions={blocoAtual}
          banner={bannerTwoBlock.src}
          text="Cada resposta é incorporada ao nosso algoritimo para classificar sua saúde."
          secondText="conhecer a si próprio agora é o primeiro passo para melhorar amanhã!"
          thirText="Vamos continuar para a próxima pergunta."
          title="Parabéns por ter chegado até aqui!"
          stage={2}
          Imc={false}
          setBlock={setBlock}
        />
      )}
      {thirdBlco && (
        <BlockIntermediario
          arrayQuestions={blocoAtual}
          banner={bannerIdosa.src}
          text="Falta pouco agora, continue firme no questionário e receba sua avaliação agora e grátis."
          title="Essas Informações de atividade física e sono foram muito importante para definir seu score de saúde."
          secondText="Vamos continuar para a próxima pergunta."
          stage={3}
          Imc={false}
          setBlock={setBlock}
        />
      )}
      {blocoFaltante && (
        <BlockIntermediario
          arrayQuestions={blocoAtual}
          banner={mulherCabeloRosa.src}
          text="Vamos continuar para a próxima pergunta."
          title="Como está sua jornanda? Estamos quase acabando."
          // secondText="Vamos continuar para a próxima pergunta."
          stage={3}
          Imc={false}
          setBlock={setBlock}
        />
      )}
      {fourthBlco && (
        <BlockIntermediario
          arrayQuestions={blocoAtual}
          banner={bannerFour.src}
          text="Apenas mais 4 perguntas para você finalizar o questionário!"
          title="Ter os exames preventivos em dia é fundamento para reduzir nossos riscos de saúde."
          stage={4}
          Imc={false}
          setBlock={setBlock}
        />
      )}
      {finshe && (
        <BlockEncerramento
          userData={userData}
          stage={5}
          text="Você completou todas as etapas e já processamos suas respostas em nossos algoritmos. "
          secondText="Receba agora mesmo e grátis o seu SCORE DE SAÚDE e o potencial que você pode alcançar apenas melhorando seu estilo de vida."
          title="Parabéns!"

        />
      )}
      <div
        className={` ${finshe === true ||
          oneBlock === true ||
          secondBloc === true ||
          thirdBlco === true || blocoFaltante === true || fourthBlco === true
          ? "[display:none]"
          : ""
          } w-full h-full `}
      >
        <HeaderHome backgroundColor="#FFF" />
        {isVoltar ? (
          <div style={{
            position: "relative", top: "-8%", left: "64%"
          }} >
            <button className="w-32 h-10 flex items-center justify-center gap-2 text-[#366A48] font-medium rounded-lg " onClick={() => voltar()}> <BiArrowBack className="font-bold" /> voltar</button>
          </div>
        ) : ""}
        <div className="w-full mb-20 h-full ">
          <div className={`w-full ${currentQuestion.id_pergunta === 1 ? "mt-[40px] " : ""} pb-5 flex justify-start items-center px-10 h-[10%]`}>
            <div className="w-16  h-16 flex items-center justify-center bg-second-color border shadow-lg rounded-full">
              <h1 className="flex text-2xl font-bold">
                {currentQuestion && currentQuestion.id_pergunta}
              </h1>

            </div>
            <Image
              className={`${finshe === true ||
                secondBloc === true ||
                thirdBlco === true ||
                fourthBlco === true ||
                oneBlock === true
                ? "[display:none]"
                : ""
                } relative left-[20%] w-12 ml-[125px] ${oneBlock && finshe ? "hidden" : "flex"
                }`}
              src={getImageSrc()}
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 w-full px-10 h-full overflow-hidden">
            <h1 className="text-lg font-medium">{currentQuestion.descricao}</h1>
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
                      className={`w-36 h-10 bg-primary-color text-[#000] font-medium rounded-lg ${!inputValue && "opacity-50 cursor-not-allowed"
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
                      type="text"
                      required={true}
                      value={inputValueAltura}
                      onChange={handleHeightInputChange}
                      placeholder="00,00M"
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
                      className={`w-36 h-10 bg-primary-color text-[#000] font-medium rounded-lg ${!inputValue && "opacity-50 cursor-not-allowed"
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
                      className={`w-36 h-10 bg-primary-color text-[#000] font-medium rounded-lg ${!inputValue && "opacity-50 cursor-not-allowed"
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
                    className={`${data.resposta.length > 10 ? "h-16 px-2" : "h-16"
                      } w-full h-10 rounded-lg bg-primary-color text-black`}
                  >
                    {data.resposta}
                  </button>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
