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
    presentar(){
        alert("Hola! mi nombre es "+this.nombre+" "+this.apellido);
    }
}

let persona1 = new Persona("1-1","ena","nito",30);

persona1.presentar();