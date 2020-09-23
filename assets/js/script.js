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
        swal("Advertencia!", "El boton A ya fue ingresado!", "warning");
    }

});




botonB2.addEventListener('click', () => {

    if (arrayLetras[0] == 'A' && arrayLetras.length == 1)

    {
        arrayLetras.push(document.getElementById('letras').value = 'B');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;

    } else if (arrayLetras[1] == 'B' && arrayNumeros.length == 0) {
        swal("Advertencia!", "El boton B ya fue ingresado!", "warning");
    } else if (arrayNumeros.length == 0) {
        swal("Advertencia!", "Debe ingresar primero el boton A!", "warning");
    }

});

botonC3.addEventListener('click', () => {
    console.log(arrayLetras.length)
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras.length == 2) {
        arrayLetras.push(document.getElementById('letras').value = 'C');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[2] == 'C' && arrayNumeros.length == 0) {
        swal("Advertencia!", "El boton C ya fue ingresado!", "warning");
    } else if (arrayNumeros.length == 0) {
        swal("Advertencia!", "Debes ingresar primero los botones A y B!", "warning");
    }

});


botonD4.addEventListener('click', () => {
    console.log(arrayLetras.length)
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras.length == 3) {
        arrayLetras.push(document.getElementById('letras').value = 'D');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[3] == 'D' && arrayNumeros.length == 0) {
        swal("Advertencia!", "El boton D ya fue ingresado!", "warning");
    } else if (arrayNumeros.length == 0) {
        swal("Advertencia!", "Debes ingresar primero los botones A,B y C!", "warning");
    }


});

botonE5.addEventListener('click', () => {

    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras.length == 4) {
        arrayLetras.push(document.getElementById('letras').value = 'E');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[4] == 'E' && arrayNumeros.length == 0) {
        swal("Advertencia!", "El boton E ya fue ingresado!", "warning");
    } else if (arrayNumeros.length == 0) {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C Y D!", "warning");
    }


});

botonF6.addEventListener('click', () => {

    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras[4] == 'E' && arrayLetras.length == 5) {
        arrayLetras.push(document.getElementById('letras').value = 'F');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[5] == 'F' && arrayNumeros.length == 0) {
        swal("Advertencia!", "El boton F ya fue ingresado!", "warning");
    } else if (arrayNumeros.length == 0) {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C,D y E!", "warning");
    }


});

botonG7.addEventListener('click', () => {
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras[4] == 'E' && arrayLetras[5] == 'F' && arrayLetras.length == 6) {
        arrayLetras.push(document.getElementById('letras').value = 'G');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[6] == 'G' && arrayNumeros.length == 0) {
        swal("Advertencia!", "El boton G ya fue ingresado!", "warning");
    } else if (arrayNumeros.length == 0) {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C,D,E y F!", "warning");
    }
});

botonH8.addEventListener('click', () => {
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras[4] == 'E' && arrayLetras[5] == 'F' && arrayLetras[6] == 'G' && arrayLetras.length == 7) {
        arrayLetras.push(document.getElementById('letras').value = 'H');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[7] == 'H' && arrayNumeros.length == 0) {
        swal("Advertencia!", "El boton H ya fue ingresado!", "warning");
    } else if (arrayNumeros.length == 0) {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C,D,E,F y G !", "warning");
    }

});

botonI9.addEventListener('click', () => {
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras[4] == 'E' && arrayLetras[5] == 'F' && arrayLetras[6] == 'G' && arrayLetras[7] == 'H' && arrayLetras.length == 8) {
        arrayLetras.push(document.getElementById('letras').value = 'I');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[8] == 'I' && arrayNumeros.length == 0) {
        swal("Advertencia!", "El boton I ya fue ingresado!", "warning");
    } else if (arrayNumeros.length == 0) {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C,D,E,F,G y H !", "warning");
    }

});

