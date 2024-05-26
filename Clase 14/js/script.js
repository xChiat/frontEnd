class Persona{
    constructor(rut, nombre, apellido, edad, peso, estatura){
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._peso = peso;
        this._estatura = estatura;
        this._imc = 0;
        this._estado = "";
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
        return this._edad;
    }
    get getPeso(){
        return this._peso;
    }get getEstatura(){
        return this._estatura;
    }
    get getImc(){
        return this._imc;
    }get getEstado(){
        return this._estado;
    }

    //Funciones de la clase.
    calcImc(){
        this._imc = (this._peso/Math.pow(this._estatura,2)).toFixed(3);
    }
    asignarEstado(){
        
    }

}
//Código principal
let personas = [];

let addPersona = function(){

    let rt = document.getElementById("p-rut").value;
    let nom = document.getElementById("p-nom").value;
    let ape = document.getElementById("p-ape").value;
    let edad = parseInt(document.getElementById("p-edad").value);
    let peso = parseFloat(document.getElementById("p-peso").value);
    let est = parseFloat(document.getElementById("p-est").value);

    let p = new Persona(rt, nom, ape, edad,peso, est);
    p.calcImc();

    personas.push(p);
    //personas.push(new Persona(rt, nom, ape, edad));
    alert("Persona Agregada.");
    console.log(personas);
}

let findPersona = function(){

    let buscar = document.getElementById("b-rut").value;
    let color = "yellow";
    let p = personas.find(item => item.getRut === buscar);

    if(p != undefined){
        alert("Encontrada");
        document.getElementById("r-rut").innerHTML= "Rut: "+p.getRut;
        document.getElementById("r-nom").innerHTML= "Nombre: "+p.getNombre+" "+p.getApellido;
        document.getElementById("r-edad").innerHTML= "Edad: "+p.getEdad+" Años.";
        document.getElementById("r-peso").innerHTML= "Peso: "+p.getPeso+" Kg.";
        document.getElementById("r-est").innerHTML= "Estatura: "+p.getEstatura+" Mt.";
        document.getElementById("r-imc").innerHTML= "<span class='"+color+"'><b>IMC:</b> "+p.getImc+".</span>";
        document.getElementById("r-estado").innerHTML= "Estado: "+p.getEstado+".";
        
    }else{
        alert("No Encontrada");
        document.getElementById("r-rut").innerHTML= "";
        document.getElementById("r-nom").innerHTML= ""
        document.getElementById("r-edad").innerHTML= "";
        
    }


}