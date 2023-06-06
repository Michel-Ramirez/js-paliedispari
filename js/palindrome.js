console.log('JS ok')

/*****  es.1  ******/
/*
Palindroma

- Chiedere all’utente di inserire una parola
- Creare una funzione per capire se la parola inserita è palindroma
*/

//chiamo all'utente di inserire una parola
const inputWord = prompt('Inserisci una parola').trim();

console.log(inputWord)

let lunghezza = inputWord.length

for (i = 0; i < lunghezza; i++){

    //A B B A 
    //0 1 2 3

    // O V A T T A V O
    // 0 1 2 3 4 5 6 7 

    if (inputWord[i] == inputWord[lunghezza - 1]) {
        console.log('palindroma')
    } else {
    }

    console.log(i)
}
