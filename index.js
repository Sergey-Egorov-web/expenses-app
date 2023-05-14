const CURRENCY = "руб.";
const STATUS_IN_LIMIT = "Всё хорошо";
const STATUS_OUT_OF_LIMIT = "Всё плохо";
const STATUS_OUT_OF_LIMIT_CLASSNAME = "status-red";

const inputExpenceNode = document.querySelector(".js-input-expences");
const addExpenceNode = document.querySelector(".add-expence-button");
const historyNode = document.querySelector(".js-history-list");
const amountNode = document.querySelector(".js-amount");
const limitNode = document.querySelector(".js-limit");
const statusNode = document.querySelector(".js-status");

let expences = [];
let expencesListHTML = "";
let sum = 0;
let limit = 5000;
// вводим затраты

renderLimit(limit);

addExpenceNode.addEventListener("click", function () {
  const expence = getExpenceFromUser(); // получаем трату от пользователя,  если трата пустая тогда выходим из функции, ничего не происходит
  if (!expence) {
    return;
  }

  trackExpanse(expence); // добавляем трату в массив затрат

  clearInputFromUser(); // Очищаем поля ввода пользователем

  renderHistory(expences); // Сохраняем список трат

  sum = calculateExpences(expences); // считаем сумму затрат

  renderSum(sum); //выводим сумму затрат

  renderLimit(limit); //  Выводим лимит

  renderStatus(sum); // Проверка выхода за лимит и отображение статуса
});

function getExpenceFromUser() {
  if (inputExpenceNode.value == "") {
    return null;
  }
  const expence = parseInt(inputExpenceNode.value);

  return expence;
}

function trackExpanse(expence) {
  expences.push(expence);
}

function clearInputFromUser() {
  inputExpenceNode.value = "";
}

function calculateExpences(expences) {
  let sum = 0;
  expences.forEach((element) => {
    sum += element;
  });
  return sum;
}

function renderSum(sum) {
  amountNode.innerHTML = `<p> ${sum} ${CURRENCY}</p>`;
}

function renderLimit(limit) {
  limitNode.innerHTML = `<p>${limit} ${CURRENCY}</p>`;
}

function renderHistory(expences) {
  expencesListHTML = "";
  expences.forEach((element) => {
    expencesListHTML += `<li>${element} ${CURRENCY}</li>`;
  });
  historyNode.innerHTML = `<ol>${expencesListHTML}</ol>`;
}

function renderStatus(sum) {
  if (sum > limit) {
    statusNode.innerHTML = `<p>${STATUS_OUT_OF_LIMIT}</p>`;
    statusNode.classList.add(STATUS_OUT_OF_LIMIT_CLASSNAME);
  } else {
    statusNode.innerHTML = `<p>${STATUS_IN_LIMIT}</p>`;
    statusNode.classList.remove(STATUS_OUT_OF_LIMIT_CLASSNAME);
  }
}
