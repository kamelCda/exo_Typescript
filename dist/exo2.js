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
/*

console.log("exercice 1 ");



function getLastElement<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
      return undefined;
    }
           
    return arr[arr.length - 1];
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  console.log(getLastElement(numbers)); // Output: 5
  console.log(getLastElement<string>(['1','2','3']));

  console.log("\n");
  

  /*classes */
// class vehicule
/*
console.log("exercice 2  classes et heritage \n");

class Vehicle {
    marque: string;
    vitesse: number;
    roues: number;
  
    constructor(_marque: string, _vitesse: number, _roues: number) {
      this.marque = _marque;
      this.vitesse = _vitesse;
      this.roues = _roues;
    }
  }
  
  class Voiture extends Vehicle {
    klaxon: string;
  
    constructor(_klaxon: string) {
      super("Citroen", 0, 4);
      this.klaxon = _klaxon;
    }
  
    get klaxonner(): string {
      return this.klaxon;
    }
  }
  
  class Moto extends Vehicle {
    carrenage: string;
  
    constructor(_carrenage: string) {
      super("Ducati", 0, 2);
      this.carrenage = _carrenage;
    }
  }
  


/* creation d'un objet a partir de la classe 'Vehicle' */
/*
  const monVehiculeAuto =new Vehicle("Volvo",150,4);
  const monVehiculeMoto =new Vehicle("Kawasaki",250,2);



 affichage des elements (propriétés) de cet objet
 console.log("Ma volvo va à : "+monVehiculeAuto.vitesse+" km/h");
 console.log("Ma Kawasaki roule à : "+monVehiculeMoto.vitesse + " km/h");
 
 



 creation d'un objet specifique à la classe 'Voiture' */
//const maVoiture = new Voiture("je klaxonne");
/* affichage des propriétés de la classe 'Voiture' */
/* console.log(maVoiture.klaxonner);
 console.log(maVoiture.marque);
 console.log(maVoiture.roues);
 
 /* exercice 3 */
// Interface pour le type de retour de la requête
/*
interface ReponseRequete {
  donnees: string;
}*/
// Fonction simulant une requête réseau asynchrone
//console.log("exercice 3 (requete asynchrone)");
// Fonction simulant une requête réseau asynchrone
/*

async function simulerRequete(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      resolve({ donnees: "Données chargées" });
    }, 0);
  });
}

/*
async function simulerRequeteAlternative() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Données chargées");
    }, 3000);
  });
}



// Fonction principale

async function main() {
 
    const resultat = await simulerRequete();
    console.log(resultat.donnees);
  }

// Exécution de la fonction principale
main();



*/
/* exercice  4 */
/*
console.log('exercice 4 (assertions) ');
console.log('\n');


function assertion<T>(param: T):number|string {
  if (Array.isArray(param)) {
      return param.length;
  } else {
      return "Ce n'est pas un tableau.";
  }
}


console.log(assertion([1, 2, 3]));
console.log(assertion("Hello"));


*/
/* exercice 5 */
console.log('exercice 5  intersection interface');
//objet combinant les deux interfaces
const personneEtudiante = {
    nom: "Dupont",
    prenom: "Marie",
    matricule: 12345,
    specialite: "Informatique"
};
function afficherProprietes(objet) {
    console.log("Informations de la personne étudiante:");
    console.log(`Nom : ${objet.nom}`);
    console.log(`Prénom : ${objet.prenom}`);
    console.log(`Matricule : ${objet.matricule}`);
    console.log(`Spécialité : ${objet.specialite}`);
}
afficherProprietes(personneEtudiante);
/* exercice 6 */
console.log('exercice 6 types Conditionnels');
// Déclaration du type conditionnel
// In a separate file (e.g., types.ts)
// Déclaration du type conditionnel
/*
declare function isArrayType<T>(input: unknown): string {
  type IsArray<T> = T extends Array<unknown> ? "C'est un tableau" : "Ce n'est pas un tableau";

}

// Exemples d'utilisation
console.log(isArrayType<number>());
console.log(isArrayType<string[]>());
console.log(isArrayType<{ id: number; name: string }[]>());
console.log(isArrayType<unknown>());

*/
// Déclaration du type conditionnel
//---------------------------------
/*
type IsArray<T> = T extends Array<infer U> ? "C'est un tableau" : "Ce n'est pas un tableau";

let test:IsArray<number[]>;

*/
/* exercice 7  garde types*/
function processInput(input) {
    if (typeof input === 'string') {
        console.log(`La longueur de la chaîne est : ${input.length}`);
    }
    else if (Array.isArray(input)) {
        // ajoutera les valeur des elements du tableau au fur et à mesure
        const sum = input.reduce((acc, curr) => acc + curr, 0);
        console.log(`La somme des éléments du tableau est : ${sum}`);
    }
    else {
        console.error('Entrée invalide');
    }
}
processInput([52, 4, 3]);
processInput("moi");
