function manipularEntrada() {
    let entrada;
    while (entrada !== "sair") {
        entrada = prompt("Digite um valor (ou 'sair' para encerrar):");
        if (entrada !== "sair") {
            let valorManipulado = parseFloat(entrada) * 2; 
            console.log(`Valor manipulado: ${valorManipulado}`);
        }
    }
}


manipularEntrada(); 
