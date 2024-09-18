### 1. **Variables et types de base**
   - Créez des variables de types différents (string, number, boolean) et assignez-leur des valeurs.
   - Exemple :
     ```typescript
     let age: number = 25;
     let nom: string = "Alice";
     let estActif: boolean = true;
     ```

   - **Objectif** : Comprendre la déclaration de variables et les types basiques.

### 2. **Fonctions simples**
   - Écrivez une fonction qui prend deux nombres en entrée et renvoie leur somme.
   - Exemple :
     ```typescript
     function addition(a: number, b: number): number {
         return a + b;
     }
     ```

   - **Objectif** : Comprendre les fonctions et le typage des paramètres et des retours.

### 3. **Interfaces**
   - Créez une interface pour représenter un utilisateur avec des propriétés comme `nom`, `âge` et `email`. Ensuite, créez un objet en utilisant cette interface.
   - Exemple :
     ```typescript
     interface Utilisateur {
         nom: string;
         age: number;
         email: string;
     }

     let utilisateur: Utilisateur = {
         nom: "Alice",
         age: 25,
         email: "alice@example.com"
     };
     ```

   - **Objectif** : Apprendre à structurer des objets avec des interfaces.

### 4. **Tableaux et boucles**
   - Créez un tableau de nombres, puis écrivez une fonction qui parcourt ce tableau et affiche chaque nombre dans la console.
   - Exemple :
     ```typescript
     let nombres: number[] = [1, 2, 3, 4, 5];

     for (let nombre of nombres) {
         console.log(nombre);
     }
     ```

   - **Objectif** : Comprendre l'utilisation des tableaux et des boucles en TypeScript.

### 5. **Union types**
   - Créez une fonction qui prend un paramètre pouvant être soit un nombre, soit une chaîne de caractères, et qui affiche le type du paramètre reçu.
   - Exemple :
     ```typescript
     function afficherType(valeur: number | string) {
         console.log(typeof valeur);
     }
     ```

   - **Objectif** : Comprendre les types union et leur utilisation.

### 6. **Types optionnels**
   - Créez une fonction qui prend un objet utilisateur avec un email facultatif et affiche un message avec l'email s'il est fourni.
   - Exemple :
     ```typescript
     interface Utilisateur {
         nom: string;
         email?: string;
     }

     function afficherEmail(utilisateur: Utilisateur) {
         if (utilisateur.email) {
             console.log(`Email : ${utilisateur.email}`);
         } else {
             console.log("Pas d'email fourni");
         }
     }
     ```

   - **Objectif** : Comprendre les propriétés optionnelles dans les objets.

### 7. **Enums**
   - Créez un enum pour représenter les jours de la semaine et écrivez une fonction qui prend un jour en entrée et affiche s'il s'agit d'un jour de week-end ou de semaine.
   - Exemple :
     ```typescript
     enum Jour {
         Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche
     }

     function estWeekend(jour: Jour): boolean {
         return jour === Jour.Samedi || jour === Jour.Dimanche;
     }
     ```

   - **Objectif** : Comprendre l'utilisation des enums.

Ces exercices permettent aux débutants de se familiariser avec les bases de TypeScript, le typage fort, et les concepts avancés tels que les interfaces et les types union.