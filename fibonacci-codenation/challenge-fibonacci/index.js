'use strict'

const fibonacci = () => {
    let NumerosFibonacci = [0,1]
     for (let i = 2; i <= 350; i++){
 
         NumerosFibonacci[i] = NumerosFibonacci[i-1] + NumerosFibonacci[i-2]
     }
     return NumerosFibonacci
 }

const isFibonnaci = (num) => {
    const arrayFibonacci = fibonacci();

    return arrayFibonacci.includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
