// "use client";
// import { use, useState } from "react";
// import QuestionsJson from "@/json/blocos.json";

// export default function Questionario() {


//   const [currentQuestion, setQuestion] = useState(0);

//   const handleQuestion: any = (indexQuestion: number) => {
//     setQuestion(indexQuestion++);
//   };

//   return (
//     <section className=" flex items-center justify-center w-full h-full">
//       <div className="h-full w-full pt-10 flex justify-center items-center">

//         {QuestionsJson.Quetions[currentQuestion].index === 0 && (
//           <div className="flex justify-center items-center gap-10 flex-col">
//             <h1 className="text-2xl font-semibold">{QuestionsJson.Quetions[currentQuestion].pergunta}</h1>

//             <input type="date" />
//             <button className="bg-second-color hover:border-2 rounded-lg w-full h-10">confirma</button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
