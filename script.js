document.getElementById('nomId').addEventListener('change', function (){
    let valNomId = document.getElementById('nomId').value;
// afficher un message qui indique qu'il faut mettre au minimum 3 caractères.
    let valNomIdTab = valNomId.split("")
    if (valNomIdTab.lengt < 2 ) {
        document.getElementById('valNomIdTab').innerText = "veuillez renseigner 3 caractères minimum"
    }
    
})

document.getElementById('')