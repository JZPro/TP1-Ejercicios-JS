// Ejercicio 3 -3.2)

// 3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal


// Creo la Clase Carrito
class Carrito {
  constructor(montoTotal, productos) {
        
      this.montoTotal = 10,
      this.productos = ["Leche"]
        
    }

      agregarProducto(nombre, precio, unidades) {

        this.productos.push(nombre);
        const precioSubTot = precio * unidades;
        this.montoTotal += precioSubTot;
                
      }
      
    muestraCarrito() {console.log(`El Carrito contiene ${this.productos} y su monto es Ar$ ${this.montoTotal} `);
    
    }

   
}

//creo un nuevo Carrito
//let carrito1 = new Carrito( 10, "Leche");

let carrito1 = new Carrito( 10, "Leche");

carrito1.muestraCarrito();

console.log("Agregando productos");

carrito1.agregarProducto("Azucar", 5, 2);


// carrito1.agregarProducto("Queso", 5, 3);

carrito1.muestraCarrito();

console.log(carrito1);


// ** Prueba creando instancias ************

// let carrito2 = new Carrito( 50, "Carne");
// carrito2.agregarProducto("Jamon", 30, 2);
// console.log(carrito2);



