const librosLeidos = [];

function agregarLibro(titulo) {
    if(titulo && typeof titulo === 'string'){
        librosLeidos.push(titulo);
        console.log(`Libro agregado: "${titulo}"`);
    } else {
        console.log("Por favor, ingresa un título válido.");
    }
}

function mostrarLibrosLeidos() {
    if(librosLeidos.length === 0){
        console.log("Aún no has leído ningún libro.");
    } else {
        console.log("Libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

// Agregar libros manualmente
agregarLibro("Cien años de soledad");
agregarLibro("El portal de los obeliscos");
agregarLibro("Outliers");

// Agregar libros mediante prompt
agregarLibro(prompt("Agregue el primer libro"));
agregarLibro(prompt("Agregue el segundo libro"));
agregarLibro(prompt("Agregue el tercer libro"));

// Mostrar la lista de libros leídos
mostrarLibrosLeidos();