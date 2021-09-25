// funcion normal 
function calcularDistancia(coordenadax1,coordenadax2,
    coordenaday1,coordenaday2){
        return(`La distancia del planeta Yani4 a naboo es de: ${Math.sqrt(Math.pow(coordenadax2-coordenadax1,2)+Math.pow(coordenaday2-coordenaday1,2))} UA`);
}
console.log(calcularDistancia(0,50,0,-70));
console.log(calcularDistancia(0,20,0,30));

//funcion flecha


let calcular =(numero)=>Math.pow(numero,3);
console.log(calcular(2));