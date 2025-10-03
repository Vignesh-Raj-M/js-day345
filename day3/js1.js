let x=prompt("Enter the  pin");
let balance=10000;
if (x=="1234"){
    let select=prompt("select one\n1. Withdraw\n2. Deposit\n3.Check Balance.")
    if(select=="1"){
        let amount=prompt("Enter the amount");
        if(amount>0 && amount<balance){
            balance-=amount;
            alert("Withdraw successful! New Balance:" + balance);
        }else{
            alert("Insufficient balance");
        }}
    else if(select=="2"){
        let amount= parseFloat(prompt("Enter amount to deposit:"));
        if (amount> 0) {
            balance += amount;
            alert("Your New balance: " + balance);
        } else {
            alert("Invalid Amount");
        }
    }     
    else if(select=="3"){
        alert("Your current balance is:"+ balance);
    }
        
    }else{
        alert("Invalid PIN")
    }