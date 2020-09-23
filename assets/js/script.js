const botonA1 = document.getElementById('botonA1');
const botonB2 = document.getElementById('botonB2');
const botonC3 = document.getElementById('botonC3');
const botonD4 = document.getElementById('botonD4');
const botonE5 = document.getElementById('botonE5');
const botonF6 = document.getElementById('botonF6');
const botonG7 = document.getElementById('botonG7');
const botonH8 = document.getElementById('botonH8');
const botonI9 = document.getElementById('botonI9');
const botonNN = document.getElementById('botonNN');
const botonJ0 = document.getElementById('botonJ0');
const botonReset = document.getElementById('botonReset');

/* let arrayLetras = []; */

var arrayLetras = [];
console.log(arrayLetras);

/* console.log(typeof arrayLetras)
const arrayLetrasEnString = JSON.stringify(arrayLetras)
localStorage.setItem('inputLetras', arrayLetrasEnString) */

var arrayNumeros = [];
console.log(arrayNumeros);


/* console.log(typeof arrayNumeros)
const arrayNumerosEnString = JSON.stringify(arrayNumeros)
localStorage.setItem('inputNumeros', arrayNumerosEnString) */





botonA1.addEventListener('click', () => {
    console.log(arrayLetras);
    console.log(arrayLetras.length)
    if (arrayLetras[0] != 'A' && arrayLetras.length == 0) {
        arrayLetras.push(document.getElementById('letras').value = 'A');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[0] == 'A' && arrayLetras.length != 10) {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    }

});




botonB2.addEventListener('click', () => {

    if (arrayLetras[0] == 'A' && arrayLetras.length == 1)

    {
        arrayLetras.push(document.getElementById('letras').value = 'B');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;

    } else if (arrayLetras[1] == 'B') {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    } else {
        swal("Advertencia!", "Debe ingresar primero el boton A!", "warning");
    }

});

botonC3.addEventListener('click', () => {
    console.log(arrayLetras.length)
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras.length == 2) {
        arrayLetras.push(document.getElementById('letras').value = 'C');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[2] == 'C') {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    } else {
        swal("Advertencia!", "Debes ingresar primero los botones A y B!", "warning");
    }

});


botonD4.addEventListener('click', () => {
    console.log(arrayLetras.length)
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras.length == 3) {
        arrayLetras.push(document.getElementById('letras').value = 'D');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[3] == 'D') {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    } else {
        swal("Advertencia!", "Debes ingresar primero los botones A,B y C!", "warning");
    }


});

botonE5.addEventListener('click', () => {

    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras.length == 4) {
        arrayLetras.push(document.getElementById('letras').value = 'E');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[4] == 'E') {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    } else {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C Y D!", "warning");
    }


});

botonF6.addEventListener('click', () => {

    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras[4] == 'E' && arrayLetras.length == 5) {
        arrayLetras.push(document.getElementById('letras').value = 'F');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[5] == 'F') {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    } else {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C,D y E!", "warning");
    }


});

botonG7.addEventListener('click', () => {
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras[4] == 'E' && arrayLetras[5] == 'F' && arrayLetras.length == 6) {
        arrayLetras.push(document.getElementById('letras').value = 'G');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[6] == 'G') {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    } else {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C,D,E y F!", "warning");
    }
});

botonH8.addEventListener('click', () => {
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras[4] == 'E' && arrayLetras[5] == 'F' && arrayLetras[6] == 'G' && arrayLetras.length == 7) {
        arrayLetras.push(document.getElementById('letras').value = 'H');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[7] == 'H') {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    } else {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C,D,E y F!", "warning");
    }

});

botonI9.addEventListener('click', () => {
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras[4] == 'E' && arrayLetras[5] == 'F' && arrayLetras[6] == 'G' && arrayLetras[7] == 'H' && arrayLetras.length == 8) {
        arrayLetras.push(document.getElementById('letras').value = 'I');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[8] == 'I') {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    } else {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C,D,E,F y G!", "warning");
    }

});

botonJ0.addEventListener('click', () => {
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras[4] == 'E' && arrayLetras[5] == 'F' && arrayLetras[6] == 'G' && arrayLetras[7] == 'H' && arrayLetras[8] == 'I' && arrayLetras.length == 9) {
        arrayLetras.push(document.getElementById('letras').value = 'J');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[9] == 'J') {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    } else {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C,D,E,F,G y H!", "warning");
    }

});



botonA1.addEventListener('click', () => {
    console.log(arrayNumeros);
    console.log(arrayNumeros.length)
    if (arrayNumeros[0] != '1' && arrayNumeros.length == 0 && arrayLetras.length == 10) {

        arrayNumeros.push(document.getElementById('numeros').value = '1');
        console.log(arrayNumeros);

        document.getElementById('numeros').value = arrayNumeros;
    } else if (arrayNumeros[0] == '1') {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    }

});

botonB2.addEventListener('click', () => {
    console.log(arrayNumeros);
    console.log(arrayNumeros.length)

    if (arrayNumeros[0] == '1' && arrayNumeros.length == 1 && arrayLetras.length == 10)

    {
        arrayNumeros.push(document.getElementById('numeros').value = '2');
        console.log(arrayNumeros);

        document.getElementById('numeros').value = arrayNumeros;

    } else if (arrayNumeros[1] == '2' && arrayNumeros.length != 10) {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    } else if (arrayNumeros[1] != '2' && arrayLetras.length == 10) {
        swal("Advertencia!", "Debe ingresar primero el boton 1!", "warning");
    }


});


botonC3.addEventListener('click', () => {
    console.log(arrayNumeros);
    console.log(arrayNumeros.length)

    if (arrayNumeros[0] == '1' && arrayNumeros[1] == '2' && arrayNumeros.length == 2 && arrayLetras.length == 10)

    {
        arrayNumeros.push(document.getElementById('numeros').value = '3');
        console.log(arrayNumeros);

        document.getElementById('numeros').value = arrayNumeros;

    } else if (arrayNumeros[2] == '3' && arrayNumeros.length != 10) {
        swal("Advertencia!", "Este boton ya fue ingresado!", "warning");
    } else if (arrayNumeros[2] != '3' && arrayLetras.length == 10) {
        swal("Advertencia!", "Debe ingresar primero el boton 1!", "warning");
    }


});



/* for (var i = 0; i < arrayLetras.length; i++) {
    var supp = arrayLetras[i];
    console.log(arrayLetras);
    switch (supp) {
        case 'hello':
        case 'something':
        case 'something too':
            // Do something
            console.log('Works!')
            break;
        default:
            break;
    }
} */