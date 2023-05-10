// Ejercicio 1

/* 1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6
1
12
123
1234
12345
123456

para valor 3
1
12
123
*/



// Código Ejercicio -1-
console.log("-Ejercicio 1 - Piramide")

const scrPiramideNum = numero => {
    let piramideTxt = "";
    for( let i = 1; i <= numero; i++ ) {
        piramideTxt += i;
        console.log( piramideTxt )
    }
}

scrPiramideNum( 6 );
scrPiramideNum( 3 );

