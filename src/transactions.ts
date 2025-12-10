// don't edit or remove the type declaration
type TransactionType = "income" | "expense";
type Transaction = [TransactionType, number];


const transactions: Transaction[] = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

//Create a new array containing only the income transactions.
// Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

function filterIncomeTransactions(transactions: Transaction[]): Transaction[] {
 
  return transactions.filter(transaction => transaction[0] === "income"); 
}
console.log(filterIncomeTransactions(transactions));



function filterExpenseTransactions(transactions: Transaction[]): Transaction[] {
  const filterExpenseTransactions = transactions.filter(transaction => transaction[0] === "expense");

  return filterExpenseTransactions.filter(transactions => transactions[0] === "expense"); 

}
console.log(filterExpenseTransactions(transactions));



function calculateTotalIncome(transactions: Transaction[]): number {

  const totalIncome = transactions
  .filter(t => t[0] === "income")
  .reduce((sum, t) => sum + t[1], 0);
  
  return totalIncome; 
}
console.log(calculateTotalIncome(transactions));


function calculateTotalExpenses(transactions: Transaction[]): number {

  const totalExpenses = transactions
  .filter(t => t[0] === "expense")
  .reduce((sum, t) => sum + t[1], 0);
  
  return totalExpenses; 
}
console.log(calculateTotalExpenses(transactions));


function calculateNetTotal(transactions: Transaction[]): number {
  const totalIncome = transactions
    .filter(t => t[0] === "income")
    .reduce((sum, t) => sum + t[1], 0);
  
  const totalExpenses = transactions
    .filter(t => t[0] === "expense")
    .reduce((sum, t) => sum + t[1], 0);
  
  return totalIncome - totalExpenses;
}
console.log(calculateNetTotal(transactions));



function filterSignificantTransactions(
  transactions: Transaction[],
  threshold: number
): Transaction[] {
  return transactions.filter((t: Transaction) => t[1] >= threshold);
}
console.log(filterSignificantTransactions(transactions, 1000));

export {
  Transaction,
  filterIncomeTransactions,
  filterExpenseTransactions,
  calculateTotalIncome,
  calculateTotalExpenses,
  calculateNetTotal,
  filterSignificantTransactions,
};

