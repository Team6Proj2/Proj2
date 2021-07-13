// category variables
let categoryDropdown = document.getElementById("expense-category");
categoryDropdown.length = 0;
let defaultCatOption = document.createElement("option");
defaultCatOption.text = "Select Category";
categoryDropdown.add(defaultCatOption);
categoryDropdown.selectedIndex = 0;
const catUrl = "/api/categories";

// // user variables
// let userDropdown = document.getElementById("expense-employee-name");
// userDropdown.length = 0;
// let defaultUserOption = document.createElement("option");
// defaultUserOption.text = "Select Employee";
// userDropdown.add(defaultUserOption);
// userDropdown.selectedIndex = 0;
// const userUrl = "/api/users";

// category fetch
fetch(catUrl)
  .then(function (res) {
    if (res.status !== 200) {
      console.warn(
        "Looks like there was a problem. Status Code: " + res.status
      );
      return;
    }

    // Examine the text in the response
    res.json().then(function (data) {
      let option;

      for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i].name;
        option.value = data[i].id;
        categoryDropdown.add(option);
      }
    });
  })
  .catch(function (err) {
    console.error("Fetch Error -", err);
  });

// // user fetch
// fetch(userUrl)
//   .then(function (res) {
//     if (res.status !== 200) {
//       console.warn(
//         "Looks like there was a problem. Status Code: " + res.status
//       );
//       return;
//     }

//     // Examine the text in the response
//     res.json().then(function (data) {
//       let option;

//       for (let i = 0; i < data.length; i++) {
//         option = document.createElement("option");
//         option.text = data[i].name;
//         option.value = data[i].id;
//         userDropdown.add(option);
//       }
//     });
//   })
//   .catch(function (err) {
//     console.error("Fetch Error -", err);
//   });
