class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    soma(valor) {
        this.resultado += Number(valor);
        return this.resultado;
    }

    subtracao(valor) {
        this.resultado -= Number(valor);
        return this.resultado;
    }

    multiplicacao(valor) {
        this.resultado *= Number(valor);
        return this.resultado;
    }

    divisao(valor) {
        if (Number(valor) === 0) {
            throw new Error("divisão ilegal por zero");
        }
        this.resultado /= Number(valor);
        return this.resultado;
    }

    inversao() {
        this.resultado = -this.resultado;
        return this.resultado;
    }

    reset() {
        this.resultado = 0;
        return this.resultado;
    }
}

module.exports = Calculadora;

