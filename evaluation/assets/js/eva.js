//Declaration de variable qui permet d'envoyer le formulaire <button>
var formValid = document.getElementById('Envoyer');


//Declaration de mes variables <input>
var nom = document.getElementById('nom');
var nomError = document.getElementById('nomError');
var prenom = document.getElementById('prenom');
var prenomError = document.getElementById('prenomError');
var cp = document.getElementById('cp');
var cpError = document.getElementById('cpError');
var adresse = document.getElementById('adresse');
var adresseError = document.getElementById('adresseError');
var ville = document.getElementById('ville');
var villeError = document.getElementById('villeError');
var mail = document.getElementById('mail');
var emailError = document.getElementById('emailError');
var ouiNon = document.getElementById('ouiNon');
var ouiNonError = document.getElementById('ouiNonError');
var option = document.getElementById('option');
var optionError = document.getElementById('optionError');
var question = document.getElementById('question');
var questionError = document.getElementById('questionError');
var mascu = document.getElementById('mascu');
var mascuError = document.getElementById('mascuError');
var femi = document.getElementById('femi');
var femiError = document.getElementById('femiError');
var textError = document.getElementById('textError');


//Declaration de mes regex
var regexNom = /^[a-zA-Z\s]+$/
var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
var regexAdresse = /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.,;_\s-]{5,60}$/
var regexCp = /^\d{1,5}$/
var regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

formValid.addEventListener('click', validation);

function validation(event) {
    //si le champs est vide
    if (nom.validity.valueMissing) {
        event.preventDefault();
        nomError.textContent = 'Nom manquant';
        nomError.style.color = 'red';
    }
    // si le format est incorrect
    else if (regexNom.test(nom.value) == false) {
        event.preventDefault();
        nomError.textContent = 'format incorrect';
        nomError.style.color = 'orange';
    } else {
        nomError.textContent = 'format correct';
        nomError.style.color = 'green'
    }
//-----------------------------------------------------------
    //si le champs est vide
    if (prenom.validity.valueMissing) {
        event.preventDefault();
        prenomError.textContent = 'prenom manquant';
        prenomError.style.color = 'red';
    }
    // si le format est incorrect
    else if (regexNom.test(prenom.value) == false) {
        event.preventDefault();
        prenomError.textContent = 'format incorect';
        prenomError.style.color = 'orange';
    } else {
        prenomError.textContent = 'format correct';
        prenomError.style.color = 'green';
    }
//--------------------------------------------------------------
    if(femi.checked == true){
        femiError.textContent = 'ok';
        femiError.style.color = 'green'  
        
        
     } else if(mascu.checked == true){
        mascuError.textContent = 'ok';
        mascuError.style.color = 'green';
     }
     else {
        event.preventDefault();
        femiError.textContent = 'il faut choisir le sex ';
        femiError.style.color = 'red';
        mascuError.textContent = 'il faut choisir le sex ';
        mascuError.style.color = 'red';      
    }
    //---------------------------------------------------------
    //si le champs est vide
    if (cp.validity.valueMissing) {
        event.preventDefault();
        cpError.textContent = 'code postal manquant';
        cpError.style.color = 'red';
    }
    // si le format est incorrect
    else if (regexCp.test(cp.value) == false) {
        event.preventDefault();
        cpError.textContent = 'format incorrect maximun 5 chiffres';
        cpError.style.color = 'orange';
    } else {
        cpError.textContent = 'ok';
        cpError.style.color = 'green';
    }
//------------------------------------------------------------------
    //si le champs est vide
    if (adresse.validity.valueMissing) {
        event.preventDefault();
        adresseError.textContent = 'adresse manquante';
        adresseError.style.color = 'red';
    } // si le format est incorrect
    else if (regexAdresse.test(adresse.value) == false) {
        event.preventDefault();
        adresseError.textContent = 'format incorrect';
        adresseError.style.color = 'orange';
    } else {
        adresseError.textContent = 'format correct';
        adresseError.style.color = 'green';
    }
    //--------------------------------------------------------------
    //si le champs est vide
    if (ville.validity.valueMissing) {
        event.preventDefault();
        villeError.textContent = 'Nom de la ville manquant';
        villeError.style.color = 'red';
    } // si le format est incorrect
    else if (regexNom.test(ville.value) == false) {
        event.preventDefault();
        villeError.textContent = 'format incorrect';
        villeError.style.color = 'orange';
    } else {
        villeError.textContent = 'format correct';
        villeError.style.color = 'green';
    } 
    //----------------------------------------------------------------
    //si le champs est vide
    if (mail.validity.valueMissing) {
        event.preventDefault();
        emailError.textContent = 'email manquant';
        emailError.style.color = 'red';
    }
    // si le format est incorrect
    else if (regexEmail.test(mail.value) == false) {
        event.preventDefault();
        emailError.textContent = 'format incorrect';
        emailError.style.color = 'orange';
    } else {
        emailError.textContent = 'format correct';
        emailError.style.color = 'green'
    }
//------------------------------------------------------------------------
    if (ouiNon.checked == false) {
        event.preventDefault();
        ouiNonError.textContent = 'Veuillez accepter les conditions.';
        ouiNonError.style.color = 'red';
    } else {
        ouiNonError.textContent = 'format correct';
        ouiNonError.style.color = 'green'
    }
//---------------------------------------------------------------------------
    if (option.value == "sélectionnez un sujet s'il vous plaît") {
        event.preventDefault();
        optionError.textContent = 'format incorrect';
        optionError.style.color = 'red';
    } else {
        optionError.textContent = 'format correct';
        optionError.style.color = 'green';

    }
    //-----------------------------------------------------------------------
      if (questions.validity.valueMissing) {
        event.preventDefault();
        textError.textContent = 'il faut ecrire votre question sil vous plaît ';
        textError.style.color = 'red';
    } else if (regexEmail.test(questions.value) == false) {
        event.preventDefault();
        textError.textContent = 'format incorrect';
        textError.style.color = 'orange';
    } else {
        textError.textContent = 'format correct';
        textError.style.color = 'green'
    }
    //------------------------------------------------------------------------


}
console.log(document.forms["form"]);
