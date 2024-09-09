const Calculadora = require("./Calculadora")


it('Atribui um novo valor à calculadora', () => {
    const calculadora = new Calculadora();

    // Testa se atribuir texto lança um erro de TypeError
    expect(() => calculadora.resultado = "Texto").toThrow(TypeError);

    // Testa se a mensagem de erro é adequada
    expect(() => calculadora.resultado = "Texto")
        .toThrow("O argumento deve ser um número válido");

    // Verifica se o valor do resultado permanece 0 após a tentativa falha
    expect(calculadora.resultado).toBe(0);

    // Testa se atribuir uma string numérica não lança erro
    expect(() => calculadora.resultado = "5").not.toThrow(TypeError);

    // Verifica se o valor foi corretamente atribuído como número
    expect(calculadora.resultado).toBe(5);
});