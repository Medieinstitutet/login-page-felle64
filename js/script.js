//Hämtar elementen.
let inputName = document.getElementById("inputName");
let inputPsw = document.getElementById("inputPsw");
let loginBtn = document.getElementById("loginBtn");

let uNamePswList = [
    {userName: "janne", passWord: "test"},
    {userName: "Felix", passWord: "123"}
];

console.log(localStorage.setItem("uName",JSON.stringify(uNamePswList)));

//Felmedelande för fel inloggningsuppgifter
function printLoginError(){
    alert("Wrong Username and/or password")
} 
//Visar att man har loggat in och att man är inloggad
function printLoginSuccess(){
    alert("You have successfully logged in.")
}

loginBtn.addEventListener("click", (evt) => {
  
    evt.preventDefault();
    //Fånga usrname och psw i LS
    let userName = inputName.value;
    let passWord = inputPsw.value;
    localStorage.setItem("userName", userName);
    localStorage.setItem("passWord", passWord);
    console.log(userName);
    console.log(passWord);
    
    if (userName === "admin" && passWord === "123") {
       printLoginSuccess();
    
    } else {
        printLoginError();
       
    }
})