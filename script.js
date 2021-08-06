//Declare var

let uname;
let mail;
let mesage;
let submit=document.getElementById("idsubmit");

//Read input

function agarravalor(){

    uname=document.getElementById("username").value;
    mail=document.getElementById("id_mail").value;
    mesage=document.getElementById("id_text").value;

}

//Send email

function sendEmail(e){

    agarravalor(); 

    Email.send({
        Host : "smtp.gmail.com",
        Username : "joogoodev@gmail.com",
        Password : pass,
        To : 'joogoodev@gmail.com',
        From : "joogoodev@gmail.com",
        Subject : "Contact Form",
        Body : `Name: ${uname} <br/> Email: ${mail} <br/> Message: ${mesage}`
    }).then(
    message => alert("Mail sent succesfully")
    ).catch(er=>console.log(er))

    e.preventDefault();
}



//Adding event

submit.addEventListener("click", e=>sendEmail(e));
