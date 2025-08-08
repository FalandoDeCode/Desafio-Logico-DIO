// Um simples classificador de nível de heróis baseado em pontos de experiência
// Este código classifica heróis de acordo com seus pontos de experiência em uma escala de 1000 a 10000
// author: Matheus Rios(Falando deCode)
// date: 07/08/2025
// version: 1.0.0

// Função para classificar os heróis com base em seus pontos de experiência
// A função percorre a lista de pontos de experiência e atribui um nível correspondente a cada herói, retornando um array com os níveis classificados
// Níveis: Ferro, Bronze, Prata, Ouro, Platina, Imortal, Radiante
// A classificação é feita com base nos seguintes critérios:
// - Ferro: menos de 1000 XP
// - Bronze: entre 1000 e 2000 XP
// - Prata: entre 2000 e 5000 XP
// - Ouro: entre 5000 e 7000 XP
// - Platina: entre 7000 e 8000 XP
// - Imortal: entre 8000 e 9000 XP
// - Radiante: 9000 XP ou mais




// -- inicio --


// Define os nomes dos heróis e seus respectivos pontos de experiência
// Os nomes e pontos de experiência são fictícios e podem ser alterados conforme necessário
let heroName = ["Estelar", "Robin", "Ravena", "Mutano", "Cyborg", "Terra", "SuperBoy", "Aqualad", "Estrela Vermelha", "Kid Flash"];
let gender = ["Feminino", "Masculino", "Feminino", "Masculino", "Masculino", "Feminino", "Masculino", "Masculino", "Masculino", "Masculino"];
let heroxp = [8732, 1294, 5586, 7031, 9842, 3417, 2150, 6198, 4970, 7623, 21500, 6198, 4970, 7623];

// -- Classificação de Nível de Heróis --

function classifyHero(heroName, heroxp) {
    let heroLevel = [];
    for (let i = 0; i < heroxp.length; i++) {
        if (heroxp[i] < 1000) {
            heroLevel.push("Ferro");
        } else if (heroxp[i] < 2000) {
            heroLevel.push("Bronze");
        } else if (heroxp[i] < 5000) {
            heroLevel.push("Prata");
        } else if (heroxp[i] < 7000) {
            heroLevel.push("Ouro");
        } else if (heroxp[i] < 8000) {
            heroLevel.push("Platina");
        } else if (heroxp[i] < 9000) {
            heroLevel.push("Imortal");
        } else {
            heroLevel.push("Radiante");
        }
    }
    return heroLevel;
}

// Classifica os heróis e armazena os níveis em um array
let heroLevels = classifyHero(heroName, heroxp);

// -- Exibe a classificação de nível dos heróis --
console.log("== Classificação de Nível de Heróis ==\n");

for (let i = 0; i < heroName.length; i++) {
    if (gender[i] == "Feminino") {
        console.log(heroName[i] + " é uma heroína classe: " + heroLevels[i]);
    } else {
        console.log(heroName[i] + " é um herói classe: " + heroLevels[i]);
    }
}

console.log("\n== Fim da Classificação de Nível de Heróis ==\n");


// -- Fim do programa --