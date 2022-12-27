let btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
let billAmount = document.getElementById("bill_amount").value;
let tipPercentage = document.getElementById("tip_percent").value;
// console.log(billAmount)

let tipAmount = document.getElementById("tip_amount").value = billAmount/tipPercentage;

// console.log(tipAmount)
document.getElementById('total_bill').value = parseFloat(billAmount) + parseFloat(tipAmount)


})