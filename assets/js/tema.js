const retro = document.getElementById('retro')
const dark = document.getElementById('dark')


const container = document.getElementById('container')

/* 
const color = localStorage.getItem('container')
console.log(color); */


retro.addEventListener("click", () => {

    container.classList.add('retro')
    localStorage.setItem('container', 'retro');

    var contRetro = new Number;

    var contRetro = contRetro + 1;


    console.log('click')
    if (contRetro % 2) {}
    localStorage.removeItem('container', 'retro');


})


dark.addEventListener("click", () => {
    container.classList.add('dark')
    localStorage.setItem('container', 'dark');
})


/* const temaEnStorage = () => {

    const temaGuardado = localStorage.getItem('tema')
    console.log(temaGuardado)

    if (temaGuardado == 'retro') {
        container.classList.add('retro')
    } else if (temaGuardado == 'dark') {
        container.classList.add('dark')
    }
}

temaEnStorage() */