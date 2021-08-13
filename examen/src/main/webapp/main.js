let f, i;
let data = [
    { nombre: "Ulises", apellido: "Stamatio",apellidoDos:"Ferraez", Pokemon: "Charizard"},
];
let panel = document.querySelector("#panel");


function Limpiar() {
    document.querySelector("#Pnom").value = "";
    document.querySelector("#Pape").value = "";
    document.querySelector("#Sape").value = "";
    document.querySelector("#pkm").value = "";
}

function Mostrar() {
    panel.textContent = "";
    data.forEach(x => {
        f = document.createElement("option");
        f.innerText = `${x.nombre} ${x.apellido} ${x.apellidoDos} ${x.Pokemon}`;
        panel.append(f);
    });
}



function Crear() {
    let fn = document.querySelector("#Pnom").value;
    let ln = document.querySelector("#Pape").value;
    let sa = document.querySelector("#Sape").value;
    let pk = document.querySelector("#pkm").value;
    data = [...data, { nombre: fn, apellido: ln, apellidoDos: sa, Pokemon: pk}];
    Limpiar();
    console.log(data)
    Mostrar();
}

function Click() {
    i = panel.selectedIndex;
    document.querySelector("#Pnom").value = data[i].nombre;
    document.querySelector("#Pape").value = data[i].apellido;
    document.querySelector("#Sape").value = data[i].apellidoDos;
    document.querySelector("#pkm").value = data[i].Pokemon;
}

function Actualizar() {
    data[i].nombre = document.querySelector("#Pnom").value;
    data[i].apellido = document.querySelector("#Pape").value;
    data[i].apellidoDos = document.querySelector("#Sape").value;
    data[i].Pokemon = document.querySelector("#pkm").value;
    Mostrar();
}

function Borrar() {
    data.splice(i, 1);
    Mostrar();
}

Mostrar();
