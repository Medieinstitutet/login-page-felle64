//Hämtar elementen.
const inputName = document.getElementById("inputName");
const inputPsw = document.getElementById("inputPsw");
const loginBtn = document.getElementById("loginBtn");
h1 = document.querySelector("h1")

let user = [
    {userName: "janne", passWord: "test"},
    {userName: "felix", passWord: "123"}
];




//Felmedelande för fel inloggningsuppgifter temp
function printLoginError(){
    alert("Wrong Username and/or password")
} 
//Visar att man har loggat in och att man är inloggad temp
function printLoginSuccess(){
    alert("You have successfully logged in.");
    let userName = inputName.value;
    let passWord = inputPsw.value;
    localStorage.setItem("userName", userName);
    localStorage.setItem("passWord", passWord);
    h1.innerHTML = "Welcome " + localStorage.getItem("userName");
    
    localStorage.getItem("passWord", passWord);
    
    //location.reload();
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

    //evt.preventDefault();
    //Fånga usrname och psw i LS
    //let userName = inputName.value;
    //let passWord = inputPsw.value;
    //localStorage.setItem("userName", userName);
    //localStorage.setItem("passWord", passWord);
   // console.log(userName);
   // console.log(passWord);
   