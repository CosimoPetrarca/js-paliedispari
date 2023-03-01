'Use strict'

/* chiedo all'utente di scegliere pari o dispari */
let sceltaUtente = prompt("Scegli pari o dispari:");

/* chiedo all'utente di inserire un numero da 1 a 5 */
let numeroUtente = Number(prompt("Inserisci un numero da 1 a 5:"));

/* genero un numero casuale per il computer da 1 a 5 */
let numeroComputer = Math.floor(Math.random() * 5) + 1;

/* sommo i due numeri */
let somma = numeroUtente + numeroComputer;

/* definisco una funzione per stabilire se la somma è pari o dispari */
function maybe(numero) {

  return numero % 2 === 0;
}

/* controllo se la somma è pari o dispari */
let sommaPari = maybe(somma);

// controllo chi ha vinto
if ((sceltaUtente === "pari" && sommaPari) || (sceltaUtente === "dispari" && !sommaPari)) {
    console.log("Hai vinto! Il tuo numero è " + numeroUtente + ", il numero del computer è " + numeroComputer + ", la somma è " + somma );
  } else {
    console.log("Hai perso! Il tuo numero è " + numeroUtente + ", il numero del computer è " + numeroComputer + ", la somma è " + somma );
  }
