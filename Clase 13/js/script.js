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
        return this._edad
    }
    get getPeso(){
        return this._peso;
    }
    get getEstatura(){
        return this._estatura;
    }
    get getImc(){
        return this._imc;
    }
    get getEstado(){
        return this._estado;
    }
    // FUNCIONES
    calcularImc(){
        this._imc = (this._peso / (this._estatura * this._estatura)).toFixed(3);
    }
    asignarEstado(){
        if(this._imc < 18.5){
            this._estado = "Debajo de lo normal"
        } 
        else if(this._imc > 18.5 && this._imc <25){
            this._estado = "Normal"
        }
        else if(this._imc > 25 && this._imc <30){
            this._estado = "Sobrepeso"
        }
        else if(this._imc > 30 && this._imc <35){
            this._estado = "Obesidad grado 1"
        }
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
    let estatura = parseFloat(document.getElementById("p-estatura").value);
    p=new Persona(rt, nom, ape, edad, peso, estatura)
    p.calcularImc();
    p.asignarEstado();
    personas.push(p);
    alert("Persona Agregada.");
    console.log(personas);
}

let findPersona = function(){
    let buscar = document.getElementById("b-rut").value;   
    let p = personas.find(item => item.getRut === buscar);

    if(p != undefined){
        alert("Encontrada");
        document.getElementById("resultado").innerHTML= "Rut: "+p.getRut+" Nombre: "+p.getNombre+" "+p.getApellido+" Edad: "+p.getEdad+" Años."+" Peso:"+p.getPeso +"KG"+" Estatura:"+p.getEstatura+"metros"; 
        if(p._estado=="Debajo de lo normal"||p.getEstado()=="Sobrepeso"){
            document.getElementById("imc").innerHTML= "<span class='yellow'"+" IMC:"+p.getImc+".</span>";
        }
        else if(p._estado=="Normal"){
            document.getElementById("imc").innerHTML= "<span class='green'"+ "IMC:"+p.getImc+".</span>";
        }
        else if(p._estado=="Obesidad grado 1"){
            document.getElementById("imc").innerHTML= "<span class='red'"+ "IMC:"+p.getImc+".</span>";
        }
        document.getElementById("estado").innerHTML=" Estado: "+p.getEstado;
    }else{
        alert("No Encontrada");
        document.getElementById("resultado").innerHTML= "";
    }
}

let updateTable = function(){
    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML = ""; // Limpiar la tabla

    personas.forEach((persona, index) => {
        let row = tableBody.insertRow();
        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = persona.getRut;
        row.insertCell(2).innerText = persona.getNombre;
        row.insertCell(3).innerText = persona.getApellido;
        row.insertCell(4).innerText = persona.getEdad;
        row.insertCell(5).innerText = persona.getPeso;
        row.insertCell(6).innerText = persona.getEstatura;
        row.insertCell(7).innerText = persona.getImc;
        row.insertCell(8).innerText = persona.getEstado;
    });
}