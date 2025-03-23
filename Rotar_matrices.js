/**
 * --- Programita diseñado por Ruthzeryna ---
 * Propósito: Rotar matrices predefinidas.
 */

const readline = require('readline');

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const matriz_de_ejemplo_1 = [
    [1,1,1,1],
    [1,1],
    [1,1,1,1],
    [1,1],
    [1,1,1,1]
]

const matriz_de_ejemplo_2 = [
    [1,1,1,1],
    [0,0,1,0],
    [0,1,1,1,1,1]
]

const matriz_de_ejemplo_3 = [
    [0,1],
    [0,1],
    [0,1],
    [1,1]
]

const matriz_de_ejemplo_4 = [
    [0,1],
    [0,1],
    [1,1],
    [1,1],
    [0,1],
    [0,1]
]

const matriz_de_ejemplo_5 = [
    [1,0,0,1],
    [1,0,0,1],
    [1,0,0,1],
    [1,1,1,1]
]

function transformar_matriz(TipoDeTransformacion, Matriz){

    let mayor_largo_array = 0;
    if (TipoDeTransformacion <= 5 && TipoDeTransformacion >= 0)
{
    //Obtener diemnsiones maximas
    Matriz.forEach(element => {
        if (element.length > mayor_largo_array){
            mayor_largo_array = element.length;
        }
    });

    //Rellenar
    Matriz.forEach(element => {
        if (element.length < mayor_largo_array){
            for (let i = element.length; i < mayor_largo_array; i++){
                element.push(0);
            }
        }
    });
}

else{
    return Matriz;
}
    let Matriz_final = []
    switch (TipoDeTransformacion){
        case 0: //Sentido horario 90°
            console.log("\nRotando 90° en sentido horario\n")
            Matriz = Matriz.reverse();
            for (let i = 0; i < mayor_largo_array; i++){
                Matriz_final.push([]);
                for (let e = 0; e < Matriz.length; e++){
                    Matriz_final[i].push(Matriz[e][i]);
                };
            };          
            Matriz = Matriz_final;
            console.log(Matriz);
            break;
        case 1: //Sentido anti-horario 90°
            console.log("\nRotando 90° en sentido anti-horario\n");
            Matriz.forEach(element => {
                element.reverse();
            });
            for (let i = 0; i < mayor_largo_array; i++){
                Matriz_final.push([]);
                for (let e = 0; e < Matriz.length; e++){
                    Matriz_final[i].push(Matriz[e][i]);
                };
            };          
            Matriz = Matriz_final;
            console.log(Matriz);
            break;
        case 2: //Sentido horario 180°
            console.log("\nRotando 180° en sentido horario\n");
            Matriz = Matriz.reverse();
            Matriz.forEach(element => {
                element.reverse();
            });
            console.log(Matriz);
            break;
        case 3: //Sentido anti-horario 180°
            console.log("\nRotando 180° en sentido anti-horario\n");
            Matriz = Matriz.reverse();
            Matriz.forEach(element => {
                element.reverse();
            });
            console.log(Matriz);
            break;
        case 4: //Espejar horizontalmente
            console.log("\nInvirtiendo horizontalmente\n");
            Matriz.forEach(element => {
                element.reverse();
            });
            console.log(Matriz);
            break;
        case 5: //Espejar verticalmente
            console.log("\nInvirtiendo verticalmente\n");
            Matriz = Matriz.reverse();
            console.log(Matriz);
            break;
    }

    return Matriz
}

