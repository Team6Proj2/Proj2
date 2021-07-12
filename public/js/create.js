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

  if (expenseName && merchant && date && total && category && employeeName) {
    const response = await fetch(`/api/expenses`, {
      method: "POST",
      body: JSON.stringify({
        expenseName,
        merchant,
        date,
        total,
        category,
        employeeName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert("Failed to create expense");
    }
  }
};

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

document
  .querySelector(".new-expense-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".expense-list")
  .addEventListener("click", delButtonHandler);
