const ListaEmail = [
    "paolorossi@gmail.com", 
    "kevinbtrasparenti@gmail.com",
    "mairoverdi@gmail.com",
    "chiaraazzurri@gmail.com",
    "ivanspaghetto@gmail.com",
    "nonsopiucosascrivere@gmail.com",
    "questaèlultima@gmail.com",
    "scherzavoancoraunadai@gmail.com"]

let IndiceLista = 0;

const MyButton = document.getElementById("my-button");
MyButton.addEventListener('click', function() {
    const MailInserita = document.getElementById("mail");
    const MailUtente = MailInserita.value
    console.log("mail", MailUtente);//----------------------

    for (let cont = 0; cont < ListaEmail.length; cont++ ){
        if (MailUtente == ListaEmail[IndiceLista]){
            const risultato = document.getElementById("result")
            risultato.innerHTML = "La mail è presente nella lista"
            console.log("mail uguale")
            IndiceLista++

        }
        else {
            const risultato = document.getElementById("result")
            IndiceLista++
        }
    }
});