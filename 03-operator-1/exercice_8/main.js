// Exercice 8
// Écrivez votre code ici

let salaireMensuel = 500;
let loyer = salaireMensuel * 0.3;
let nourriture = salaireMensuel * 0.2;
let transport = salaireMensuel * 0.1;
let autresDepenses = 50;
autresDepenses += 25;
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;

console.log("Total des dépenses : " + totalDepenses);
console.log("Reste après dépenses : " + reste);


