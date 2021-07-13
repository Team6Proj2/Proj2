// TO DO: Data is not defined...

let viewMyExpenses = document.getElementById("view-btn");

const goHomeHandler = () => {
  window.location.replace(`/expenses/${data.user.id}`);
};

viewMyExpenses.addEventListener("click", goHomeHandler);
