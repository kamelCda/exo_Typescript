/*exercice 1*/
console.log("exercice n°1 :(afficher des variables de differents types)\n");
var nom = 'kamel';
var taille = 171;
var formation = true;
console.log("nom : " + nom + "\n" +
    "taille : " + taille + "\n" +
    "est en formation : " + formation + "\n");
/*exercice 2 */
console.log("exercice n°2 : (retourner resultat operation avec deux variables)\n");
function soustraction(c, d) {
    return c + d;
}
var resultat = soustraction(5, 2);
console.log(" le resultat est :" + resultat + "\n");
/* exercice 3 */
console.log("exercice n°3 :\n");
var lesMiserables = {
    auteur: "victor hugo",
    type: "Roman",
    rangé: 25
};
console.log("livre produit par l'interface : ".concat(JSON.stringify(lesMiserables), "\n"));
/* exercice 4 */
console.log("exercice n°4 : (affichage du tableau et boucle )\n");
var classement = [1, 2, 3];
for (var _i = 0, classement_1 = classement; _i < classement_1.length; _i++) {
    var place = classement_1[_i];
    console.log("place numero : " + place);
}
/* exercice 5 */
console.log("exercice n°5 : (affichage du type de la variable)\n");
function affichageAge(age) {
    console.log("le type de age est :" + typeof age);
}
affichageAge(25);
affichageAge('25');
/*espacement  */
console.log("\n");
/* exercice 6 */
console.log("exercice n°6 :(variable optionnelle)\n");
function verifCouple(pierreMarie) {
    if (pierreMarie.enfants) {
        console.log("ce couple à des enfants");
    }
    else {
        console.log("ce couple n'a pas d'enfants ");
    }
}
var couple = {
    mari: "Pierre",
    femme: "Marie",
    enfants: false
};
verifCouple(couple);
/*espacement  */
console.log("\n");
/* exercice 7 */
console.log("exercice n°7 : (utiliser les enums pour verifier les conditions selon les cas)\n");
var Jour;
(function (Jour) {
    Jour[Jour["Lundi"] = 0] = "Lundi";
    Jour[Jour["Mardi"] = 1] = "Mardi";
    Jour[Jour["Mercredi"] = 2] = "Mercredi";
    Jour[Jour["Jeudi"] = 3] = "Jeudi";
    Jour[Jour["Vendredi"] = 4] = "Vendredi";
    Jour[Jour["Samedi"] = 5] = "Samedi";
    Jour[Jour["Dimanche"] = 6] = "Dimanche";
})(Jour || (Jour = {}));
function estWeekend(jour) {
    return jour === Jour.Samedi || jour === Jour.Dimanche;
}
var jeudi = estWeekend(Jour.Jeudi);
console.log(jeudi);
var mardi = estWeekend(Jour.Mardi);
console.log(jeudi);
var samedi = estWeekend(Jour.Samedi);
console.log(samedi);
