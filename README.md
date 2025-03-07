# FUNCIONES_DEV.F

# Proyecto: Registro de Libros Leídos

Este proyecto es un simple programa en JavaScript que permite agregar y mostrar una lista de libros leídos mediante una lista en un array.

## Descripción

El código permite:
- Agregar libros manualmente al array `librosLeidos`.
- Agregar libros ingresados por el usuario a través de `prompt()`.
- Mostrar la lista de libros leídos en la consola.

## Código

```javascript
// Declaración del array que almacena los libros leídos
const librosLeidos = [];

// Función para agregar libros a la lista
function agregarLibro(titulo) {
    if (titulo && typeof titulo === 'string') {
        librosLeidos.push(titulo);
        console.log(`Libro agregado: "${titulo}"`);
    } else {
        console.log("Por favor, ingresa un título válido.");
    }
}

// Función para mostrar los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
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
```

## Explicación del Código

1. **Declaración del array `librosLeidos`**:
   - Se utiliza un array vacío `[]` para almacenar los libros ingresados.

2. **Función `agregarLibro(titulo)`**:
   - Verifica si el título ingresado es válido.
   - Si es válido, lo agrega al array y muestra un mensaje de confirmación.
   - Si no es válido, muestra un mensaje de error.

3. **Función `mostrarLibrosLeidos()`**:
   - Si la lista está vacía, muestra un mensaje indicando que no se ha leído ningún libro.
   - Si hay libros en la lista, los muestra con un índice numérico.

4. **Agregado de libros**:
   - Se agregan tres libros manualmente.
   - Se piden tres libros mediante `prompt()` al usuario.
   - Finalmente, se muestra la lista completa de libros en la consola.

## Ejemplo de Salida en Consola

Si el usuario ingresa los siguientes libros mediante `prompt()`:
```
El principito
1984
El arte de la guerra
```
La salida en la consola será:
```
Libro agregado: "Cien años de soledad"
Libro agregado: "El portal de los obeliscos"
Libro agregado: "Outliers"
Libro agregado: "El principito"
Libro agregado: "1984"
Libro agregado: "El arte de la guerra"
Libros leídos:
1. Cien años de soledad
2. El portal de los obeliscos
3. Outliers
4. El principito
5. 1984
6. El arte de la guerra
```

## Requisitos
- Navegador con soporte para JavaScript.
- Consola del navegador para visualizar los resultados.

## Uso
1. Copia y pega el código en la consola del navegador.
2. Ingresa los títulos cuando se solicite mediante `prompt()`.
3. Observa la lista final de libros leídos en la consola.

---
