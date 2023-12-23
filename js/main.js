import { getAllRicos, createRico, deleteRico, updateRico } from "./services.js";

window.onload = () => {
  loadRicos();
};

// Constante para carregar todos os ricos
const loadRicos = () => {  
  const dataContainer = document.getElementById("data-container");
  getAllRicos().then((resp) => {
    resp.forEach((rico) => {
      const ricosElement = document.createElement("div");
      ricosElement.innerHTML = 
        `
          <div>
            <div>
                <img src="${rico.img}" alt="${rico.nome}">
            </div>
            <div>
                <h2>${rico.nome}</h2>
                <p>USD ${rico.fortuna}</p>            
            </div>                
          </div>
        `;
      dataContainer.appendChild(ricosElement);
    });
  });
};

// Refatorado
document.getElementById('btnCreate').addEventListener('click', () => {
  const rico = {
    nome: "Mr. Monopoly",
    img: "assets/nomedaimgagem.extensão",
    fortuna: "2,5 bilhões",    
  }
  createRico(rico)
});


// Refatorado
document.getElementById('btnDelete').addEventListener('click', () => {
  const rico = {
    nome: "Mr. Monopoly",
    img: "assets/nomedaimgagem.extensão",
    fortuna: "2,5 bilhões",
    id: 10
 }
 deleteRico(rico)
});

// Refatorado
document.getElementById('btnUpdate').addEventListener('click', () => {
  const rico = {
    nome: "C. Montgomery Burns",
    img: "assets/nomedaimgagem.extensão",
    fortuna: "1,3 bilhões",
    id: 10
  }
  updateRico(rico);
});