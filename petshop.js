let pets = [
    {
        nome: "Flash",
        raca: "Yorkshire"
    }
];

let listarPets = () => {
    let conteudo = "";
    for(let pet of pets){
        conteudo += `
        =======================
        Nome: ${pet.nome}
        =======================`
    }
    return conteudo
};

const adicionarPet = (novoPet) => {
    return pets.push(novoPet);
}

const buscarPet = (pet) => {
    let achou = false;
    for (let pet1 in pets){
        if (pet1.nome == pet.nome){
            achou = true
        }
    }
    return achou
}

module.exports = { listarPets, adicionarPet, buscarPet };