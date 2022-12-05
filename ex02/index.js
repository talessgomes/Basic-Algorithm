function reverseString(str) {

    let newLetter = str.split("").reverse().join("");
    /*
      let newLetter = "";
    
        Uma forma de passar
      for (let i = str.length - 1; i >= 0; i--) {
        newLetter += str[i];
      } */
    return newLetter;
}

reverseString("hello");

