function frankenSplice(arr1, arr2, n) {
    let result = [];

    result.push(...arr2.slice(0, n)); //[4]
    result.push(...arr1); //[4,1,2,3]
    result.push(...arr2.slice(n, arr2.length)); //[ 4, 1, 2, 3, 5, 6 ]


    return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/*Peguei uma cópia do array e coloquei os valores conforme foi pedido */