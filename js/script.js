"use strict";
const name = prompt("Enter your name");
if (name === null) {
  // првоеряем не отменил ли пользователь запрос
  alert("You Canceled");
} else if (!name.trim()) {
  // проверяем не ввел ли пользователь пустую строку
  alert("You enetered nothing");
} else {
  alert(`Your Name is ${name}`);
}

const surName = prompt("Enter your surname");
if (surName === null) {
  // првоеряем не отменил ли пользователь запрос
  alert("You Canceled");
} else if (!surName.trim()) {
  // проверяем не ввел ли пользователь пустую строку
  alert("You enetered nothing");
} else {
  alert(`Your surname is ${surName}`);
}

const selectAge = prompt("Enter your age");
let age = null;
if (selectAge === null) {
  // Проверяем, не отменил ли пользователь запрос
  alert("You Canceled");
} else {
  age = Number(selectAge); // Преобразуем строку в число
  if (isNaN(age)) {
    // Проверяем, является ли введенные данные числом
    alert("You entered a wrong numberad");
  } else if (age < 0) {
    // Проверяем, не является ли число негативным
    alert("You entered a wrong number");
  } else if (age > 150) {
    // Проверяем, не превышает ли возраст допустимый диапазон
    alert("You entered a wrong number");
  } else {
    alert(`Your age is ${age}`);
  }
}
