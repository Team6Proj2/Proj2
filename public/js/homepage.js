// TO DO: Data is not defined...
// may not need this if {{user.id}} works

let viewMyExpenses = document.getElementById("view-btn");

const goHomeHandler = () => {
  window.location.replace(`/expenses/${data.user.id}`);
};

viewMyExpenses.addEventListener("click", goHomeHandler);
