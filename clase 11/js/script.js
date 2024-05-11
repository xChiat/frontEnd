let radioCal = function(){
    let r = parseFloat(document.getElementById('radio').value);

    let p = 2 * Math.PI * r;
    let a = Math.PI * Math.pow(r, 2);

    document.getElementById("perimetro").innerHTML = "<b> Perimetro: </b>"+ p.toFixed(3) + ".<br>";
    document.getElementById("area").innerHTML = "<b> Area: </b>"+ a.toFixed(3) ;
};
let velocidad = function(){
    let km = parseFloat(document.getElementById('km').value);
    let hrs = parseFloat(document.getElementById('hrs').value);
    
    let v = km/hrs;

    document.getElementById("velocidad").innerHTML = "<b> Velociad: </b>"+ v.toFixed(3)+" km/hrs";
};
let triangulo = function(){
    let l1 = parseFloat(document.getElementById('l1').value);
    let l2 = parseFloat(document.getElementById('l2').value);
    let l3 = parseFloat(document.getElementById('l3').value);

    if(l1==l2&&l1==l3&&l2==l3){
        document.getElementById("triangulo").innerHTML = "<b> Triangulo Equilatero </b>";
    }
    else if(l1==l2&&l2!=l3||l1==l3&&l3!=l2||l3==l2&&l2!=l1){
        document.getElementById("triangulo").innerHTML = "<b> Triangulo Isosceles </b>";
    }
    else if(l1!=l2,l1!=l3,l2!=l3){
        document.getElementById("triangulo").innerHTML = "<b> Triangulo Escaleno </b>";
    }
    else if(l1<=0||l2<=0||l3<=0){
        document.getElementById("triangulo").innerHTML = "<b> No es un triangulo </b>";
    }
};