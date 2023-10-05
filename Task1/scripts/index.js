var email=""
var phoneNumber=""
var countryCode=""
const setEmail=()=>{
    email=document.getElementById("email").value
   
}
const setNumber=()=>{
    phoneNumber=document.getElementById("number").value
}
const setCode=()=>{
    countryCode=document.getElementById("countryCode").value
    console.log(countryCode)  
}
const submit=()=>{
    
    if(phoneNumber.length!=10){
        alert("You have entered an invalid Mobile number")
    }
    else if(!email.includes("@gmail.com")){
        alert("Inproper email")
    }
    else{
        localStorage.setItem("Email", JSON.stringify(email))
        localStorage.setItem("Phone",JSON.stringify(phoneNumber))
        localStorage.setItem("Code",JSON.stringify(countryCode))
        location.assign("./massage.html")
           
}
  
}