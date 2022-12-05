function factorialize(num) {

    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return num * (factorialize(num - 1));
    }

}

console.log(factorialize(5));

/*O resultado vai ser 120, porque no cálculo, vai ser feito o parâmetro
menos 1, multiplicado pelo valor cheio. Cada vez que for repetir o processo,
o parâmetro vai diminuir o valor para multiplicar.
 
1st call – factorialize(5) will return 5  * factorialize(5 - 1) // factorialize(4)
2nd call – factorialize(4) will return 4  * factorialize(4 - 1) // factorialize(3)
3rd call – factorialize(3) will return 3  * factorialize(3 - 1) // factorialize(2)
4th call – factorialize(2) will return 2  * factorialize(2 - 1) // factorialize(1)
5th call – factorialize(1) will return 1  * factorialize(1 - 1) // factorialize(0)
 */