//Consegna


//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const buttonGenerator = document.getElementById("go");

// seleziono l'elemento dove inserire le caselle
let container = document.querySelector(".container")

// creo variabile con markup del quadrato 

let numeroCaselle = 100;

//definisco la classe
let listaCaselle = document.getElementsByClassName("casella")

//L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100.
buttonGenerator.addEventListener("click", function(){

function GenerateBombs(min, max){
    const bombs = []
    while (bombs.length !== 16){
        //genero numero casuale
        const bomb = generateRandomNumber(min, max)
        //verifico se il numero è inserito nella lista delle bombe, altrimenti lo aggiungo e poi vado avanti

        if (!bombs.includes(bomb)){
            bombs.push(bomb)
        }
    }
    return bombs
}
const bombs = GenerateBombs(1, 100)
console.log(bombs)



//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - 
//abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



//Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// creo ciclo for
for (let i = 1; i <= numeroCaselle; i++){
    
    //aggiungo la casella al container
    const casella = `<div class="casella">${i}</div>`
    //const casella = document.createElement('div');

    // aggiungere la classe
   // casella.classList.add('casella');

    // aggiungere il numero
    //casella.innerHTML = i;
       
    container.innerHTML += casella
    
    //container.append(casella);
}

// creo click per giocare
for (let i = 1; i < listaCaselle.length; i++){
    let singolaCasella = listaCaselle[i]
    
    
 
    singolaCasella.addEventListener("click", function(){

        if ( i !== bombs){
        singolaCasella.classList.add("blue")
        //Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        console.log(i)
    } else {
        singolaCasella.classList.add("red")
    }

    })
}


})




