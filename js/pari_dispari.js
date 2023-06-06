/***** es. 2 *****/

/*
Pari o Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// const choiceUser = prompt('Scegli pari o dispari').trim();
const userNumber = prompt('Scegli un numero compreso tra 1 e 5');

// console.log('scelta dell\'utente :', choiceUser);
console.log('numero scelto dall\'utente', userNumber);

function getRandomNumber (){
    const number = Math.floor(Math.random() * 5 ) + 1;
    return number;
}

const randomNumber = getRandomNumber();
console.log('numero random :', randomNumber)

const sum = userNumber + randomNumber;

let result = '';
if (!sum % 2) {
    result = 'Pari'
   } else {
    result = 'Dispari'
}

console.log(result)

