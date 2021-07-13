let addExpenseEl = document.getElementById("add-btn");

// function to add expense to the list
const newFormHandler = async (event) => {
  event.preventDefault();

  const expenseName = document
    .querySelector("#expense-description")
    .value.trim();
  const merchant = document.querySelector("#expense-merchant").value.trim();
  const date = document.querySelector("#expense-date").value.trim();
  const total = document.querySelector("#expense-total").value.trim();
  const category = document.querySelector("#expense-category").value.trim();

  let newExpense = {
    description: expenseName,
    merchant: merchant,
    date_created: date,
    total_amount: total,
    category_id: category,
  };

  if (expenseName && merchant && date && total && category) {
    const res = await fetch(`/api/expenses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExpense),
    })
      .then((res) => res.json())
      .catch((err) => {
        res.json(err);
      });
    location.reload();
  } else {
    alert("Failed to add expense");
    location.reload();
  }
};

addExpenseEl.addEventListener("click", newFormHandler);
