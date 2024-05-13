class Persona{
    constructor(rut,nombre, apellido, edad){
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    // Metodos especificos
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
    // metodos
}

let persona1 = new Persona("1-1","ena","nito",30);

let mostrar = function(){
    console.log("Rut: "+persona1.getRut());
    console.log("Nombre: "+persona1.getNombre());
    console.log("Apellido: "+persona1.getApellido());
    console.log("Edad: "+persona1.getEdad());
}