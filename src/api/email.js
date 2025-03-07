import http from './http';

export const email = async(fields) => {
    try{
        
        const data = {
            name: fields.name,
            email: fields.email,
            contact: fields.contact,
            message: fields.message,
        }
        const response = await http.post("index.php?path=email&action=send", data);
        return response.data;
    }catch(error){
        throw error.response?.data || "Erro ao enviar email, por favor tente mais tarde."
    }
}