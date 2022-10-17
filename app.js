/*

¿Cómo se calcula el IMC?
Con el sistema métrico, la fórmula para el IMC es el peso en kilogramos dividido por la estatura en metros cuadrados.

Composición corporal	    Índice de masa corporal (IMC)
Peso inferior al normal	    Menos de 18.5
Normal	                    18.5 – 24.9
Peso superior al normal	    25.0 – 29.9
Obesidad	                Más de 30.0

*/

// Solicitar al usuario que ingrese datos
function calculadoraIMC(){
    let peso = parseFloat(prompt('Por favor, ingrese su peso en kilogramos'))
    if(!isNaN(peso) && peso != null && peso > 0 && peso != ""){
        pesoFin = peso.toFixed(2);
        console.log(`Valor válido ${pesoFin}`)
    }else{
        alert('Ingrese un valor válido');
    }

    let estatura = parseFloat(prompt('Por favor, ingrese su estatura en metros'))
    if(!isNaN(estatura) && estatura != null && estatura > 0 && estatura != ""){
        estaturaFin = estatura.toFixed(2);
        console.log(`Valor válido ${estaturaFin}`)
    }else{
        alert('Ingrese un valor válido');
    }
    
    // Calcular IMC
    let IMC = pesoFin/(estaturaFin^2)
    alert(`Su índice de masa corporal es ${IMC.toFixed(1)}`)

    // Alertar al usuario acerca de su IMC
    if(IMC < 18.5){
        alert('Su peso es inferior al normal')
    } else if(IMC < 25){
        alert('Peso normal')
    } else if(IMC < 30){
        alert('Peso superior al normal')
    } else{
        alert('Obesidad')
    }
    
    // while(IMC != 0){                     /* NO ME SALIÓ ASÍ CON SWITCH, ¿ ES MÁS O MENOS POR ESE LADO O ESTABA MUY ERRADA ? */
    //     switch(IMC){
    //         case (IMC < 18.5) :
    //             alert('Su peso es inferior al normal')
    //         break;
    
    //         case (IMC < 25) :
    //             alert('Peso normal')
    //         break;
    
    //         case (IMC < 30) :
    //             alert('Peso superior al normal')
    //         break;
    
    //         case (IMC > 30) :
    //             alert('Obesidad')
    //         break;
            
    //         default:
    //             alert('Ingrese sus datos correctamente')
    //     }
    // }
}

calculadoraIMC();

let repetir = true
    do {
    let pregunta = prompt(`¿Desea ingresar nuevamente sus datos?`)
    if(pregunta.toUpperCase() == "NO"){
        repetir = false
        alert("Gracias por utilizar nuestro código!")
    }else{
        calculadoraIMC();
    }
}while(repetir)