export interface QuestionsData {
    id_pergunta: number;
    pergunta: string;
    descricao: string;
    respostas: {
        id_resposta: number;
        resposta: string;
        valor: number;
    }[];
}


export interface QuestionContent {
    content: QuestionsData[]
}

