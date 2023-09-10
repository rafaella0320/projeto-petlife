document.addEventListener("DOMContentLoaded", function () {
    let elementosDuvida = document.querySelectorAll('.duvida')
    elementosDuvida.forEach(function (duvida) {
        duvida.addEventListener('click', function () {
            duvida.classList.toggle('ativa')
        })
    })
})