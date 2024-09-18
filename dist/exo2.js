"use strict";
/* exercice n°1 */
/*
let nombres: number[] = [1, 2, 3, 4, 5];


function tableau(): any {
    return nombres[nombres.length-1];
}

console.log(tableau());


function identity<Type>(arg: Type): Type {
    return arg;
  }

  console.log(identity<number[]>([1, 2, 3]));



  function classification<Type>(arg: Type): Type {
    return arg;
  }

  console.log(classification<string[]>(['1e', '2e', '3e']));

  let table=classification<string[]>(['1e', '2e', '3e']);
  console.log(table);
  
*/
console.log("exercice 1 ");
function getLastElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[arr.length - 1];
}
// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(getLastElement(numbers)); // Output: 5
console.log(getLastElement(['1', '2', '3']));
console.log("\n");
/*classes */
// class vehicule
console.log("exercice 2  classes et heritage \n");
class Vehicle {
    constructor(_marque, _vitesse, _roues) {
        this.marque = _marque;
        this.vitesse = _vitesse;
        this.roues = _roues;
    }
}
class Voiture extends Vehicle {
    constructor(_klaxon) {
        super("Citroen", 0, 4);
        this.klaxon = _klaxon;
    }
    get klaxonner() {
        return this.klaxon;
    }
}
class Moto extends Vehicle {
    constructor(_carrenage) {
        super("Ducati", 0, 2);
        this.carrenage = _carrenage;
    }
}
const monVehiculeAuto = new Vehicle("Volvo", 150, 4);
const monVehiculeMoto = new Vehicle("Kawasaki", 250, 2);
console.log("Ma volvo va à : " + monVehiculeAuto.vitesse + " km/h");
console.log("Ma Kawasaki roule à : " + monVehiculeMoto.vitesse + " km/h");
const maVoiture = new Voiture("je klaxonne");
console.log(maVoiture.klaxonner);
console.log(maVoiture.marque);
console.log(maVoiture.roues);
