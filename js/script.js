class Calculator{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    // método de soma
    sum(n1, n2){
        return n1 + n2;
    }

    // método de subtração
    substraction(n1, n2){
        return n1 - n2;
    }

    // método de divisão
    division(n1, n2){
        try{
            if (n2 === 0){
                throw new Error('Divisão por zero');
            }
            return n1 / n2;
        } catch (error){
            return `Erro: ${error.message}`;
        }
    }

    // método de multiplicação
    multiplication(n1, n2){
        return n1 * n2;
    }
}

// criando o objeto
const calc = new Calculator;

// start nos btns
let buttons = document.querySelectorAll('.btn');
console.log('teste');

// Chamando o método de soma
let resultado = calc.sum(1,2);
console.log(resultado);

// Chamando o método de subtração
resultado = calc.substraction(2,1);
console.log(resultado);

// Chamando o método de divisão
resultado = calc.division(4,2);
console.log(resultado);

// Chamando o método de multiplicação
resultado = calc.multiplication(2,2);
console.log(resultado);