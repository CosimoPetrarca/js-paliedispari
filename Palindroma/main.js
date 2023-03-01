'Use strict'
/*------ 
Function
------- */

/* creo una funzione per controllare se le parole con lo stesso indice sono uguali */
function controlloIndice(parolaInserita, parolaContrario) {
    let controllo = false
    for (let i = 0; i < parolaInserita.length; i++) {
        if (parolaInserita[i] === parolaContrario[i]) {
            controllo = true;
        } else {
            controllo = false
        }
    }
    return controllo;
}

/*------ 
  Main
------- */

/* chiedo una parola all'utente */
const parola = prompt(' Inserisci una parola');

let parolaContrario = [];
let x = 0;
/* tramite un array inverto la parola scritta dall'utente tramite gli indici */
for (let i = parola.length - 1; i >= 0; i--) {
    parolaContrario[x] = parola[i];
    x++;
}

const risultato = controlloIndice(parola, parolaContrario);

/* stampo il risulato */
if (risultato === true) {
    alert('la parola da te inserita è palindroma.');
} else {
    alert('la parola da te inserita non è palindroma.');
}