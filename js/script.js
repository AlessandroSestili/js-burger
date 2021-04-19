// Dichiaro variabile "submitButton" per accedere all'elemento "button" nell'HTML
var submitButton = document.getElementById("button");

// Aggiungo un Listener al "submitButton" con la funzione "click", così che ogni volta che clicco sul pulsante
// "calculate" il programma farà la somma degli ingredienti e mi darà il risultato
submitButton.addEventListener("click", function () {

    // Dichiaro condizione nella quale l'uente deve inserire per forza il nome dell hamburger
    var nomeBurger = document.getElementById("name").value;

    if (!nomeBurger) {
        alert("Inserisci prima il nome del tuo hamburger! 🍔")
    } else {
        // Dichiaro le variabili per selezionare tutti gli ingredienti 
        var cheeseField = document.getElementById("cheese-add");
        var tomatoField = document.getElementById("tomato-add");
        var eggField = document.getElementById("egg-add");
        var lettuceField = document.getElementById("lettuce-add");
        var mustardField = document.getElementById("mustard-add");
        var ketchupField = document.getElementById("ketchup-add");

        // Dichiaro la condizione si deve inserire il Nome dell

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

        // Dichiaro un Array con tutti codici sconto validi
        var codiciSconto = ["12354ABCDEF", "1BFL54ABCDEF", "12354ABNGSF", "12354AOOOEF", "73054ABDEF", "12354DHJ7EF", "123BGG66F"]

        //Dichiaro variabile che contiene il contenuto del "coupon container"
        var codiceCoupon = document.getElementById("coupon").value;

        var couponExist = false;
        for (var i = 0; codiciSconto.length < 0; i++) {

            if (codiciSconto[i] === codiceCoupon) {
                couponExist = true;
                somma = somma - (somma * 0.10);
            } else {
                alert("Non hai inserito codici sconto")
            }
        }
    }

})

// var mailUtente = prompt("Digita la tua mail")
// var mailValide = ["sestilialessandro@gmail.com" , "asestilz@gmail5.com" , "cocomeri@gmail.com" , "cani_volanti@gmail.com" , "sanguisughe-spruzzanti_inchiostro@yahoo.it"]

// var mailExists = false

// for (var i = 0; i < mailValide.length; i++) {

//     if(mailValide[i] === mailUtente) {
//         mailExists = true
//         alert("La tua Mail è corretta. ")
//     }
// }

// if(!mailExists) {
//     alert("Inserisci una mail valida.")
// }