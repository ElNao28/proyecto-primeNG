export interface CpData{
    error: boolean;
    code_error: number;
    error_message: null;
    response: {
        cp: number;
        asentamiento: string;
        tipo_asentamiento: string;
        municipio: string;
        estado: string;
        ciudad: string;
        pais: string;
}
}