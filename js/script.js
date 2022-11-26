//Hämtar elementen.
const inputName = document.getElementById("inputName");
const inputPsw = document.getElementById("inputPsw");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loginErrorMsg = document.getElementsByClassName("loginErrorMsg");
const labelUname = document.getElementById("labelUname");
const labelPass = document.getElementById("labelPass");
const loginText = document.getElementById("loginText");
h1 = document.querySelector("h1");

//Gömmer saker som man inte ska se när man ska logga in
logoutBtn.style.display = "none";
loginText.style.display = "none"
loginErrorMsg[0].style.display = "none";

let userName = inputName.value;
let passWord = inputPsw.value;

//Array med användare
let user = [
    {userName: "janne", passWord: "test"},
    {userName: "felix", passWord: "123"}
];


//Kollar om man är inloggad och byter till inloggade sidan om man är inloggad
function loginStatus(){
    if (localStorage.getItem("userName")){
        h1.innerHTML = "Welcome " + localStorage.getItem("userName");
        logoutBtn.style.display = "block"
        inputName.style.display = "none"
        inputPsw.style.display = "none"
        labelUname.style.display = "none"
        labelPass.style.display = "none"
        loginBtn.style.display = "none"
        loginText.style.display = "block"
        loginErrorMsg[0].style.display = "none";
        
    }else{
        h1.innerHTML ="Welcome, please login";
    }
}

loginStatus();

//Felmedelande för fel inloggningsuppgifter
function printLoginError(){
    loginErrorMsg[0].style.display = "block";
} 
//Visar att man har loggat in och att man är inloggad
function printLoginSuccess(){
    let userName = inputName.value;
    //console.log("loginSucess", userName)
    loginErrorMsg[0].style.display = "none";
    location.reload();
}
//Login knappen
loginBtn.addEventListener("click", () => {
    //console.log("klick");
    let userName = inputName.value;
    let passWord = inputPsw.value;
    localStorage.setItem("userName", userName);
    for (let i=0; i < user.length; i++) {
        if (user[i].passWord === passWord && user[i].userName === userName)
        return printLoginSuccess();
              
        else{
             printLoginError();
             
        }
    
    }
})
//Logout knappen
logoutBtn.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
    inputName.value = "";
    inputPsw.value = "";
})