botonJ0.addEventListener('click', () => {
    if (arrayLetras[0] == 'A' && arrayLetras[1] == 'B' && arrayLetras[2] == 'C' && arrayLetras[3] == 'D' && arrayLetras[4] == 'E' && arrayLetras[5] == 'F' && arrayLetras[6] == 'G' && arrayLetras[7] == 'H' && arrayLetras[8] == 'I' && arrayLetras.length == 9) {
        arrayLetras.push(document.getElementById('letras').value = 'J');
        console.log(arrayLetras);

        document.getElementById('letras').value = arrayLetras;
    } else if (arrayLetras[9] == 'J' && arrayNumeros.length == 0) {
        swal("Advertencia!", "El boton J ya fue ingresado!", "warning");
    } else if (arrayNumeros.length == 0) {
        swal("Advertencia!", "Debes ingresar primero los botones A,B,C,D,E,F,G,H y I !", "warning");
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
        swal("Advertencia!", "El boton 1 ya fue ingresado!", "warning");
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
        swal("Advertencia!", "El boton 2 ya fue ingresado!", "warning");
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
        swal("Advertencia!", "El boton 3 ya fue ingresado!", "warning");
    } else if (arrayNumeros[2] != '3' && arrayLetras.length == 10) {
        swal("Advertencia!", "Debe ingresar primero el boton 1 y 2!", "warning");
    }

});

botonD4.addEventListener('click', () => {
    console.log(arrayNumeros);
    console.log(arrayNumeros.length)

    if (arrayNumeros[0] == '1' && arrayNumeros[1] == '2' && arrayNumeros[2] == '3' && arrayNumeros.length == 3 && arrayLetras.length == 10)

    {
        arrayNumeros.push(document.getElementById('numeros').value = '4');
        console.log(arrayNumeros);

        document.getElementById('numeros').value = arrayNumeros;

    } else if (arrayNumeros[3] == '4' && arrayNumeros.length != 10) {
        swal("Advertencia!", "El boton 4 ya fue ingresado!", "warning");
    } else if (arrayNumeros[3] != '4' && arrayLetras.length == 10) {
        swal("Advertencia!", "Debe ingresar primero el boton 1,2 y 3!", "warning");
    }

});

botonE5.addEventListener('click', () => {
    console.log(arrayNumeros);
    console.log(arrayNumeros.length)

    if (arrayNumeros[0] == '1' && arrayNumeros[1] == '2' && arrayNumeros[2] == '3' && arrayNumeros[3] == '4' && arrayNumeros.length == 4 && arrayLetras.length == 10)

    {
        arrayNumeros.push(document.getElementById('numeros').value = '5');
        console.log(arrayNumeros);

        document.getElementById('numeros').value = arrayNumeros;

    } else if (arrayNumeros[4] == '5' && arrayNumeros.length != 10) {
        swal("Advertencia!", "El boton 5 ya fue ingresado!", "warning");
    } else if (arrayNumeros[4] != '5' && arrayLetras.length == 10) {
        swal("Advertencia!", "Debe ingresar primero el boton 1,2,3 y 4 !", "warning");
    }

});

botonF6.addEventListener('click', () => {
    console.log(arrayNumeros);
    console.log(arrayNumeros.length)

    if (arrayNumeros[0] == '1' && arrayNumeros[1] == '2' && arrayNumeros[2] == '3' && arrayNumeros[3] == '4' && arrayNumeros[4] == '5' && arrayNumeros.length == 5 && arrayLetras.length == 10)

    {
        arrayNumeros.push(document.getElementById('numeros').value = '6');
        console.log(arrayNumeros);

        document.getElementById('numeros').value = arrayNumeros;

    } else if (arrayNumeros[5] == '6' && arrayNumeros.length != 10) {
        swal("Advertencia!", "El boton 6 ya fue ingresado!", "warning");
    } else if (arrayNumeros[5] != '6' && arrayLetras.length == 10) {
        swal("Advertencia!", "Debe ingresar primero el boton 1,2,3,4 y 5!", "warning");
    }

});

botonG7.addEventListener('click', () => {
    console.log(arrayNumeros);
    console.log(arrayNumeros.length)

    if (arrayNumeros[0] == '1' && arrayNumeros[1] == '2' && arrayNumeros[2] == '3' && arrayNumeros[3] == '4' && arrayNumeros[4] == '5' && arrayNumeros[5] == '6' && arrayNumeros.length == 6 && arrayLetras.length == 10)

    {
        arrayNumeros.push(document.getElementById('numeros').value = '7');
        console.log(arrayNumeros);

        document.getElementById('numeros').value = arrayNumeros;

    } else if (arrayNumeros[6] == '7' && arrayNumeros.length != 10) {
        swal("Advertencia!", "El boton 7 ya fue ingresado!", "warning");
    } else if (arrayNumeros[6] != '7' && arrayLetras.length == 10) {
        swal("Advertencia!", "Debe ingresar primero el boton 1,2,3,4,5 y 6!", "warning");
    }

});

