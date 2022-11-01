// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

const griglia = document.querySelector(".container");


for (let i = 1; i <=100; i++) {
    
    const item = document.createElement('div');
    item.classList.add('square');

    if (i % 15 === 0) {
        console.log("FizzBuzz");
        item.innerHTML = 'FizzBuzz';
        item.classList.add('fizz-buzz');

    } else if (i % 3 === 0) {
        console.log("Fizz");
        item.innerHTML = 'Fizz';
        item.classList.add('fizz');

    } else if (i % 5 === 0) {
        console.log("Buzz");
        item.innerHTML = 'Buzz';
        item.classList.add('buzz');

    } else {
        item.innerHTML = i;
        console.log(i);
    }

    griglia.append(item);
}
