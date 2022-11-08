const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

let lower
let upper
let number
let symbol
let length

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    
})

generateEl.addEventListener('click', () => {
    generatePassword(1,1,1,1,10);
})

function generatePassword(lower, upper, number, symbol, length) {
    let obj = [
        [getRandomLower, 0],
        [getRandomUpper, 0],
        [getRandomNumber, 0],
        [getRandomSymbol, 0]
    ]
    password = ''
    
    for(let i = 0; i < length-1; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        console.log("i",i)
        console.log("randomNumber",randomNumber)
        console.log(obj[randomNumber][0])
        password = password + obj[randomNumber][0]()
        console.log("password", password)
        obj[randomNumber][1] = obj[randomNumber][1] + 1
        console.log(obj[randomNumber][1])
    }   
    for(let j = 0; j < 4; j++) {
        if(!obj[j][1]) {
            password = password + obj[j][0]()
            console.log("Never called func", obj[j][0])
            break;
        }
    }
    if(password.length != length){
        let randomNumber = Math.floor(Math.random() * 4);
        password = password + obj[randomNumber][0]()
        console.log("Calling at the end", obj[randomNumber][0])
    }
    console.log(password);
}

function getRandomLower() {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    randomNumber = Math.floor(Math.random() * chars.length);
    passLower = chars.substring(randomNumber, randomNumber +1);
    return passLower;
}

function getRandomUpper() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    randomNumber = Math.floor(Math.random() * chars.length);
    passUpper = chars.substring(randomNumber, randomNumber +1);
    return passUpper;
}

function getRandomNumber() {
    let chars = "0123456789";
    randomNumber = Math.floor(Math.random() * chars.length);
    passNum = chars.substring(randomNumber, randomNumber +1);
    return passNum;
}

function getRandomSymbol() {
    let chars = "!@#$%^&*()";
    randomNumber = Math.floor(Math.random() * chars.length);
    passSym = chars.substring(randomNumber, randomNumber +1);
    return passSym;
}