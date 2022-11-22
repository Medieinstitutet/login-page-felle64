//Hämtar elementen.
const inputName = document.getElementById("inputName");
const inputPsw = document.getElementById("inputPsw");
const loginBtn = document.getElementById("loginBtn");

let user = [
    {userName: "janne", passWord: "test"},
    {userName: "Felix", passWord: "123"}
];


let i=0

console.log(user[i].passWord);
console.log(user[i].userName);

//Felmedelande för fel inloggningsuppgifter temp
function printLoginError(){
    alert("Wrong Username and/or password")
} 
//Visar att man har loggat in och att man är inloggad temp
function printLoginSuccess(){
    alert("You have successfully logged in.")
}

loginBtn.addEventListener("click", () => {
    console.log("klick");
    let userName = inputName.value;
    let passWord = inputPsw.value;

    for (let i=0; i < user.length; i++) {
        if (user[i].passWord === passWord && user[i].userName === userName) 
            printLoginSuccess();
            
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
   


  
    /*if (userName === "janne" && passWord === "test") {
       printLoginSuccess();
    
    } else {
        printLoginError();
       
    }
})*/