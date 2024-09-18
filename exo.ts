/*exercice 1*/ 
console.log("exercice n°1 :(afficher des variables de differents types)\n");

let nom:String='kamel';
let taille:number=171;
let formation:boolean=true;
console.log(
    "nom : "+nom+"\n"+
    "taille : "+taille+"\n"+
    "est en formation : "+formation+"\n"
);


/*exercice 2 */
console.log("exercice n°2 : (retourner resultat operation avec deux variables)\n");
function soustraction(c:number,d:number):number {
    return c+d;
}
const resultat=soustraction(5,2);
console.log(" le resultat est :"+resultat+"\n");

/* exercice 3 */
console.log("exercice n°3 :\n");
interface Livre{
auteur:string;
type:string;
rangé:number;
}


let lesMiserables:Livre = {
    auteur: "victor hugo",
    type: "Roman",
    rangé: 25
}

console.log(`livre produit par l'interface : ${JSON.stringify(lesMiserables)}\n`);

/* exercice 4 */
console.log("exercice n°4 : (affichage du tableau et boucle )\n");


let classement :number[] =[1,2,3];

for (const place of classement) {
    console.log("place numero : "+place);
    
}


/* exercice 5 */
console.log("exercice n°5 : (affichage du type de la variable)\n");



function affichageAge(age: number | string) {
    console.log("le type de age est :"+typeof age);
}
 affichageAge(25);
 affichageAge('25');

/*espacement  */
 console.log("\n");
 


/* exercice 6 */
console.log("exercice n°6 :(variable optionnelle)\n");


interface Couple{
mari:string,
femme:string,
enfants?:boolean

}

function verifCouple(pierreMarie: Couple) {
    if (pierreMarie.enfants) {
        console.log("ce couple à des enfants");
    } else {
        console.log("ce couple n'a pas d'enfants ");
    }
}

const couple = {
    mari: "Pierre",
    femme: "Marie",
    enfants: false
};
verifCouple(couple);


/*espacement  */
console.log("\n");


/* exercice 7 */
console.log("exercice n°7 : (utiliser les enums pour verifier la valeur booléenne selon les jours choisis)\n");

enum Jour {
    Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche
}

function estWeekend(jour: Jour): boolean {
    return jour === Jour.Samedi || jour === Jour.Dimanche;
}

const jeudi=estWeekend(Jour.Jeudi);
console.log(jeudi);


const mardi=estWeekend(Jour.Mardi);
console.log(jeudi);


const samedi=estWeekend(Jour.Samedi);
console.log(samedi);
