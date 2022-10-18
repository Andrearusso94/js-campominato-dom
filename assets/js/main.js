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
        singolaCasella.classList.add("blue")
        //Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        console.log(i)
    })
}


})

