// Ejercicio 3.3) 

/* 
3.3) Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si
     el item ya existe “ya existe xxx con yyy unidades”




3) Premisas de anterioes:

3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
*/


/*
3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal

agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}

Ej:
agregarProducto("Azucar", 5, 2);

//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}
   

*/

// Código Ejercicio 3 *** *********************************************************************



// Creo la Clase Carrito
class Carrito {
  //constructor(montoTotal, productos) {
  constructor(montoTotal) {        
      this.montoTotal = montoTotal,
      
      // Array con objetos
      //this.productos = [{nombre: '', cantidad: 0, precio: 0}]
      this.productos = []
    }

  agregarProducto(paramNombre, paramPrecio, paramUnidades) {

    
    //Busco si ya existe el producto a agregar
    const idxProdEncontrado = this.productos.findIndex(element => element.nombre == paramNombre);
    //console.log(idxProdEncontrado);

    // Agrego el objeto producto si aún no existe
    if (idxProdEncontrado != -1) {
    console.log(`Ya existe ${this.productos[idxProdEncontrado].nombre} con ${this.productos[idxProdEncontrado].cantidad} unidades.`);
    } else {
        //agrego producto
        this.productos.push({nombre: paramNombre, cantidad: paramUnidades, precio: paramPrecio });
        //Actualizo Total
        const precioSubTot = paramPrecio * paramUnidades;
        this.montoTotal += precioSubTot;
    
      }

  }
    
    muestraCarrito() {
      console.log(`El Carrito contiene ${this.productos.length} productos, y su monto total es Ar$ ${this.montoTotal} `);
      
    }

    
}

//creo una instancia de un nuevo Carrito

// let carrito1 = new Carrito( 10, "Leche");

let carrito1 = new Carrito( 0 );
console.log("Agregando productos");

carrito1.muestraCarrito();


carrito1.agregarProducto("Leche", 5, 2);

carrito1.agregarProducto("Azucar", 5, 2);

carrito1.agregarProducto("Azucar", 5, 2);

carrito1.agregarProducto("Azucar", 5, 2);

carrito1.agregarProducto("Leche", 5, 2);


// carrito1.agregarProducto("Jamon", 5, 3);

carrito1.muestraCarrito();

console.log(carrito1);

