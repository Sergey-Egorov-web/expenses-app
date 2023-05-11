let expences = [];

const inputExpenceNode = document.querySelector(".js-input-expences");
const addExpenceNode = document.querySelector(".add-expence-button");
const historyNode = document.querySelector(".js-history-list");

// вводим затраты

addExpenceNode.addEventListener("click", function () {
  if (inputExpenceNode.value == "") {
    return;
  }
  const expence = parseInt(inputExpenceNode.value);
  expences.push(expence);
  inputExpenceNode.value = "";

  // Сохраняем список трат

  let expencesListHTML = "";

  expences.forEach((element) => {
    expencesListHTML += `<li>${element}</li>`;
    console.log(expencesListHTML);
  });
  historyNode.innerHTML = `<ol>${expencesListHTML}</ol>`;
});
