// //Pour afficher un message qui indique qu'il faut mettre au minimum 3 caractères.//


// Mettre un ecouteur sur l'input pour voir si une valeur est rentré // Recupérer la valeur de l'input id
document.getElementById('nomId').addEventListener('keyup', function() {
    let idCheck = document.getElementById('nomId').value;
    let msgIdusers = document.getElementById('msgId');
    let pastilleValid = document.getElementById('imgCheckId')

// Mettre une condition pour que si l'utilisateur commence à taper le message rouge s'affiche et s'efface lorsuque 3 caractères sont tapés 
   
if (idCheck.length > 2) {
        msgIdusers.style.visibility = "hidden";
        pastilleValid.src = "check.svg"
    }else if (idCheck === '') {
        msgIdusers.style.visibility = "hidden";
        pastilleValid.style.visibility = "hidden"
    }else{
        msgIdusers.style.visibility = "visible";
        pastilleValid.style.visibility = "visible"
    } 
})

// pour afficher les pastilles vertes







