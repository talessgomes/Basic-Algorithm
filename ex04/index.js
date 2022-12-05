function findLongestWordLength(str) {
    let longestWord = "";
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        let wordValue = words[i];


        if (wordValue.length > longestWord.length) {
            longestWord = wordValue;
        }
    }

    return longestWord.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));