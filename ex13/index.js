function bouncer(arr) {

    let result = []; //vou colocar as informações aqui

    for (let i = 0; i < arr.length; i++) { //passando todos os valores
        let individualValue = arr[i]; //peguei todos os valores do array
        console.log(individualValue);

        if (individualValue) {
            result.push(arr[i]) //vai pegar somente os valores que são true;
        }
    }
    return result;
}

console.log(bouncer([7, "ate", "", false, 9])); //[ 7, 'ate', 9 ]