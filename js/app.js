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

    filtrarAutos();
});
 
year.addEventListener('change', (e) =>{
    datosBusqueda.year = e.target.value;

    filtrarAutos();
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

function mostrarAutos(autos) {

    limpiarHTML(); // Elimina el HTML previo

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

// Limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    };
}

//-----------

//Genera los años del select
function llenarSelect() {
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);// agrega las opciones de año al select
    };
};

//-----------

// Funcion que filtra en base a la busqueda
function filtrarAutos() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)

    mostrarAutos(resultado);
}

//-----------

function filtrarMarca(auto) {
    if(datosBusqueda.marca) { // si el usuario seleccionó alguna marca
        return auto.marca === datosBusqueda.marca;
    } else {
        return auto;
    };
};

//-----------

function filtrarYear(auto) {
    const { year } = datosBusqueda
    if(year) { // si el usuario seleccionó alguna marca
        return auto.year === parseInt(year);
    } else {
        return auto;
    };
};