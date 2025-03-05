import http from './http';

export const email = async(fields) => {
    try{
        const response = await http.post("/email");
        return response.data;
    }catch(error){
        throw error.response?.data || "Erro ao enviar email, por favor tente mais tarde."
    }
}