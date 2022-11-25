PROBLEMA: 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare
centesimi sul prezzo). Questo richiederà un minimo di ricerca.

RISOLVO:
1 - Chiedo all'utente il numero di chilometri che vuole percorrere.
    1.1 - Creo una variabili "kilometres" a cui assegno il valore inserito dall'utente.
2 - Chiedo all'utente la sua età.
    2.1 - Creo una variabili "age" a cui assegno il valore inserito dall'utente.
3 - Calcolo il costo finale dei chilometri che ha fornito l'utente.
    3.1 - Creo una variabile "price_kilometres" a cui assegno come valore il risultato del calcolo di "kilometres" * 0.21.
4 - Creo tre condizioni.
    4.1 - Creo la prima condizione verificando se l'età dell'utente è minore di 18 anni.
        4.1.1 - Se l'utente è minorenne applico uno sconto del 20%.
    4.2 - Creo la seconda condizione verificando se l'età dell'utente è maggiore di 65 anni.
        4.2.1 - Se l'utente ha un'età maggiore di 65 annu applico uno sconto del 40%.
    4.3 Altrimenti non applico nessuno sconto e visualizzo a schermo il prezzo finale.