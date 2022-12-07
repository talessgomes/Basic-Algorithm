function titleCase(str) {

    let words = str.toLowerCase().split(" "); //minúsculo e separando
    console.log(words);
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        //pegando primeira letra e juntando com o resto
        console.log(words[i])
    }

    return words.join(" ");
}

titleCase("I'm a little tea pot");

/*split é usado para dividir as palavras e cria um array, a ideia do
desafio é fazer com que toda palavra inicie com letras maiúsculas.
Ou seja, se eu selecionar a primeira letra de cada palavra que foi separada
dentro do meu array com o split. Vou poder deixar toas as letras inicias maiúsculas. */