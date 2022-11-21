//Hämtar elementen.
let inputName = document.getElementById("inputName");
let inputPsw = document.getElementById("inputPsw");
let loginBtn = document.getElementById("loginBtn");

let uNamePswList = [
    {userName: "janne", passWord: "test"},
    {userName: "Felix", passWord: "admin"}
];

function loginError(){
    alert("Wrong Username and/or password")
} 

//Sätter så den ska läsa av value i id.
    let userName = inputName.value;
    let passWord = inputPsw.value;
    localStorage.setItem("userName", userName);
//Loggar lite
console.log(userName);
console.log(passWord);

loginBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    
    if (userName === "admin" && passWord === "admin") {
        alert("You have successfully logged in.");
    
    } else {
        loginError()
       
    }
})