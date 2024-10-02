const passbox = document.getElementById("pass")
const copyimage = document.querySelector(".image")
const genbutton = document.getElementById("gen")

const length = 8;

const uppercase = "ASDFGHJKLQWERTYUIOPZXCVBNM"
const lowercase = "qwertyuiopasdfghjklzxcvbnm"
const numbers = "1234567890"
const symbol = "!@#$%^&*();':,.<>/?"


const combination = lowercase + numbers + uppercase +  symbol;

genbutton.addEventListener('click',genpass)

function genpass(){
    let password = ""

    password+= numbers[Math.floor(Math.random() * numbers.length)]
    password+= uppercase[Math.floor(Math.random() * uppercase.length)]
    password+= symbol[Math.floor(Math.random() * symbol.length)]
    password+= lowercase[Math.floor(Math.random() * lowercase.length)]

    while(length>password.length){
        password+= combination[Math.floor(Math.random() * combination.length)]
    }

    passbox.value = password;
}

const img = document.getElementById('img')

copyimage.addEventListener('click',showpass)

function showpass(){
    if(passbox.type=="password"){
        passbox.type="text"
        img.src="eye-open.png"
    }else{
        passbox.type="password"
        img.src="eye-close.png"
    }
}

