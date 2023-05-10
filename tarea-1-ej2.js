// Ejercicio 2
console.log("-Ejercicio 2 -Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos")

/* 

Ejemplo:
Array1: ['rojo', 'azul', 'amarillo']
Array2: ['blanco', 'negro', 'rojo']
Resultado: ['rojo']

Ejemplo 2:
Array1: [4, 3, true, 'manzana']
Array2: ['pera', 3, false, true, 3, true]
Resultado: [3, true]

*/

// Resolución:

// Difino los arrays

const array1=['rojo', 'azul', 'amarillo'];
const array2=['blanco', 'negro', 'rojo'];

const array3=[4, 3, true, 'manzana'];
const array4=['pera', 3, false, true, 3, true];




function coincidenciasEntreArrays(arreglo1, arreglo2) {

    const arrayCoincidencias = [];

    for (let i = 0; i < arreglo1.length; i++) {
        const itemBuscado = arreglo1[i];
        
        //pregunto si esta en arr2
        const coincidencias = findIgual(arreglo2, itemBuscado);
  
  
        if (coincidencias === undefined) {
            // console.log("No se encontro");
            
        } else {
            // Agrego dato a un nuevo array
            
            arrayCoincidencias.push(coincidencias);

            // console.log(arrayCoincidencias);
        }


    }

    // recorro el arreglo 2 para buscar coincidencias
    function findIgual(objDondeBuscar, datoBuscado) {
        for (let i = 0; i < objDondeBuscar.length; i++) {
        if (datoBuscado === objDondeBuscar[i]) {
            return objDondeBuscar[i];
        }
        }
    }

    console.log(arrayCoincidencias);
}

//Ejecuto comparaciones
coincidenciasEntreArrays(array1, array2)
coincidenciasEntreArrays(array3, array4)


