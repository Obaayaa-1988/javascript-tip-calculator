const btn = document.querySelector(".btn");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");
const error = document.querySelector(".error");
// a function to hadle the errors when a user doesn't type a number in the bill input field and disappear after 5secs
const handleErrors = () => {
    setTimeout(() => {
        error.style.display = "none";

    }, 5000)
}

//if statement to check when the input field is empty and the user clicks on the calculate button
//else if statement to check if a user types in a number in the bill input field instead of a letter

const calculateTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;
    if(bill == "" || rate == ""){
        error.style.display = "block";
        handleErrors();

    }else if (isNaN(bill)) {
        error.innerHTML = "Please enter a number";
        error.style.display = "block";
        handleErrors()
    } else {
        let tipAmount = bill + rate;
        tipAmount = Math.ceil(tipAmount)
        tip.innerHTML = `Tip: $${tipAmount}`


        let totalBill = Number(bill) + tipAmount
        total.innerHTML = `Total Bill: $${totalBill}`
        
    }
    
}

btn.addEventListener("click", calculateTip)