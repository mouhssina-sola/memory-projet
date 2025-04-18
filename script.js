// //Pour afficher un message qui indique qu'il faut mettre au minimum 3 caractères.//


// Mettre un ecouteur sur l'input pour voir si une valeur est rentré // Recupérer la valeur de l'input id
document.getElementById('nomId').addEventListener('keyup', function() {
    let idCheck = document.getElementById('nomId').value;
    let msgIdusers = document.getElementById('msgId');
    let pastilleValid = document.getElementById('imgCheckId')

// Mettre une condition pour que si l'utilisateur commence à taper le message rouge s'affiche et s'efface lorsuque 3 caractères sont tapés 
   pastilleValid.src="error.svg"

if (idCheck.length > 2) {
        msgIdusers.style.visibility = "hidden"; // pour afficher ou effacer les messages rouges selon les conditions
        pastilleValid.src = "check.svg" // pour afficher ou effacer les pastilles vertes/rouges selon les conditions

    }else if (idCheck === '') {
        msgIdusers.style.visibility = "hidden";
        pastilleValid.style.visibility = "hidden"

    }else{
        msgIdusers.style.visibility = "visible";
        pastilleValid.style.visibility = "visible" 

    } 
})

// pour afficher un message de mail invalide 

document.getElementById('email').addEventListener('input', function () {
    let email = document.getElementById('email').value;
    let msgErrorMail = document.getElementById('msgMail');
    let imgErrorMail = document.getElementById('imgCheckMail')
    imgErrorMail.src = "error.svg"

    if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        imgErrorMail.src = "check.svg"
        msgErrorMail.style.visibility = "hidden"
    } else if (email === "") {
        msgErrorMail.style.visibility = "hidden"
        imgErrorMail.style.visibility = "hidden"
    }
    else {
        imgErrorMail.style.visibility = "visible"
        msgErrorMail.style.visibility = "visible"
    }
});


// pour afficher les jauges 


document.getElementById('password').addEventListener('keyup', function () {
    let mdpValue = document.getElementById('password').value;
    let mdpCheck = document.getElementById('imgCheckMdp');
    let jaugesFaible = document.getElementById('jaugeFaible');
    let jaugesMoyen = document.getElementById('jaugeMoyen');
    let jaugesFort = document.getElementById('jaugeFort');

    jaugesFaible.style.visibility = "hidden";
    jaugesMoyen.style.visibility = "hidden";
    jaugesFort.style.visibility = "hidden";
    mdpCheck.style.visibility = "visible";
    mdpCheck.src = "error.svg"; 


    if (mdpValue === '') {
        mdpCheck.style.visibility = "hidden";
        return;
    }

    if (mdpValue.length < 6) {
        jaugesFaible.style.visibility = "visible";
    }

    // Longueur entre 6 et 7 
    else if (mdpValue.length >= 6 && mdpValue.length < 8) {
        jaugesMoyen.style.visibility = "visible";
        mdpCheck.src = "check.svg";
    }

    // Longueur égale ou supérieure à 8
    else if (mdpValue.length >= 8) {
        jaugesFort.style.visibility = "visible";
        mdpCheck.src = "check.svg"; 
    }
});


// faire correspondre les mots de passe 

document.getElementById('passwordVerified').addEventListener('keyup', function(){
    let mdpVerified = document.getElementById('passwordVerified').value;
    let mdp = document.getElementById('password').value;
    let imgError = document.getElementById('imgCheckMdpVerfied');
    let msgErrorMdpVerified = document.getElementById('msgValidMdp');

    imgError.src = "error.svg"

    if (mdpVerified === "" && mdp === "") {
        imgError.style.visibility = 'hidden' 
        msgErrorMdpVerified.style.visibility = "hidden"
    }

    else if (mdp === mdpVerified) {
        imgError.src = "check.svg"
        msgErrorMdpVerified.style.visibility = 'hidden'

    }else{
        msgErrorMdpVerified.style.visibility = "visible"
        imgError.style.visibility = 'visible'
    }
})






