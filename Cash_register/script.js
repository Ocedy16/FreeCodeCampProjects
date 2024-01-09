const prchBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");
const priceOnScreen = document.getElementById("price-on-screen");
let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
const MoneyValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
let price = 19.5;
let totalMoney = 0.00;
cid.forEach((value)=>(totalMoney+=value[1]));
priceOnScreen.innerHTML += `${price}`

function CashIn () {
    const cash = document.getElementById("cash").value;
    const due = cash-price;
    let cashUsed = Array(MoneyValue.length).fill(0.00);
    if (due > totalMoney){
        changeDue.innerHTML = "Status: INSUFFICIENT_FUNDS"
    }
    if (due<0) {
        alert("Customer does not have enough money to purchase the item");
    }
    if (due === 0) {
        changeDue.innerHTML = "No change due - customer paid with exact cash";
    }
    const i = MoneyValue.length - 1;
    while (due>0 && i>=0) {
        while (due>=MoneyValue[i]){
            if (cid[i][1] - MoneyValue[i]< 0){
                break;
            }
            due -= MoneyValue[i];
            cid[i][1] -= MoneyValue[i];
            cashUsed[i] += MoneyValue[i];
        }
        i -= 1;
    }
    cid.forEach((value)=>(totalMoney+=value[1]));
    if (totalMoney === 0){
        changeDue.innerHTML = `Status: CLOSED`
    }
    else {
        changeDue.innerHTML = `Status: OPEN`
        cashUsed = cashUsed.reverse();
        cashUsed.forEach((money,index)=> {if(money > 0){
            changeDue.innerHTML += ` ${cid[index][0]}: $${money.toFixed(2)}`;
        }})
    }
}

prchBtn.addEventListener("click",CashIn);