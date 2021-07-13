// let addExpenseEl = document.getElementById("add-btn");

// // TO DO: This is executing before the click occurs
// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const expenseName = document.querySelector("#expense-name").value.trim();
//   const merchant = document.querySelector("#expense-merchant").value.trim();
//   const date = document.querySelector("#expense-date").value.trim();
//   const total = document.querySelector("#expense-total").value.trim();
//   const category = document.querySelector("#expense-category").value.trim();
//   const employeeName = document
//     .querySelector("#expense-employee-name")
//     .value.trim();

//   let newExpense = {
//     description: expenseName,
//     merchant: merchant,
//     date_created: date,
//     total_amount: total,
//     category_id: category,
//     user_id: employeeName,
//   };

//   if (expenseName && merchant && date && total && category && employeeName) {
//     const res = await fetch(`/api/expenses`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newExpense),
//     })
//       .then((res) => res.json())
//       .catch((err) => {
//         res.json(err);
//       });
//   }
// };

// addExpenseEl.onclick = function () {
//   newFormHandler;
// };
