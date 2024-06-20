const fondoACambiar = document.getElementById("fondo-presentacion")
let numFondo = 1
fondoACambiar.classList.add("bg-" + numFondo)

function cambiarFondo() {
    setTimeout(() => {
        fondoACambiar.classList.remove("bg-" + numFondo)
        
        if (numFondo == 3) {
            numFondo = 1
        } else {
            numFondo++
        }

        fondoACambiar.classList.add("bg-" + numFondo)

        cambiarFondo()
    }, 4000)
}

cambiarFondo()