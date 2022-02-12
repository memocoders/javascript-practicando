async function obtenerDatos() {
    const response = await fetch("http://127.0.0.1:5500/ejemplos.json");
    const json = await response.json();

    console.log(json);
    console.log(json.direcciones);
    json.direcciones.forEach(element => {
        console.log(element.ciudad);
    });

    console.groupEnd("Estados");
    json.direcciones.forEach(element => {
        console.log(element.estado);
    });
    console.groupEnd;
}

console.log(obtenerDatos());