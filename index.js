let expences = [];

const inputExpenceNode = document.querySelector(".js-input-expences");
const addExpenceNode = document.querySelector(".add-expence-button");

addExpenceNode.addEventListener("click", function () {
  if (inputExpenceNode.value == "") {
    return;
  }
  const expence = parseInt(inputExpenceNode.value);
  expences.push(expence);
  inputExpenceNode.value = "";
  console.log(expences);
});
