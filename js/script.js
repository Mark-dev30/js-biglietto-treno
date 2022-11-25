/* 1 - Chiedo all'utente il numero di chilometri che vuole percorrere.
    1.1 - Creo una variabili "kilometres" a cui assegno il valore inserito dall'utente. */
    let kilometres = prompt("Inserisci i kilometri da percorrere");

/* 2 - Chiedo all'utente la sua età.
    2.1 - Creo una variabili "age" a cui assegno il valore inserito dall'utente. */
    let age = prompt("Inserisci la tua età");
        
/* 3 - Calcolo il costo finale dei chilometri che ha fornito l'utente.
    3.1 - Creo una variabile "price_kilometres" a cui assegno come valore il risultato del calcolo di "kilometres" * 0.21. */
    let price_kilometres = kilometres * 0.21;
        
//4 - Creo tre condizioni.
        
/* 4.1 - Creo la prima condizione verificando se l'età dell'utente è minore di 18 anni.
    4.1.1 - Se l'utente è minorenne applico uno sconto del 20%. */
    if (age < 18){
        price_kilometres = (price_kilometres - (price_kilometres * 20 / 100));
        console.log(`${"Il prezzo del tuo biglietto è"} ${price_kilometres.toFixed(2)}  ${"euro"}`)
    }
        
/* 4.2 - Creo la seconda condizione verificando se l'età dell'utente è maggiore di 65 anni.
    4.2.1 - Se l'utente ha un'età maggiore di 65 annu applico uno sconto del 40%. */
    else if (age > 65) {
        price_kilometres = (price_kilometres - (price_kilometres * 40 / 100));
        console.log(`${"Il prezzo del tuo biglietto è"} ${price_kilometres.toFixed(2)}  ${"euro"}`)
    }
        
/* 4.3 Altrimenti non applico nessuno sconto e visualizzo a schermo il prezzo finale. */
    else{
        console.log(`${"Il prezzo del tuo biglietto è"} ${price_kilometres.toFixed(2)}  ${"euro"}`)
    }
        
        