botonH8.addEventListener('click', () => {
    console.log(arrayNumeros);
    console.log(arrayNumeros.length)

    if (arrayNumeros[0] == '1' && arrayNumeros[1] == '2' && arrayNumeros[2] == '3' && arrayNumeros[3] == '4' && arrayNumeros[4] == '5' && arrayNumeros[5] == '6' && arrayNumeros[6] == '7' && arrayNumeros.length == 7 && arrayLetras.length == 10)

    {
        arrayNumeros.push(document.getElementById('numeros').value = '8');
        console.log(arrayNumeros);

        document.getElementById('numeros').value = arrayNumeros;

    } else if (arrayNumeros[7] == '8' && arrayNumeros.length != 10) {
        swal("Advertencia!", "El boton 8 ya fue ingresado!", "warning");
    } else if (arrayNumeros[7] != '8' && arrayLetras.length == 10) {
        swal("Advertencia!", "Debe ingresar primero el boton 1,2,3,4,5,6 y 7 !", "warning");
    }

});

botonI9.addEventListener('click', () => {
    console.log(arrayNumeros);
    console.log(arrayNumeros.length)

    if (arrayNumeros[0] == '1' && arrayNumeros[1] == '2' && arrayNumeros[2] == '3' && arrayNumeros[3] == '4' && arrayNumeros[4] == '5' && arrayNumeros[5] == '6' && arrayNumeros[6] == '7' && arrayNumeros[7] == '8' && arrayNumeros.length == 8 && arrayLetras.length == 10)

    {
        arrayNumeros.push(document.getElementById('numeros').value = '9');
        console.log(arrayNumeros);

        document.getElementById('numeros').value = arrayNumeros;

    } else if (arrayNumeros[8] == '9' && arrayNumeros.length != 10) {
        swal("Advertencia!", "El boton 9 ya fue ingresado!", "warning");
    } else if (arrayNumeros[8] != '9' && arrayLetras.length == 10) {
        swal("Advertencia!", "Debe ingresar primero el boton 1,2,3,4,5,6,7 y 8 !", "warning");
    }

});

botonJ0.addEventListener('click', () => {
    console.log(arrayNumeros);
    console.log(arrayNumeros.length)

    if (arrayNumeros[0] == '1' && arrayNumeros[1] == '2' && arrayNumeros[2] == '3' && arrayNumeros[3] == '4' && arrayNumeros[4] == '5' && arrayNumeros[5] == '6' && arrayNumeros[6] == '7' && arrayNumeros[7] == '8' && arrayNumeros[8] == '9' && arrayNumeros.length == 9 && arrayLetras.length == 10)

    {
        arrayNumeros.push(document.getElementById('numeros').value = '0');
        console.log(arrayNumeros);

        document.getElementById('numeros').value = arrayNumeros;

    } else if (arrayNumeros[9] == '0' && arrayNumeros.length != 10) {
        swal("Advertencia!", "El boton 0 ya fue ingresado!", "warning");
    } else if (arrayNumeros[9] != '0' && arrayLetras.length == 10 && arrayLetras[10] == 'J') {
        swal("Advertencia!", "Debe ingresar primero el boton 1,2,3,4,5,6,7,8 y 9 !", "warning");
    }

});

botonReset.addEventListener('click', () => {
    console.log(arrayLetras);
    console.log(arrayLetras.length)
    /* if (arrayLetras[0] != 'A' && arrayLetras.length == 0) {
           arrayLetras.push(document.getElementById('letras').value = 'A');
           console.log(arrayLetras);

           document.getElementById('letras').value = arrayLetras;
       } else if (arrayLetras[0] == 'A' && arrayLetras.length != 10) {
           swal("Advertencia!", "El boton A ya fue ingresado!", "warning");
       } */

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