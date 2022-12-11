function chunkArrayInGroups(arr, size) {
    let temp = [];
    let newArray = [];
    
  
    for (let i = 0; i < arr.length; i++) {
        if (i % size !== size - 1) {
          temp.push(arr[i]);
        } else {
          temp.push(arr[i]); //passar o valor para temp
          newArray.push(temp); //atualiza o valor de newArray
          temp = []; //atualiza temp para ficar vazia
        }
    }
  
    if (temp.length !== 0) { //se o temp não for um valor vazio, resultado vai para new array
    //Isso ocorre caso o if não for concluído
      newArray.push(temp)
    }
    return newArray;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  
  /*o meu if vai dar o primeiro push, após ele terminar de fazer isso, o 
  código vai para o else, onde a variável temp vai receber o próximo elemento do array
  , depois vai atualizar a variável newArray, depois temp é zerada para que seja
  feito de novo o mesmo processo */