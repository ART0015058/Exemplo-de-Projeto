// Importar o arquivo que tem os métodos de exceptions
import { handleErrors } from "./exceptions.js";

var URL = 'http://localhost:3000/ricos';

export const getAllRicos = async () => {
    try {
        //Fazendo solicitação get
        const response = await fetch ( URL );
        
        //Lidando com erros na resposta
        handleErrors(response);

        //converter os dados para json
        return await response.json();
              
    } catch (error) {
        console.log('Error >>>', error);
    }

}; 

export const createRico = async (rico) => {
    fetch ( URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rico),
    })
    .then((response) => response.json())
    .then((data) => console.log("sucesso: ", data))
    .catch((error) => console.log("Erro: ", error));
};

export const deleteRico = async (rico) => {
    fetch(URL + `/${rico.id}`, { method: "DELETE" })
    .then((response) => response.json())
    .then((data) => console.log("sucesso: ", data))
    .catch((error) => console.log("Erro: ", error));
};

export const updateRico = async (rico) => {
    fetch(URL + `/${rico.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rico),
    })
      .then((response) => response.json())
      .then((data) => console.log("sucesso: ", data))
      .catch((error) => console.log("Erro: ", error));
  };