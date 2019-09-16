"use strict";

var car;
var rexp = new RegExp(/^\s*(?:\d{4}[A-Za-z]{3})s*$/);

function createCar(plate, brand, color) {
	var incolor = document.getElementById("Color");
	var inmatricula = document.getElementById("InputMatricula");
	var inbrand = document.getElementById("Marca");
	var coche = document.getElementById("coche");
	var ruedas = document.getElementById("ruedas");
	var carroceria = document.getElementById("plateInfo");
	var marca = document.getElementById("brandInfo");
	var colorc = document.getElementById("colorInfo");
	if (rexp.test(plate)) {
		if (inmatricula.classList.contains("is-invalid")) {
			inmatricula.classList.remove("is-invalid");
		}
		inmatricula.classList.add("is-valid");
		event.preventDefault();
	}
	if (!rexp.test(plate)) {
		if (inmatricula.classList.contains("is-valid")) {
			inmatricula.classList.remove("is-valid");
		}
		inmatricula.classList.add("is-invalid");
		event.preventDefault();
	}
	if (brand == "") {
		if (inbrand.classList.contains("is-valid")) {
			inbrand.classList.remove("is-valid");
		}
		inbrand.classList.add("is-invalid");
		event.preventDefault();
	}
	if (color == "") {
		if (incolor.classList.contains("is-valid")) {
			incolor.classList.remove("is-valid");
		}
		incolor.classList.add("is-invalid");
		event.preventDefault();
	}
	if (brand != "") {
		if (inbrand.classList.contains("is-invalid")) {
			inbrand.classList.remove("is-invalid");
		}
		inbrand.classList.add("is-valid");

	}
	if (color != "") {
		if (incolor.classList.contains("is-invalid")) {
			incolor.classList.remove("is-invalid");
		}
		incolor.classList.add("is-valid");

	}
	if (inbrand.classList.contains("is-valid") && incolor.classList.contains("is-valid") && inmatricula.classList.contains("is-valid")) {
		car = new Car(plate, color, brand);
		coche.classList.add("d-none");
		ruedas.classList.remove("d-none");
		console.log("coche creado");
		carroceria.innerHTML = "La carroceria de tu coche es...." + car.plate;
		marca.innerHTML = "La marca de tu coche es..." + car.brand;
		colorc.innerHTML = "El color de tu coche es..." + car.color;
	}
}

function addWheels() {
	var comp = false;
	for (var i = 1; i <= 4; i++) {
		var marca = document.getElementById("Marca" + i);
		var diametro = document.getElementById("Diametro" + i);
		if (diametro.value <= 2 && diametro.value >= 0.4) {
			if (diametro.classList.contains("is-invalid")) {
				diametro.classList.remove("is-invalid");
			}
			diametro.classList.add("is-valid")
			document.getElementById("Rueda" + i).innerHTML = "Rueda " + i;
			document.getElementById("rueda" + i + "m").innerHTML = "Marca " + marca.value;
			document.getElementById("rueda" + i + "d").innerHTML = "Diametro " + diametro.value;
			comp = false;

		} else {
			if (marca.classList.contains("is-invalid")) {
				marca.classList.remove("is-invalid");
			}
			document.getElementById("Diametro" + i).classList.add("is-invalid");
			comp = true;
		}
		if (diametro.value == "") {
			if (marca.classList.contains("is-invalid")) {
				marca.classList.remove("is-invalid");
			}
			document.getElementById("Diametro" + i).classList.add("is-invalid");
			comp = true;
		}
		if (marca.value == "") {
			if (marca.classList.contains("is-valid")) {
				marca.classList.remove("is-valid");
			}
			marca.classList.add("is-invalid")
			comp = true;
		}
		if (marca.value != "") {
			if (marca.classList.contains("is-invalid")) {
				marca.classList.remove("is-invalid");
			}
			marca.classList.add("is-valid")
			comp = false;
		}if(diametro.classList.contains("is-valid") && marca.classList.contains("is-valid")){
			console.log(`Es la rueda ${marca.value} con diametro ${diametro.value}`)
			car.addWheel(new Wheel(diametro.value, marca.value))
			document.getElementById("Rueda" + i).innerHTML = "Rueda " + i;
			document.getElementById("rueda" + i + "m").innerHTML = "Marca " + marca.value;
			document.getElementById("rueda" + i + "d").innerHTML = "Diametro " + diametro.value;
			comp = false;
		}

	}

	if (!comp) {
		document.getElementById("ruedas").classList.add("d-none");
		document.getElementById("carInfo").classList.remove("d-none");
	}

	comp = false
	console.log("ruedas creadas")
	event.preventDefault();
}
