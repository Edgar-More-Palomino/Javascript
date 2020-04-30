//tipos de datos: String, number, array, object 

console.log("esto es una cadena");
console.log(144);
console.log([1,2,3]);
console.log(1.4);
console.log({"username":"edgar",
"score":70.4});

//Variables: var-->creando una variable o let
var name_user="edgar";
let lastname="more palomino"
console.log(lastname);

//cambiando nombre porque es una variable
name_user="Fabrizio";
console.log(name_user);

//constante no se cambia
//const PI=3.1415;
//PI=44.44;
//console.log(PI);

//operadores
var num1=5;
var num2=4;
var resultado =num1/num2;
console.log(resultado);

//concatenar
let nombre="edgar";
let apellido="more";
console.log("mi nombre y apellido es "+nombre+" "+apellido); //1era forma
let nombre_completo=nombre+" "+apellido;//2da forma
console.log(nombre_completo);

// boolean: true or false
let numero1=100;
let numero2=500;
let numero_mayor=numero1!=numero2;
console.log(numero_mayor);

let passwordFace="Ashley";
let input="Ashley";
let resul=passwordFace==input;
console.log(resul);

//condicionales If
if(resul==true){//1ra forma
console.log("son iguales...ingresastes");
}else{
    console.log("son diferentes...corrige")
}

if(passwordFace==input){//2ra forma
    console.log("son iguales...ingresastes");
    }else{
        console.log("son diferentes...corrige")
    }

let anotacion=70;
if(anotacion>30){
console.log("necesitas practicar mas");
}else if(anotacion>15){
console.log("estas mejorando");
}else{
    console.log("sigue practicando");
}

//condicionales : Switch
let tarjeta="master card";
switch(tarjeta){
    case "debito":
    console.log("es una tarjeta de debito");
    break;
    case "haberes":
    console.log("es una tarjeta de ahorros");
    break;
    default: 
    console.log("se equivovo de tarjeta");
     
    //Bucles while
    let count =0;
    while(count<=50){
    console.log(count);
    count++;
    }

    //Array
    let names=["luis","juan","pedro","carlos"];
    console.log("la cantidad de nombres es "+ names.length);

    //Bucles For
    for(let i=0; i<names.length;i++){
        console.log(names[i]);

    }
    //Funciones
    function saludar(){
        console.log("todo bien...!");
    }
    saludar();

    //Funciones con parametros
    //String
    function despedirse(nombre_amigo){
        console.log("chau "+nombre_amigo);
    }
    despedirse("edgar");

    //se reutiliza el codigo
    despedirse("fabrizio");
    despedirse("chato");

    //numeros enteros
    function sumar(n1,n2){
        console.log("la operacion es "+(n1+n2));
    }
    sumar(4,4);
    sumar(400,400);
    sumar(400," edgar");


}


































































