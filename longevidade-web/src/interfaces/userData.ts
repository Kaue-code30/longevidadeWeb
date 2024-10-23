export interface Userdata {
    nome?: string,

    email?: string,

    idade?: string | number,

    genero?: string,

    dataNascimento?: string,

    peso?: number,

    altura?: number,

    pergunta_5?: number,

    pergunta_6?: number,

    pergunta_7?: number,

    pergunta_8?: number,

    pergunta_10?: number,

    pergunta_11?: number,

    pergunta_12?: number,

    pergunta_13?: number,

    pergunta_14?: number,

    pergunta_15?: number,

    pergunta_16?: number,

    pergunta_17?: number,

    pergunta_18?: number,

    pergunta_19?: number | null,

    pergunta_20?: number | null,

    pergunta_21?: number | null,

    pergunta_22?: number | null,

    pergunta_23?: number,

    pergunta_24?: number,

    pergunta_25?: number,

    pergunta_26?: number,

    pergunta_27?: number,

    pergunta_28?: number,
};

export interface ResponseAPI{
    porcentagem_atual: number | undefined;
    projecao_30_dias: number | undefined;
    projecao_60_dias: number | undefined;
    status?: number | undefined;
}

