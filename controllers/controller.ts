
var car:Car;
var rexp = new RegExp(/^\s*(?:\d{4}[A-Za-z]{3})s*$/);
function createCar(plate:String, brand:String, color:String) {
	
	if(rexp.test(plate)){
	car = new Car(plate, color, brand);
	var coche = <HTMLinputElement>document.getElementById("coche");
	var ruedas = <HTMLinputElement>document.getElementById("ruedas");
	var carroceria = <HTMLinputElement>document.getElementById("plateInfo");
	var marca = <HTMLinputElement>document.getElementById("brandInfo");
	var colorc = <HTMLinputElement>document.getElementById("colorInfo");
	coche.classList.add("d-none");
	ruedas.classList.remove("d-none");
	console.log("coche creado");
	carroceria.innerHTML = "La carroceria de tu coche es...." + car.plate;
	marca.innerHTML = "La marca de tu coche es..." + car.brand;
	colorc.innerHTML = "El color de tu coche es..." + car.color;
	event.preventDefault();
	}else{
		var inmatricula = <HTMLinputElement>document.getElementById("InputMatricula");
		inmatricula.classList.add("is-invalid");
		event.preventDefault();
	}
}

function addWheels() {
	var comp: boolean = false;
	for (var i = 1; i <= 4; i++) {
		var marca = <HTMLinputElement>document.getElementById("Marca"+i);
		var diametro = <HTMLinputElement>document.getElementById("Diametro"+i);
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
		document.getElementById("ruedas").add("d-none");
	}
	console.log("ruedas creadas")
	event.preventDefault();
}

