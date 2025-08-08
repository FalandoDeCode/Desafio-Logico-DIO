# Classificador de Herois

## Introdução:

Esse código faz parte de um desafio do curso **Logica de Programação**  do **DIO** em colaboração com a **Savegnago**.

O desafio era utilizar o conteúdo aprendido durante o curso para criar um **Classificador de Heróis**.

---
## Raciocínio:

Escolhi heróis que talvez não sejam os favoritos da maioria, mas foram os meus favoritos na infância, os **Jovens Titãs**.

Pra ter uma boa base de dados, decidi escolher **10** personagens, que foram os seguintes:

* Estelar 
* Robin 
* Ravena 
* Mutano 
* Cyborg
* Terra 
* SuperBoy
* Aqualad 
* Estrela Vermelha 
* Kid Flash

Então atribui para cada um deles os seus **gêneros** e uma quantidade aleatória de **XP**.

Logo após criei a função para classifica-los de acordo com a quantidade de XP que cada um deles possuía, decidi então fazer da seguinte forma:

A função percorre a lista de pontos de experiência e atribui um nível correspondente a cada herói, retornando um array com os níveis classificados

Níveis: Ferro, Bronze, Prata, Ouro, Platina, Imortal, Radiante

 A classificação é feita com base nos seguintes critérios:

- Ferro: menos de 1000 XP

 - Bronze: entre 1000 e 2000 XP

 - Prata: entre 2000 e 5000 XP

 - Ouro: entre 5000 e 7000 XP

 - Platina: entre 7000 e 8000 XP

 - Imortal: entre 8000 e 9000 XP

 - Radiante: 9000 XP ou mais

Após a classificação ser executada é exibido no console uma lista com **Nome dos Heróis** e sua **Classificação**.
Para ter uma melhor exibição da lista, decidi criar duas mensagens diferentes de acordo com o **gênero** de cada Herói.

### Caso fosse uma Heroína: 

(Nome) é uma Heroína classe: (Classificação)

### Caso fosse um Herói: 

(Nome) é uma Herói classe: (Classificação)

---
### Dependências:

- Node.js [Download | Node.js](https://www.nodejs.tech/pt-br/download)
## Instruções de uso

- #### Passo 1 

Clicando no botão **"<>Code"** poderá **clonar o repositório** ou fazer o download em **.zip**

**Caso tenha clonado o repositório:** apenas abra o diretório e siga para o **passo 2**

**Caso tenha feito o download .zip:** Primeiro descompacte o arquivo .zip no local onde achar melhor, depois abra a pasta que foi descompactada.

- #### Passo 2


Clique com o **botão direito** em um **local vazio** na pasta e clique em **"Abrir no Terminal "**, depois é só digitar ou colar:

```node index.js```

---
## Caso deseje alterar os dados

Você poderá alterar os dados facilmente caso desejar da seguinte forma:

- Clique com o botão direito no arquivo **index.js** e clique em **Abrir com Bloco de Notas**.
- Então você poderá alterar digitando a nova variável dentro das aspas duplas.


#### Nome dos heróis 

  ```let heroName = ["(Digite aqui)"];```


#### Gênero
  
  ```let gender = ["(Digite aqui)"];```


#### XP
  
  ```let heroxp = [(Digite aqui)];```
  
#### Mensagem para o Gênero Feminino

```
for (let i = 0; i < heroName.length; i++) {

    `if (gender[i] == "Feminino") {

        console.log(heroName[i] + " Digite aqui: " + heroLevels[i]);

    } else {

        console.log(heroName[i] + " é um herói classe: " + heroLevels[i]);

    }

}
```

#### Mensagem para o Gênero Masculino

```
for (let i = 0; i < heroName.length; i++) {

    `if (gender[i] == "Feminino") {

        console.log(heroName[i] + "  é uma heroína classe:" + heroLevels[i]);

    } else {

        console.log(heroName[i] + "  Digite aqui: " + heroLevels[i]);

    }

}
```

---
