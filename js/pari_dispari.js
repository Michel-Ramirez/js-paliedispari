/***** es. 2 *****/

/*
Pari o Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//interrogo l'utente
const choiceUser = prompt('Scegli pari o dispari').trim();
const userNumber = prompt('Scegli un numero compreso tra 1 e 5');

//loggo gli input del utente
console.log('scelta dell\'utente :', choiceUser);
console.log('numero scelto dall\'utente', userNumber);

//creo una funziona che genera un numero random
function getRandomNumber (){
    const number = Math.floor(Math.random() * 5 ) + 1;
    return number;
}

//loggo il numero random
const randomNumber = getRandomNumber();
console.log('numero random :', randomNumber)

//sommo i numeri 
const sum = userNumber + randomNumber;


//creo una funziona per determinare se il numero è pari o dispari
function isEven (sum) {

    let result;
    
    if (sum % 2 == 0) {
        result = 'Pari'
       } else {
        result = 'Dispari'
    }

    console.log('Risultato della somma:', result)
}

//richiamo la funzione assegnado il risultato ad una variabile
const evenOrOddResult = isEven();

console.log(evenOrOddResult)


// determino il vincitore
if (choiceUser == evenOrOddResult) {
    console.log('Hai vinto!')
} else {
    console.log('Ha vinto il computer')
}