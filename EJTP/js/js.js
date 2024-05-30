class Vehiculo{
    constructor(marca, modelo, valor_base, km, color, anio, patente, vendido, titular){
        this.marca = marca;
        this.modelo = modelo;
        this.valor_base = valor_base;
        this.km = km;
        this.color = color;
        this.anio = anio;
        this.patente = patente;
        this.vendido = vendido;
        this.titular = titular;

    }

    get getMarca(){
        return this.marca;

    }get getModelo(){
        return this.modelo;

    }get getValorBase(){
        return this.valor_base;

    }get getKm(){
        return this.km;

    }get getColor(){
        return this.color;

    }get getAnio(){
        return this.anio;

    }get getPatente(){
        return this.patente;

    }get getTitular(){
        return this.titular;

    }
}

class persona{
    constructor(rut, nombre, apellido, edad){
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    get getRut(){
        return this.rut;
    }
    get getNombre(){
        return this.nombre;
    }
    get getApellido(){
        return this.apellido;
    }
    get getEdad(){
        return this.edad;
    }

}

//Crear un Vehiculo con un titular

var arrPersona = []; //Arreglo para personas.

var pers = new persona("1-1", "Jhon", "Doe",35);//Crear objeto.

arrPersona.push(pers); // Agregar objeto en lista 

//Para agregar un titular a un vehiculo, primero buscamos al titual en la lista creada
var titular1 = arrPersona.find(i => i.rut == "1-1"); //cambiar el "1-1" por el valor que necesitan.

var v1 = new Vehiculo(
    "Suzuki",
    "Vitara",
    10000000,
    25000,
    "Rojo",
    2015,
    "ABCD12",
    true,
    titular1 //Se agrega aquí el objeto que necesitamos.
);

var texto = "Patente: "+v1.patente+" - Marca: "+v1.marca+"- Titular: "+v1.titular.nombre+" "+v1.titular.apellido;

var mostrar = function(){

    document.getElementById("ejemplo").innerHTML = texto;
}