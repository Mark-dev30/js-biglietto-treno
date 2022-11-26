                            /* BONUS */


/* 1 - Chiedo all'utente il suo nome.
    1.1 - Creo una variabili "nam_e" a cui assegno il valore inserito dall'utente. */   
    let nam_e = prompt("Inserisci il tuo nome");

/* 2 - Chiedo all'utente il suo cognome.
    2.1 - Creo una variabili "last_name" a cui assegno il valore inserito dall'utente. */   
    let last_name = prompt("Inserisci il tuo cognome");

/* 3 - Chiedo all'utente la sua età.
    3.1 - Creo una variabili "age" a cui assegno il valore inserito dall'utente. */
    let age = prompt("Inserisci la tua età");

/* 4 - Chiedo all'utente la stazione di partenza.
    4.1 - Creo una variabili "de_station" a cui assegno il valore inserito dall'utente. */   
    let de_station = prompt("Inserisci la stazione di partenza");

    //4.2 - Faccio visualizzare a schermo la stazione di partenza.
    document.getElementById("departure_station").innerHTML = de_station;

/* 5 - Chiedo all'utente la stazione di arrivo.
    5.1 - Creo una variabili "ar_station" a cui assegno il valore inserito dall'utente. */ 
    let ar_station = prompt("Inserisci la stazione di arrivo");

    //5.2 - Faccio visualizzare a schermo la stazione di arrivo.
    document.getElementById("arrival_station").innerHTML = ar_station;

/* 6 - Chiedo all'utente il numero di chilometri che vuole percorrere.
    6.1 - Creo una variabili "kilometres" a cui assegno il valore inserito dall'utente. */
    let kilometres = prompt("Inserisci i kilometri da percorrere");
   
/* 7 - Calcolo il costo finale dei chilometri che ha fornito l'utente.
    7.1 - Creo una variabile "price_kilometres" a cui assegno come valore il risultato del calcolo di "kilometres" * 0.21. */
    let price_kilometres = kilometres * 0.21;
        
//8 - Creo due condizioni e faccio visualizzare a schermo il prezzo.
        
/* 8.1 - Creo la prima condizione verificando se l'età dell'utente è minore di 18 anni.
    8.1.1 - Se l'utente è minorenne applico uno sconto del 20%. */
    if (age < 18){
        price_kilometres = (price_kilometres - (price_kilometres * 20 / 100));
    }
        
/* 8.2 - Creo la seconda condizione verificando se l'età dell'utente è maggiore di 65 anni.
    8.2.1 - Se l'utente ha un'età maggiore di 65 annu applico uno sconto del 40%. */
    else if (age > 65) {
        price_kilometres = (price_kilometres - (price_kilometres * 40 / 100)); 
    }
        
/* 8.3 Altrimenti non applico nessuno sconto e visualizzo a schermo il prezzo finale. */
    document.getElementById("price").innerHTML = price_kilometres.toFixed(2) + " €";

//9 - Assegno alla variabile"full_name" il valore delle due variabili "nam_e" e "last_name".
    let full_name = nam_e + " " + last_name;

    //9.1 - Faccio visualizzare a "name_passenger" nella pagina html il nome e il cognome.
    document.getElementById("name_passenger").innerHTML = full_name;

//10 - Creo una varibile "num_invoice" per generare numeri casuali
    let num_invoice = parseInt(Math.random() *10000000)

    //10.1 - Faccio visualizzare a schermo il numero della ricevuta.
    document.getElementById("invoice").innerHTML = num_invoice;

//11 - Creo una varibile "tickets" per generare numeri casuali   
    let tickets = parseInt(Math.random() *10000000000)
    
    //11.1 - Faccio visualizzare a schermo il codice biglietto.
    document.getElementById("cod_ticket").innerHTML = tickets;
    


    
        
        