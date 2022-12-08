function mutation(arr) {
    let firstArray = arr[0].toLowerCase();
    console.log("First:", firstArray);
    let secondArray = arr[1].toLowerCase();
    console.log("Second:", secondArray);

    for (let i = 0; i < secondArray.length; i++) {
        let letter = secondArray[i];
        console.log("Teste:", letter);
        if (firstArray.indexOf(letter) < 0) {
            return false;
        }
    }

    return true;
}

console.log(mutation(["hello", "hey"]));

/*Neste exercício eu vou verificar se cada letra existe na palavra.
Se existir, eu vou comparar e irei dar o retorno. */