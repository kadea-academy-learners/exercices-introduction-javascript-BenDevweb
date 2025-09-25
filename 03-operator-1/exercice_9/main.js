// Exercice 9
// Écrivez votre code ici

// Valeur totale de l'héritage
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;
let totalHeritage = maison + terrains + liquidites;

// Première catégorie (75%)
let partPremiereCategorie = totalHeritage * 0.75;
let partEnfant = partPremiereCategorie / 3;
let partEric = partEnfant / 2;
let partClaire = partEnfant / 2;

// Deuxième catégorie (25%)
let partDeuxiemeCategorie = totalHeritage * 0.25;
let partConjointFrereNiece = partDeuxiemeCategorie / 3;

// Affichage des parts
console.log("Paul : " + partEnfant + " CDF");
console.log("Marie : " + partEnfant + " CDF");
console.log("Éric : " + partEric + " CDF");
console.log("Claire : " + partClaire + " CDF");
console.log("Madame MUKUNA : " + partConjointFrereNiece + " CDF");
console.log("Joseph : " + partConjointFrereNiece + " CDF");
console.log("Sarah : " + partConjointFrereNiece + " CDF");

