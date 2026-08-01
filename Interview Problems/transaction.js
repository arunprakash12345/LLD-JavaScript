const transactions = [
    { customerId: 1, amount: 100, date: "2024-03-01" },
    { customerId: 2, amount: 150, date: "2024-03-01" },
    { customerId: 1, amount: 200, date: "2024-03-02" },
    { customerId: 3, amount: 50, date: "2024-03-02" },
    { customerId: 2, amount: 120, date: "2024-03-03" },
];

// Given an array of customer transaction objects, compute:
// 1. Total number of transactions
// 2. Total and average transaction amount
// 3. Grouped transactions per day
// 4. Grouped transactions per customer


const totalNumberofTransaction = transactions.length;
const totalAmout = transactions.reduce((acc, curr) => {
    return acc + curr.amount;
}, 0);

const average = totalAmout / totalNumberofTransaction;

console.log(average);
const groupByDate = transactions.reduce((acc, curr) => {

    if (!acc[curr.date]) {
        acc[curr.date] = [];
    }
    acc[curr.date] = [...acc[curr.date], curr];
    return acc;
}, {});
const groupByCustomerId = transactions.reduce((acc, curr) => {

    if (!acc[curr.customerId]) {
        acc[curr.customerId] = [];
    }
    acc[curr.customerId] = [...acc[curr.customerId], curr];
    return acc;
}, {});

console.log(groupByDate);
console.log(groupByCustomerId);