// TO DO: Does not add expense to response
const newFormHandler = async (event) => {
  event.preventDefault();

  const expenseName = document.querySelector("#expense-name").value.trim();
  const merchant = document.querySelector("#expense-merchant").value.trim();
  const date = document.querySelector("#expense-date").value.trim();
  const total = document.querySelector("#expense-total").value.trim();
  const category = document.querySelector("#expense-category").value.trim();
  const employeeName = document
    .querySelector("#expense-employee-name")
    .value.trim();

  let newExpense = {
    description: expenseName,
    merchant: merchant,
    date_created: date,
    total_amount: total,
    category_id: category,
    user_id: employeeName,
  };

  if (expenseName && merchant && date && total && category && employeeName) {
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
  }
};

// TO DO: Does not delete expense from response
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/expenses/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert("Failed to delete expense");
    }
  }
};

document.querySelector(".add-btn").addEventListener("submit", newFormHandler);

document
  .querySelector(".expense-list")
  .addEventListener("click", delButtonHandler);
