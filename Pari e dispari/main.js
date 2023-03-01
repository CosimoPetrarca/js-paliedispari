'Use strict'
/*---------- 
  Function
 ----------*/

 /* funzione per numero casuale */
function numeroRandomico(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* definisco una funzione per stabilire se la somma è pari o dispari */
function maybe(numero) {

  return numero % 2 === 0;
}

/*---------- 
    Main
 ----------*/

/* chiedo all'utente di scegliere pari o dispari */
let sceltaUtente = prompt("Scegli pari o dispari:");

/* chiedo all'utente di inserire un numero da 1 a 5 */
let numeroUtente = Number(prompt("Inserisci un numero da 1 a 5:"));

let numeroComputer = numeroRandomico(1,5);

/* sommo i due numeri */
let somma = numeroUtente + numeroComputer;

/* controllo se la somma è pari o dispari */
let sommaPari = maybe(somma);

// controllo chi ha vinto
if ((sceltaUtente === "pari" && sommaPari) || (sceltaUtente === "dispari" && !sommaPari)) {
    console.log("Hai vinto! Il tuo numero è " + numeroUtente + ", il numero del computer è " + numeroComputer + ", la somma è " + somma );
    alert("Hai vinto! Il tuo numero è " + numeroUtente + ", il numero del computer è " + numeroComputer + ", la somma è " + somma );
  } else {
    console.log("Hai perso! Il tuo numero è " + numeroUtente + ", il numero del computer è " + numeroComputer + ", la somma è " + somma );
    alert("Hai perso! Il tuo numero è " + numeroUtente + ", il numero del computer è " + numeroComputer + ", la somma è " + somma );
  }
