let masaRadio = document.querySelectorAll('input[type=radio][name=tipo-masa]');
let ingredienteCheckbox = document.querySelectorAll('input[type=checkbox][name=ingredientes]');

let tiemposMasa = [
    {name: "fina", tiempomasa: "1 hora", tiempohorneado: "12 minutos"},
    {name: "gruesa", tiempomasa: "1,5 horas", tiempohorneado: "14 minutos"},
    {name: "integral", tiempomasa: "2 horas", tiempohorneado: "16 minutos"}
]

masaRadio.forEach(radio => {
    radio.addEventListener('click', action => {
        mostrarDatosRecogidos();
    })
})

masaRadio.forEach(radio => {
    radio.addEventListener('click', action => {
        modificarTiempos(radio.value);
    })
})

ingredienteCheckbox.forEach(checkbox => {
    checkbox.addEventListener('click', action => {
        mostrarDatosRecogidos();
    })
})

function mostrarDatosRecogidos() {
    console.clear();
    const masas = document.querySelector('input[type=radio][name=tipo-masa]:checked');
    let masa ="";
    if(masas!==null) {
        masa = masas.value;
    }
    console.log(`Masa elegida: ${masa}`);

    const ingrediente = document.querySelectorAll('input[type=checkbox][name=ingredientes]:checked');
    let ingredientes = "";
    let contador = 1;
    ingrediente.forEach(elemento => {
        ingredientes = ingredientes + elemento.value; 
        if(contador < ingrediente.length) {
            ingredientes = ingredientes + ", ";
        }
        contador++;
    });

    console.log(`Ingredientes: ${ingredientes}`);
}

function modificarTiempos(tipoMasa) {
    let tiempo = tiemposMasa.filter(function (masa) {
        if(masa.name != tipoMasa) {
          return false;
        }
        const masaTiempo = document.getElementById("tiempo-masa");
        masaTiempo.innerText = `Reposo: ${masa.tiempomasa}.`;
        const horneadoTiempo = document.getElementById("tiempo-horneado");
        horneadoTiempo.innerText = `Horneado: ${masa.tiempohorneado}.`;
})
}
    