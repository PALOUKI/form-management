// gestion du formulaire
let MonFormulaire=document.getElementById("formulaire")
MonFormulaire.addEventListener("submit",(event)=>{
    /* GESTION DU NOM */
    try{
        event.preventDefault()
        let InputName=document.getElementById("name")
        ValiderNom(InputName)
    }catch(error){
        let Name_Error_message=document.getElementById("Name_Error_message")
        Name_Error_message.style.color="red"
        Name_Error_message.innerHTML=error.message 
    }
    /* GESTION DU PRENOM */
    try{
        event.preventDefault()
        let InputSurname=document.getElementById("surname")
        ValiderPrenom(InputSurname)
    }catch(error){
        let SurName_Error_message=document.getElementById("Surname_Error_message")
        SurName_Error_message.style.color="red"
        SurName_Error_message.innerHTML=error.message
    }
     /* GESTION DE L'Email */
     try{
        event.preventDefault()
        let EmailInput=document.getElementById("email")
        VerifierEmail(EmailInput)
    }catch(error){
        let Email_Error_message= document.getElementById("Email_Error_message")
        Email_Error_message.style.color="red"
        Email_Error_message.innerHTML=error.message
    }
})
window.confirm("Merci de ne pas enregistrer vos informations personnelles");

      