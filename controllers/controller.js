"use strict";

var car;
var rexp = new RegExp(/^\s*(?:\d{4}[A-Za-z]{3})s*$/);
function createCar(plate, brand, color) {
	
	if(rexp.test(plate)){
	car = new Car(plate, color, brand);
	var coche = document.getElementById("coche");
	var ruedas = document.getElementById("ruedas");
	var carroceria = document.getElementById("plateInfo");
	var marca = document.getElementById("brandInfo");
	var colorc = document.getElementById("colorInfo");
	coche.classList.add("d-none");
	ruedas.classList.remove("d-none");
	console.log("coche creado");
	carroceria.innerHTML = "La carroceria de tu coche es...." + car.plate;
	marca.innerHTML = "La marca de tu coche es..." + car.brand;
	colorc.innerHTML = "El color de tu coche es..." + car.color;
	event.preventDefault();
	}else{
		var inmatricula = document.getElementById("InputMatricula");
		inmatricula.classList.add("is-invalid");
		event.preventDefault();
	}
}

function addWheels() {
	var comp = false;
	for (var i = 1; i <= 4; i++) {
		var marca = document.getElementById("Marca"+i);
		var diametro = document.getElementById("Diametro"+i);
		if(diametro.value < 2 && diametro.value > 0.4 ){
			console.log(`Es la rueda ${marca.value} con diametro ${diametro.value}`)
			car.addWheel(new Wheel(diametro.value, marca.value))
			document.getElementById("Rueda"+i).innerHTML = "Rueda " + i;
			document.getElementById("rueda"+i+"m").innerHTML = "Marca " + marca.value;
			document.getElementById("rueda"+i+"d").innerHTML = "Diametro " + diametro.value;
			
		}else{
			document.getElementById("Diametro"+i).classList.add("is-invalid");
			comp = true;
		}if(diametro.value == ""){
			document.getElementById("Diametro"+i).classList.add("is-invalid");
			comp = true;
		}
		
	}
	
	if(!comp){
		document.getElementById("ruedas").classList.add("d-none");
	}
	
	comp = false
	console.log("ruedas creadas")
	event.preventDefault();
}
