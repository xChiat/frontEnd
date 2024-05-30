//definir especialista
class Especialista{
    constructor(rut,nombre,apellido,especialidad){
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
        this._especialidad = especialidad;
    }
    get getRut(){
        return this._rut;
    }
    get getNombre(){
        return this._nombre;
    }
    get getApellido(){
        return this._apellido;
    }
    get getEspecialidad(){
        return this._especialidad;
    }
}

// definir clase persona
class Persona {
    constructor(rut, nombre, apellido, edad, peso, estatura,especialista) {
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._peso = peso;
        this._estatura = estatura;
        this._imc = 0;
        this._estado = "";
        this._especialista=especialista;
    }

    get getRut() {
        return this._rut;
    }
    get getNombre() {
        return this._nombre;
    }
    get getApellido() {
        return this._apellido;
    }
    get getEdad() {
        return this._edad;
    }
    get getPeso() {
        return this._peso;
    }
    get getEstatura() {
        return this._estatura;
    }
    get getImc() {
        return this._imc;
    }
    get getEstado() {
        return this._estado;
    }
    get getEspecialista(){
        return this._especialista;
    }

    //SETTERS
    setNombre(nombre) {
        this._nombre = nombre;
    }
    setApellido(apellido) {
        this._apellido = apellido;
    }
    setEdad(edad) {
        this._edad = edad;
    }
    setPeso(peso) {
        this._peso = peso;
    }
    setEstatura(estatura) {
        this._estatura = estatura;
    }
    setEspecialista(especialista){
        this._especialista=especialista;
    }
    calcularImc() {
        this._imc = (this._peso / (this._estatura * this._estatura)).toFixed(3);
    }

    asignarEstado() {
        if (this._imc < 18.5) {
            this._estado = "Debajo de lo normal";
        } else if (this._imc >= 18.5 && this._imc < 25) {
            this._estado = "Normal";
        } else if (this._imc >= 25 && this._imc < 30) {
            this._estado = "Sobrepeso";
        } else if (this._imc >= 30) {
            this._estado = "Obesidad";
        }
    }
}

let personas = [];
let especialistas = [];
//precargar especialistas
especialistas.push(new Especialista("2-1","Gregory","house","diagnostico"));
especialistas.push(new Especialista("2-2","ndea","sss","ndea"));
especialistas.push(new Especialista("2-3","nd","sss","nd"));
console.log(especialistas);

let addPersona = function() {
    let rt = document.getElementById("p-rut").value;
    let nom = document.getElementById("p-nom").value;
    let ape = document.getElementById("p-ape").value;
    let edad = parseInt(document.getElementById("p-edad").value);
    let peso = parseFloat(document.getElementById("p-peso").value);
    let estatura = parseFloat(document.getElementById("p-estatura").value);
    let rutEsp = document.getElementById("p-esp").value;

    let esp = especialistas.find(es => es.getRut ==rutEsp)
    
    let p = new Persona(rt, nom, ape, edad, peso, estatura,esp);
    p.calcularImc();
    p.asignarEstado();
    personas.push(p);
    alert("Persona Agregada.");
    console.log(personas);
}


let findPersona = function() {
    let buscar = document.getElementById("b-rut").value;
    let p = personas.find(item => item.getRut === buscar);

    if (p != undefined) {
        alert("Encontrada");
        let imcSpan = document.createElement('span');

        if (p.getEstado === "Debajo de lo normal" || p.getEstado === "Sobrepeso") {
            imcSpan.className = 'yellow';
        } else if (p.getEstado === "Normal") {
            imcSpan.className = 'green';
        } else if (p.getEstado === "Obesidad") {
            imcSpan.className = 'red';
        }
        let rp = document.createElement("span");
        rp.innerText = "Rut: " + p.getRut + " Nombre: " + p.getNombre + " " + p.getApellido + " Edad: " + p.getEdad + " Años. Peso: " + p.getPeso + " KG Estatura: " + p.getEstatura + " metros"+ " Estado: " + p.getEstado;
        imcSpan.innerText = " IMC: " + p.getImc+".        ";
        document.getElementById("Resultado").innerHTML = "";
        document.getElementById("Resultado").appendChild(rp);
        document.getElementById("Resultado").appendChild(imcSpan);
        // Crear el botón y el formulario de actualización
        let btn = document.createElement("button")
        btn.innerText = "Actualizar Datos";
        btn.onclick = function() {
            desplegarForm(p.getRut);
        }
        document.getElementById("Resultado").appendChild(btn);
    } else {
        alert("No Encontrada");
        document.getElementById("Resultado").innerHTML = "";
        document.getElementById("upd-data").innerHTML = ""; 
    }
}
let desplegarForm = function(rut){
    let frmUpdData = document.createElement("form")
    frmUpdData.innerHTML = "<input type='number' step='0.5' name='peso' id='nuevo-peso' placeholder='actualizar peso'><br>"+ 
                            "<input type='number' step='0.05' name='estatura' id='nueva-estatura' placeholder='actualizar estatura'><br>";
    let btn = document.createElement("button");
    btn.innerText = "Actualizar";
    btn.onclick = function() {
        updatePersona(rut);
    }
    document.getElementById("upd-data").appendChild(frmUpdData);
    document.getElementById("upd-data").appendChild(btn);
}
let updatePersona = function(rut) {
    let p = personas.find(item => item.getRut === rut);

    if (p != undefined) {
        let nuevoPeso = parseFloat(document.getElementById("nuevo-peso").value);
        let nuevaEstatura = parseFloat(document.getElementById("nueva-estatura").value);

        p.setPeso(nuevoPeso);
        p.setEstatura(nuevaEstatura);
        p.calcularImc();
        p.asignarEstado();

        alert("Datos actualizados.");
        updateTable();
        document.getElementById("upd-data").innerHTML = "";
        document.getElementById("Resultado").innerHTML = "";
    } else {
        alert("Persona no encontrada para actualizar.");
    }
};

let updateTable = function() {
    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

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