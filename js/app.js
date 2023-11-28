// *************     VARIABLES     ***************************
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#year')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')


//Contenedoir para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 13;



//Generar un objeto con la busqyeda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
};



// *************     EVENTOS     ***************************

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // Muestra los autos al cargar

    // Llena las opciones de años
    llenarSelect();
});

// ----------------

//Event listener para los select de búsqueda
marca.addEventListener('change', (e) =>{
    datosBusqueda.marca = e.target.value;
});
 
year.addEventListener('change', (e) =>{
    datosBusqueda.year = e.target.value;
});
 
minimo.addEventListener('change', (e) =>{
    datosBusqueda.minimo = e.target.value;
});
 
maximo.addEventListener('change', (e) =>{
    datosBusqueda.maximo = e.target.value;
});
 
puertas.addEventListener('change', (e) =>{
    datosBusqueda.puertas = e.target.value;
});
 
transmision.addEventListener('change', (e) =>{
    datosBusqueda.transmision = e.target.value;
});
 
color.addEventListener('change', (e) =>{
    datosBusqueda.color = e.target.value;
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

//-----------

