// TODO
const formEle = document.getElementById("connect-form");
const nameEle = document.getElementById("name");
const emailEle = document.getElementById("email");
const messageEle = document.getElementById("message");
const selectEl = document.getElementById("contact-kind");
const titleEl = document.getElementById("title")
const websiteEl = document.getElementById("website")
const codingEl = document.getElementById("coding-kind")

const nameValidation = () => {
    if(nameEle.value.trim().length > 3 ){
        nameEle.parentElement.classList.remove("invalid")
        return true
    }
    else{
        nameEle.parentElement.classList.add("invalid")
        alert(' Name  should be 3 or more characters')
        return false
    }

} 


const emailValidation = () =>{
    const re = /\w+@\w+\.\w+/
        if (re.test(emailEle.value.trim())){
                emailEle.parentElement.classList.remove("invalid")
                return true
        }
        else{
                emailEle.parentElement.classList.add("invalid") 
                alert("Email format is incorrect")  
                return false
        }
}

const messageValidation = () =>{
    if(messageEle.value.trim().length > 10 ){
        messageEle.parentElement.classList.remove("invalid")
        return true
    }
    else{
        messageEle.parentElement.classList.add("invalid")
        alert(' Message  should be 10 or more characters')
        return false
    }
}

const unhidingreasonoptions = () =>{
    if (selectEl.value == "job"){
        titleEl.parentElement.classList.remove("optionstoggle");
        websiteEl.parentElement.classList.remove("optionstoggle")
        codingEl.parentElement.classList.add("optionstoggle")
        titleEl.setAttribute('required', '');
        websiteEl.setAttribute('required','');
        codingEl.removeAttribute('required');
    }
    else{
        
        titleEl.parentElement.classList.add("optionstoggle");
        websiteEl.parentElement.classList.add("optionstoggle");
        codingEl.parentElement.classList.remove("optionstoggle");
        codingEl.setAttribute('required','');
        titleEl.removeAttribute('required');
        websiteEl.removeAttribute('required');
        
    }

}

nameEle.addEventListener('change',nameValidation)
emailEle.addEventListener("change",emailValidation)     
messageEle.addEventListener('change',messageValidation)
selectEl.addEventListener("change", unhidingreasonoptions)
  
formEle.addEventListener("submit",(event) =>{
    event.preventDefault()
    if(nameValidation() && emailValidation() && messageValidation()){
        alert("success")
        formEle.submit()
    }
    else{
        console.log("Bad Output")
    }
})