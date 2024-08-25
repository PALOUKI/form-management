// Fonction qui affiche la popup
function TogglePopup() {
    let myform=document.getElementById("contient_form")
    myform.classList.toggle("open")
}
// Fonction qui valide le nom
function ValiderNom(champ){
    if(champ.value.length<=2 && champ.value>0 ){
        throw new Error("Le nom dois faire au moins 3 caractères")
    }else if(champ.value.trim()===""){
        throw new Error("le nom est obligatoire")
    }
}
// Fonction qui valide le prénom
function ValiderPrenom(champ){
    if(champ.value.length<=2 && champ.value>0){
        throw new Error("Le prénom dois avoir au moins 3 caractères")
    }else if(champ.value===""){
        throw new Error("le prénom est obligatoire")
    }
}
// Fonction qui valide l'email
function VerifierEmail(champ){
    let EmailRegEx= new RegExp("^[a-z0-9._-]+@+[a-z0-9._-]+\\.[a-z0-9._-]+")
    if(champ.value.trim()===""){
        throw new Error("l'email est obligatoire")
    }else if(EmailRegEx.test(champ.value)===false){
        throw new Error("Addresse email invalide")
    }   
}