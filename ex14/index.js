function getIndexToIns(arr, num) {

    let sortArray = arr.sort(function(a,b) { return a - b});
  
    for (let i = 0; i < sortArray.length; i++) {
        if(num > arr[i - 1] && num <= arr[i]) {
          return i;
        }
        
      }
        if (sortArray[sortArray.length - 1] < num) {
          return sortArray.length;
        }
      
      
    return 0;
  }
  
  console.log(getIndexToIns([2, 5, 10], 15));
  
  /*A função de sorte ajuda a ordenar os números, para que eu consiga pegar eles na ordem certa.
  Depois vou verificar se o número é maior que um index e menor do que o outro
  e se o número for menor ou igual que o valor do index.
  também vou verificar se o valor do index é maior do que o número, é para
  reduzir um número do index.
   */