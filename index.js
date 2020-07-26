const form = document.querySelector("form");
const email = document.querySelector("#email");
const error = document.querySelector(".error-message");
const input = document.querySelector("input");
const button = document.querySelector(".btn") 

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const emailValue = email.value.trim();

    if(!checkMail(emailValue))
    {
        error.innerHTML="<em>Please provide a valid email address</em>";
        input.className="box error";
    }
    else{
        error.innerText ="";
        input.className="box success";
    }
    
    button.style.backgroundColor="hsl(223, 100%, 88%)";
    setTimeout(function(){
        button.style.backgroundColor=" hsl(223, 87%, 63%)";
    },200)
});
function checkMail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
