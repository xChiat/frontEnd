class Persona{
    constructor(rut, nombre, apellido, edad){
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    //Métodos especificos (GET)
    get getRut(){
        return this._rut;
    }
    get getNombre(){
        return this._nombre;
    }
    get getApellido(){
        return this._apellido;
    }
    get getEdad(){
        return this._edad
    }
}

let persona1 = new Persona("1-1","ena","nito",30);
let persona2 = new Persona("1-2","grande","sito",30);


let mostrar= function(persona){
    document.getElementById("p-rut").innerHTML = "Rut: "+persona.getRut;
    document.getElementById("p-nombre").innerHTML = "Nombre: "+persona.getNombre+persona.getApellido;
    document.getElementById("p-edad").innerHTML = "Edad: "+persona.getEdad;
}