function calcularParcelasSimples(valorTotal, quantidadeParcelas) {
    let valorParcela = valorTotal / quantidadeParcelas;
    for (let i = 1; i <= quantidadeParcelas; i++) {
        console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
    }
}


calcularParcelasSimples(1000, 5); 
