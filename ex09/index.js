function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {

        if (func(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/*o Código vai verificar se os números que estão dentro do array vão
ser pares ou im */