function inicio(){
    console.log("\n====== Rotador de matrices ======\n");
    console.log("Ejemplo 1");
    console.log("Ejemplo 2");
    console.log("Ejemplo 3");
    console.log("Ejemplo 4");
    console.log("Ejemplo 5");

    interfaz.question("\nIndique el número de matriz a rotar ó 'e' para salir: ", (respuesta) => {
    
        let matriz_ejemplar_a_mostrar;

        const numero = parseFloat(respuesta.trim());

        if (respuesta.trim()==="e"){
            console.log("Saliendo...");
            interfaz.close();
        }
        else if(isNaN(numero) || numero > 5 || numero <=0) {
            console.log("\n__Respuesta inválida__");
            console.log("Por favor indique el número de matriz a rotar ó 'e' para salir");
            inicio();
        }
        else{

            respuesta = Number(respuesta.trim())-1;
            
            switch (respuesta){
                case 0:
                    console.log("\n==== Ha seleccionado la matriz 1 ====")
                    matriz_ejemplar_a_mostrar = null;
                    matriz_de_ejemplo_1.forEach(element => {
                        if (matriz_ejemplar_a_mostrar === null) {
                            matriz_ejemplar_a_mostrar = "           "+ String(element);
                        } else {
                            matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar + "\n           " + String(element);
                        }
                        });
                    matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar.replaceAll(",","");
                    matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar.replaceAll("0"," ");
                    console.log("\n"+matriz_ejemplar_a_mostrar);
                    preguntaRotar(matriz_de_ejemplo_1);
                    break;
                case 1:
                    console.log("\n==== Ha seleccionado la matriz 2 ====")
                    matriz_ejemplar_a_mostrar = null;
                    matriz_de_ejemplo_2.forEach(element => {
                        if (matriz_ejemplar_a_mostrar === null) {
                            matriz_ejemplar_a_mostrar = "           "+ String(element);
                        } else {
                            matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar + "\n           " + String(element);
                        }
                        });
                    matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar.replaceAll(",","");
                    matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar.replaceAll("0"," ");
                    console.log("\n"+matriz_ejemplar_a_mostrar);
                    preguntaRotar(matriz_de_ejemplo_2);
                    break;
                case 2:
                    console.log("\n==== Ha seleccionado la matriz 3 ====")
                    matriz_ejemplar_a_mostrar = null;
                    matriz_de_ejemplo_3.forEach(element => {
                        if (matriz_ejemplar_a_mostrar === null) {
                            matriz_ejemplar_a_mostrar = "           "+ String(element);
                        } else {
                            matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar + "\n           " + String(element);
                        }
                        });
                    matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar.replaceAll(",","");
                    matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar.replaceAll("0"," ");
                    console.log("\n"+matriz_ejemplar_a_mostrar);
                    preguntaRotar(matriz_de_ejemplo_3);
                    break;
                case 3:
                    console.log("\n==== Ha seleccionado la matriz 4 ====")
                    matriz_ejemplar_a_mostrar = null;
                    matriz_de_ejemplo_4.forEach(element => {
                        if (matriz_ejemplar_a_mostrar === null) {
                            matriz_ejemplar_a_mostrar = "           "+ String(element);
                        } else {
                            matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar + "\n           " + String(element);
                        }
                        });
                    matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar.replaceAll(",","");
                    matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar.replaceAll("0"," ");
                    console.log("\n"+matriz_ejemplar_a_mostrar);
                    preguntaRotar(matriz_de_ejemplo_4);
                    break;
                case 4:
                    console.log("\n==== Ha seleccionado la matriz 5 ====")
                    matriz_ejemplar_a_mostrar = null
                    matriz_de_ejemplo_5.forEach(element => {
                        if (matriz_ejemplar_a_mostrar === null) {
                            matriz_ejemplar_a_mostrar = "           "+ String(element);
                        } else {
                            matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar + "\n           " + String(element);
                        }
                        });
                    matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar.replaceAll(",","");
                    matriz_ejemplar_a_mostrar = matriz_ejemplar_a_mostrar.replaceAll("0"," ");
                    console.log("\n"+matriz_ejemplar_a_mostrar);
                    preguntaRotar(matriz_de_ejemplo_5);
                    break;
            }
        }
    });
}

function preguntaRotar(matriz_seleccionada){
    interfaz.question("\n\n¿Desea rotarla?  (s/n): ", (respuesta) => {
        respuesta = respuesta.trim();
        if (respuesta === "s" || respuesta === "y") {
            preguntaComoRotar(matriz_seleccionada);
        } else if (respuesta === "n") {
            console.log("Regresando...\n");
            inicio();
        } else {
            console.log("Por favor indica 's' ó 'y' para sí, 'n' para no");
            preguntaRotar(matriz_seleccionada);
        }
    })
}

function preguntaComoRotar(matriz_seleccionada){
    console.log("\n==== ¿Como desea rotarla? ====\n");
    console.log("0 - 90° Sentido horario")
    console.log("1 - 90° Sentido anti-horario")
    console.log("2 - 180° Sentido horario")
    console.log("3 - 180° Sentido anti-horario")
    console.log("4 - Invertir horizontalmente")
    console.log("5 - Invertir verticalmente")

    interfaz.question("\nIndique las operaciones a realizar (tantas como se quiera) ('c' para cancelar): ", (respuesta) => {
        respuesta = respuesta.trim();

        const esNumero = parseFloat(respuesta.trim());

        if (respuesta === "c") {
            console.log("Regresando...\n");
            inicio();
        }
        else if (isNaN(esNumero)) {
            console.log("\n__Respuesta inválida__");
            console.log("Por favor indique las operaciones a realizar ó 'c' para cancelar");
            preguntaComoRotar(matriz_seleccionada);
        }
        else{
            respuesta.replaceAll(" ", "");
            realizarOperaciones(matriz_seleccionada, respuesta);
        }
        
    })
}

function realizarOperaciones(matriz_modificada, operaciones) {
    for (let i = 0; i < operaciones.length; i++) {
        const operacion = parseInt(operaciones[i]);
        if (!isNaN(operacion)) {
            if (operacion > 5 || operacion < 0) {
                console.log("\n__La o una de las operaciones ingresadas es inválida__\n");
            }
            else{
            matriz_modificada = transformar_matriz(operacion, matriz_modificada);
            }
        }
        else{
            console.log("\n__La o una de las operaciones ingresadas es inválida__\n");
        }
        
    }
    mostrarMatrizFinal(matriz_modificada);
}

function mostrarMatrizFinal(matriz_final){
    let TextoFinal = "";
    matriz_final.forEach(element => {
    if (TextoFinal === "") {
        TextoFinal = "           " + String(element);
    } else {
        TextoFinal = TextoFinal + "\n           " + String(element);
    }
    });

    TextoFinal = TextoFinal.replaceAll(",","")
    TextoFinal = TextoFinal.replaceAll("0"," ")

    console.log("\nMatriz rotada\n\n" + TextoFinal)
    preguntarContinuar()
}

function preguntarContinuar(){
    interfaz.question("\n¿Quieres continuar? (s/n): ", (respuesta) => {
        respuesta = respuesta.trim().toLowerCase();
        
        if (respuesta === "s" || respuesta === "y") {
            inicio();
        } else if (respuesta === "n") {
            console.log("Saliendo...");
            interfaz.close();
        } else {
            console.log("Por favor indica 's' ó 'y' para sí, 'n' para no");
            preguntarContinuar();
        }
    });
}

inicio();


