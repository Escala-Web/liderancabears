export const CONFIG = {
    whatsapp: "(11) 98765-4321",
    getLinkWpp: function() {
        const cleanWhatsapp = this.whatsapp.replace(/\D/g, ''); // Remove caracteres não numéricos
        return `https://api.whatsapp.com/send?phone=55${cleanWhatsapp}&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20por%20meio%20do%20site`;
    },
    address: "R. Araritaguaba, 1144 - Vila Maria, São Paulo - SP",
    email: "atendimento@liderancabarbers.com.br",
    company: "LIDERANÇA BARBER SHOP",
    CNPJ: "52.283.808/0001-27",
    razao: "Liderança Barber"
};