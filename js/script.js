// Dichiaro variabile "submitButton" per accedere all'elemento "button" nell'HTML
var submitButton = document.getElementById("button");

// Aggiungo un Listener al "submitButton" con la funzione "click", così che ogni volta che clicco sul pulsante
// "calculate" il programma farà la somma degli ingredienti e mi darà il risultato
submitButton.addEventListener("click", function () {

    // Dichiaro le variabili per selezionare tutti gli ingredienti 
    var cheeseField = document.getElementById("cheese-add");
    var tomatoField = document.getElementById("tomato-add");
    var eggField = document.getElementById("egg-add");
    var lettuceField = document.getElementById("lettuce-add");
    var mustardField = document.getElementById("mustard-add");
    var ketchupField = document.getElementById("ketchup-add");

    // Dichiaro la condizione si deve inserire il Nome del Burger obbligatoriamente 
    var nomeBurger = document.getElementById("name").toString;

    if (!isNaN(nomeBurger)) {

        alert("Inserisci prima il nome del tuo hamburger! 🍔")
    } else {

        //Dichiaro la variabile "somma" 
        var somma = 50;

        // Dichiaro condizioni che mi calcolano gli ingredienti nel caso in cui l'utente clicca sul checkbox
        if (cheeseField.checked) {
            somma += parseInt(cheeseField.value)

            document.getElementById("price").innerHTML = somma
        }

        if (tomatoField.checked) {
            somma += parseInt(tomatoField.value)

            document.getElementById("price").innerHTML = somma
        }

        if (eggField.checked) {
            somma += parseInt(eggField.value)

            document.getElementById("price").innerHTML = somma
        }

        if (lettuceField.checked) {
            somma += parseInt(lettuceField.value)

            document.getElementById("price").innerHTML = somma
        }

        if (mustardField.checked) {
            somma += parseInt(mustardField.value)

            document.getElementById("price").innerHTML = somma
        }

        if (ketchupField.checked) {
            somma += parseInt(ketchupField.value)

            document.getElementById("price").innerHTML = somma
        }
    }



}) 