


let mail=JSON.parse(localStorage.getItem("Email"))  
let num=JSON.parse(localStorage.getItem("Phone"))
let code=JSON.parse(localStorage.getItem("Code"))
document.getElementById("thanks1").innerText= `Thanks a ton for taking out your precious time and for completing the survey.`
document.getElementById("thanks").innerText= ` Email:  ${mail}  Contact: ${code} ${num}`
const ToHome=()=>{
    location.assign("./index.html")
}