//  Mortgage Calculator
window.onload = init;



let principal; // loan amount
let interestRate;
let monthlyRate;
let loanLength; // in years
let totalMonths;

let paymentsPerMonth;
let totalInterestPaid; // Total money payed - Initial loan
// Principal amount * (interest rate / 12)(1+ interest rate / 12)^ -payments

function init(){
    principal = document.getElementById("principal");
    interestRate = document.getElementById("interest");
    loanLength = document.getElementById("loanLength");
    document.getElementById("submitBtn").onclick = calculate;
}

function calculate(){
monthlyRate = interestRate/12;
totalMonths = loanLength * 12;
}
