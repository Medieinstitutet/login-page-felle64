//Hämtar elementen.
const inputName = document.getElementById("inputName");
const inputPsw = document.getElementById("inputPsw");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loginErrorMsg = document.getElementsByClassName("loginErrorMsg");
const labelUname = document.getElementById("labelUname");
const labelPass = document.getElementById("labelPass");
h1 = document.querySelector("h1")

logoutBtn.style.display = "none";
loginErrorMsg[0].style.display = "none";

let userName = inputName.value;
let passWord = inputPsw.value;


let user = [
    {userName: "janne", passWord: "test"},
    {userName: "felix", passWord: "123"}
];


//Gör ett logintoken som gör att man ska stanna inloggad
function loginStatus(){
    if (localStorage.getItem("userName")){
        h1.innerHTML = "Welcome " + localStorage.getItem("userName");
        logoutBtn.style.display = "block"
        inputName.style.display = "none"
        inputPsw.style.display = "none"
        labelUname.style.display = "none"
        labelPass.style.display = "none"
        loginBtn.style.display = "none"
        
    }else{
        h1.innerHTML ="Login Page";
    }
}

loginStatus()

//Felmedelande för fel inloggningsuppgifter temp
function printLoginError(){
    //alert("Wrong Username and/or password")
    loginErrorMsg[0].style.display = "block";
} 
//Visar att man har loggat in och att man är inloggad temp
function printLoginSuccess(){
    //alert("You have successfully logged in.");
   
    localStorage.setItem("userName", userName);
    localStorage.setItem("passWord", passWord);
    //h1.innerHTML = "Welcome " + localStorage.getItem("userName");
    location.reload();
}

loginBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    //console.log("klick");
    let userName = inputName.value;
    let passWord = inputPsw.value;
    
    for (let i=0; i < user.length; i++) {
        if (user[i].passWord === passWord && user[i].userName === userName)
        return printLoginSuccess();
              
        else{
             printLoginError();
             
        }
    
    }
})

logoutBtn.addEventListener("click", (evt) => {
    localStorage.clear()
    location.reload()
})