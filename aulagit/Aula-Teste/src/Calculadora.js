// SOMA //
test('Deve somar um número ao resultado atual', () => {
    let resultado = 0;
    
    function soma(valor) {
        resultado += Number(valor);
        return resultado;
    }

    expect(soma(5)).toBe(5);      // Soma com número
    expect(soma('10')).toBe(15);  // Soma com string numérica
});

// SUBTRAÇÃO//

test('Deve subtrair um número do resultado atual', () => {
    let resultado = 20;
    
    function subtracao(valor) {
        resultado -= Number(valor);
        return resultado;
    }

    expect(subtracao(5)).toBe(15);      // Subtração com número
    expect(subtracao('10')).toBe(5);    // Subtração com string numérica
});

// Multiplicação //


test('Deve multiplicar o resultado atual por um número', () => {
    let resultado = 2;
    
    function multiplicacao(valor) {
        resultado *= Number(valor);
        return resultado;
    }

    expect(multiplicacao(3)).toBe(6);      // Multiplicação com número
    expect(multiplicacao('2')).toBe(12);   // Multiplicação com string numérica
});


// Divisão //

test('Deve dividir o resultado atual por um número, e lançar erro ao dividir por zero', () => {
    let resultado = 20;
    
    function divisao(valor) {
        if (Number(valor) === 0) {
            throw new Error("divisão ilegal por zero");
        }
        resultado /= Number(valor);
        return resultado;
    }

    expect(divisao(5)).toBe(4);       // Divisão com número
    expect(divisao('2')).toBe(2);     // Divisão com string numérica
    expect(() => divisao(0)).toThrow('divisão ilegal por zero'); // Testa erro para divisão por zero
});


// Inversão //

test('Deve inverter o sinal do número atual', () => {
    let resultado = 10;
    
    function inversao() {
        resultado = -resultado;
        return resultado;
    }

    expect(inversao()).toBe(-10);    // Inversão de positivo para negativo
    expect(inversao()).toBe(10);     // Inversão de negativo para positivo
});




