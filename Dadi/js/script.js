const button = document.getElementById("my-button");




button.addEventListener('click', function () {
    let NumeroUtente = 0;
    let NumeroComputer = 0;

    NumeroUtente = Math.floor(Math.random() * (7 - 1) +1)
    console.log ("numero utente", NumeroUtente)

    NumeroComputer = Math.floor(Math.random() * (7 - 1) +1)
    console.log ("numero computer", NumeroUtente)

    if (NumeroUtente > NumeroComputer) {
        const risultato = document.getElementById("result");
        risultato.innerHTML = "Vince l'utente!!"
    }

    else if (NumeroUtente < NumeroComputer) {
        const risultato = document.getElementById("result");
        risultato.innerHTML = "Vince il computer!!"
    }

    else {
        const risultato = document.getElementById("result");
        risultato.innerHTML = "Il risultato è pareggio!!!"
    }
})


