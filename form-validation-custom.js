// TODO
const formelement = document.getElementById("connect-form");
const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const Eleemail = document.getElementById("email");

const submitValidation = (input,minlength) =>{
    if(input.value.trim().length > minlength ){
        input.parentElement.classList.remove("invalid")
        return true
    }
    else{
        input.parentElement.classList.add("invalid")
        alert('First Name and Last Name should be 3 or more characters')
        return false
    }
};
const emailValidation = ( email) => {
        console.log(email.value)
        const re = /\w+@\w+\.\w+/
        if (re.test(email.value.trim())){
                email.parentElement.classList.remove("invalid")
                return true
        }
        else{
                email.parentElement.classList.add("invalid") 
                alert("Email format is incorrect")  
                return false
        }

}

formelement.addEventListener("submit",(event) =>{
        event.preventDefault();
        if(submitValidation(fname,3)&& submitValidation(lname,3)&& emailValidation(Eleemail)){
                alert('Success')
                formelement.submit()
        }
        else{ 
                console.log("Bad Output")
                
        }

})