const numero = Number(prompt("Ingresa un número positivo:"));

if (isNaN(numero)) {
    
    
    console.log("Error: Lo que ingresaste no es un número válido.");

} else {

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i; 
    }

    const resultadoFinal = numero * factorial;

    console.log("Número ingresado:", numero);
    console.log("Su factorial es:", factorial);

}


