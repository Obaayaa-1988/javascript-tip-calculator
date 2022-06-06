const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");


const calculateTips = () => {
    const bill = document.querySelector(".bill").value
    const rate = document.querySelector(".rate").value
    if(bill === "" || rate == ""){
        console.log("please add an amount of number")
    }
}

btn.addEventListener("click", calculateTips)