const transactions = [
  { customerId: 1, amount: 100, date: "2024-03-01" },
  { customerId: 2, amount: 150, date: "2024-03-01" },
  { customerId: 1, amount: 200, date: "2024-03-02" },
  { customerId: 3, amount: 50, date: "2024-03-02" },
  { customerId: 2, amount: 120, date: "2024-03-03" },
];

// Given an array of customer transaction objects, compute:
// Total number of transactions
// Total and average transaction amount
// Grouped transactions per day
// Grouped transactions per customer

const totalNumberOfTransaction = transactions.length;
const totalAmount = transactions.reduce((prev, curr) => {
  return prev + curr.amount;
}, 0);
const averageAmountOfTransaction = totalAmount / totalNumberOfTransaction;

const transactionPerDay = transactions.reduce((prev, curr) => {
  if (!prev[curr.date]) {
    prev[curr.date] = [];
  }
  prev[curr.date].push(JSON.stringify(curr));
  return prev;
}, {});

const transactionPerCustomer = transactions.reduce((prev, curr) => {
  if (!prev[curr.customerId]) {
    prev[curr.customerId] = [];
  }
  prev[curr.customerId].push(JSON.stringify(curr));
  return prev;
}, {});

const summary = {
  totalAmount,
  totalNumberOfTransaction,
  averageAmountOfTransaction,
  transactionPerDay,
  transactionPerCustomer,
};

console.log(summary);
