function Pet(name, age, type){
	this.name=name;
	this.age=age;
	this.type=type;
}

var spot = new Pet(
	"Spot",
	3,
	"dog"
);

var fluffy = new Pet(
	"Fluffy",
	2,
	"cat"
);


var pets = [spot, fluffy];
module.exports = pets;


function getPetInfoJSON(){
	var output = "";
	for(let i=0;i<pets.length;i++){
		output += "Name: "+pets[i].name;
		output += ", Age: "+pets[i].age;
		output += ", Type: "+pets[i].type+"<br>";
	}
	
	document.getElementById("infoPlacement").innerHTML=output;
	
}
