import http from './http';

export const ip = async(fields) => {
    try{
        const response = await http.post("/ip");
        return response.data;
    }catch(error){
        throw error.response?.data || "Erro ao enviar email, por favor tente mais tarde."
    }
}