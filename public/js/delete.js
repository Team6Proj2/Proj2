// TO DO: Does not delete expense from response
const delButtonHandler = async (event) => {
  // if (event.target.hasAttribute("data-id")) {
  const id = event.target.getAttribute("data-id");

  const response = await fetch(`/api/expenses/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    location.reload();
  } else {
    alert("Failed to delete expense");
    location.reload();
  }
};

document
  .querySelector(".expenses-list")
  .addEventListener("click", delButtonHandler);
