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

  //Getters
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
  get getPeso(){
    return this.peso;
  }
  get getEstatura(){
    return this.estatura;
  }
  get getImc(){
    return this.imc;
  }
  get getEstado(){
    return this.estado;
  }

  //Setters
  set setPeso(peso){
    this.peso = peso;
  }

  set setEstatura(estatura){
    this.estatura = estatura;
  }
 
  //Métodos de Objeto.
  calcImc(){
    this.imc = this.peso / Math.pow(this.estatura, 2);
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
      parseFloat(document.getElementById("estatura").value),
    );

    p.calcImc();
    personas.push(p);
    //Agregar a tabla.
    console.log(personas);
    crearLista();
  
}

//Función de búsqueda.
var buscarPersona = function(){

  var b = document.getElementById("buscar").value;
  var per =  personas.find(i => i.rut == b);
  if(per != undefined){
    document.getElementById("msj").innerHTML = "Persona Encontrada";
    document.getElementById("rt").innerHTML = per.getRut;
    document.getElementById("nom").innerHTML = per.getNombre+" "+per.getApellido;
    document.getElementById("ed").innerHTML = per.getEdad+" Años.";
    document.getElementById("imc").innerHTML = per.getImc;
  }else{
    document.getElementById("msj").innerHTML = "Persona No Encontrada";
    document.getElementById("rt").innerHTML = "";
    document.getElementById("nom").innerHTML = "";
    document.getElementById("ed").innerHTML = "";
  }
}

//Función para modificar 
var editar = function(){

    var r = document.getElementById("rt").value;
    var p = parseFloat(document.getElementById("pes").value);
    var e = parseFloat(document.getElementById("est").value);

    var pers = personas.find(i => i.rut == r);

    if(pers != undefined){
        pers.setPeso = p;
        pers.setEstatura = e;
        pers.calcImc();
    }else{
      

    }

}


var crearLista = function(){

  document.getElementById("laLista").innerHTML = "";
  var miLista = document.createElement("ul");

  for (let index = 0; index < personas.length; index++) {
    
    var item = document.createElement("li");
    item.innerHTML = personas[index].nombre;
    miLista.appendChild(item);
  }
  document.getElementById("laLista").appendChild(miLista);
}

//console.log(personas[1].nombre+" "+personas[1].apellido);