import { AxiosResponse } from "axios";
import { ResponseAPI, Userdata } from "@/interfaces/userData";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const API_URL = 'https://letsgoforever.com.br/resposta/json';

const fetchData = async (clientData: Userdata): Promise<AxiosResponse<ResponseAPI>> => {
    const options = {
        method: 'POST',
        url: API_URL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        data: {

            nome: clientData.nome,
            email: clientData.email,
            idade: clientData.idade,
            genero: clientData.genero,
            dataNascimento: clientData.dataNascimento,
            peso: clientData.peso,
            altura: clientData.altura,
            pergunta_5: clientData.pergunta_5,
            pergunta_6: clientData.pergunta_6,
            pergunta_7: clientData.pergunta_7,
            pergunta_8: clientData.pergunta_8,
            pergunta_10: clientData.pergunta_10,
            pergunta_11: clientData.pergunta_11,
            pergunta_12: clientData.pergunta_12,
            pergunta_13: clientData.pergunta_13,
            pergunta_14: clientData.pergunta_14,
            pergunta_15: clientData.pergunta_15,
            pergunta_16: clientData.pergunta_16,
            pergunta_17: clientData.pergunta_17,
            pergunta_18: clientData.pergunta_18,
            pergunta_19: clientData.pergunta_19,
            pergunta_20: clientData.pergunta_20,
            pergunta_21: clientData.pergunta_21,
            pergunta_22: clientData.pergunta_22,
            pergunta_23: clientData.pergunta_23,
            pergunta_24: clientData.pergunta_24,
            pergunta_25: clientData.pergunta_25,
            pergunta_26: clientData.pergunta_26,
            pergunta_27: clientData.pergunta_27,
            pergunta_28: clientData.pergunta_28,

        }
    };

    const response = await axios.request<ResponseAPI>(options);
  
    
    
    return response;
}

export function useClientData() {
    const mutation = useMutation<AxiosResponse<ResponseAPI>, Error, Userdata>({
        mutationFn: fetchData,

    });

    return {
        mutate: mutation.mutate,
        contentData: mutation.data?.data,
        isPending: mutation.isPending,
        isSuccess: mutation.isSuccess,
        response: mutation.data
    };
}
