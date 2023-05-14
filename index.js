let expences = [];

const inputExpenceNode = document.querySelector(".js-input-expences");
const addExpenceNode = document.querySelector(".add-expence-button");
const historyNode = document.querySelector(".js-history-list");
const amountNode = document.querySelector(".js-amount");
const limitNode = document.querySelector(".js-limit");
const statusNode = document.querySelector(".js-status");

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
  let amount = 0;

  expences.forEach((element) => {
    expencesListHTML += `<li>${element} руб.</li>`;
  });
  historyNode.innerHTML = `<ol>${expencesListHTML}</ol>`;

  // Считаем сумму  трат

  expences.forEach((element) => {
    amount += element;
    amountNode.innerHTML = `<p> ${amount} руб.</p>`;
  });

  //  Задаём и выводим лимит

  let limit = 10000;
  limitNode.innerHTML = `<p>${limit} руб.</p>`;

  // Проверка выхода за лимит и отображение статуса

  if (amount > limit) {
    statusNode.innerHTML = `<p>Всё плохо</p>`;
    statusNode.classList.add("status-red");
  } else {
    statusNode.innerHTML = `<p>Всё хорошо</p>`;
    statusNode.classList.remove("status-red");
  }
});
