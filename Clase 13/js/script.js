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
//Código principal
let personas = [];

let addPersona = function(){
    let rt = document.getElementById("p-rut").value;
    let nom = document.getElementById("p-nom").value;
    let ape = document.getElementById("p-ape").value;
    let edad = parseInt(document.getElementById("p-edad").value);

    personas.push(new Persona(rt, nom, ape, edad));
    alert("Persona Agregada.");
    console.log(personas);
}

let findPersona = function(){
    let buscar = document.getElementById("b-rut").value;   
    let p = personas.find(item => item.getRut === buscar);

    if(p != undefined){
        alert("Encontrada");
        document.getElementById("resultado").innerHTML= "Rut: "+p.getRut+" Nombre: "+p.getNombre+" "+p.getApellido+" Edad: "+p.getEdad+" Años."; 
    }else{
        alert("No Encontrada");
        document.getElementById("resultado").innerHTML= "";
    }


}