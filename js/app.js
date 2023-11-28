// *************     VARIABLES     ***************************

const resultado = document.querySelector('#resultado');

const year = document.querySelector('#year')
const max = new Date().getFullYear();
const min = max - 13;



// *************     EVENTOS     ***************************

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los autos al cargar

    // Llena las opciones de años
    llenarSelect();
});


// *************     FUNCIONES    ***************************

function mostrarAutos() {
    autos.forEach( auto  => {
        const { marca, modelo, year, puertas, transmision, precio, color }= auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transimisión: ${transmision} - Precio: $${precio} - Color: ${color}
            `;
        // insertar en el html
        resultado.appendChild(autoHTML)
    });
}

//-----------


//Genera los años del select
function llenarSelect(){
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);// agrega las opciones de año al select
    }
}