//funcion normal
function calcularTemperaturaMax(temperatura1,temperatura2,temperatura3,temperatura4){
    return(Math.max(temperatura1,temperatura2,temperatura3,temperatura4))
}
function calcularTemperaturaMIN(temperatura1,temperatura2,temperatura3,temperatura4){
    return(Math.min(temperatura1,temperatura2,temperatura3,temperatura4))
}

let temperaturaMax=calcularTemperaturaMax(-5,-200,-30,-10);
let temperaturaMin=calcularTemperaturaMIN(-5,-200,-30,-10);

console.log(`El promedio de la temperatura es`)

//funcion flecha
let calcularTemperaturaMax = (temperaturaMax)=>Math.max(temperaturaMax);

let calcularTemperaturaMin = (temperaturaMin)=>Math.min(temperaturaMin);
console.log(`El promedio de la temperatura es`,calcularTemperaturaMax(Math.max(-200,-30,-10)),calcularTemperaturaMin(Math.min(-5,-30,-10)));


