function confirmEnding(str, target) {
    let targetLength = target.length;

    console.log(targetLength);//1

    let targetToMatch = str.slice(str.length - targetLength);
    console.log(targetToMatch) //vai mostrar as letras que são o resto

    if (targetToMatch === target) {
        return true
    } else {
        return false;
    }
}

confirmEnding("Bastian", "n");