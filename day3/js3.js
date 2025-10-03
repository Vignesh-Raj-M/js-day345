let income = +prompt("Enter your monthly income:");
let rent = +prompt("Enter your rent expense:");
let groceries = +prompt("Enter your groceries expense:");
let transport = +prompt("Enter your transport expense:");
let totalExpense = +(rent + groceries + transport);
let remaining =+(income - totalExpense);
let percentSpent = +((totalExpense / income) * 100);
if (totalExpense > income) {
    alert("Total Expenses: " + totalExpense +
          "\nRemaining Balance: " + remaining +
          "\nPercentage Spent: " + percentSpent + "%\n Message : Over spending!"  );
} else {
    alert("Total Expenses: " + totalExpense +
          "\nRemaining Balance: " + remaining +
          "\nPercentage Spent: " + percentSpent + "%\n Message: You are within budget!");
}