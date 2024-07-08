class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    getFullName(){
        return "Nombre: "+this.nombre+" "+this.apellido;
    }
}
export default Persona;