let datosPadawan ={
    nombre:"juan",
    planeta:"yadorad",
    edad:15, 
    estatura:"1.74", 

}



function Padawan (datos,clasificacion) {

    
    

   if (datos.edad>=15 && datos.edad<15) {

        console.log(`Este padawan realizara el ejercio del manejo de fuerza `)
        clasificacion(null)
    }else{
        console.log(`Este padawan realizara el ejercio del sable de luz`)
        clasificacion("edad")
    }
}
    Padawan (12,function(edad){
    if(edad){
        console.log("El Padawan es mayor de 15 años")
    }
    else{
        console.log("El Padawan es menor de 15 años")
    }
})