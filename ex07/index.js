function repeatStringNumTimes(str, num) {

    let stringVerify = "";
    if (num < 0) {
      return "";
    } else {
      for(let i = 0; i < num; i ++) {
        stringVerify += str;
      } 
    }
    console.log(stringVerify);
    return stringVerify;
  }
  
  
  
  repeatStringNumTimes("abc", 3);
  
  
  /*Vou passar uma variável vazia, verificar com o if se o número do parâmetro
  for menor do que 0, é para voltar uma string vazia. Se não, eu vou verificar
  com o for, para que seja adicionado na variável vazia,  a quantidade de 
  vezes que existe no parâmetro num */