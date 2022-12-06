function largestOfFour(arr) {

    let numberMore = []; // pega o valor 

    for (let i = 0; i < arr.length; i++) {
        let largestNum = arr[i][0];
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] > largestNum) {
                largestNum = arr[i][j];
            }
        }
        numberMore.push(largestNum); //adiciona o valor
    }
    return numberMore;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [ 5, 27, 39, 1001 ]


/*Vou verificar o valor que tem em i depois a posição de j, assim vou poder saber qual é o maior número
dentro de casa array */