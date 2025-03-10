import axios from 'axios';
import http from './http';

export const cadIp = async (fields) => {
    try {
        const data = {
            page: fields.page,
            loc: fields.loc,
            acao: "cad_ip"
        }
        const response = await http.post("index.php?path=ip&action=register", data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        throw error.response?.data || "Erro ao enviar email, por favor tente mais tarde."
    }
}

export const atualizarPolitica = async () => {
    try {
        const data = {
            page: window.location.href,
            acao: "atualizarPolitica"
        }

        const response = await http.post("index.php?path=ip&action=updatePolicy", data, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        return response.data;
    } catch (error) {
        throw error.response?.data || "Erro ao Atualizar Politica de privacidade";
    }
}

export const showPosition = async (position) => {
    try {
        const { latitude, longitude } = position.coords;

        const response = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`
        );

        const locationData = response.data;

        const responses = await cadIp({
            page: window.location.href, // Adicionando a página atual
            loc: `${locationData.city} - ${locationData.principalSubdivision} - ${locationData.countryCode}`
        });

        console.log(responses);

    } catch (error) {
        throw error?.message || "Erro ao mostrar a posição";

    }
}