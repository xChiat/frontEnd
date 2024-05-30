//Definicion de una clase.
class Persona{
  constructor(rut, nombre, apellido, edad, peso, estatura){
    //Atributos
    this.rut = rut;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.peso = peso;
    this.estatura = estatura;
    this.imc = 0;
    this.estado = "";
  }

  calcImc(){
    this.imc = this.peso / Math.pow(this.estatura,2);
  }

  get obtenerImc(){
      return this.imc;
  }
}

//Código principal
//var p1 = new Persona("1-1","Sebastián","Pizarro",37);
//var p2 = new Persona("1-2", "Elena","Nito", 40);

//console.log("Nombre: "+p.nombre+" "+p.apellido);
//console.log("Nombre: "+p2.nombre+" "+p2.apellido);

var personas = [];

//Funcion para agregar personas a la lista.
var addPersona = function(){
    var p = new Persona(
      document.getElementById("rut").value,
      document.getElementById("nombre").value,
      document.getElementById("apellido").value,
      parseInt(document.getElementById("edad").value),
      parseFloat(document.getElementById("peso").value),
      parseFloat(document.getElementById("estatura").value)
    );

    p.calcImc();
    personas.push(p);
    console.log(personas);

}

var buscarPersona = function(){

  var b = document.getElementById("buscar").value;
  var pers = personas.find(i => i.rut == b);

  if(pers != undefined){
    document.getElementById("msj").innerHTML = "Persona Encontrada";
    document.getElementById("rt").innerHTML = pers.rut;
    document.getElementById("nom").innerHTML = pers.nombre+" "+pers.apellido;
    document.getElementById("ed").innerHTML = pers.edad+" Años";
    document.getElementById("imc").innerHTML = pers.obtenerImc;
  }else{
    document.getElementById("msj").innerHTML = "Persona No Encontrada";

  }

}




//console.log(personas[1].nombre+" "+personas[1].apellido);